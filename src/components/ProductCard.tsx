"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col rounded-2xl border bg-card p-4 transition-all hover:shadow-xl dark:hover:shadow-primary/5"
    >
      <Link href={`/products/${product.id}`} className="block flex-1">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="mb-2">
          <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="text-xl font-bold mt-auto mb-4">
          ${product.price}
        </div>
      </Link>
      
      <div className="flex gap-2 mt-auto">
        <Button 
          className="flex-1 gap-2" 
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => toggleWishlist(product)}
          className={isWishlisted ? "text-red-500 border-red-500 hover:text-red-600 hover:bg-red-50" : ""}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
      </div>
    </motion.div>
  );
}
