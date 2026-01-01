"use client"

import { Activity, BarChart3, Eye, Heart, MessageCircle, Share2, TrendingUp, UserPlus, Zap } from "lucide-react"
import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function AlgorithmExplainer() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { amount: 0.2, once: false })
  
  // Stats for the case study animation
  const [views, setViews] = useState(600)
  const [likes, setLikes] = useState(25)
  const [comments, setComments] = useState(4)
  const [subs, setSubs] = useState(600)
  const [isAmplified, setIsAmplified] = useState(false)

  useEffect(() => {
    if (!isInView) {
      // Reset
      setViews(600)
      setLikes(25)
      setComments(4)
      setSubs(600)
      setIsAmplified(false)
      return
    }

    // Start animation sequence after delay
    const timer = setTimeout(() => {
      setIsAmplified(true)
      
      const duration = 4
      
      animate(600, 8500, { duration, ease: "circOut", onUpdate: v => setViews(Math.floor(v)) })
      animate(25, 420, { duration, ease: "circOut", onUpdate: v => setLikes(Math.floor(v)) })
      animate(4, 58, { duration, ease: "circOut", onUpdate: v => setComments(Math.floor(v)) })
      animate(600, 745, { duration, ease: "circOut", onUpdate: v => setSubs(Math.floor(v)) })
      
    }, 1500)

    return () => clearTimeout(timer)
  }, [isInView])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background border-y relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl font-black tracking-tight md:text-5xl mb-6">
             Comment fonctionne <br/>
             <span className="text-primary">l’algorithme TikTok</span> ?
           </h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             TikTok ne récompense pas le talent <em>au hasard</em>. <br/>
             Il fonctionne par <strong>tests successifs</strong>.
           </p>
        </div>

        {/* PHASES - 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-muted via-primary to-muted z-0" />
           
           {/* Phase 1 */}
           <div className="relative z-10 bg-background p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-background mx-auto">1</div>
              <h3 className="text-xl font-bold text-center mb-2">Le Test Initial</h3>
              <p className="text-sm text-center text-muted-foreground mb-4">Les premières minutes Tik Tok observe :</p>
              <div className="space-y-3 text-sm bg-muted/30 p-4 rounded-xl">
                 <p className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    Le temps de visionnage
                 </p>
                 <p className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    Le nombre de likes, commentaires, favoris

                 </p>
                  <p className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    la vitesse à laquelle ces interactions arrivent
                 </p>
                 <p className="font-medium text-xs text-primary mt-2">
                    👉 Si l’engagement est rapide et concentré : Passe au niveau 2
                 </p>
              </div>
           </div>

           {/* Phase 2 */}
           <div className="relative z-10 bg-background p-6 rounded-2xl border-2 border-primary/20 shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                 ZONE TROUPERS
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-background mx-auto">2</div>
              <h3 className="text-xl font-bold text-center mb-2">L’Amplification</h3>
              <p className="text-sm text-center text-muted-foreground mb-4">Si les signaux sont bons, TikTok élargit la diffusion</p>
              <div className="space-y-3 text-sm bg-primary/5 p-4 rounded-xl">
                 <p className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-primary" />
                    A des profils similaires
                 </p>
                 <p className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    Page "For You"
                 </p>
                 <p className="font-medium text-xs text-primary mt-2">
                  La vidéo est alors retestée en continu.
                 </p>
              </div>
           </div>

           {/* Phase 3 */}
           <div className="relative z-10 bg-background p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl font-bold mb-4 border-4 border-background mx-auto">3</div>
              <h3 className="text-xl font-bold text-center mb-2">La Propagation</h3>
              <p className="text-sm text-center text-muted-foreground mb-4">Viralité durable</p>
              <div className="space-y-3 text-sm bg-muted/30 p-4 rounded-xl">
                 <p className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                   Quand une vidéo :

                 </p>
                 <p className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-green-500" />
                    •⁠  ⁠est bien regardée <br/>
