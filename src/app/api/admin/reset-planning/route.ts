import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        const today = new Date().toISOString().split('T')[0]

        // 1. Delete future waves (including today to force refresh)
        const { error: deleteError, count } = await supabaseAdmin
            .from('daily_waves')
            .delete({ count: 'exact' })
            .gte('scheduled_date', today)

        if (deleteError) throw deleteError

        // OPTIONAL: Reset last_wave_date for everyone to start fresh?
        // No, keep history. The new algo will prioritize those with old dates (or nulls).

        return NextResponse.json({ 
            success: true, 
            message: `Planning futur effacé (${count} vagues supprimées).` 
        })

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}