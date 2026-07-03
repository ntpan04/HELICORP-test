"use client";

import { useStore } from "@/lib/store";
import { ProductCard } from "./ProductCard";

export function RecentlyViewed() {
  const { recentlyViewed } = useStore();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="py-12 border-t mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyViewed.map((product) => (
            <ProductCard key={`recent-${product.id}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
