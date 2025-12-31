import { Check, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-muted/10">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
            Une seule offre. Une seule mission.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pas de niveaux complexes. Pas de barrières artificielles. <br/>
            <span className="text-foreground font-medium">Nous avançons tous ensemble vers le même objectif : l'explosion de nos contenus.</span>
          </p>
        </div>

        <div className="relative mx-auto max-w-lg rounded-2xl border border-primary/20 bg-background p-8 shadow-2xl md:p-12">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg flex items-center gap-2">
            <Zap className="h-4 w-4 fill-white" />
            OFFRE UNIQUE
          </div>
          
          <div className="text-center mb-8 pt-4">
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Starter</h3>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-6xl font-black tracking-tighter">49€</span>
              <span className="ml-2 text-xl text-muted-foreground font-medium">/mois</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Sans engagement. Annulable à tout moment.</p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-secondary">
               <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <Users className="h-5 w-5 text-primary" />
               </div>
               <div>
                 <h4 className="font-bold text-foreground">Force Collective</h4>
                 <p className="text-sm text-muted-foreground">Accès à un groupe de 30 créateurs déterminés.</p>
               </div>
            </div>

            <ul className="space-y-4 px-2">
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="font-medium">Objectifs avancés & Missions quotidiennes</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="font-medium">Accès aux <span className="text-orange-500 font-bold">Boost Windows</span> (Viralité)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="font-medium">Support communautaire 24/7</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="font-medium">Accès au Dashboard de performance</span>
              </li>
            </ul>
          </div>

          <Button className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" size="lg" asChild>
            <Link href="/signup">
              Rejoindre l'escouade maintenant
            </Link>
          </Button>
          
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Places limitées pour garantir la qualité du groupe.
          </p>
        </div>
      </div>
    </section>
  )
}
