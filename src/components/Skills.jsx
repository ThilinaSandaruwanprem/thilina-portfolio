import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';
import { domains, skills } from '../data/profile';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionHeading index="04" eyebrow="Skills" title="My toolkit">
          The languages, frameworks and tools I use to take products from design to production.
        </SectionHeading>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal className={`skill-card card card-hover ${group.wide ? 'is-wide' : ''}`} key={group.title} delay={(i % 3) * 80}>
              <h3><span className="skill-icon"><Icon name={group.icon} size={20} /></span>{group.title}</h3>
              <div className="chips">
                {group.items.map((s) => (
                  <span className="chip" key={s}>
                    {group.icon !== 'compass' && <TechIcon name={s} size={15} />}
                    {s}
                  </span>
                ))}
                {group.extra?.map((s) => (
                  <span className="chip chip-soft" key={s} title={group.extraLabel}><TechIcon name={s} size={15} />{s}</span>
                ))}
              </div>
              {group.extra && <small className="chip-note">Lighter chips: {group.extraLabel.toLowerCase()} knowledge</small>}
            </Reveal>
          ))}
        </div>

        <Reveal className="domains">
          <span className="domains-label">Domain experience</span>
          <div className="marquee" aria-label={domains.join(', ')}>
            <div className="marquee-track">
              {[...domains, ...domains].map((d, i) => (
                <span className="marquee-item" key={`${d}-${i}`} aria-hidden={i >= domains.length}>
                  <Icon name="sparkle" size={14} /> {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
