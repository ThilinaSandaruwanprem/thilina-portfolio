import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile, services } from '../data/profile';

const facts = [
  { icon: 'briefcase', label: 'Currently', value: profile.currently },
  { icon: 'pin', label: 'Based in', value: profile.location },
  { icon: 'cap', label: 'Education', value: 'BSE (Hons), OUSL – top of batch' },
  { icon: 'award', label: 'Recognition', value: 'Virtusa Academic Excellence Gold Medal' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading index="01" eyebrow="About me" title="Engineer, architect and team player" />

        <div className="about-grid">
          <Reveal className="about-text">
            {profile.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </Reveal>

          <Reveal className="facts-card card" delay={120}>
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <span className="fact-icon"><Icon name={f.icon} size={19} /></span>
                <div>
                  <small>{f.label}</small>
                  <strong>{f.value}</strong>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <Reveal className="service card card-hover" key={s.title} delay={i * 90}>
              <span className="service-icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
