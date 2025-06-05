"use client";

import { useEffect } from "react";
import { animateOnScroll } from "@/utils/animations";

const logos = [
  { src: "/images/ai-logos/logo_veo.svg", alt: "VEO", size: "logo-large" },
  { src: "/images/ai-logos/logo_openai.svg", alt: "ChatGPT", size: "logo-large" },
  { src: "/images/ai-logos/logo_anthropic.svg", alt: "Claude", size: "logo-medium" },
  { src: "/images/ai-logos/logo_jules.svg", alt: "Jules", size: "logo-medium" },
  { src: "/images/ai-logos/logo_gemini.svg", alt: "Gemini", size: "logo-medium" },
  { src: "/images/ai-logos/logo_oai.svg", alt: "OAI", size: "logo-large" },
  { src: "/images/ai-logos/logo_google.svg", alt: "Google AI", size: "logo-small" },
  { src: "/images/ai-logos/logo_huggingface.svg", alt: "Hugging Face", size: "logo-small" },
  { src: "/images/ai-logos/logo_pytorch.svg", alt: "PyTorch", size: "logo-small" },
  { src: "/images/ai-logos/logo_tensorflow.svg", alt: "TensorFlow", size: "logo-small" },
];

export default function LogoWall() {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section className="logo-wall">
      <div className="container">
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className={`logo-item ${logo.size} animate-on-scroll`}>
              <img src={logo.src} alt={`${logo.alt} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
