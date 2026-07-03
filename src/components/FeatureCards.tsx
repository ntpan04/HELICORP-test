"use client"

import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { Mic, Home, VolumeX, Sparkles, LucideIcon } from "lucide-react"
import { productData } from "@/lib/data"
import { useRef } from "react"

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Home,
  VolumeX,
  Sparkles
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } },
}

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const titleY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"])

  return (
    <section ref={sectionRef} id="features" className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-64 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 inline-flex rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium"
          >
            Capabilities
          </motion.div>
          <motion.h2
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl font-extrabold tracking-tighter md:text-7xl"
          >
            Intelligent by Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="mt-6 text-muted-foreground md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Everything you need for a fully integrated, smart living experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto"
        >
          {productData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles
            
            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                {/* Double-Bezel Outer Shell */}
                <div className="p-1.5 rounded-[2.5rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 h-full group hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {/* Double-Bezel Inner Core */}
                  <div className="rounded-[calc(2.5rem-0.375rem)] bg-background h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-150" />
                    
                    <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-foreground transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-foreground group-hover:text-background">
                      <IconComponent className="h-7 w-7" strokeWidth={1.25} />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="font-semibold tracking-tight text-foreground text-3xl md:text-4xl mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}



