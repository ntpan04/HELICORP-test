"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 md:pt-48 md:pb-16 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid gap-16 md:grid-cols-4 lg:grid-cols-5 mb-32">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group mb-8">
              <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-foreground group-hover:opacity-70 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                Nova.
              </h2>
            </Link>
            <p className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed">
              Building the future of smart audio. Fast, secure, and beautiful.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-tight">Product</h3>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Features</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Integration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-tight">Company</h3>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Blog</Link></li>
              <li><Link href="/subscribers" className="hover:text-foreground transition-colors duration-300">Subscribers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-foreground tracking-tight">Legal</h3>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors duration-300">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} Nova Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground transition-colors duration-300">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors duration-300">GitHub</Link>
            <Link href="#" className="hover:text-foreground transition-colors duration-300">Discord</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
