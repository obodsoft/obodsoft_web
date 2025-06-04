"use client";

import { useInView } from "@/utils/animations";

export default function Hero() {
  // Create refs for animated elements
  const headerRef = useInView();
  const textRef = useInView();
  const buttonsRef = useInView();
  const imageRef = useInView();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 ref={headerRef.ref} className="animate-on-scroll">Innovative Software Solutions</h1>
          <p ref={textRef.ref} className="animate-on-scroll">We build cutting-edge software that transforms businesses and delights users.</p>
          <div ref={buttonsRef.ref} className="hero-buttons animate-on-scroll">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div ref={imageRef.ref} className="hero-image animate-on-scroll">
          <img src="/images/hero-image.svg" alt="Software Development Illustration" />
        </div>
      </div>
    </section>
  );
}
