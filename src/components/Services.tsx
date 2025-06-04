"use client";

import { useInView } from "@/utils/animations";

export default function Services() {
  // Create refs for animated elements
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
          <p ref={subtitleRef.ref} className="animate-on-scroll">We offer a wide range of software development services</p>
        </div>
        <div className="services-grid">
          <div ref={card1Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with the latest technologies.</p>
          </div>
          <div ref={card2Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile applications for iOS and Android.</p>
          </div>
          <div ref={card3Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and deployment services.</p>
          </div>
          <div ref={card4Ref.ref} className="service-card animate-on-scroll">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>DevOps</h3>
            <p>Streamline your development and operations with our DevOps expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
