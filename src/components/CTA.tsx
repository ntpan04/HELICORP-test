"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center space-y-8 p-12 md:p-20 rounded-[3rem] bg-card/60 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-purple-500/10 max-w-5xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Be the first to experience <span className="text-primary">Nova</span>
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Join our exclusive waitlist and get early access, special pricing, and latest updates straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-14 px-6 text-lg rounded-full bg-background/50 border-primary/20 focus-visible:ring-primary/50"
              required
            />
            <Button size="lg" type="submit" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
