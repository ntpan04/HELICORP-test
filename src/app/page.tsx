import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const FeatureCards = dynamic(() => import("@/components/FeatureCards").then(mod => mod.FeatureCards));
const Specs = dynamic(() => import("@/components/Specs").then(mod => mod.Specs));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const CTA = dynamic(() => import("@/components/CTA").then(mod => mod.CTA));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

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
