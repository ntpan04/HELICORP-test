"use client"

import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      staggerChildren: 0.12,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const titleY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"])

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h2
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
          >
            Intelligent by Design
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            Everything you need for a fully integrated, smart living experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {productData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 group cursor-default">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110 transform">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}



