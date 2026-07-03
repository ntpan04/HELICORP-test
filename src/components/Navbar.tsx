"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Heart, Menu, X } from "lucide-react"
import { useStore } from "@/lib/store"
import { CartSidebar } from "./CartSidebar"
import { WishlistSidebar } from "./WishlistSidebar"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const { cart, wishlist } = useStore()
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlist.length

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-4">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="pointer-events-auto flex items-center justify-between w-full max-w-3xl rounded-full border border-black/5 dark:border-white/10 bg-white/60 dark:bg-[#050505]/60 backdrop-blur-3xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative z-50"
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <div className="h-7 w-7 rounded-full bg-foreground text-background flex items-center justify-center shadow-inner">
                ✧
              </div>
              Nova
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#shop" className="text-muted-foreground hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Shop</Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Features</Link>
            <Link href="#specs" className="text-muted-foreground hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Specs</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            {mounted && (
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-500 relative hidden sm:flex" onClick={() => setIsWishlistOpen(true)}>
                  <Heart className="w-4 h-4" strokeWidth={1.25} />
                  {wishlistCount > 0 && (
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-foreground text-[9px] font-bold text-background">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-500 relative" onClick={() => setIsCartOpen(true)}>
                  <ShoppingCart className="w-4 h-4" strokeWidth={1.25} />
                  {cartItemsCount > 0 && (
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-foreground text-[9px] font-bold text-background">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </div>
            )}
            <div className="scale-90 hidden sm:block">
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
            </Button>
          </div>
        </motion.header>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="pointer-events-auto mt-4 w-full max-w-sm rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-3xl shadow-2xl p-6 flex flex-col gap-6 md:hidden relative z-40"
          >
            <nav className="flex flex-col gap-4 text-center">
              <Link href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Shop</Link>
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Features</Link>
              <Link href="#specs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Specs</Link>
            </nav>
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-black/5 dark:border-white/10">
              <Button variant="ghost" size="sm" className="rounded-full gap-2" onClick={() => { setIsWishlistOpen(true); setIsMobileMenuOpen(false); }}>
                <Heart className="w-4 h-4" strokeWidth={1.5} /> Wishlist
              </Button>
              <div className="scale-90">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  )
}
