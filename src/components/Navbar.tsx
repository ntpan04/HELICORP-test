"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useStore } from "@/lib/store"
import { CartSidebar } from "./CartSidebar"
import { WishlistSidebar } from "./WishlistSidebar"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const { cart, wishlist } = useStore()
  
  // Hydration fix for zustand persist
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlist.length

  return (
    <>
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
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">Shop</Link>
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/#specs" className="text-muted-foreground hover:text-foreground transition-colors">Specs</Link>
          </nav>
          <div className="flex items-center gap-4">
            {mounted && (
              <div className="flex items-center gap-1 mr-2">
                <Button variant="ghost" size="icon" className="relative" onClick={() => setIsWishlistOpen(true)}>
                  <Heart className="w-5 h-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {cartItemsCount}
                    </span>
                  )}
                </Button>
              </div>
            )}
            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  )
}
