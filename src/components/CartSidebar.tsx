"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

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
              <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <p>Your cart is empty.</p>
                  <Button variant="link" onClick={onClose}>Continue Shopping</Button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                    <div className="flex-1">
                      <h4 className="font-semibold line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-7 h-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="w-7 h-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-7 h-7 ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={clearCart}>
                    Clear Cart
                  </Button>
                  <Button className="flex-1">
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
