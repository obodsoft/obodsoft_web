"use client";

import { useInView } from "@/utils/animations";

export default function AiTools() {
  const headerRef = useInView();
  const textRef = useInView();

  const logos = [
    "replit",
    "chatgpt",
    "gemini",
    "claude",
    "zapier",
    "huggingface",
    "tensorflow",
    "pytorch",
    "docker",
    "github",
  ];

  const logoImages = logos.map(name => (
    <img key={name} src={`/images/${name}.svg`} alt={`${name} logo`} />
  ));

  return (
    <section className="ai-tools">
      <div className="container">
        <div className="ai-tools-content">
          <div ref={headerRef.ref} className="animate-on-scroll">
            <h2>AI Tools Ecosystem</h2>
          </div>
          <div ref={textRef.ref} className="animate-on-scroll">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ligula eget risus cursus, a hendrerit velit viverra.</p>
          </div>
        </div>
      </div>
      <div className="ai-tools-logos" aria-hidden="true">
        <div className="logos-slide">{logoImages}</div>
        <div className="logos-slide">{logoImages}</div>
      </div>
    </section>
  );
}

