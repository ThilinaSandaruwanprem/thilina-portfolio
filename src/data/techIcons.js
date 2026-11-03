import {
  siAndroidstudio,
  siApache,
  siApachejmeter,
  siApachemaven,
  siApachetomcat,
  siBootstrap,
  siC,
  siCss,
  siDocker,
  siEclipseide,
  siElasticstack,
  siFigma,
  siGit,
  siGithubactions,
  siGrafana,
  siH2database,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siJenkins,
  siJsonwebtokens,
  siLinux,
  siMysql,
  siNextdotjs,
  siNginx,
  siOpenapiinitiative,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSonatype,
  siSpring,
  siSpringboot,
  siWordpress,
} from 'simple-icons';

// Skill name (as written in profile.js) → brand icon.
const icons = {
  Java: siOpenjdk,
  JavaScript: siJavascript,
  Python: siPython,
  PHP: siPhp,
  C: siC,
  'Spring Boot': siSpringboot,
  'Spring Cloud': siSpring,
  'RESTful APIs': siOpenapiinitiative,
  'API Gateway': siSpring,
  'JWT / OAuth2': siJsonwebtokens,
  React: siReact,
  'Next.js': siNextdotjs,
  HTML: siHtml5,
  CSS: siCss,
  Bootstrap: siBootstrap,
  WordPress: siWordpress,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  H2: siH2database,
  Linux: siLinux,
  Docker: siDocker,
  'Docker Compose': siDocker,
  NGINX: siNginx,
  Tomcat: siApachetomcat,
  Apache: siApache,
  Maven: siApachemaven,
  Nexus: siSonatype,
  Jenkins: siJenkins,
  'GitHub Actions': siGithubactions,
  'ELK Stack': siElasticstack,
  Grafana: siGrafana,
  Git: siGit,
  JMeter: siApachejmeter,
  'IntelliJ IDEA': siIntellijidea,
  'Android Studio': siAndroidstudio,
  Eclipse: siEclipseide,
  Figma: siFigma,
};

// Very dark brand colours disappear on the dark theme, so those use the text colour instead.
function usableColor(hex) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 70 ? null : `#${hex}`;
}

export function techIcon(name) {
  const icon = icons[name];
  return icon ? { path: icon.path, color: usableColor(icon.hex), title: icon.title } : null;
}

// Logos shown in the scrolling strip under the hero.
export const marqueeTech = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'JavaScript', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'NGINX',
  'Jenkins', 'GitHub Actions', 'ELK Stack', 'Grafana', 'Linux', 'Maven', 'JMeter', 'Git', 'Figma',
];
