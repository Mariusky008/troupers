import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b bg-background px-4 py-24 text-center md:py-32">
      
      <div className="container relative z-10 mx-auto max-w-4xl space-y-8">
         <br/> <br/> <br/>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Ton contenu mérite mieux que <span className="text-primary">l’invisibilité</span>.
        </h1>
       
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
         Ton contenu n’est pas mauvais. Il est juste invisible. Tik Tok ne pousse pas le talent.
Il pousse les signaux. Troupers crée ce signal. Collectivement. Humainement.
        </p>
        
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <Link href="/pre-inscription">
              Rejoindre le programme gratuit (7 jours)
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Sans carte bancaire — places limitées
        </p>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50" />
    </section>
  )
}
