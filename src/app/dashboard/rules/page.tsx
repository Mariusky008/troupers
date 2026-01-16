"use client"

import { BookOpen, Shield, Sword, Zap, Clock, Users, AlertTriangle, CheckCircle, Skull, Flame, Swords } from "lucide-react"
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
        {/* 1. L'ESCOUADE TACTIQUE */}
        <Card className="border-l-4 border-l-blue-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl">1. L'Escouade Tactique</CardTitle>
                <CardDescription>Une armée de 70 soldats</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Vous faites partie d'une division de <strong>70 soldats d'élite</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Le but n'est pas le "Follow for Follow" passif.</li>
              <li>Le but est de créer des <strong>pics d'engagement massifs</strong> (Vagues) sur une cible précise à une heure précise.</li>
              <li>La puissance du groupe fait percer l'individu.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. LE PROTOCOLE DE TIR (VAGUE) */}
        <Card className="border-l-4 border-l-purple-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-xl">2. La Vague Stratégique (Comment l'avoir ?)</CardTitle>
                <CardDescription>Mérite ta place au front</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Pour bénéficier de la puissance de l'escouade sur TA vidéo, tu dois charger ta jauge.
            </p>
            <div className="space-y-2 text-sm bg-purple-50 p-3 rounded-lg border border-purple-100">
               <ul className="list-disc pl-5 space-y-2">
                 <li><strong>La Jauge (0/60) :</strong> Visible sur ton tableau de bord.</li>
                 <li><strong>+1 Point :</strong> Pour chaque mission soldat accomplie (Like/Com/Fav).</li>
                 <li><strong>Déblocage :</strong> À 60 points, tu es éligible. Tu entres dans la file d'attente prioritaire pour le lendemain.</li>
                 <li><strong>Reset :</strong> Une fois ta vague passée, ta jauge retombe à 0.</li>
               </ul>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              ⚠️ La Règle d'Or : Le jour J, publie ta vidéo 30 à 60 min AVANT l'heure de la vague.
            </p>
          </CardContent>
        </Card>

        {/* 3. LE DEVOIR QUOTIDIEN */}
        <Card className="border-l-4 border-l-green-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-xl">3. Le Devoir Quotidien</CardTitle>
                <CardDescription>Donnant - Donnant</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Chaque jour, vous recevez entre <strong>8 et 12 missions</strong> de soutien.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-red-500">❤️ Like</span>
                <span>Signal d'intérêt basique</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-blue-500">💬 Commentaire</span>
                <span>Pertinent (4 mots min) pour le SEO</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-slate-50 p-2 rounded border">
                <span className="font-bold text-yellow-500">⭐ Favori</span>
                <span>Signal de qualité ultime pour TikTok</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. DISCIPLINE & SANCTIONS */}
        <Card className="border-l-4 border-l-red-600 bg-red-50/10 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                <Skull className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-red-700">4. Discipline & Sanctions</CardTitle>
                <CardDescription>Tolérance Zéro</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p className="font-medium">
              Le système est automatisé. Si vous ne soutenez pas les autres :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
               <li><span className="font-bold text-red-700">Pas de Vague :</span> Votre prochain tour sera annulé ou reporté.</li>
               <li><span className="font-bold text-red-700">Strikes :</span> Au bout de 3 avertissements (jours manqués), vous êtes banni.</li>
               <li><span className="font-bold text-red-700">Mode Mercenaire :</span> Vos missions ratées sont offertes aux autres pour voler vos crédits.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. L'ARME ULTIME (LE BOOST) */}
        <Card className="border-l-4 border-l-yellow-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <CardTitle className="text-xl">5. L'Arme Ultime (Le Boost)</CardTitle>
                <CardDescription>Frappe Nucléaire</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Les Crédits Boost permettent de déclencher une arme dévastatrice : le <strong>WINDOW BOOST</strong>. 
              Pendant 15 minutes, des centaines de soldats convergent vers <strong>TA vidéo</strong> pour générer une explosion d'interactions.
            </p>
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
               <ul className="list-disc pl-5 space-y-2 text-sm">
                 <li><strong>Puissance Maximale :</strong> Ce n'est pas juste votre escouade qui agit, c'est <strong>TOUTES les escouades de Troupers</strong> en même temps. Une communauté massive.</li>
                 <li><strong>Comment l'obtenir ?</strong> Accumulez un maximum de crédits en participant aux missions bonus.</li>
                 <li><strong>Vigilance :</strong> De temps en temps, une fenêtre de tir ("Mission Boost") apparaîtra aléatoirement sur votre Dashboard. Ne la ratez pas !</li>
               </ul>
            </div>
          </CardContent>
        </Card>

        {/* 6. CARRIÈRE & ALLIANCES */}
        <Card className="border-l-4 border-l-orange-500 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Swords className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <CardTitle className="text-xl">6. Carrière & Alliances</CardTitle>
                <CardDescription>Devenez un Leader</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-700">
            <p>
              Troupers n'est pas qu'un boost, c'est un réseau. Grimpez les <strong>11 Grades</strong> pour débloquer des pouvoirs de collaboration.
            </p>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 space-y-2">
               <p className="text-sm font-bold text-orange-800">Hiérarchie (1 Mission = 1 XP Infini)</p>
               <ul className="list-disc pl-5 space-y-1 text-sm">
                 <li><strong>G1 à G5 (Soldat → Major) :</strong> Apprenez les bases. Accès spectateur au Fil d'Actu.</li>
                 <li><strong>G6 (Lieutenant - 300 XP) :</strong> Débloque la création de <strong>DUOS</strong> (1 Invité).</li>
                 <li><strong>G7 à G9 :</strong> Débloque Trios, Tables Rondes et Raids.</li>
                 <li><strong>G10 (Général) :</strong> Débloque les Documentaires (5 Invités).</li>
               </ul>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Les officiers (G6+) peuvent recruter des soldats via le "Fil d'Actualité" pour créer des contenus viraux ensemble.
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
