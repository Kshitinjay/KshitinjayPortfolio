import { useEffect } from 'react';

/**
 * Scroll-reveal: observes every `.reveal` element once and adds `.in` when it
 * enters the viewport. Mirrors the v4 mockup's IntersectionObserver behaviour.
 * Falls back to showing everything if IO is unavailable; the global
 * `prefers-reduced-motion` rule in index.css disables the transition itself.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
