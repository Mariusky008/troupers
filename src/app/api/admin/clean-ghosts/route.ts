import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
    // Initialize Admin Client (Bypass RLS)
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        // 1. Fetch ALL Auth Users (Source of Truth)
        // Note: listUsers is paginated, we fetch up to 1000 which should cover current scale
        const { data: { users }, error: authError } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 })
        
        if (authError) throw authError
        if (!users || users.length === 0) {
            return NextResponse.json({ success: false, message: "Impossible de récupérer la liste des utilisateurs Auth." })
        }

        const validUserIds = new Set(users.map(u => u.id))

        // 2. Fetch ALL Public Profiles
        const { data: profiles, error: profileError } = await supabaseAdmin
            .from('profiles')
            .select('id, username')
        
        if (profileError) throw profileError

        // 3. Identify Ghosts (Profiles without Auth)
        const ghosts = profiles?.filter(p => !validUserIds.has(p.id)) || []

        if (ghosts.length === 0) {
            return NextResponse.json({ success: true, message: "Aucun fantôme détecté. La base est propre." })
        }

        const ghostIds = ghosts.map(g => g.id)
        const ghostNames = ghosts.map(g => g.username).join(', ')

        console.log(`Found ${ghosts.length} ghosts: ${ghostNames}`)

        // 4. Delete Ghosts
        // A. From squad_members (Foreign Key constraint usually handles this, but let's be safe)
        const { error: memberError } = await supabaseAdmin
            .from('squad_members')
            .delete()
            .in('user_id', ghostIds)

        // B. From profiles
        const { error: deleteError } = await supabaseAdmin
            .from('profiles')
            .delete()
            .in('id', ghostIds)

        if (deleteError) throw deleteError

        return NextResponse.json({ 
            success: true, 
            message: `Nettoyage réussi : ${ghosts.length} profils fantômes supprimés (${ghostNames}).` 
        })

    } catch (e: any) {
        console.error("Cleanup error:", e)
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}