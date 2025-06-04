"use client";

import { useInView } from "@/utils/animations";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  const headerRef = useInView();
  const textRef = useInView();

  return (
    <section className="page-hero">
      <div className="container">
        <h1 ref={headerRef.ref} className="animate-on-scroll">
          {title}
        </h1>
        <p ref={textRef.ref} className="animate-on-scroll">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
