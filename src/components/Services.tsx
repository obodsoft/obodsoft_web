"use client";

import { useInView } from "@/utils/animations";

export default function Services() {
  const headerRef = useInView();
  const subtitleRef = useInView();
  const card1Ref = useInView();
  const card2Ref = useInView();
  const card3Ref = useInView();
  const card4Ref = useInView();

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 ref={headerRef.ref} className="animate-on-scroll">Our Services</h2>
          <p ref={subtitleRef.ref} className="animate-on-scroll">Delivering digital products your users will love</p>
        </div>
        <div className="services-grid">
          <div ref={card1Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>Robust websites and web apps crafted with modern frameworks.</p>
          </div>
          <div ref={card2Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile Apps</h3>
            <p>Beautifully designed iOS and Android apps that engage on the go.</p>
          </div>
          <div ref={card3Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Architecture and hosting built for scale and reliability.</p>
          </div>
          <div ref={card4Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>DevOps</h3>
            <p>CI/CD pipelines and automation to keep your releases running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
