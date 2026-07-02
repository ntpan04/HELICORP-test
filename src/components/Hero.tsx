"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-4"
        >
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            ✨ Introducing Next-Gen Experience
          </span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build incredible apps with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">modern stack</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Experience the ultimate performance and design with our powerful foundation. Next.js, Tailwind CSS, shadcn/ui, and Framer Motion all perfectly integrated.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" className="h-12 px-8 text-md">Get Started</Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-md">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
