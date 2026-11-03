import { useEffect, useRef } from 'react';

// Twinkling stars with the occasional shooting star; stars near the pointer link up like a constellation.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let stars = [];
    let shooting = null;
    let frame = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999 };

    const light = () => document.documentElement.getAttribute('data-theme') === 'light';

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(220, (w * h) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random() * Math.PI * 2,
        s: Math.random() * 0.02 + 0.006,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.04,
        hue: Math.random() < 0.15 ? 'violet' : Math.random() < 0.2 ? 'teal' : 'white',
      }));
    };

    const colors = () =>
      light()
        ? { white: '40,55,95', violet: '109,74,224', teal: '15,159,130', line: '47,111,232' }
        : { white: '230,236,255', violet: '170,150,255', teal: '120,240,210', line: '140,170,255' };

    const draw = () => {
      const c = colors();
      ctx.clearRect(0, 0, w, h);
      const near = [];
      for (const s of stars) {
        if (!reduced) {
          s.x = (s.x + s.vx + w) % w;
          s.y = (s.y + s.vy + h) % h;
          s.a += s.s;
        }
        const alpha = (light() ? 0.35 : 0.55) + Math.sin(s.a) * 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c[s.hue]},${Math.max(0.08, alpha)})`;
        ctx.fill();
        const dx = s.x - pointer.x;
        const dy = s.y - pointer.y;
        if (dx * dx + dy * dy < 150 * 150) near.push(s);
      }
      // constellation lines around the pointer
      for (let i = 0; i < near.length; i++) {
        for (let j = i + 1; j < near.length; j++) {
          const a = near[i];
          const b = near[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 95) {
            ctx.strokeStyle = `rgba(${c.line},${(1 - d / 95) * 0.5})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      if (!reduced) {
        if (!shooting && Math.random() < 0.004) {
          shooting = { x: Math.random() * w * 0.7, y: Math.random() * h * 0.4, vx: 7 + Math.random() * 4, vy: 2.5 + Math.random() * 2, life: 1 };
        }
        if (shooting) {
          const s = shooting;
          const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
          grad.addColorStop(0, `rgba(${c.white},${0.9 * s.life})`);
          grad.addColorStop(1, `rgba(${c.white},0)`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14);
          ctx.stroke();
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.016;
          if (s.life <= 0 || s.x > w + 50 || s.y > h + 50) shooting = null;
        }
      }
    };

    const loop = () => {
      draw();
      frame = visible && !reduced ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduced) draw();
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    loop();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reduced) loop();
    });
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);
    const hero = canvas.closest('section') || window;
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
