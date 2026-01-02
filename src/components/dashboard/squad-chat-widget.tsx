"use client"

import { useState, useEffect, useRef } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"

export function SquadChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [squadId, setSquadId] = useState<string | null>(null)
  const [userProfile, setUserProfile] = useState<any>(null)
  
  const chatEndRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  useEffect(() => {
    const init = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
          setLoading(false)
          return
        }
        setUser(user)

        // Fetch Profile
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
        setUserProfile(profile)

        // Fetch Squad ID
        const { data: membership } = await supabase.from('squad_members').select('squad_id').eq('user_id', user.id).single()
        
        if (membership) {
          const sId = membership.squad_id
          setSquadId(sId)
          
          // Load initial messages
          const { data: initialMessages } = await supabase
            .from('squad_messages')
            .select('*')
            .eq('squad_id', sId)
            .order('created_at', { ascending: true })
            .limit(50)
          
          setMessages(initialMessages || [])

          // Subscribe
          const channel = supabase
            .channel('squad-chat-widget')
            .on('postgres_changes', { 
              event: 'INSERT', 
              schema: 'public', 
              table: 'squad_messages',
              filter: `squad_id=eq.${sId}`
            }, (payload: any) => {
              setMessages((prev) => [...prev, payload.new])
            })
            .subscribe()

          return () => {
            supabase.removeChannel(channel)
          }
        }
      } catch (e) {
        console.error("Error initializing chat:", e)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [messages, isOpen, isMinimized])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!newMessage.trim() || !squadId || !user) return

    const msgContent = newMessage.trim()
    setNewMessage("") // Optimistic clear

    try {
      const { error } = await supabase.from('squad_messages').insert({
        squad_id: squadId,
        user_id: user.id,
        username: userProfile?.username || "Soldat",
        content: msgContent
      })

      if (error) throw error
    } catch (e) {
      console.error("Send error:", e)
      toast.error("Erreur d'envoi")
      setNewMessage(msgContent) // Restore if failed
    }
  }

  if (loading) return null // Or a small spinner placeholder if desired
  if (!squadId) return null // Don't show if not in a squad

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end">
      <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "500px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-background border shadow-2xl rounded-xl w-[350px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-bold text-sm">Taverne - Escouade</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Content */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-10 text-xs">
                      Aucun message. Lance la discussion !
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id} className={`flex flex-col ${msg.user_id === user?.id ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[85%] rounded-lg p-2.5 text-sm shadow-sm ${msg.user_id === user?.id ? 'bg-primary text-primary-foreground' : 'bg-white dark:bg-slate-800 border'}`}>
                          {msg.user_id !== user?.id && (
                            <p className="text-[10px] font-bold mb-0.5 opacity-70">{msg.username}</p>
                          )}
                          <p>{msg.content}</p>
                        </div>
                        <span className="text-[10px] text-muted-foreground mt-1 px-1">
                          {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    ))
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input */}
                <div className="p-3 border-t bg-background">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true)
            setIsMinimized(false)
          }}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors font-bold border-2 border-indigo-400/50"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Taverne - Motive tes troupes !</span>
          <span className="sm:hidden">Taverne</span>
        </motion.button>
      )}
      </div>
    </div>
  )
}
