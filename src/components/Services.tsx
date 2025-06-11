"use client";

import { useEffect } from "react";
import { servicesContent, ServiceItem } from "@/content/siteContent";

export default function Services() {
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
    <section id="services" className="services">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>Our Services</h2>
          <p>
            Comprehensive technology solutions designed to drive your business forward
            with enterprise-grade expertise and partnership-focused delivery.
          </p>
        </div>
        <div className="services-grid">
          {servicesContent.map((service: ServiceItem, index: number) => (
            <div key={service.id} className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-technologies">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {service.technologies.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="partnership-benefits">
                <h4>Partnership Benefits</h4>
                <ul>
                  {service.partnershipBenefits.map((benefit: string, benefitIndex: number) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
