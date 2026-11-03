import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { useInView } from './Reveal';
import Starfield from './Starfield';
import TechIcon from './TechIcon';
import { profile, stats } from '../data/profile';
import { marqueeTech } from '../data/techIcons';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types each phrase, pauses, deletes it, then moves on to the next.
function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion()) {
      const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 3000);
      return () => clearInterval(id);
    }
    return undefined;
  }, [words.length]);

  useEffect(() => {
    if (reducedMotion()) {
      setText(words[index]);
      return undefined;
    }
    const word = words[index];
    let delay = deleting ? 32 : 65;
    if (!deleting && text === word) delay = 2200;
    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return text;
}

function Counter({ value, decimals = 0, prefix = '', suffix = '', run }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!run) return undefined;
    if (reducedMotion()) {
      setShown(value);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const duration = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setShown(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);
  return <>{prefix}{shown.toFixed(decimals)}{suffix}</>;
}

export default function Hero() {
  const typed = useTypewriter(profile.focus);
  const [statsRef, statsInView] = useInView();
  const visualRef = useRef(null);

  // Gentle 3D tilt of the portrait towards the pointer.
  const tilt = (e) => {
    const el = visualRef.current;
    if (!el || e.pointerType === 'touch') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--tx', x.toFixed(3));
    el.style.setProperty('--ty', y.toFixed(3));
  };
  const resetTilt = () => {
    visualRef.current?.style.setProperty('--tx', '0');
    visualRef.current?.style.setProperty('--ty', '0');
  };

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
        <Starfield />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="status-dot" /> {profile.currently}
          </span>
          <h1>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            <span className="hero-sub">
              I design &amp; build <span className="typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work <Icon name="arrowRight" size={18} />
            </a>
            {profile.cv ? (
              <a href={profile.cv} className="btn btn-ghost" download>
                <Icon name="download" size={18} /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                <Icon name="send" size={17} /> Get in touch
              </a>
            )}
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={19} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={20} /></a>
            <span className="hero-location"><Icon name="pin" size={17} /> {profile.location}</span>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef} onPointerMove={tilt} onPointerLeave={resetTilt}>
          <div className="portrait">
            <div className="portrait-ring" aria-hidden="true" />
            <img src={profile.photo} alt={profile.name} width="460" height="460" />
          </div>
          <div className="float-card float-1">
            <span className="float-icon gold"><Icon name="award" size={20} /></span>
            <div><strong>Gold Medalist</strong><small>Best Student · 2024</small></div>
          </div>
          <div className="float-card float-2">
            <span className="float-icon"><Icon name="flag" size={19} /></span>
            <div><strong>11 GA releases</strong><small>UEM &amp; AMI products</small></div>
          </div>
          <div className="float-card float-3 code-card" aria-hidden="true">
            <code>
              <span className="tok-k">@RestController</span>
              <br />
              <span className="tok-k">class</span> <span className="tok-t">Thilina</span> {'{'}
              <br />
              &nbsp;&nbsp;stack = [<span className="tok-s">&quot;Java&quot;</span>, <span className="tok-s">&quot;React&quot;</span>, <span className="tok-s">&quot;AWS&quot;</span>];
              <br />
              {'}'}
            </code>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats" ref={statsRef}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong className="gradient-text">
                <Counter {...s} run={statsInView} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-strip">
        <p className="tech-strip-label">Technologies I work with</p>
        <div className="marquee">
          <div className="marquee-track tech-track">
            {[...marqueeTech, ...marqueeTech].map((t, i) => (
              <span className="tech-logo" key={`${t}-${i}`} aria-hidden={i >= marqueeTech.length}>
                <TechIcon name={t} size={22} /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
