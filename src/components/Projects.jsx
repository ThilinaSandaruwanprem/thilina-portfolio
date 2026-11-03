import Icon from './Icon';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';
import TechIcon from './TechIcon';
import SectionHeading from './SectionHeading';
import { architecture, projects } from '../data/profile';

function ArchitectureDiagram() {
  return (
    <div className="arch" role="img" aria-label="Evoluer.lk architecture: AWS edge, Spring Cloud API gateway, ten domain services on ECS Fargate, data stores, third-party integrations and operations tooling">
      <div className="arch-client">
        <span className="arch-chip strong">Web · Next.js / React</span>
        <span className="arch-chip strong">AI tax assistant</span>
      </div>
      {architecture.map((layer) => (
        <div className={`arch-layer ${layer.grid ? 'arch-services' : ''}`} key={layer.label}>
          <span className="arch-label">{layer.label}</span>
          <div className={layer.grid ? 'arch-grid' : 'arch-row'}>
            {layer.items.map((item) => (
              <span className={`arch-chip ${layer.wide ? 'strong' : ''}`} key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading index="03" eyebrow="Projects" title="Selected work">
          Platforms I&apos;ve architected, products I&apos;ve shipped and things I&apos;ve built.
        </SectionHeading>

        <Reveal className="featured card">
          <div className="featured-copy">
            <span className="kicker"><Icon name="sparkle" size={15} /> Featured · EvolveIt · 2026</span>
            <h3>Evoluer.lk – Tax &amp; Accounting Platform</h3>
            <p>
              A 12-service microservices platform designed from the ground up – frontend, backend, data layer and AWS
              infrastructure – for tax advisory, accounting, billing and CRM, with an AI-assisted tax assistant.
            </p>
            <ul className="check-list">
              <li>Spring Boot services behind a Spring Cloud API Gateway with JWT/OAuth2 and SSO</li>
              <li>PostgreSQL, Redis, Elasticsearch and S3/MinIO, with queued background jobs</li>
              <li>Payments, accounting, SMS, WhatsApp and LLM integrations</li>
              <li>ECS/Fargate on AWS, CI/CD with GitHub Actions, Grafana and ELK</li>
            </ul>
            <div className="tags">
              {['Spring Boot', 'Spring Cloud', 'Next.js', 'PostgreSQL', 'Redis', 'AWS ECS', 'GitHub Actions'].map((t) => (
                <span className="tag" key={t}><TechIcon name={t} size={12} dot={false} />{t}</span>
              ))}
            </div>
          </div>
          <ArchitectureDiagram />
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" className={`project card card-hover accent-${p.accent}`} key={p.title} delay={(i % 2) * 110}>
              <div className="project-visual">
                <ProjectVisual project={p} />
              </div>
              <div className="project-body">
                <span className="kicker">{p.kind}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="check-list small">
                  {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}><TechIcon name={t} size={12} dot={false} />{t}</span>)}
                </div>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    View project <Icon name="external" size={16} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
