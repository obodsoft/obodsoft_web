import { useEffect, useRef, useState, MutableRefObject } from 'react';

/**
 * Hook to detect when an element is visible in the viewport
 * @param options IntersectionObserver options
 * @returns ref to attach to the target element and visibility state
 */
export const useInView = (options = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }): {
  ref: MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
} => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        currentRef.classList.add('animate');
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, isInView]);

  return { ref, isInView };
};

/**
 * Utility function to trigger scroll-based animations.
 */
export const animateOnScroll = (): void => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('animate');
    }
  });
};
