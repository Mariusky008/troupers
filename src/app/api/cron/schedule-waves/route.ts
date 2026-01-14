import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ENGINE V3 CONFIG
const CONFIG = {
    WAVES_PER_DAY: 10, // 8-12 target
    CORE_RATIO: 0.6,   // 60% Core (6 videos), 40% Noise (4 videos)
    PLANNING_HORIZON: 3 // Plan 3 days ahead (72 hours)
}

export async function GET(request: Request) {
    // 1. Setup Admin Client
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        // 2. Fetch all squads
        const { data: squads } = await supabaseAdmin.from('squads').select('id')
        if (!squads) return NextResponse.json({ message: 'No squads found' })

        let totalScheduled = 0

        // 3. Process each squad
        for (const squad of squads) {
            // Get members with their last wave date
            const { data: members } = await supabaseAdmin
                .from('squad_members')
                .select('user_id, last_wave_date')
                .eq('squad_id', squad.id)
            
            if (!members || members.length === 0) continue

            // QUEUE LOGIC: Sort by last_wave_date ASC (Nulls first)
            // This ensures fairness: members who waited the longest go first
            let queue = members.sort((a: any, b: any) => {
                if (!a.last_wave_date && b.last_wave_date) return -1; // A (never) < B (date) -> A first
                if (a.last_wave_date && !b.last_wave_date) return 1;  // A (date) > B (never) -> B first
                if (!a.last_wave_date && !b.last_wave_date) return 0.5 - Math.random(); // Both never -> Random
                return new Date(a.last_wave_date).getTime() - new Date(b.last_wave_date).getTime(); // Oldest date first
            });

            // Schedule for Today (0) and next X days
            for (let d = 0; d <= CONFIG.PLANNING_HORIZON; d++) {
                const targetDate = new Date()
                targetDate.setDate(targetDate.getDate() + d)
                const dateStr = targetDate.toISOString().split('T')[0]

                // Check if already scheduled
                const { data: existing } = await supabaseAdmin
                    .from('daily_waves')
                    .select('id')
                    .eq('squad_id', squad.id)
                    .eq('scheduled_date', dateStr)
                    .limit(1)

                if (existing && existing.length > 0) {
                    // console.log(`Waves already scheduled for ${dateStr}, skipping...`)
                    continue
                }

                // Pick top N members from the front of the queue
                // We use splice to remove them from the 'available' pool for subsequent days in this loop
                // (But we will re-add them at the end for future loops if needed, though usually we only plan 1 slot per person per cycle)
                if (queue.length === 0) break; // Should not happen unless squad empty

                const selectedMembers = queue.splice(0, CONFIG.WAVES_PER_DAY)
                
                // Create Waves
                const wavesToInsert = selectedMembers.map((member: any, index: number) => {
                    const isCore = index < (CONFIG.WAVES_PER_DAY * CONFIG.CORE_RATIO)
                    
                    // Stagger times: Waves start between 18:00 and 20:00
                    const startHour = 18 + Math.floor(Math.random() * 2)
                    const startMin = Math.floor(Math.random() * 60)
                    const startTime = `${startHour}:${startMin.toString().padStart(2, '0')}:00`
                    const endTime = `${startHour + 2}:${startMin.toString().padStart(2, '0')}:00`

                    return {
                        squad_id: squad.id,
                        creator_id: member.user_id,
                        scheduled_date: dateStr,
                        start_time: startTime,
                        end_time: endTime,
                        wave_type: isCore ? 'core' : 'noise',
                        status: 'pending'
                    }
                })

                if (wavesToInsert.length > 0) {
                    const { error } = await supabaseAdmin.from('daily_waves').insert(wavesToInsert)
                    
                    if (!error) {
                        totalScheduled += wavesToInsert.length

                        // CRITICAL: Update 'last_wave_date' in DB for these users
                        // This pushes them to the back of the line for the next execution
                        const userIds = selectedMembers.map((m: any) => m.user_id)
                        await supabaseAdmin
                            .from('squad_members')
                            .update({ last_wave_date: new Date().toISOString() }) // Use NOW or targetDate
                            .in('user_id', userIds)
                            .eq('squad_id', squad.id)

                        // Update in-memory queue for next iteration (d+1)
                        // Add them back to the end with a new fake date so they are last
                        selectedMembers.forEach((m: any) => {
                            m.last_wave_date = new Date().toISOString() // conceptually "just now"
                        })
                        queue.push(...selectedMembers)
                    }
                }
            }
        }

        return NextResponse.json({ 
            success: true, 
            message: `Engine V3: Scheduled ${totalScheduled} waves across ${squads.length} squads.` 
        })

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}
