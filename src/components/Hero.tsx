"use client";

import { useEffect, useState } from 'react';
import { heroContent } from '@/content/siteContent';
import TechElements from './TechElements';
import TechIllustration from './TechIllustration';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Mouse tracking for liquid glass effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Multi-layered Dynamic Background Elements */}
      <div className="hero-bg-elements">
        {/* Original dynamic blobs with mouse tracking */}
        <div 
          className="hero-blob hero-blob-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="hero-blob hero-blob-2"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.015}px)`,
          }}
        ></div>
        <div 
          className="hero-blob hero-blob-3"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>

        {/* Enhanced Tech Elements - Optimized Count */}
        <TechElements 
          count={25} 
          variant="floating"
          className="hero-tech-overlay"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Liquid glass card for content */}
          <div className="hero-content-glass hero-visual-glass-2">
            <h1 className="animate-on-scroll">{heroContent.title}</h1>

              {/* Tech illustration - shows on mobile inside content card */}
              <div className="hero-tech-illustration mobile-illustration">
              <TechIllustration />
            </div>
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
        </div>

        <div className="hero-visual">
          {/* Liquid glass card for illustration - hidden on mobile */}
          <div className="hero-visual-glass">
            {/* Tech illustration with SVG */}
            <div className="hero-tech-illustration desktop-illustration">
              <TechIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