•⁠  ⁠génère de vrais commentaires <br/>
•⁠  ⁠apporte des abonnements <br/>

                 </p>
                 <p className="font-medium text-xs text-muted-foreground mt-2">
                    👉 TikTok la laisse tourner *plusieurs heures, parfois plusieurs jours.

                 </p>
              </div>
           </div>
        </div>

        {/* CASE STUDY ANIMATION */}
        <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              
              {/* Text Side */}
              <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 text-xs font-bold uppercase">
                    <BarChart3 className="w-3 h-3" /> Cas Concret
                 </div>
                 <h3 className="text-3xl font-bold">
                    L’impact Troupers sur un <br/>
                    <span className="text-blue-400">petit compte (1000 abonnés)</span>
                 </h3>
                 <p className="text-slate-400 leading-relaxed">
                    Sans Troupers, la vidéo reste bloquée au stade 1 (400 vues). <br/>
                    Avec 100 interactions Troupers rapides, elle force le passage au stade 2 (Amplification).
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                       <p className="text-xs text-slate-500 uppercase font-bold mb-1">Avant</p>
                       <p className="text-2xl font-bold text-slate-400">400 - 800</p>
                       <p className="text-xs text-slate-500">Vues habituelles</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                       <p className="text-xs text-blue-400 uppercase font-bold mb-1">Avec Troupers</p>
                       <p className="text-2xl font-bold text-white">5k - 15k</p>
                       <p className="text-xs text-blue-300">Portée débloquée</p>
                    </div>
                 </div>
              </div>

              {/* Animation Side */}
              <div className="relative">
                 {/* Card */}
                 <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                             <img src="/logo-v2.png" alt="User" className="w-full h-full object-cover" />
                          </div>
                          <div>
                             <p className="font-bold text-sm">Membre Troupers</p>
                             <p className="text-xs text-slate-500">@createur_determinée</p>
                          </div>
                       </div>
                       <div className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold transition-all duration-500",
                          isAmplified ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
                       )}>
                          {isAmplified ? "VIRALITÉ ACTIVÉE 🚀" : "En attente..."}
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                       <div className="space-y-1">
                          <p className="text-xs text-slate-500 font-medium">Vues</p>
                          <p className="text-3xl font-black tracking-tight tabular-nums">{views.toLocaleString()}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-xs text-slate-500 font-medium">Abonnés</p>
                          <p className="text-3xl font-black tracking-tight tabular-nums flex items-center gap-2">
                             {subs.toLocaleString()}
                             {isAmplified && <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">+{subs - 600}</span>}
                          </p>
                       </div>
                    </div>

                    {/* Bars */}
                    <div className="space-y-3">
                       <div className="flex items-center gap-3 text-sm">
                          <Heart className={cn("w-4 h-4 transition-colors", isAmplified ? "text-red-500 fill-red-500" : "text-slate-400")} />
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                             <motion.div 
                               className="h-full bg-red-500" 
                               initial={{ width: "5%" }}
                               animate={{ width: isAmplified ? "85%" : "5%" }}
                               transition={{ duration: 4, ease: "circOut" }}
                             />
                          </div>
                          <span className="w-12 text-right tabular-nums font-medium">{likes}</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm">
                          <MessageCircle className={cn("w-4 h-4 transition-colors", isAmplified ? "text-blue-500 fill-blue-500" : "text-slate-400")} />
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                             <motion.div 
                               className="h-full bg-blue-500" 
                               initial={{ width: "2%" }}
                               animate={{ width: isAmplified ? "60%" : "2%" }}
                               transition={{ duration: 4, ease: "circOut" }}
                             />
                          </div>
                          <span className="w-12 text-right tabular-nums font-medium">{comments}</span>
                       </div>
                    </div>

                    {/* Troupers Injection Overlay */}
                    {isAmplified && (
                       <div className="absolute top-0 right-0 p-4">
                          <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded animate-pulse shadow-lg">
                             +100 INTERACTIONS
                          </div>
                       </div>
                    )}
                 </div>
              </div>
           </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
           <h4 className="text-2xl font-bold mb-4">La promesse honnête de Troupers</h4>
           <div className="flex justify-center gap-8 text-sm mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                 <div className="w-2 h-2 rounded-full bg-destructive" />
                 Pas de magie
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 Juste de la mathématique
              </div>
           </div>
           <p className="text-lg font-medium italic text-muted-foreground">
             "Seul, tu postes et tu espères. <br/>
             En groupe, <span className="text-primary font-bold">tu déclenches l’algorithme</span>."
           </p>
        </div>

      </div>
    </section>
  )
}
