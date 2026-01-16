"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { getRank, getNextRank } from "@/lib/ranks"
import { ArrowRight } from "lucide-react"

interface DailyBriefingProps {
    userProfile: any
    todayTasksCount: number
}

export function DailyBriefing({ userProfile, todayTasksCount }: DailyBriefingProps) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!userProfile) return

        const today = new Date().toISOString().split('T')[0]
        const lastSeen = localStorage.getItem('lastBriefingDate')

        if (lastSeen !== today) {
            setOpen(true)
        }
    }, [userProfile])

    const handleClose = () => {
        const today = new Date().toISOString().split('T')[0]
        localStorage.setItem('lastBriefingDate', today)
        setOpen(false)
    }

    if (!userProfile) return null

    const points = userProfile.career_points || 0
    const rank = getRank(points)
    const nextRank = getNextRank(rank.level)
    const pointsNeeded = nextRank ? nextRank.minPoints - points : 0
    
    // Si pas de nextRank (Maréchal), on met 0
    const progress = nextRank 
        ? ((points - rank.minPoints) / (nextRank.minPoints - rank.minPoints)) * 100 
        : 100

    return (
        <Dialog open={open} onOpenChange={(val) => !val && handleClose()}>
            <DialogContent className="sm:max-w-md bg-slate-900 text-white border-slate-800">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl font-black uppercase tracking-widest text-indigo-400">
                        BRIEFING MATINAL
                    </DialogTitle>
                </DialogHeader>

                <div className="text-center py-4">
                    <div className={`mx-auto h-20 w-20 bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-700 mb-4 shadow-lg ${rank.color}`}>
                        <rank.icon className="h-10 w-10" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-1">
                        Bonjour, {rank.name} {userProfile.username} !
                    </h2>
                    
                    {nextRank ? (
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mt-4">
                            <p className="text-sm text-slate-300 mb-2 font-medium">
                                Prochain objectif : <span className={`font-bold ${nextRank.color}`}>{nextRank.name}</span>
                            </p>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-mono text-slate-500">{points} XP</span>
                                <div className="h-2 flex-1 bg-slate-950 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full transition-all ${rank.color.replace('text-', 'bg-')}`} 
                                        style={{ width: `${progress}%` }} 
                                    />
                                </div>
                                <span className="text-xs font-mono text-slate-500">{nextRank.minPoints} XP</span>
                            </div>
                            <p className="text-xs font-bold text-yellow-400 animate-pulse">
                                ⚡️ Il te manque {pointsNeeded} missions pour ta promotion.
                            </p>
                            {rank.level < 6 && (
                                <p className="text-[10px] text-slate-400 mt-2 italic">
                                    "Deviens Lieutenant (G6) pour débloquer les Alliances Duos."
                                </p>
                            )}
                        </div>
                    ) : (
                        <p className="text-yellow-500 font-bold mt-2">Vous êtes au sommet de la hiérarchie.</p>
                    )}

                    <div className="mt-6 bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl">
                        <p className="font-bold text-indigo-200 text-sm mb-1">
                            ORDRE DU JOUR
                        </p>
                        <p className="text-3xl font-black text-white">
                            {todayTasksCount} MISSIONS
                        </p>
                        <p className="text-xs text-indigo-300 mt-1">
                            L'escouade compte sur toi. Ne romps pas la chaîne.
                        </p>
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={handleClose} className="w-full bg-white text-slate-900 hover:bg-slate-200 font-black text-lg h-12 shadow-lg shadow-white/10">
                        À VOS ORDRES ! <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}