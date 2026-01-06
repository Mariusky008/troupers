import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
    // 1. Setup Admin Client (Service Role - Bypasses RLS)
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        const today = new Date().toISOString().split('T')[0]
        
        // Fetch waves for next 7 days with profile info
        // Using Service Role allows us to read ALL profiles
        const { data, error } = await supabaseAdmin
            .from('daily_waves')
            .select(`
                *,
                profiles:creator_id (
                    username,
                    current_video_url,
                    updated_at
                )
            `)
            .gte('scheduled_date', today)
            .order('scheduled_date', { ascending: true })
            .order('start_time', { ascending: true })

        if (error) throw error

        return NextResponse.json({ success: true, data })

    } catch (e: any) {
        return NextResponse.json({ success: false, error: e.message }, { status: 500 })
    }
}
