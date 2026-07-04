"use client"

import { motion } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { subscribeEmail } from "@/app/actions"
import { useActionState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { Loader2, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

const initialState = { success: false, message: "" }

export function CTA() {
  const [state, formAction, isPending] = useActionState(subscribeEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success("Success!", {
          description: state.message,
          duration: 5000,
        })
        formRef.current?.reset()
      } else {
        toast.error("Error", {
          description: state.message,
          duration: 4000,
        })
      }
    }
  }, [state])

  return (
    <section id="subscribe" className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background pointer-events-none" />
      <div className="container relative mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="p-2 rounded-[3rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10"
        >
          <div className="rounded-[calc(3rem-0.5rem)] bg-background/80 backdrop-blur-3xl h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center text-center py-20 px-6 md:px-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
              Early Access
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter max-w-3xl mb-6 text-foreground leading-[1.1]">
              Be the first to experience <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">Nova</span>
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-2xl font-light leading-relaxed mb-12">
              Join our exclusive waitlist and get early access, special pricing, and latest updates straight to your inbox.
            </p>

            <form
              ref={formRef}
              action={formAction}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-lg relative z-10"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                disabled={isPending}
                className="h-16 px-8 text-lg rounded-full bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 focus-visible:ring-1 focus-visible:ring-foreground disabled:opacity-60 placeholder:text-muted-foreground/50 transition-colors"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="h-16 pl-8 pr-2 py-2 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shrink-0 flex items-center gap-4 group/btn shadow-xl"
              >
                {isPending ? (
                  <Loader2 className="h-5 w-5 animate-spin mx-4" />
                ) : (
                  <>
                    <span className="font-semibold tracking-wide">Subscribe</span>
                    <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-105 group-hover/btn:bg-background/30 group-hover/btn:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                We respect your privacy. Unsubscribe at any time.
              </p>
              <Link 
                href="/subscribers"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                )}
              >
                View subscriber list
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

