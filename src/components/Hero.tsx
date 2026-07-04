"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/data"
import { useRef, useState, useCallback } from "react"
import { ArrowUpRight, Play } from "lucide-react"

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.3,
      y: (e.clientY - centerY) * 0.3,
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
      className={`group ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background pt-32 pb-48 md:pt-40 md:pb-56 min-h-[100dvh] flex flex-col justify-center">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative mx-auto px-4 text-center z-10 flex-1 flex flex-col justify-center">
        <motion.div
          style={{ y: textY, opacity }}
          className="mx-auto flex max-w-[58rem] flex-col items-center gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground backdrop-blur-md"
          >
            {productData.tagline}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl leading-[1.1]"
          >
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
              {productData.name}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl"
          >
            {productData.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16"
        >
          <MagneticButton>
            <Button size="lg" className="h-16 pl-8 pr-2 py-2 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-2xl flex items-center gap-6 group/btn">
              <span className="font-semibold tracking-wide">Order Now</span>
              <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:scale-105 group-hover/btn:bg-background/30 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-[1px]">
                <ArrowUpRight className="w-5 h-5 text-background" strokeWidth={1.5} />
              </div>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button size="lg" variant="ghost" className="h-16 px-8 text-lg rounded-full backdrop-blur-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] group/btn2 gap-3 flex items-center">
              <Play className="w-5 h-5 fill-current opacity-70 group-hover/btn2:opacity-100 transition-opacity" strokeWidth={1} />
              <span className="font-semibold">Watch Film</span>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] -z-10 pointer-events-none" />
    </section>
  )
}


