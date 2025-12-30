import { SupabaseClient } from "@supabase/supabase-js"

export const assignUserToSquad = async (supabase: SupabaseClient, userId: string) => {
  // 1. Check if user is already in a squad
  const { data: existingMembership } = await supabase
    .from('squad_members')
    .select('squad_id')
    .eq('user_id', userId)
    .single()

  if (existingMembership) {
    return { success: true, squadId: existingMembership.squad_id, message: "Already in a squad" }
  }

  // 2. Fetch all squads with member counts
  // We need to use explicit count
  const { data: squads, error } = await supabase
    .from('squads')
    .select('id, name, squad_members(count)', { count: 'exact' })
    .order('created_at', { ascending: true })

  if (error) throw error

  let targetSquadId = null
  
  // 3. Find first squad with < 30 members
  // Note: supabase returns count as an array or object depending on query, 
  // typically { count: 123 } inside the joined resource if using select('*, rel(count)')
  // But here 'squad_members(count)' returns [{ count: N }] usually
  
  // Let's iterate. 
  // We want to fill sequentially: Squad 1 -> Squad 2 -> ...
  // So we look at the *last* squad first? No, the user said "remplir mon escouade jusqu a maximum 30 personnes".
  // Assuming we fill the *latest* created squad until full.
  
  const lastSquad = squads && squads.length > 0 ? squads[squads.length - 1] : null
  
  if (lastSquad) {
      // Check count
      // @ts-ignore
      const memberCount = lastSquad.squad_members?.[0]?.count || 0
      
      if (memberCount < 30) {
          targetSquadId = lastSquad.id
      }
  }

  // 4. If no target squad (all full or no squads), create new one
  if (!targetSquadId) {
      const nextSquadNumber = (squads?.length || 0) + 1
      // Naming convention: Alpha, Beta, Gamma... or just Number?
      // User used "Escouade Alpha". Let's try to be smart or just use Numbers for safety.
      // Let's use "Escouade [Number]" to avoid running out of greek letters.
      // Or map 1->Alpha, 2->Beta, etc.
      
      const greekAlphabet = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"]
      const nameSuffix = greekAlphabet[nextSquadNumber - 1] || `Squad ${nextSquadNumber}`
      const newSquadName = `Escouade ${nameSuffix}`

      const { data: newSquad, error: createError } = await supabase
          .from('squads')
          .insert({ name: newSquadName })
          .select()
          .single()
      
      if (createError) throw createError
      targetSquadId = newSquad.id
  }

  // 5. Join the squad
  const { error: joinError } = await supabase
      .from('squad_members')
      .insert({
          squad_id: targetSquadId,
          user_id: userId
      })

  if (joinError) throw joinError

  return { success: true, squadId: targetSquadId, message: "Joined squad" }
}
