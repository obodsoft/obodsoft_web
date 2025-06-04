"use client";

import { useInView } from "@/utils/animations";

export default function Cta() {
  const headerRef = useInView();
  const textRef = useInView();
  const buttonRef = useInView();

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 ref={headerRef.ref} className="animate-on-scroll">
            Ready to launch your next project?
          </h2>
          <p ref={textRef.ref} className="animate-on-scroll">
            Let's collaborate to build software that moves your business forward.
          </p>
          <div ref={buttonRef.ref} className="cta-buttons animate-on-scroll">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
