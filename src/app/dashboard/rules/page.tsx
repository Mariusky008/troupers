"use client"

import { BookOpen, Shield, Sword, Zap, Clock, Users, AlertTriangle, CheckCircle, Skull, Flame } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RulesPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tight text-slate-900">
          Les Règles de Troupers
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Pour survivre et grandir sur TikTok, la discipline est votre seule arme. Voici comment fonctionne votre engagement.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 1. L'ESCOUADE */}
        <Card className="border-l-4 border-l-blue-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl">1. L'Escouade</CardTitle>
                <CardDescription>Votre famille de combat</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Vous êtes assigné à une <strong>Escouade de 5 soldats</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vous ne changez pas d'escouade tant que vous restez actif.</li>
              <li>Votre succès dépend de celui de vos camarades.</li>
              <li>Si un membre quitte, un nouveau est recruté automatiquement.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. LA MISSION QUOTIDIENNE */}
        <Card className="border-l-4 border-l-green-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-xl">2. La Mission Quotidienne</CardTitle>
                <CardDescription>Action requise avant minuit</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Chaque jour, vous recevez les vidéos de vos 4 camarades. Vous devez :
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-red-500">❤️ Like</span>
                <span>Aimer la vidéo</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-blue-500">💬 Commentaire</span>
                <span>4 mots minimum (pertinent)</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-yellow-500">⭐ Favori</span>
                <span>Ajouter aux favoris</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              ⚠️ Si vous n'avez pas de vidéo à poster ce jour-là, soutenez quand même les autres !
            </p>
          </CardContent>
        </Card>

        {/* 3. LE PROTOCOLE MERCENAIRE */}
        <Card className="border-l-4 border-l-red-600 bg-red-50/10 shadow-md md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                <Skull className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-red-700">3. Le Protocole Mercenaire</CardTitle>
                <CardDescription>Tolérance Zéro pour les déserteurs</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p className="font-medium">
              Si vous oubliez de soutenir un camarade avant minuit, vous devenez un <span className="text-red-600 font-bold uppercase">Déserteur</span>.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
               <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                     <AlertTriangle className="h-4 w-4" /> Sanction Immédiate
                  </h4>
                  <p className="text-sm">Une "Prime" est placée sur votre tête. Votre mission est offerte à tous les autres utilisateurs du site (les Mercenaires).</p>
               </div>
               <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                     <Sword className="h-4 w-4" /> Le Vol
                  </h4>
                  <p className="text-sm">Le premier Mercenaire qui fait votre travail <strong>vole vos crédits</strong> et gagne de l'XP de Gloire à votre place.</p>
               </div>
               <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                     <Shield className="h-4 w-4" /> 3 Strikes
                  </h4>
                  <p className="text-sm">Au bout de 3 défaillances (Strikes), vous êtes <strong>banni de l'escouade</strong> et remplacé définitivement.</p>
               </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. CRÉDITS & BOOSTS */}
        <Card className="border-l-4 border-l-yellow-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <CardTitle className="text-xl">4. Crédits & Boosts</CardTitle>
                <CardDescription>La monnaie de la guerre</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Chaque action validée vous rapporte des <strong>Crédits Boost</strong>.
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
               <p className="text-sm font-bold text-yellow-800 mb-1">À quoi servent-ils ?</p>
               <p className="text-sm">
                 À acheter des <strong>Fenêtres de Boost</strong> : pendant 15 minutes, votre vidéo est mise en avant auprès de TOUTE la communauté Troupers, pas seulement votre escouade.
               </p>
            </div>
          </CardContent>
        </Card>

        {/* 5. GLOIRE & RANGS */}
        <Card className="border-l-4 border-l-purple-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Flame className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-xl">5. Gloire & Rangs</CardTitle>
                <CardDescription>Votre légende</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Les meilleurs soldats montent en grade. L'XP de Gloire s'obtient en :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Accomplissant des missions Mercenaires (+50 XP)</li>
              <li>Validant une semaine parfaite (+100 XP)</li>
              <li>Parrainant de nouveaux soldats (+200 XP)</li>
            </ul>
            <p className="text-sm mt-2 font-medium text-purple-700">
              Les hauts gradés auront accès à des fonctionnalités exclusives (Live Training, Accès Influenceurs...).
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mt-8">
        <h3 className="text-2xl font-bold mb-4">PRÊT À COMBATTRE ?</h3>
        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
          Troupers n'est pas un bot. C'est une armée d'humains déterminés. 
          Si tu joues le jeu, tu perceras. Si tu triches, tu seras laissé derrière.
        </p>
        <Badge variant="outline" className="text-white border-white px-4 py-2 text-lg">
          ROMPEZ !
        </Badge>
      </div>
    </div>
  )
}
