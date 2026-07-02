"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/data"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
          >
            ✨ {productData.tagline}
          </motion.div>
          <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 drop-shadow-sm">{productData.name}</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {productData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full backdrop-blur-md bg-background/50 border-primary/20 hover:bg-primary/5 transition-all">
              Watch Video
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-16 relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/20"
          >
            <div className="aspect-[16/10] relative">
              <Image 
                src="/nova-speaker.jpg" 
                alt="Nova AI Speaker" 
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Speaker Glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  )
}
