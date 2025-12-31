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
        <div className="mb-20 flex justify-center relative h-[600px] items-center">
          
          {/* External Signal - Outside Phone */}
          <div className="absolute top-0 z-20 flex flex-col items-center animate-bounce">
             <div className="bg-yellow-500 text-slate-950 font-black text-lg px-6 py-2 uppercase rounded-full border-4 border-slate-900 shadow-[0_0_40px_rgba(234,179,8,0.6)] flex items-center gap-2">
               ⚡️ Boost Window Active ⚡️
             </div>
             {/* Energy Beam */}
             <div className="w-1 h-16 bg-gradient-to-b from-yellow-500 to-transparent" />
          </div>

          {/* The Phone */}
          <div className="relative w-[280px] h-[500px] bg-slate-950 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden mt-8 ring-1 ring-white/10 group">
             {/* Screen */}
             <div className="absolute inset-0 bg-gray-900 flex flex-col">
                {/* Video simulation */}
                <div className="flex-1 relative overflow-hidden">
                   {/* Abstract Video Content */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-slate-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-20 h-20 rounded-full bg-white/5 animate-ping" />
                      </div>
                   </div>
                   
                   {/* TikTok UI Overlay */}
                   <div className="absolute right-2 bottom-16 flex flex-col gap-6 items-center p-2 z-10">
                      <div className="flex flex-col items-center gap-1">
                         <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-xl animate-[pulse_0.15s_ease-in-out_infinite]">❤️</span>
                         </div>
                         <span className="text-white font-bold text-xs shadow-black drop-shadow-md">12.5k</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                         <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-xl animate-[pulse_0.2s_ease-in-out_infinite]">💬</span>
                         </div>
                         <span className="text-white font-bold text-xs shadow-black drop-shadow-md">842</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                         <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-xl animate-[pulse_0.3s_ease-in-out_infinite]">↗️</span>
                         </div>
                         <span className="text-white font-bold text-xs shadow-black drop-shadow-md">315</span>
                      </div>
                   </div>

                   {/* Bottom Info */}
                   <div className="absolute bottom-4 left-4 right-16 z-10">
                      <div className="w-24 h-4 bg-slate-800/50 backdrop-blur-sm rounded mb-2" />
                      <div className="w-48 h-3 bg-slate-800/30 backdrop-blur-sm rounded" />
                   </div>

                   {/* Incoming Engagement Animation */}
                   <div className="absolute inset-0 pointer-events-none">
                      {/* Notifications sliding down */}
                      <div className="absolute top-12 left-2 right-2 flex flex-col gap-2 items-center">
                         {Array.from({ length: 4 }).map((_, i) => (
                            <div 
                              key={i} 
                              className="w-full bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg flex items-center gap-2 animate-[slideDown_0.5s_ease-out_infinite]"
                              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
                            >
                               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                               <div className="flex-1">
                                  <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                                  <div className="h-1.5 w-32 bg-white/10 rounded" />
                               </div>
                            </div>
                         ))}
                      </div>
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
