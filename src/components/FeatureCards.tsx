"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone } from "lucide-react"

const features = [
  {
    title: "Lightning Fast",
    description: "Built on Next.js 15 for optimal performance, server-side rendering, and static generation.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security practices built right into the framework.",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Fully Responsive",
    description: "Looks amazing on any device, from large desktop screens to mobile phones.",
    icon: <Smartphone className="h-6 w-6 text-primary" />
  }
]

export function FeatureCards() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Our platform provides all the tools you need to build stunning websites in record time.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-muted hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
