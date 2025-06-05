import { render, act } from '@testing-library/react';
import { useInView, useParallax } from './animations';
import React from 'react';

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  observe = jest.fn();
  unobserve = jest.fn();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  trigger(isIntersecting: boolean, target: Element) {
    this.callback([{ isIntersecting, target } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
  }
}

describe('useInView', () => {
  it('attaches IntersectionObserver and triggers class addition', () => {
    const mockObserver = new MockIntersectionObserver(() => {});
    // Ensure property exists for spying
    (window as any).IntersectionObserver = (window as any).IntersectionObserver || jest.fn();
    const observerSpy = jest.spyOn(window as any, 'IntersectionObserver').mockImplementation((cb: IntersectionObserverCallback) => {
      mockObserver.callback = cb;
      return mockObserver as unknown as IntersectionObserver;
    });

    function TestComponent() {
      const { ref } = useInView();
      return React.createElement('div', { 'data-testid': 'target', ref });
    }

    const { getByTestId } = render(React.createElement(TestComponent));
    const target = getByTestId('target');

    expect(mockObserver.observe).toHaveBeenCalledWith(target);

    act(() => {
      mockObserver.trigger(true, target);
    });

    expect(target).toHaveClass('animate');
    observerSpy.mockRestore();
  });
});

describe('useParallax', () => {
  it('updates transform style based on scroll', () => {
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0,
    });

    function TestParallax() {
      const { ref } = useParallax(0.5);
      return React.createElement('div', { 'data-testid': 'parallax', ref });
    }

    const { getByTestId } = render(React.createElement(TestParallax));
    const target = getByTestId('parallax');

    act(() => {
      window.pageYOffset = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(target.style.transform).toBe('translateY(100px)');
  });
});
