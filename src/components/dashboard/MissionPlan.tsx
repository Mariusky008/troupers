"use client"

import { CheckCircle2, Clock, MessageSquare, Share2, Star, Play, RotateCcw, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface MissionPlanProps {
  type: 'like' | 'comment' | 'favorite' | 'share' | string
  scenario?: 'engagement' | 'abandon' | string
  delayMinutes?: number
  trafficSource?: 'search' | 'profile' | 'direct'
  targetUsername?: string
}

export function MissionPlan({ type, scenario = 'engagement', delayMinutes = 0, trafficSource = 'search', targetUsername = "le créateur" }: MissionPlanProps) {
  if (scenario === 'abandon') {
    return (
      <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          Scénario : Micro-Abandon (15%)
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Pour rendre la courbe de statistiques réelle, TikTok a besoin de voir des gens qui ne finissent pas la vidéo.
        </p>
        <div className="space-y-3">
           {/* DELAY INDICATOR */}
           {delayMinutes > 0 && (
             <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 shrink-0 mt-0.5">
                   <Clock className="w-3 h-3" />
                </div>
                <p className="text-sm text-amber-700 font-bold">Attends entre 30s et 2min avant de lancer.</p>
             </div>
           )}

          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
            <p className="text-sm text-slate-700">Ouvre la vidéo via <strong>Lien Direct</strong> (Mode Rapide).</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
            <p className="text-sm text-slate-700">Regarde entre <strong>60% et 80%</strong> de la vidéo.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600 shrink-0 mt-0.5">3</div>
            <p className="text-sm text-slate-700">Quitte la vidéo <strong>sans aucune interaction</strong> (pas de like, pas de com).</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider">
        <Play className="w-4 h-4" />
        Séquence Tactique (Engagement 85%)
      </div>

      <div className="space-y-3">
        {/* STEP -1: WARNING DOUBLE DIP (Safety) */}
        <div className="p-2 bg-red-50 border border-red-100 rounded text-xs text-red-800 mb-2 flex gap-2 items-start">
           <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
           <div>
              <strong>STOP !</strong> Si tu as déjà vu et liké cette vidéo naturellement : <br/>
              1. Ne fais RIEN (ne retire pas ton like). <br/>
              2. Valide juste cette mission ici. <br/>
           </div>
        </div>

        {/* STEP 0: DELAY (Strategic Timing) */}
        {delayMinutes > 0 ? (
           <div className="flex items-start gap-3 p-2 bg-amber-50 rounded border border-amber-100 mb-2">
             <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                <Clock className="w-3 h-3" />
             </div>
             <div className="space-y-1">
               <p className="text-sm font-bold text-amber-800">Décalage Temporel</p>
               <p className="text-xs text-amber-700">
                 Attends <strong>entre 30s et {Math.max(2, delayMinutes)} min</strong> pour simuler un trafic naturel.
               </p>
             </div>
           </div>
        ) : null}

        {/* STEP 0.5: WARM UP (SANDWICH PROTOCOL) */}
        <div className="flex items-start gap-3 group opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-6 w-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-slate-200">1</div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-600">Préchauffage Léger</p>
            <p className="text-xs text-slate-500">Scrolle 2-3 vidéos aléatoires avant d'arriver sur la cible.</p>
          </div>
        </div>

        {/* STEP 1: TRAFFIC SOURCE (The Hunt) */}
        <div className="flex items-start gap-3 group">
          <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">2</div>
          <div className="space-y-1 w-full">
            <p className="text-sm font-bold text-slate-800">Accès Cible : {trafficSource === 'search' ? 'RECHERCHE' : (trafficSource === 'profile' ? 'PROFIL' : 'LIEN DIRECT')}</p>
            
            {trafficSource === 'search' ? (
                <div className="bg-slate-100 p-2 rounded text-xs border border-slate-200 mt-1">
                    <p className="text-slate-500 mb-1">Tape dans la recherche :</p>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded border border-slate-200 font-mono font-bold text-slate-800 select-all cursor-pointer" onClick={() => navigator.clipboard.writeText(targetUsername)}>
                        {targetUsername}
                    </div>
                </div>
            ) : trafficSource === 'profile' ? (
                <p className="text-xs text-slate-500">Va sur le profil <strong>@{targetUsername}</strong> et ouvre la dernière vidéo.</p>
            ) : (
                <p className="text-xs text-slate-500">Utilise le bouton "Voir la Vidéo" ci-dessus.</p>
            )}
          </div>
        </div>

        {/* STEP 2: Visionnage */}
        <div className="flex items-start gap-3 group">
          <div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">3</div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-800">Visionnage Complet</p>
            <p className="text-xs text-slate-500">Regarde la vidéo en entier. Reviens légèrement en arrière si un passage t'a marqué.</p>
          </div>
        </div>

        {/* STEP 4: Action */}
        <div className="flex items-start gap-3 group">
          <div className="h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">4</div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-800 uppercase">Interaction : {type}</p>
            
            {type === 'comment' ? (
              <div className="mt-2 space-y-2">
                <p className="text-xs text-slate-500 mb-2 italic">Idées (ne pas copier-coller) :</p>
                
                <div className="grid gap-2">
                   {/* Option 1: Question */}
                  <div className="p-2 bg-slate-50 border rounded text-[11px] text-slate-600">
                    <span className="font-bold text-indigo-500">Question :</span> "Pourquoi tu fais [X]... ?"
                  </div>
                   {/* Option 2: Débat */}
                  <div className="p-2 bg-slate-50 border rounded text-[11px] text-slate-600">
                    <span className="font-bold text-indigo-500">Avis :</span> "J'ai testé l'inverse et..."
                  </div>
                </div>
              </div>
            ) : type === 'share' ? (
              <div className="space-y-1">
                 <p className="text-xs text-slate-500">Copier le lien ou MP.</p>
              </div>
            ) : type === 'watch' ? (
               <div className="space-y-1">
                  <p className="text-xs text-slate-500 font-medium">Juste regarder (Watchtime).</p>
               </div>
            ) : type === 'like' ? (
               <p className="text-xs text-slate-500">Double-tap pour liker (ou juste regarder si pas inspiré).</p>
            ) : type === 'favorite' ? (
               <p className="text-xs text-slate-500">Ajoute aux favoris.</p>
            ) : (
              <p className="text-xs text-slate-500">Action libre : {type}</p>
            )}
          </div>
        </div>

        {/* STEP 5: COOL DOWN (SANDWICH PROTOCOL) */}
        <div className="flex items-start gap-3 group opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-6 w-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-slate-200">5</div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-600">Navigation Naturelle</p>
            <p className="text-xs text-slate-500">Continue de scroller un peu après.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
