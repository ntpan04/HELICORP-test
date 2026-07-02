"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { productData } from "@/lib/data"
import { useRef } from "react"

export function Specs() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const cardY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"])

  return (
    <section ref={sectionRef} id="specs" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <motion.div
          style={{ y: cardY }}
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
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center text-center space-y-3 p-4 rounded-2xl hover:bg-primary/5 transition-colors cursor-default"
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

