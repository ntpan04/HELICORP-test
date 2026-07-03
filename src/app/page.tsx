import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import dynamic from "next/dynamic";
import { SectionSkeleton, SpecsSkeleton, TestimonialsSkeleton } from "@/components/SectionSkeleton";

const FeatureCards = dynamic(() => import("@/components/FeatureCards").then(mod => mod.FeatureCards), {
  loading: () => <SectionSkeleton />,
});
const Specs = dynamic(() => import("@/components/Specs").then(mod => mod.Specs), {
  loading: () => <SpecsSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), {
  loading: () => <TestimonialsSkeleton />,
});
const CTA = dynamic(() => import("@/components/CTA").then(mod => mod.CTA));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <FeatureCards />
        <Specs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

