import { Zap, Activity, Users, Eye, ArrowRight, BarChart3, Clock, CheckCircle2 } from "lucide-react"

export function DeepDiveAlgo() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Mécanique Algorithmique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
            ⚙️ Comment TikTok réagit <span className="text-indigo-400">VRAIMENT</span> à 100 interactions en 15 minutes
          </h2>
          <p className="text-slate-400 text-lg">
            TikTok ne raisonne pas en "likes bruts". Il raisonne en tests successifs. Voici ce qui se passe sous le capot quand tu utilises Troupers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Ligne connectrice */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 z-0" />

          {/* STEP 1 */}
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl mb-4 border border-slate-700 shadow-lg shadow-indigo-500/10">
              🧪
            </div>
            <h3 className="text-xl font-bold mb-2 text-indigo-300">Étape 1 — Le Micro-Test</h3>
            <p className="text-sm font-mono text-slate-500 mb-4">0 → 30 minutes</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>TikTok montre ta vidéo à un premier petit pool (200-500 personnes).</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Activity className="h-4 w-4 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Mesure la vitesse d'arrivée des likes/coms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">Résultat Troupers :</span>
                </li>
              </ul>
              <p className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-500/20 text-indigo-200">
                100 interactions en 15 min = <span className="font-bold">Anormalement élevé.</span> La vidéo passe le test immédiatement.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl mb-4 border border-slate-700 shadow-lg shadow-purple-500/10">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-300">Étape 2 — Amplification</h3>
            <p className="text-sm font-mono text-slate-500 mb-4">30 min → 2 heures</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>TikTok élargit la diffusion (2k - 10k vues) sur des profils similaires aux interacteurs.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                  <span>Entrée en "For You" actif</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="font-semibold text-white">L'avantage Troupers :</span>
                </li>
              </ul>
              <p className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20 text-purple-200">
                Le signal arrive <span className="font-bold">vite et groupé</span>, exactement ce que l'algorithme adore pour valider la qualité.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl mb-4 border border-slate-700 shadow-lg shadow-emerald-500/10">
              🌊
            </div>
            <h3 className="text-xl font-bold mb-2 text-emerald-300">Étape 3 — Propagation</h3>
            <p className="text-sm font-mono text-slate-500 mb-4">24h → 48h+</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Si la vidéo génère des commentaires naturels et des abonnements...</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Elle tourne en boucle pendant des jours</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Effet cumulé sur le compte</span>
                </li>
              </ul>
              <p className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-500/20 text-emerald-200">
                C'est là que la magie organique opère, propulsée par l'impulsion initiale Troupers.
              </p>
            </div>
          </div>
        </div>

        {/* IMPACT CHIFFRÉ */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <BarChart3 className="h-6 w-6 text-indigo-500" />
            Impact chiffré réaliste <span className="text-slate-500 text-base font-normal">(PAS de marketing bullshit)</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                   🎯 Hypothèse de départ
                </h4>
                <ul className="space-y-2 text-slate-400">
                   <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-slate-600" /> 100 interactions en 15 min</li>
                   <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-slate-600" /> Vidéo correcte (pas virale exceptionnelle)</li>
                   <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-slate-600" /> Compte &lt; 50k abonnés</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                   👀 Vues Générées
                </h4>
                <div className="space-y-3">
                   <div className="flex justify-between items-center text-sm text-slate-400 border-b border-slate-800 pb-2">
                      <span>Sans boost</span>
                      <span className="font-mono text-red-400">Bloqué à 300-800 vues</span>
                   </div>
                   <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-800 pb-2">
                      <span>Minimum courant</span>
                      <span className="font-mono text-indigo-400 font-bold">2 000 – 5 000 vues</span>
                   </div>
                   <div className="flex justify-between items-center text-sm text-slate-300 border-b border-slate-800 pb-2">
                      <span>Cas fréquent</span>
                      <span className="font-mono text-indigo-400 font-bold">8 000 – 20 000 vues</span>
                   </div>
                   <div className="flex justify-between items-center text-sm text-slate-300">
                      <span>Bon contenu + Timing</span>
                      <span className="font-mono text-emerald-400 font-bold">30 000+ vues</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
               <div>
                <h4 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                   ➕ Nouveaux Abonnés (Conversion 0.5% - 2%)
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                   <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">5k vues</div>
                      <div className="font-bold text-white">+25-100</div>
                   </div>
                   <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">10k vues</div>
                      <div className="font-bold text-indigo-400">+50-200</div>
                   </div>
                   <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">20k vues</div>
                      <div className="font-bold text-emerald-400">+100-400</div>
                   </div>
                </div>
                <p className="text-xs text-center text-slate-500 mt-2">👉 Et ça, sur une seule vidéo.</p>
              </div>

              <div className="bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/20">
                 <h4 className="font-bold text-indigo-300 mb-2 flex items-center gap-2">
                    🔁 L'Effet Cumulatif (Le vrai levier)
                 </h4>
                 <p className="text-sm text-slate-300 mb-4">
                    Si un membre bénéficie de 2-3 Boost Windows par semaine pendant 1 mois :
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                    <div>
                       <div className="text-2xl font-black text-white">+300 à 1 500</div>
                       <div className="text-sm text-indigo-200">Abonnés / mois (Sans triche, sans bots)</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECURITY SECTION */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
           <h3 className="text-lg font-bold text-white mb-6">⚠️ Est-ce risqué pour l’algorithme ?</h3>
           <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-red-950/30 p-4 rounded-xl border border-red-900/50">
                 <h4 className="font-bold text-red-400 mb-2 text-sm uppercase">TikTok pénalise :</h4>
                 <ul className="space-y-1 text-sm text-red-200/70">
                    <li className="flex items-center gap-2">❌ Bots & Scripts</li>
                    <li className="flex items-center gap-2">❌ IP Identiques</li>
                    <li className="flex items-center gap-2">❌ Actions instantanées massives</li>
                 </ul>
              </div>
              <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-900/50">
                 <h4 className="font-bold text-emerald-400 mb-2 text-sm uppercase">Troupers fait l'inverse :</h4>
                 <ul className="space-y-1 text-sm text-emerald-200/70">
                    <li className="flex items-center gap-2">✅ Humains Réels</li>
                    <li className="flex items-center gap-2">✅ Timing plausible</li>
                    <li className="flex items-center gap-2">✅ Interactions variées</li>
                 </ul>
              </div>
           </div>
           <p className="mt-8 text-xl font-medium text-slate-300">
              "Une communauté active qui réagit vite." <br/>
              <span className="text-sm text-slate-500">C'est tout ce que l'algorithme voit.</span>
           </p>
        </div>

      </div>
    </section>
  )
}
