"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeEmail } from "@/app/actions"
import { useActionState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { Loader2, Mail } from "lucide-react"

const initialState = { success: false, message: "" }

export function CTA() {
  const [state, formAction, isPending] = useActionState(subscribeEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success("Đăng ký thành công!", {
          description: state.message,
          duration: 5000,
        })
        formRef.current?.reset()
      } else {
        toast.error("Có lỗi xảy ra", {
          description: state.message,
          duration: 4000,
        })
      }
    }
  }, [state])

  return (
    <section id="subscribe" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center space-y-8 p-12 md:p-20 rounded-[3rem] bg-card/60 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-purple-500/10 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Mail className="h-4 w-4" />
            Early Access Waitlist
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Be the first to experience <span className="text-primary">Nova</span>
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Join our exclusive waitlist and get early access, special pricing, and latest updates straight to your inbox.
          </p>

          <form
            ref={formRef}
            action={formAction}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className="h-14 px-6 text-base rounded-full bg-background/50 border-primary/20 focus-visible:ring-primary/50 disabled:opacity-60"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all shrink-0 min-w-[130px]"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

