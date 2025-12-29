"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, ShieldAlert } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/login")
        return
      }

      // Hardcoded admin check as requested
      if (user.email !== "mariustalk@yahoo.fr") {
        setLoading(false)
        return // Not admin
      }

      setIsAdmin(true)
      fetchUsers()
    }

    checkAdmin()
  }, [])

  const fetchUsers = async () => {
    try {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .order('discipline_score', { ascending: false })

      if (error) throw error

      setUsers(profiles || [])
    } catch (error) {
      toast.error("Erreur lors du chargement des données")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-8 text-center">Chargement...</div>

  if (!isAdmin) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4 text-center">
        <ShieldAlert className="h-16 w-16 text-destructive" />
        <h1 className="text-2xl font-bold">Accès Refusé</h1>
        <p className="text-muted-foreground">
          Cette zone est réservée à l'administrateur (Marius).
        </p>
        <Button onClick={() => router.push("/dashboard")}>Retour au Dashboard</Button>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Administration Troupers</h1>
          <p className="text-muted-foreground">Suivi des performances des recrues</p>
        </div>
        <div className="rounded-full bg-primary/10 px-4 py-2 text-primary font-mono text-sm">
          Admin: Marius
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Recrue</TableHead>
              <TableHead>Email (Contact)</TableHead>
              <TableHead>Score Discipline</TableHead>
              <TableHead>Réussite</TableHead>
              <TableHead>Plateforme</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              // Calculate a fake success rate based on discipline score (assuming max 1000)
              const successRate = Math.min(100, Math.round((user.discipline_score / 1000) * 100))
              
              return (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold uppercase">
                        {user.username?.charAt(0) || "?"}
                      </div>
                      {user.username || "Inconnu"}
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* Note: In real app, we need to join auth.users to get email, but profiles usually don't have it unless synced. 
                        For now, assuming we might not have it displayed or we use a placeholder button */}
                    <span className="text-muted-foreground text-xs italic">Voir via le bouton</span>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold">{user.discipline_score} XP</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-secondary overflow-hidden">
                        <div 
                          className={`h-full ${successRate > 80 ? 'bg-green-500' : successRate > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                          style={{ width: `${successRate}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{successRate}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {user.main_platform || "N/A"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={`mailto:?subject=Message%20Troupers&body=Salut%20${user.username},%20ton%20score%20est%20de%20${user.discipline_score}...`}>
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Contacter</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
