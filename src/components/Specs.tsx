"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { productData } from "@/lib/data"
import { useRef } from "react"

export function Specs() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const cardY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  return (
    <section ref={sectionRef} id="specs" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container relative mx-auto px-4 max-w-6xl">
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="p-1.5 rounded-[3rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10"
        >
          <div className="rounded-[calc(3rem-0.375rem)] bg-background h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] py-20 px-8 md:px-20 relative overflow-hidden">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-foreground">
                Technical Mastery.
              </h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {productData.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="group flex flex-col items-center justify-center text-center space-y-4 p-8 rounded-[2rem] hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-700 cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] text-balance">
                    {spec.value}
                  </h3>
                  <p className="font-medium text-muted-foreground uppercase tracking-[0.2em] text-xs">
                    {spec.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

