"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Home, VolumeX, Sparkles, LucideIcon } from "lucide-react"
import { productData } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Home,
  VolumeX,
  Sparkles
}

export function FeatureCards() {
  return (
    <section id="features" className="py-24 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32"></div>
      <div className="container relative mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {productData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 group">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
        </div>
      </div>
    </section>
  )
}
