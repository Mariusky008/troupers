"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, Swords } from "lucide-react"

const ALLIANCE_TYPES = [
    { value: 'duo', label: '⚔️ Duo Tactique (1 invité)', minRank: 6 },
    { value: 'trio', label: '🎯 Trio d\'Experts (2 invités)', minRank: 7 },
    { value: 'round_table', label: '🎙️ Table Ronde (3 invités)', minRank: 8 },
    { value: 'raid', label: '🚩 Raid Créatif (4 invités)', minRank: 9 },
    { value: 'docu', label: '🎬 Documentaire (5 invités)', minRank: 10 },
    { value: 'summit', label: '🌟 Sommet (Illimité)', minRank: 11 },
]

export function CreateAllianceDialog({ userRank, children, onSuccess }: { userRank: number, children: React.ReactNode, onSuccess?: () => void }) {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const supabase = createClient()

    const availableTypes = ALLIANCE_TYPES.filter(t => userRank >= t.minRank)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        try {
            const { error } = await supabase.from('alliances').insert({
                creator_id: user.id,
                title: formData.get('title'),
                description: formData.get('description'),
                type: formData.get('type'),
                status: 'open'
            })

            if (error) throw error

            toast.success("Alliance publiée !", { description: "Les soldats peuvent maintenant postuler." })
            setOpen(false)
            if (onSuccess) onSuccess()
        } catch (error) {
            console.error(error)
            toast.error("Erreur", { description: "Impossible de créer l'alliance." })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-50">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-slate-900">
                        <Swords className="h-5 w-5 text-indigo-600" />
                        Lancer une Alliance
                    </DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Format Tactique</label>
                        <select 
                            name="type" 
                            required 
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="" disabled selected>Choisir le type de mission</option>
                            {availableTypes.length > 0 ? (
                                availableTypes.map(type => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Grade insuffisant</option>
                            )}
                        </select>
                        {availableTypes.length > 0 ? (
                            <p className="text-[10px] text-slate-400">
                                Votre grade G{userRank} débloque {availableTypes.length} formats.
                            </p>
                        ) : (
                            <p className="text-[10px] text-red-400 font-bold">
                                Grade minimum requis : G6 (Lieutenant)
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Sujet de la Mission</label>
                        <Input name="title" placeholder="Ex: Débat sur l'IA, Duo Fitness..." required className="font-bold" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500">Profil Recherché</label>
                        <Textarea 
                            name="description" 
                            placeholder="Ex: Je cherche un expert immo pour contredire mes arguments. Ton agressif bienvenu." 
                            required 
                            className="h-24"
                        />
                    </div>

                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 font-bold" disabled={loading || availableTypes.length === 0}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "PUBLIER L'ORDRE DE MISSION"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}