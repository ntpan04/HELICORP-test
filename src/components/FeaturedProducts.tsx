"use client";

import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-muted/30" id="shop">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of smart audio. Add to cart or save to your wishlist to test the features!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
