"use client";

import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

export function FeaturedProducts() {
  return (
    <section className="py-32 md:py-48 bg-background relative" id="shop">
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/5 to-transparent h-1/2 pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 inline-flex rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium"
          >
            Collection
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl font-extrabold tracking-tighter md:text-7xl mb-6"
          >
            Featured Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-muted-foreground md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience the next generation of smart audio. Add to cart or save to your wishlist to test the features!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
