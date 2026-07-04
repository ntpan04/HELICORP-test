"use client";

import { useEffect, useState, use } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RecentlyViewed } from "@/components/RecentlyViewed";
import { products } from "@/lib/data";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }

  const { addToCart, toggleWishlist, wishlist, addRecentlyViewed } = useStore();
  const [mounted, setMounted] = useState(false);
  const isWishlisted = wishlist.some(item => item.id === product.id);

  useEffect(() => {
    setMounted(true);
    // Lưu sản phẩm vào danh sách đã xem
    addRecentlyViewed(product);
  }, [product, addRecentlyViewed]);

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-2xl overflow-hidden bg-muted relative aspect-square">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover" 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
              <p className="text-xl text-primary font-medium mb-6">{product.tagline}</p>
              
              <div className="text-3xl font-bold mb-6">${product.price}</div>
              
              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>
              
              <div className="flex gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="flex-1 gap-2 text-lg h-14"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className={`h-14 w-14 p-0 ${mounted && isWishlisted ? "text-red-500 border-red-500 hover:text-red-600 hover:bg-red-50" : ""}`}
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart className={`w-6 h-6 ${mounted && isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                  <ul className="space-y-3">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {mounted && <RecentlyViewed />}
        </div>
      </main>
      <Footer />
    </>
  );
}
