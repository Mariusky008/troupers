import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        // Fetch one row to inspect columns
        const { data, error } = await supabaseAdmin.from('daily_supports').select('*').limit(5)
        
        // Count total supports today
        const today = new Date().toISOString().split('T')[0]
        const { count } = await supabaseAdmin.from('daily_supports')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', today)

        return NextResponse.json({ 
            success: true,
            sample_data: data,
            total_today: count,
            has_support_type_column: data && data.length > 0 ? 'support_type' in data[0] : "Unknown (no data)",
            error 
        })
    } catch (e: any) {
        return NextResponse.json({ error: e.message })
    }
}