import { ArrowRight, User, Eye, Heart, MessageCircle, Share2, Star } from "lucide-react"

export function CaseStudy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
            <User className="h-4 w-4" />
            <span>Étude de Cas Réelle</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 tracking-tight">
            🎯 Profil de Départ
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Pas de théorie. Voici concrètement ce qui se passe pour un petit compte qui utilise Troupers intelligemment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
           
           {/* LEFT: THE SCENARIO */}
           <div className="space-y-8">
              {/* CARD: PROFILE */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                    Le Compte Test
                 </h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <div className="text-sm text-slate-500 mb-1">Abonnés</div>
                       <div className="text-2xl font-black text-slate-900">300 à 1000</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <div className="text-sm text-slate-500 mb-1">Vues Moyennes</div>
                       <div className="text-2xl font-black text-slate-900">200-1000</div>
                    </div>
                 </div>
                 <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="text-sm font-medium text-slate-700 mb-2">L'Action Troupers :</div>
                    <ul className="space-y-1 text-sm text-slate-600">
                       <li className="flex items-center gap-2">⚡️ ≈100 interactions humaines réelles</li>
                       <li className="flex items-center gap-2">⚡️ Mix : Likes + Coms + Favoris + Partages</li>
                       <li className="flex items-center gap-2">⚡️ Concentré sur la fenêtre de tir (15-60 min)</li>
                    </ul>
                 </div>
              </div>

              {/* CARD: INTERPRETATION */}
              <div className="relative pl-8 border-l-2 border-indigo-200 space-y-8">
                 <div className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <h4 className="font-bold text-indigo-900 mb-2">Phase de Test Initial (0-1h)</h4>
                    <p className="text-slate-600 text-sm">
                       TikTok détecte un score d'engagement <span className="font-bold text-indigo-600">anormalement élevé</span> pour un compte de cette taille. Il ne comprend pas pourquoi, mais les chiffres sont là : les gens réagissent vite.
                    </p>
                 </div>
                 <div className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <h4 className="font-bold text-purple-900 mb-2">Phase d'Élargissement (1h-12h)</h4>
                    <p className="text-slate-600 text-sm">
                       La vidéo est poussée hors des abonnés, vers des profils similaires aux membres Troupers. C'est là que le compte <span className="font-bold text-purple-600">change de ligue</span>.
                    </p>
                 </div>
              </div>
           </div>

           {/* RIGHT: THE RESULTS */}
           <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">📊 Résultats Chiffrés</h3>

              <div className="space-y-6 relative z-10">
                 {/* VUES */}
                 <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center gap-2 text-slate-300 font-medium">
                          <Eye className="h-4 w-4" /> Vues Finales
                       </div>
                       <div className="text-emerald-400 font-bold text-xs bg-emerald-400/10 px-2 py-1 rounded">x5 à x15</div>
                    </div>
                    <div className="text-3xl font-black text-white">5k - 15k+</div>
                    <div className="text-xs text-slate-500 mt-1">vs 300-800 sans boost</div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    {/* LIKES */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                       <div className="flex items-center gap-2 text-pink-400 font-medium mb-1 text-sm">
                          <Heart className="h-3 w-3" /> Likes
                       </div>
                       <div className="text-xl font-bold text-white">200 - 600</div>
                       <div className="text-[10px] text-slate-500">dont ~80 Troupers</div>
                    </div>
                    
                    {/* COMS */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                       <div className="flex items-center gap-2 text-blue-400 font-medium mb-1 text-sm">
                          <MessageCircle className="h-3 w-3" /> Coms
                       </div>
                       <div className="text-xl font-bold text-white">20 - 60</div>
                       <div className="text-[10px] text-slate-500">Signal fort 🚀</div>
                    </div>

                    {/* FAVS */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                       <div className="flex items-center gap-2 text-yellow-400 font-medium mb-1 text-sm">
                          <Star className="h-3 w-3" /> Favoris
                       </div>
                       <div className="text-xl font-bold text-white">20 - 70</div>
                       <div className="text-[10px] text-slate-500">Top pour le SEO</div>
                    </div>

                    {/* SHARES */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                       <div className="flex items-center gap-2 text-green-400 font-medium mb-1 text-sm">
                          <Share2 className="h-3 w-3" /> Partages
                       </div>
                       <div className="text-xl font-bold text-white">15 - 50</div>
                       <div className="text-[10px] text-slate-500">Viralité</div>
                    </div>
                 </div>

                 {/* CONCLUSION BOX */}
                 <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                    <p className="text-sm font-medium text-indigo-300 mb-2">EFFET MOYEN TERME</p>
                    <p className="text-slate-300 text-sm">
                       Après ce boost, TikTok "réévalue" le compte. <br/>
                       Les prochaines vidéos feront naturellement <span className="font-bold text-white">1k - 3k vues</span> au lieu de 300.
                    </p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  )
}
