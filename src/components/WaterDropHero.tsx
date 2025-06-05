"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface WaterDropHeroProps {
  children?: React.ReactNode;
  className?: string;
}

export default function WaterDropHero({
  children,
  className = "",
}: WaterDropHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drops = containerRef.current?.querySelectorAll(".drop");
    if (!drops) return;

    const animation = anime({
      targets: drops,
      translateY: [0, -20],
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
      delay: anime.stagger(300),
      duration: 1200,
    });

    return () => {
      animation.pause();
    };
  }, []);

  return (
    <div ref={containerRef} className={`water-drop-hero ${className}`}>
      <div className="drops">
        <div className="drop drop-1" />
        <div className="drop drop-2" />
        <div className="drop drop-3" />
      </div>
      {children && <div className="water-drop-content">{children}</div>}
    </div>
  );
}
