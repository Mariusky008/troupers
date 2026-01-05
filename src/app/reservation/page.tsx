'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createClient } from '@/lib/supabase/client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2, CheckCircle, ArrowLeft, Shield, Bell, TrendingUp, Hammer, Mail } from "lucide-react"
import Link from 'next/link'
import { toast } from "sonner"

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  channelUrl: z.string().url("URL de chaîne invalide"),
})

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const supabase = createClient()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      channelUrl: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('pre_registrations')
        .insert({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone,
          channel_url: values.channelUrl,
        })

      if (error) throw error

      setIsSuccess(true)
      toast.success("Pré-inscription enregistrée avec succès !")
    } catch (error) {
      console.error(error)
      toast.error("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in duration-500">
        <Card className="max-w-lg w-full text-center border-primary/20 shadow-2xl relative overflow-hidden">
          {/* Confetti effect placeholder */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
          
          <CardHeader className="space-y-4 pt-10">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-bounce">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <div className="space-y-2">
               <CardTitle className="text-3xl font-black tracking-tight">Ta place est réservée, Trouper ! 🛡️</CardTitle>
               <CardDescription className="text-lg font-medium text-green-600">
                 Tu fais officiellement partie de la Cohorte 2.
               </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-8 pb-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
               <h3 className="font-bold text-slate-900 flex items-center justify-center gap-2">
                 <Bell className="w-5 h-5 text-primary" />
                 DERNIÈRE ÉTAPE : Rejoins le QG
               </h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Pour garantir le lancement et recevoir les alertes en temps réel, rejoins le canal privé de l'escouade. C'est ici que tout va se passer.
               </p>
               
               <Button size="lg" className="w-full h-14 text-lg font-bold bg-[#229ED9] hover:bg-[#229ED9]/90 shadow-lg shadow-blue-500/20 text-white" asChild>
                 <a href="https://t.me/+sOXykcRp3uZhZDlk" target="_blank" rel="noopener noreferrer">
                   📢 REJOINDRE LE CANAL TELEGRAM
                 </a>
               </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 text-left px-4">
               <div className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong>Alertes en direct</strong> dès que le seuil des 200 est atteint.</p>
               </div>
               <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong>Conseils exclusifs</strong> pour préparer tes vidéos avant le Jour 1.</p>
               </div>
               <div className="flex items-start gap-3">
                  <Hammer className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong>Coulisses de l'outil</strong> et avancée du développement.</p>
               </div>
            </div>

            <div className="text-xs text-muted-foreground flex items-center justify-center gap-2 pt-4 border-t">
               <Mail className="w-4 h-4" />
               <span>On t'a aussi envoyé un email de confirmation. Pense à vérifier tes spams.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mb-8">
        <Link href="/pre-inscription" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Retour
        </Link>
      </div>
      
      <Card className="max-w-md w-full border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Réserver ma place</CardTitle>
          <CardDescription className="text-center">
            Rejoins la liste d'attente prioritaire pour la prochaine cohorte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" {...form.register("firstName")} placeholder="Jean" />
                {form.formState.errors.firstName && (
                  <p className="text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" {...form.register("lastName")} placeholder="Dupont" />
                {form.formState.errors.lastName && (
                  <p className="text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...form.register("email")} placeholder="jean.dupont@email.com" />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" type="tel" {...form.register("phone")} placeholder="06 12 34 56 78" />
              {form.formState.errors.phone && (
                <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="channelUrl">Chaîne à promouvoir (URL)</Label>
              <Input id="channelUrl" {...form.register("channelUrl")} placeholder="https://tiktok.com/@tonprofil" />
              {form.formState.errors.channelUrl && (
                <p className="text-xs text-destructive">{form.formState.errors.channelUrl.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi...
                </>
              ) : (
                "Valider ma pré-inscription"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
