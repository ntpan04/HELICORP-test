import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { Specs } from "@/components/Specs";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <Specs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
