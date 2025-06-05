"use client";

import { useInView } from "@/utils/animations";

export default function Portfolio() {
  // Create refs for each animated section
  const headerRef = useInView();
  const subtitleRef = useInView();
  const project1Ref = useInView();
  const project2Ref = useInView();
  const project3Ref = useInView();

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <div ref={headerRef.ref} className="animate-on-scroll">
            <h2>Our Work</h2>
          </div>
          <div ref={subtitleRef.ref} className="animate-on-scroll">
            <p>Check out some of our recent projects</p>
          </div>
        </div>
        <div className="portfolio-grid">
          <div ref={project1Ref.ref} className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-1.jpg" alt="Alma Media Project" />
            <div className="portfolio-overlay">
              <h3>Alma Media</h3>
              <p>Digital Publishing Platform</p>
              <span className="portfolio-description">Led the development of responsive UI components for Finland&apos;s largest media company, implementing React-based solutions that increased user engagement by 34% and reduced page load times by 40%. Created innovative data visualization tools for their analytics dashboard.</span>
            </div>
          </div>
          <div ref={project2Ref.ref} className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-2.jpg" alt="Bazaarvoice Project" />
            <div className="portfolio-overlay">
              <h3>Bazaarvoice</h3>
              <p>Consumer Insights Platform</p>
              <span className="portfolio-description">Designed and implemented a comprehensive analytics dashboard that processed over 2 million daily customer reviews. Utilized D3.js and React to create interactive visualizations that helped Fortune 500 clients identify product improvement opportunities and increase customer satisfaction scores by 28%.</span>
            </div>
          </div>
          <div ref={project3Ref.ref} className="portfolio-item animate-on-scroll">
            <img src="/images/portfolio-3.jpg" alt="Groupon Project" />
            <div className="portfolio-overlay">
              <h3>Groupon</h3>
              <p>E-commerce Marketplace</p>
              <span className="portfolio-description">Spearheaded a critical performance optimization initiative for Groupon&apos;s deal discovery platform that served 40+ million monthly users. Implemented code splitting, lazy loading, and virtual scrolling techniques that reduced page load time by 65% and increased conversion rates by 22%. Enhanced the mobile experience with responsive design patterns.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
