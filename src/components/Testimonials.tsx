"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by early adopters</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            See what people are saying about their experience with Nova.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full bg-background border-none shadow-sm">
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
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
