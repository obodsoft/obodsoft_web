"use client";

import { useInView } from "@/utils/animations";

export default function About() {
  // Create refs for animated elements
  const headerRef = useInView();
  const paragraph1Ref = useInView();
  const paragraph2Ref = useInView();
  const statsRef = useInView();
  const imageRef = useInView();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 ref={headerRef.ref} className="animate-on-scroll">About Obod Soft</h2>
            <p ref={paragraph1Ref.ref} className="animate-on-scroll">We are a team of passionate developers, designers, and strategists dedicated to creating exceptional software solutions. With years of experience in the industry, we understand what it takes to deliver projects that exceed expectations.</p>
            <p ref={paragraph2Ref.ref} className="animate-on-scroll">Our mission is to help businesses leverage technology to achieve their goals and stay ahead in today's competitive landscape.</p>
            <div ref={statsRef.ref} className="stats animate-on-scroll">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div ref={imageRef.ref} className="about-image animate-on-scroll">
            <img src="/images/about-image.svg" alt="Team Collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
}
