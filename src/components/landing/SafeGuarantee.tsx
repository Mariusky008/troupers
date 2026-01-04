import { ShieldCheck, UserCheck, Lock, Ban, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SafeGuarantee() {
  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-700 border border-emerald-200 mb-8">
           <ShieldCheck className="h-4 w-4" />
           Sécurité Maximale
        </div>

        <h2 className="text-3xl font-black tracking-tight mb-4">
          100% Safe pour ton compte
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
          Contrairement aux bots ou aux groupes d'engagement mal gérés, Troupers est conçu pour respecter les règles de TikTok.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                 <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Humains Réels</h3>
              <p className="text-sm text-slate-500">
                 Chaque like, chaque commentaire vient d'un vrai créateur francophone qui regarde ta vidéo sur son téléphone.
              </p>
           </div>

           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                 <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Zero Mot de Passe</h3>
              <p className="text-sm text-slate-500">
                 Nous ne te demanderons jamais tes identifiants. Tu partages juste le lien public de ta vidéo.
              </p>
           </div>

           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                 <Ban className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Anti-Bot Strict</h3>
              <p className="text-sm text-slate-500">
                 Notre système détecte et bannit automatiquement tout comportement suspect ou automatisé.
              </p>
           </div>
        </div>

        <div className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-100 inline-block">
           <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-left space-y-1">
                 <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <CheckCircle className="w-5 h-5" />
                    Méthode validée par 200+ créateurs
                 </div>
                 <p className="text-sm text-emerald-600/80">Aucun risque de shadowban détecté.</p>
              </div>
              <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 font-bold" asChild>
                 <Link href="/pre-inscription">Rejoindre en sécurité</Link>
              </Button>
           </div>
        </div>

      </div>
    </section>
  )
}
