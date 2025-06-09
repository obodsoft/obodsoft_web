"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

const logos = [
  "/images/logos/ai1.svg",
  "/images/logos/ai2.svg",
  "/images/logos/ai3.svg",
  "/images/logos/ai4.svg",
  "/images/logos/ai5.svg",
  "/images/logos/ai6.svg",
];

export default function LogoWall() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section className="logo-wall">
      <div className="container">
        <h2 className="animate-on-scroll">Our Favorite AI Tools</h2>
        <div className="logo-grid">
          {logos.map((src, index) => (
            <div key={index} className="logo-item">
              <img src={src} alt={`AI tool logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
