"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

export default function Hero() {
  useEffect(() => {
    animateOnScroll();
    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="animate-on-scroll">World-Class Web & Mobile Apps</h1>
          <p className="animate-on-scroll">From concept to launch, we craft high-performance experiences that ignite growth.</p>
          <div className="hero-buttons animate-on-scroll">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Start a Project</a>
          </div>
        </div>
        <div className="hero-image animate-on-scroll">
          <img src="/images/hero-image.svg" alt="Software Development Illustration" />
        </div>
      </div>
    </section>
  );
}
