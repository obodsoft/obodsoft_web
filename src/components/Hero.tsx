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
          <h1 className="animate-on-scroll">Innovative Software Solutions</h1>
          <p className="animate-on-scroll">We build cutting-edge software that transforms businesses and delights users.</p>
          <div className="hero-buttons animate-on-scroll">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image animate-on-scroll">
          <img src="/images/hero-image.svg" alt="Software Development Illustration" />
        </div>
      </div>
    </section>
  );
}
