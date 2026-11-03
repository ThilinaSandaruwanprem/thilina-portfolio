import { useEffect } from 'react';

// Tracks the pointer over any .card so CSS can draw a soft glow where the pointer is.
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return undefined;
    const onMove = (e) => {
      const card = e.target.closest?.('.card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
  return null;
}
