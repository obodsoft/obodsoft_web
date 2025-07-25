"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { animateOnScroll } from "@/utils/animations";

export default function Home() {
  // Initialize animations when the component mounts
  useEffect(() => {
    animateOnScroll();
    // Run animation check on page load and scroll
    window.addEventListener("scroll", animateOnScroll);
    
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
