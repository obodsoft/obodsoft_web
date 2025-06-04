"use client";

import { useInView } from "@/utils/animations";

export default function Hero() {
  const headingRef = useInView();
  const textRef = useInView();
  const buttonsRef = useInView();
  const imageRef = useInView();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 ref={headingRef.ref} className="animate-on-scroll">World-Class Web & Mobile Apps</h1>
          <p ref={textRef.ref} className="animate-on-scroll">From concept to launch, we craft high-performance experiences that ignite growth.</p>
          <div ref={buttonsRef.ref} className="hero-buttons animate-on-scroll">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Start a Project</a>
          </div>
        </div>
        <div ref={imageRef.ref} className="hero-image animate-on-scroll">
          <img src="/images/hero-image.svg" alt="Software Development Illustration" />
        </div>
      </div>
    </section>
  );
}
