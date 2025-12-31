import { Zap, Clock, TrendingUp, Check, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BoostWindowFeature() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-50 animate-pulse" />
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        
        {/* 1 & 2: Titre & Sous-titre */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-1.5 text-sm font-bold text-yellow-400 border border-yellow-500/30 mb-4">
            <Zap className="h-4 w-4 fill-yellow-400" />
            FEATURE EXCLUSIVE
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Boost Window™
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Le moment où tout s’accélère.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Un créneau collectif où toute ton escouade interagit au même moment sur une seule vidéo.
          </p>
        </div>

        {/* 3: Visuel Central (Video UI) */}
        <div className="mb-20 flex justify-center">
          <div className="relative w-[300px] h-[530px] bg-black rounded-3xl border-4 border-slate-800 shadow-2xl overflow-hidden group">
             {/* Screen Content */}
             <div className="absolute inset-0 bg-slate-900">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-slate-700 font-black text-6xl opacity-20">VIDEO</div>
                </div>
                
                {/* TikTok UI Overlay */}
                <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center animate-[pulse_0.2s_ease-in-out_infinite]">
                         <span className="text-xl">❤️</span>
                      </div>
                      <span className="text-xs font-bold animate-[bounce_0.2s_infinite]">12.4K</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center animate-[pulse_0.3s_ease-in-out_infinite]">
                         <span className="text-xl">💬</span>
                      </div>
                      <span className="text-xs font-bold animate-[bounce_0.3s_infinite]">842</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center animate-[pulse_0.4s_ease-in-out_infinite]">
                         <span className="text-xl">↗️</span>
                      </div>
                      <span className="text-xs font-bold animate-[bounce_0.4s_infinite]">315</span>
                   </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-16">
                   <div className="w-24 h-4 bg-slate-800 rounded mb-2 animate-pulse" />
                   <div className="w-48 h-3 bg-slate-800/50 rounded animate-pulse" />
                </div>

                {/* EXPLOSION OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent animate-pulse pointer-events-none" />
                
                {/* NOTIFICATIONS BURST */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-full px-4">
                   <div className="bg-black/80 backdrop-blur-md text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-500/30 shadow-lg animate-[bounce_0.5s_infinite] flex items-center gap-2">
                      <Zap className="h-3 w-3 fill-yellow-400" />
                      BOOST WINDOW ACTIVE
                   </div>
                   
                   <div className="flex flex-col-reverse gap-1 h-32 overflow-hidden w-full items-center mask-image-gradient">
                      {Array.from({ length: 5 }).map((_, i) => (
                         <div key={i} className="flex items-center gap-2 bg-slate-800/90 text-white text-[10px] px-3 py-1 rounded-full animate-[slideUp_0.5s_ease-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                            <b>User{Math.floor(Math.random() * 99)}</b> a aimé ta vidéo
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 4: Explication Simple (Grid) */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
             <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center mb-4">
               <Clock className="h-6 w-6 text-slate-400" />
             </div>
             <h3 className="text-lg font-bold text-white mb-2">Le Problème</h3>
             <p className="text-slate-400 text-sm">
               Quand l’engagement arrive lentement et au compte-gouttes, l’algorithme n’y prête aucune attention. C'est le silence radio.
             </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-yellow-500/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
             <div className="h-12 w-12 rounded-full bg-yellow-900/30 flex items-center justify-center mb-4">
               <Zap className="h-6 w-6 text-yellow-500" />
             </div>
             <h3 className="text-lg font-bold text-white mb-2">Le Déclencheur</h3>
             <p className="text-slate-300 text-sm">
               Pendant une Boost Window, les interactions de ton escouade arrivent <span className="text-yellow-400 font-bold">toutes en même temps</span>.
             </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
             <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center mb-4">
               <TrendingUp className="h-6 w-6 text-slate-400" />
             </div>
             <h3 className="text-lg font-bold text-white mb-2">L'Effet</h3>
             <p className="text-slate-400 text-sm">
               Cette vélocité soudaine crée un signal de viralité artificiel que les plateformes détectent et amplifient immédiatement.
             </p>
          </div>
        </div>

        {/* 5 & 6: Scénario & Règles */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           
           {/* Scenario Card */}
           <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                 <div className="h-3 w-3 rounded-full bg-red-500" />
                 <div className="h-3 w-3 rounded-full bg-yellow-500" />
                 <div className="h-3 w-3 rounded-full bg-green-500" />
                 <span className="ml-auto text-xs font-mono text-slate-500">SESSION LIVE</span>
              </div>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded bg-yellow-500/20 flex items-center justify-center shrink-0">
                       <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                       <p className="font-bold text-white">18:00 - Lancement</p>
                       <p className="text-sm text-slate-400">La fenêtre s'ouvre. Ton lien est partagé à l'escouade.</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded bg-blue-500/20 flex items-center justify-center shrink-0">
                       <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                       <p className="font-bold text-white">18:15 - Pic d'activité</p>
                       <p className="text-sm text-slate-400">Tous les membres likent et commentent en simultané.</p>
                    </div>
                 </div>

                 <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <p className="text-xs uppercase font-bold text-slate-500 mb-2">Résultat en 30 min</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                       <div>
                          <p className="text-2xl font-black text-white">+180</p>
                          <p className="text-[10px] text-slate-400">LIKES</p>
                       </div>
                       <div>
                          <p className="text-2xl font-black text-white">+70</p>
                          <p className="text-[10px] text-slate-400">COMS</p>
                       </div>
                       <div>
                          <p className="text-2xl font-black text-white">+20</p>
                          <p className="text-[10px] text-slate-400">SHARES</p>
                       </div>
                    </div>
                 </div>
                 <p className="text-[10px] text-slate-600 text-center italic">*exemple illustratif, résultats variables selon la taille du groupe</p>
              </div>
           </div>

           {/* Rules & Callout */}
           <div className="space-y-8">
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-white">Cadré. Éthique. Puissant.</h3>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                       <Check className="h-5 w-5 text-green-500" />
                       Interactions humaines réelles
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                       <Check className="h-5 w-5 text-green-500" />
                       Pas de bots, pas de scripts
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                       <Check className="h-5 w-5 text-green-500" />
                       Pas d'engagement forcé (qualité avant tout)
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                       <Activity className="h-5 w-5 text-yellow-500" />
                       Fréquence limitée pour éviter les abus
                    </li>
                 </ul>
              </div>

              <div className="p-6 border-l-4 border-yellow-500 bg-yellow-500/5">
                 <p className="text-lg font-medium text-yellow-100">
                   "L’algorithme ne mesure pas seulement combien de réactions tu as. <br/>
                   <span className="text-yellow-400 font-bold">Il mesure à quelle vitesse elles arrivent.</span>"
                 </p>
              </div>
           </div>

        </div>

        {/* 8: CTA */}
        <div className="text-center">
           <Button 
             size="lg" 
             className="bg-white text-slate-950 hover:bg-slate-200 font-bold px-8 h-12 rounded-full"
             asChild
           >
             <Link href="/signup">
               👉 Tester gratuitement la Boost Window
             </Link>
           </Button>
           <p className="mt-3 text-xs text-slate-500">7 jours d'essai gratuit • Sans carte bancaire</p>
        </div>

      </div>
    </section>
  )
}
