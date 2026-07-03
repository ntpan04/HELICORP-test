"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistSidebar({ isOpen, onClose }: WishlistSidebarProps) {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed right-0 top-0 z-50 h-full w-full sm:w-[400px] border-l bg-background p-6 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Your Wishlist ({wishlist.length})</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {wishlist.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <p>Your wishlist is empty.</p>
                  <Button variant="link" onClick={onClose}>Explore Products</Button>
                </div>
              ) : (
                wishlist.map(item => (
                  <div key={item.id} className="flex gap-4 border-b pb-4 relative group">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                    <div className="flex-1 flex flex-col">
                      <Link href={`/products/${item.id}`} onClick={onClose}>
                        <h4 className="font-semibold line-clamp-1 hover:text-primary transition-colors">{item.name}</h4>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">${item.price}</p>
                      <div className="flex items-center gap-2 mt-auto">
                        <Button 
                          size="sm" 
                          className="flex-1 gap-2"
                          onClick={() => addToCart(item)}
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Add
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => toggleWishlist(item)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
