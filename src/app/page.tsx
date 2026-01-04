import { Hero } from "@/components/landing/Hero"
import { Problem } from "@/components/landing/Problem"
import { AlgorithmExplainer } from "@/components/landing/AlgorithmExplainer"
import { CaseStudy } from "@/components/landing/CaseStudy"
import { SafeGuarantee } from "@/components/landing/SafeGuarantee"
import { FAQ } from "@/components/landing/FAQ"
import { FinalCTA } from "@/components/landing/FinalCTA"
import { Testimonials } from "@/components/landing/Testimonials"
import { GoalSelector } from "@/components/landing/GoalSelector"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            Troupers
          </Link>
          <div className="flex gap-4">
            <Button size="sm" className="hidden sm:inline-flex font-bold" asChild>
              <Link href="/pre-inscription">Réserver ma place</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <Hero />
        
        {/* SECTION 2 : LE PROBLÈME */}
        <Problem />

        {/* PREUVE SOCIALE TÔT */}
        <Testimonials />

        {/* CTA INTERMÉDIAIRE 1 */}
        <div className="bg-white pb-24 text-center">
           <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 rounded-full" asChild>
              <Link href="/pre-inscription">
                Tester gratuitement maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
           </Button>
           <p className="text-xs text-slate-500 mt-4">Places limitées pour la Cohorte 1</p>
        </div>

        {/* SECTION 3 : LA SOLUTION */}
        <AlgorithmExplainer />
        
        {/* CTA INTERMÉDIAIRE 2 */}
        <div className="bg-slate-50 py-16 text-center border-t border-slate-200">
           <h3 className="text-2xl font-bold mb-6">Prêt à hacker l'algorithme ?</h3>
           <Button size="lg" variant="secondary" className="h-14 px-8 text-lg border border-slate-200" asChild>
              <Link href="/pre-inscription">
                Rejoindre l'escouade
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
           </Button>
        </div>

        {/* SECTION 4 : RÉSULTATS */}
        <CaseStudy />

        {/* SECTION 5 : SÉCURITÉ (Remonté) */}
        <SafeGuarantee />

        {/* MICRO-ENGAGEMENT */}
        <GoalSelector />

        {/* SECTION 6 : FAQ */}
        <FAQ />
        
        {/* SECTION 7 : CTA FINAL */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
