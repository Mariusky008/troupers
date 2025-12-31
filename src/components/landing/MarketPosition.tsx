import { X, Check, Zap, Users, Shield, Rocket, Bot } from "lucide-react"

export function MarketPosition() {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* PART 1: CLARIFICATION */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive mb-6">
            <X className="h-4 w-4" />
            <span>Troupers n’est PAS du community management</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ce n'est pas une agence. <br/>
            C'est un <span className="text-primary">système d'accélération</span>.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Troupers n’est pas un community manager qui poste à ta place. 
            C’est un système d’engagement collectif pensé pour résoudre un seul problème précis : 
            <span className="font-semibold text-foreground"> l’invisibilité des créateurs</span>.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
             <div className="flex items-center gap-2 bg-background border px-4 py-2 rounded-lg">
                <Rocket className="h-4 w-4 text-blue-500" />
                Crée de l’exposition algorithmique réelle
             </div>
             <div className="flex items-center gap-2 bg-background border px-4 py-2 rounded-lg">
                <Users className="h-4 w-4 text-purple-500" />
                Transforme l’effort individuel en traction collective
             </div>
          </div>
        </div>

        {/* PART 2: MARKET COMPARISON */}
        <div className="mb-12 text-center">
             <h3 className="text-2xl font-bold mb-2">🧠 Où se situe Troupers sur le marché ?</h3>
             <p className="text-muted-foreground">Comparatif des solutions existantes</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
           
           {/* Card 1: CM */}
           <div className="rounded-xl border bg-background p-6 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                 <Users className="h-6 w-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Community Management</h4>
              <p className="text-sm text-muted-foreground mb-4">Gestion de comptes & social media</p>
              
              <div className="text-xl font-bold mb-4">
                 300 - 1200€ <span className="text-xs font-normal text-muted-foreground">/mois</span>
              </div>
              
              <ul className="space-y-3 text-sm text-muted-foreground">
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Délègue la création, pas la visibilité</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Ne garantit pas de traction organique</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>Bon pour l'image de marque</span>
                 </li>
              </ul>
           </div>

           {/* Card 2: SaaS */}
           <div className="rounded-xl border bg-background p-6 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                 <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Outils SaaS</h4>
              <p className="text-sm text-muted-foreground mb-4">Automatisation & bots</p>
              
              <div className="text-xl font-bold mb-4">
                 50 - 150€ <span className="text-xs font-normal text-muted-foreground">/mois</span>
              </div>
              
              <ul className="space-y-3 text-sm text-muted-foreground">
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Reposent sur des scripts ou hacks</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Risque de blocage (Shadowban)</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Peu d'impact humain réel</span>
                 </li>
              </ul>
           </div>

           {/* Card 3: Agencies */}
           <div className="rounded-xl border bg-background p-6 opacity-80 hover:opacity-100 transition-opacity">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                 <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Agences Premium</h4>
              <p className="text-sm text-muted-foreground mb-4">Stratégies complètes "Boost"</p>
              
              <div className="text-xl font-bold mb-4">
                 1500 - 5000€ <span className="text-xs font-normal text-muted-foreground">/mois</span>
              </div>
              
              <ul className="space-y-3 text-sm text-muted-foreground">
                 <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Très puissant</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Souvent inaccessible aux indés</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Processus lourds et lents</span>
                 </li>
              </ul>
           </div>

        </div>

        {/* PART 3: TROUPERS HIGHLIGHT */}
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5">
              <Zap className="w-64 h-64" />
           </div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
               <Zap className="h-4 w-4" />
               <span>La différence Troupers</span>
             </div>
             
             <h3 className="text-3xl md:text-4xl font-bold mb-6">
               Plus puissant qu’un outil. <br/>
               Plus accessible qu’une agence.
             </h3>
             
             <div className="grid sm:grid-cols-2 gap-8 mb-8 text-left max-w-2xl mx-auto">
               <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">100 % Humain</h4>
                    <p className="text-primary-foreground/80 text-sm">Pas de bots. Tu ne délègues pas ton compte, tu actives un signal collectif.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Vélocité Maximale</h4>
                    <p className="text-primary-foreground/80 text-sm">Engagement réel et immédiat pour forcer l'algorithme à te remarquer.</p>
                  </div>
               </div>
             </div>
             
             <p className="text-lg font-medium italic opacity-90">
               "Tu entres dans un système qui force la visibilité de ton contenu."
             </p>
           </div>
        </div>

      </div>
    </section>
  )
}
