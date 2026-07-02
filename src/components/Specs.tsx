"use client"

import { motion } from "framer-motion"
import { productData } from "@/lib/data"

export function Specs() {
  return (
    <section id="specs" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] border border-primary/10 bg-card/40 backdrop-blur-md text-card-foreground p-8 md:p-14 shadow-2xl shadow-primary/5"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Technical Specifications
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {productData.specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center space-y-3 p-4 rounded-2xl hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-400">
                  {spec.value}
                </h3>
                <p className="font-medium text-muted-foreground uppercase tracking-wider text-sm">
                  {spec.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
