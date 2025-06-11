"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";
import { ctaContent } from "@/content/siteContent";

export default function Cta() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="animate-on-scroll">{ctaContent.title}</h2>
          <p className="animate-on-scroll">{ctaContent.description}</p>
          <div className="cta-buttons animate-on-scroll">
            <a href={ctaContent.button.href} className="btn btn-primary">
              {ctaContent.button.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
