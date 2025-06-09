"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

export default function CV() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section className="cv">
      <div className="container">
        <div className="cv-header animate-on-scroll">
          <h2>Alex Obodsoft</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="cv-content">
          <div className="cv-left animate-on-scroll">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:alex@obodsoft.com">alex@obodsoft.com</a></p>
            <p>Location: Silicon Valley, CA</p>

            <h3>Skills</h3>
            <ul className="skills">
              <li>JavaScript & TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js & Express</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
          <div className="cv-right animate-on-scroll">
            <h3>Experience</h3>
            <div className="cv-item">
              <h4>Senior Engineer - Obod Soft</h4>
              <span>2017 - Present</span>
              <p>Leading web and mobile projects for clients across the globe.</p>
            </div>
            <div className="cv-item">
              <h4>Software Engineer - Bazaarvoice</h4>
              <span>2014 - 2017</span>
              <p>Developed scalable services powering user generated content.</p>
            </div>

            <h3>Education</h3>
            <div className="cv-item">
              <h4>BSc Computer Science</h4>
              <span>University of Technology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
