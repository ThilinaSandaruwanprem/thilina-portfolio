import { useEffect, useState } from 'react';
import Icon from './Icon';
import { sections } from './Nav';
import { profile } from '../data/profile';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#top" className="nav-brand">
            <span className="brand-mark">TS</span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <p>{profile.role} · Java · Spring Boot · React · AWS</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {sections.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={19} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={19} /></a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={18} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed &amp; built with React</span>
      </div>

      <a href="#top" className={`to-top ${showTop ? 'is-visible' : ''}`} aria-label="Back to top">
        <Icon name="arrowUp" size={20} />
      </a>
    </footer>
  );
}
