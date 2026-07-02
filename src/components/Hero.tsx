"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/data"
import Image from "next/image"
import { useRef, useState, useCallback } from "react"

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.25,
      y: (e.clientY - centerY) * 0.25,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  // Parallax layers
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const springImageY = useSpring(imageY, { stiffness: 100, damping: 30 })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Background parallax layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative mx-auto px-4 text-center z-10">
        {/* Text parallax layer */}
        <motion.div
          style={{ y: textY, opacity }}
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 drop-shadow-sm">
              {productData.name}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            {productData.description}
          </motion.p>
        </motion.div>

        {/* Image parallax layer */}
        <motion.div
          style={{ y: springImageY }}
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mt-12 w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border border-primary/10 bg-background flex items-center justify-center"
        >
          <Image
            src="/nova-speaker.png"
            alt="Nova AI Speaker"
            width={1600}
            height={1000}
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
        >
          <MagneticButton>
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Order Now
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full backdrop-blur-md bg-background/50 border-primary/20 hover:bg-primary/5 transition-all">
              Watch Video
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Speaker Glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
    </section>
  )
}


