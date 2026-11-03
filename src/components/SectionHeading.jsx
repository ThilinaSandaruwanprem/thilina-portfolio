import Reveal from './Reveal';

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow"><span className="eyebrow-num">{index}</span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </Reveal>
  );
}
