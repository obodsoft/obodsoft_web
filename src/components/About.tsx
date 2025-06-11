"use client";

import { useEffect } from "react";
import { aboutContent } from "@/content/siteContent";
import TechElements from "./TechElements";

export default function About() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Journey Section */}
        <div className="about-section">
        <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h2>{aboutContent.journey.title}</h2>
              <p>{aboutContent.journey.description}</p>
              
              <div className="journey-highlights">
                {aboutContent.journey.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="highlight-item animate-on-scroll">
                    <i className="fas fa-check-circle"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image animate-on-scroll">
              <img 
                src="/images/team-collaboration.jpg" 
                alt="Team collaboration" 
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="about-section">
          <div className="section-header animate-on-scroll">
            <h2>{aboutContent.approach.title}</h2>
            <p>{aboutContent.approach.description}</p>
          </div>
          
          <div className="approach-grid">
            {aboutContent.approach.principles.map((principle, index: number) => (
              <div key={index} className="approach-card animate-on-scroll">
                <div className="approach-icon">
                  <i className={`fas ${getApproachIcon(index)}`}></i>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <div className="about-section">
          <div className="promise-content">
            <div className="promise-text animate-on-scroll">
              <h2>{aboutContent.promise.title}</h2>
              <p>{aboutContent.promise.description}</p>
            </div>
            
            <div className="promise-commitments">
              {aboutContent.promise.commitments.map((commitment: string, index: number) => (
                <div key={index} className="commitment-item animate-on-scroll">
                  <i className="fas fa-heart"></i>
                  <span>{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getApproachIcon(index: number): string {
  const icons = ['fa-users', 'fa-comments', 'fa-shield-alt', 'fa-handshake'];
  return icons[index] || 'fa-star';
}
