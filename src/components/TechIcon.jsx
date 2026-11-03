import { techIcon } from '../data/techIcons';

export default function TechIcon({ name, size = 16, className = '', dot = true }) {
  const icon = techIcon(name);
  if (!icon) return dot ? <span className={`tech-dot ${className}`} aria-hidden="true" /> : null;
  return (
    <svg
      className={`tech-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={icon.color ? { '--brand': icon.color } : undefined}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
