import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the full range of Nova AI devices. From immersive speakers to intelligent headphones, elevate your auditory experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
