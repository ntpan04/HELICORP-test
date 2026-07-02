"use client"

import { motion } from "framer-motion"

const specs = [
  { label: "Uptime Guarantee", value: "99.99%" },
  { label: "Global Edge Network", value: "300+ Cities" },
  { label: "Deployment Time", value: "< 5s" },
  { label: "Customer Support", value: "24/7" },
]

export function Specs() {
  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border bg-card text-card-foreground p-8 md:p-12 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center space-y-2"
              >
                <h3 className="text-4xl font-extrabold text-primary">{spec.value}</h3>
                <p className="font-medium text-muted-foreground">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
