"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              ✧
            </div>
            Nova
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">Specs</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
          <Link href="#subscribe" className="text-muted-foreground hover:text-foreground transition-colors">Subscribe</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}
