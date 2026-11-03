import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { awards, education, leadership } from '../data/profile';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading index="05" eyebrow="Education & awards" title="Learning and recognition" />

        <div className="edu-grid">
          <div className="edu-list">
            {education.map((e, i) => (
              <Reveal className={`edu card ${e.featured ? 'edu-featured' : ''}`} key={e.title} delay={i * 70}>
                <span className="edu-icon"><Icon name="cap" size={20} /></span>
                <div className="edu-body">
                  <div className="edu-top">
                    <h3>{e.title}</h3>
                    {e.period && <span className="period">{e.period}</span>}
                  </div>
                  <p className="edu-school">{e.school}</p>
                  {e.detail && <p className="edu-detail">{e.detail}</p>}
                  {e.note && <p className="edu-note">{e.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="edu-side">
            <Reveal className="awards card" delay={100}>
              <h3 className="side-title"><Icon name="award" size={20} /> Honours</h3>
              {awards.map((a) => (
                <div className={`award ${a.medal ? 'award-medal' : ''}`} key={a.title}>
                  {a.medal && <span className="medal" aria-hidden="true"><Icon name="award" size={26} /></span>}
                  <div>
                    <strong>{a.title}</strong>
                    <small>{a.text}</small>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="card leadership" delay={180}>
              <h3 className="side-title"><Icon name="users" size={20} /> Leadership &amp; activities</h3>
              <ul>
                {leadership.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
