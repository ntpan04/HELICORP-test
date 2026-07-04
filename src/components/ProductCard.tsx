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
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className="group/card h-full"
    >
      <div className="p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 h-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
        <div className="rounded-[calc(2rem-0.375rem)] bg-background h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col p-4 relative overflow-hidden">
          <Link href={`/products/${product.id}`} className="block flex-1 z-10">
            <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-muted mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:scale-105"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-xl tracking-tight mb-2 text-foreground transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light">
                {product.description}
              </p>
            </div>
            <div className="text-2xl font-bold mt-auto mb-6 tracking-tight text-foreground">
              ${product.price}
            </div>
          </Link>
          
          <div className="flex mt-auto z-10">
            <Button 
              className="w-full h-12 rounded-full gap-2 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] hover:shadow-md" 
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-semibold">Add to Cart</span>
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`absolute top-7 right-7 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full border-black/10 dark:border-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-sm backdrop-blur-md ${isWishlisted ? "text-red-500 border-red-500/30 bg-red-500/10 hover:bg-red-500/20" : "bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80"}`}
          >
            <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isWishlisted ? "fill-current" : ""}`} strokeWidth={1.25} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
