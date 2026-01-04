"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "@lucas_créatif",
    role: "Créateur Lifestyle",
    content: "Mes vues ont triplé en une semaine. Le fait d'avoir des vrais commentaires dès la première heure change tout pour l'algo.",
    stats: "+320% de vues",
    image: "L"
  },
  {
    name: "@sarah.beauty",
    role: "Expert Beauté",
    content: "J'étais bloquée à 200 vues depuis des mois. Troupers m'a permis de percer ce plafond de verre. C'est magique.",
    stats: "Sortie du 200 jail",
    image: "S"
  },
  {
    name: "@crypto_max",
    role: "Éducation Finance",
    content: "Enfin une communauté sérieuse. Pas de bots, juste de l'entraide. Ça se ressent direct sur la rétention.",
    stats: "Engagement x4",
    image: "M"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight mb-4">
            Ils ont hacké l'algorithme.
          </h2>
          <p className="text-lg text-slate-600">
            Rejoins les créateurs qui ne laissent plus leur succès au hasard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-slate-100 shadow-lg shadow-slate-200/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 font-medium leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {testimonial.stats}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
