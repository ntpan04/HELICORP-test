"use client"

import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef } from "react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Smart Home Enthusiast",
    content: "Nova has completely transformed how I interact with my home. The voice recognition is flawless and the sound quality is mind-blowing.",
    avatar: "AJ"
  },
  {
    name: "Sarah Williams",
    role: "Tech Reviewer",
    content: "I've tested dozens of smart speakers, but Nova's AI recommendations are on another level. It actually anticipates my needs.",
    avatar: "SW"
  },
  {
    name: "Michael Chen",
    role: "Audiophile",
    content: "The noise cancellation is shockingly good. I can whisper a command from across the room while music is playing, and it hears me perfectly.",
    avatar: "MC"
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const titleY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"])
  const bgX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax background blob */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"
      />
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            style={{ y: titleY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Loved by early adopters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto"
          >
            See what people are saying about their experience with Nova.
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${testimonial.avatar}.png`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


