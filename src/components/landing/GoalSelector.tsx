"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, Users, TrendingUp } from "lucide-react"

export function GoalSelector() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-black tracking-tight mb-12">
          Quel est ton objectif principal ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link href="/pre-inscription" className="group">
            <div className="bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
               <Eye className="w-10 h-10 mb-4 text-indigo-400 group-hover:text-white" />
               <h3 className="font-bold text-xl mb-2">Plus de Vues</h3>
               <p className="text-sm text-slate-400 group-hover:text-indigo-100">Sortir de la zone des 200 vues</p>
            </div>
          </Link>

          <Link href="/pre-inscription" className="group">
            <div className="bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
               <Users className="w-10 h-10 mb-4 text-indigo-400 group-hover:text-white" />
               <h3 className="font-bold text-xl mb-2">Plus d'Abonnés</h3>
               <p className="text-sm text-slate-400 group-hover:text-indigo-100">Convertir les vues en followers</p>
            </div>
          </Link>

          <Link href="/pre-inscription" className="group">
            <div className="bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
               <TrendingUp className="w-10 h-10 mb-4 text-indigo-400 group-hover:text-white" />
               <h3 className="font-bold text-xl mb-2">Engagement</h3>
               <p className="text-sm text-slate-400 group-hover:text-indigo-100">Plus de likes et commentaires</p>
            </div>
          </Link>
        </div>
        
        <p className="mt-8 text-slate-400 text-sm">
          Peu importe l'objectif, la méthode Troupers fonctionne.
        </p>
      </div>
    </section>
  )
}
