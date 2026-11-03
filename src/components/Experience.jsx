import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';
import { experience } from '../data/profile';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <SectionHeading index="02" eyebrow="Experience" title="Where I've worked">
          From intern to architect – shipping enterprise products and designing platforms from the ground up.
        </SectionHeading>

        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" className="timeline-item" key={job.company}>
              <span className={`timeline-dot ${job.current ? 'is-current' : ''}`} aria-hidden="true" />
              <article className="job card">
                <header className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">
                      <Icon name="briefcase" size={16} /> {job.company}
                      {job.place && <span className="muted"> · {job.place}</span>}
                    </p>
                  </div>
                  <div className="job-meta">
                    <span className={`period ${job.current ? 'is-current' : ''}`}>{job.period}</span>
                    {job.note && <span className="job-note">{job.note}</span>}
                  </div>
                </header>
                <p className="job-summary">{job.summary}</p>
                <ul className="job-points">
                  {job.points.map((p) => <li key={p.slice(0, 32)}>{p}</li>)}
                </ul>
                <div className="tags">
                  {job.tech.map((t) => <span className="tag" key={t}><TechIcon name={t} size={12} dot={false} />{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
