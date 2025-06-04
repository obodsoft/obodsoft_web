"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
