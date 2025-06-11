"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";
import { heroContent } from "@/content/siteContent";

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
          <h1 className="animate-on-scroll">{heroContent.title}</h1>
          <p className="hero-subtitle animate-on-scroll">{heroContent.subtitle}</p>
          <p className="hero-description animate-on-scroll">{heroContent.description}</p>
          <div className="hero-buttons animate-on-scroll">
            <a href={heroContent.primaryButton.href} className="btn btn-primary">
              {heroContent.primaryButton.text}
            </a>
            <a href={heroContent.secondaryButton.href} className="btn btn-secondary">
              {heroContent.secondaryButton.text}
            </a>
          </div>
        </div>
        <div className="hero-image animate-on-scroll">
          <img src="/images/hero-image.svg" alt="Technology Partnership Illustration" />
        </div>
      </div>
    </section>
  );
}
