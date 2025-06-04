"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

export default function About() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
          <h2 className="animate-on-scroll">About Obod Soft</h2>
          <p className="animate-on-scroll">Obod Soft is a boutique software studio with a passion for building polished digital experiences. Our engineers have delivered solutions for industry leaders such as Alma Media, Bazaarvoice, and Groupon.</p>
          <p className="animate-on-scroll">We bring that expertise to every new partnership, guiding you from strategy to launch and beyond.</p>
          </div>
          <div className="about-image animate-on-scroll">
            <img src="/images/about-image.svg" alt="Team Collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
}
