"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

export default function Portfolio() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-on-scroll">Our Work</h2>
          <p className="animate-on-scroll">Check out some of our recent projects</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-1.jpg" alt="Project 1" />
            <div className="portfolio-overlay">
              <h3>E-commerce Platform</h3>
              <p>Web Development</p>
            </div>
          </div>
          <div className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-2.jpg" alt="Project 2" />
            <div className="portfolio-overlay">
              <h3>Fitness App</h3>
              <p>Mobile Development</p>
            </div>
          </div>
          <div className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-3.jpg" alt="Project 3" />
            <div className="portfolio-overlay">
              <h3>CRM System</h3>
              <p>Web Application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
