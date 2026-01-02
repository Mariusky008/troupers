"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { TrendingUp, Music, Lightbulb, PenTool, Sparkles, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export default function MyPostsPage() {
  const [dailyTrend, setDailyTrend] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [copiedHook, setCopiedHook] = useState<string | null>(null)
  
  // Exemple de Hooks viraux (Statique pour l'instant, pourrait venir de la DB)
  const viralHooks = [
    "Arrête de scroller si tu veux...",
    "Je parie que tu ne savais pas ça sur...",
    "3 erreurs qui tuent ta progression...",
    "Le secret que personne ne te dit...",
    "Pov : Quand tu réalises que..."
  ]

  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
       try {
         // Fetch Daily Trend
         const { data: trend } = await supabase
            .from('daily_trends')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1)
            .single()
         
         if (trend) setDailyTrend(trend)
       } catch (e) {
         console.error(e)
       } finally {
         setLoading(false)
       }
    }
    fetchData()
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHook(text)
    toast.success("Accroche copiée !")
    setTimeout(() => setCopiedHook(null), 2000)
  }

  if (loading) return <div className="p-8 text-center">Chargement du Labo Créatif...</div>

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <PenTool className="h-8 w-8 text-primary" />
          MES POSTS TIKTOK
        </h1>
        <p className="text-muted-foreground mt-2">
          Ton atelier de création. Analyse les tendances, prépare tes scripts et domine l'algo.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        
        {/* LEFT COLUMN: RADAR TACTIQUE (Moved here) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            Radar Tactique (Trend du Jour)
          </h2>
          
          {dailyTrend ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full rounded-xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 to-indigo-950 p-6 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                         Ordre de mission
                      </span>
                      <span className="text-xs text-slate-400">{new Date(dailyTrend.created_at).toLocaleDateString()}</span>
                   </div>
                   <div className="h-10 w-10 rounded-lg bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-indigo-400" />
                   </div>
                </div>

                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">{dailyTrend.title}</h3>
                   <p className="text-slate-300 leading-relaxed">
                      {dailyTrend.description}
                   </p>
                </div>

                {dailyTrend.sound_url && (
                   <Button 
                     className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/20 gap-2 mt-4"
                     asChild
                   >
                     <a href={dailyTrend.sound_url} target="_blank" rel="noopener noreferrer">
                       <Music className="h-4 w-4" />
                       Utiliser ce Son
                     </a>
                   </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="p-8 border border-dashed rounded-xl text-center text-muted-foreground">
              Aucune trend détectée aujourd'hui. Repose-toi ou innove !
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: CREATIVE TOOLS */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-600" />
            Générateur d'Accroches (Hooks)
          </h2>
          
          <div className="rounded-xl border bg-card shadow-sm p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Les 3 premières secondes sont cruciales. Utilise ces accroches testées pour retenir l'attention.
            </p>
            
            <div className="space-y-3">
              {viralHooks.map((hook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group">
                  <span className="font-medium text-sm">{hook}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(hook)}
                  >
                    {copiedHook === hook ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full gap-2 border-dashed">
              <Lightbulb className="h-4 w-4" />
              Générer d'autres idées (Bientôt)
            </Button>
          </div>

          <div className="rounded-xl border bg-orange-50/50 p-6 border-orange-100">
             <h3 className="font-bold text-orange-800 mb-2">💡 Conseil Pro</h3>
             <p className="text-sm text-orange-800/80">
               Pour tes posts personnels, n'oublie pas d'ajouter le hashtag <strong>#Troupers</strong> pour que l'escouade te repère plus facilement !
             </p>
          </div>
        </div>

      </div>
    </div>
  )
}
