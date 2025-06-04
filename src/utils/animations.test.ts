import { render, act } from '@testing-library/react';
import { useInView } from './animations';
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
