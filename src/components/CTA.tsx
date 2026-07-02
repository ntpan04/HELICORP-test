"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center space-y-8 p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Ready to build your next great idea?
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-2xl">
            Join thousands of developers building amazing applications with our modern stack. Get started today for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
              Start Building Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
