import Icon from './Icon';

// Illustrative mini-UIs for each project, framed as a browser window.
function Uem() {
  return (
    <div className="mock mock-uem">
      <aside className="mock-side">
        <span className="mock-logo" />
        {['devices', 'shield', 'layout', 'users', 'server'].map((k, i) => <span key={k} className={`mock-nav ${i === 0 ? 'on' : ''}`} />)}
      </aside>
      <div className="mock-main">
        <div className="mock-tiles">
          <div className="mock-tile"><small>Devices</small><span className="bar w70" /></div>
          <div className="mock-tile"><small>Policies</small><span className="bar w45" /></div>
          <div className="mock-tile"><small>Compliant</small><span className="bar w85 good" /></div>
        </div>
        <div className="mock-row">
          <div className="mock-list">
            {['android', 'ios', 'windows', 'android'].map((os, i) => (
              <div className="mock-device" key={i}>
                <span className={`os os-${os}`} />
                <span className="line" />
                <span className={`status ${i === 2 ? 'warn' : ''}`} />
              </div>
            ))}
          </div>
          <div className="mock-donut">
            <svg viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="15.9" className="donut-bg" />
              <circle cx="21" cy="21" r="15.9" className="donut-a" strokeDasharray="62 38" />
              <circle cx="21" cy="21" r="15.9" className="donut-b" strokeDasharray="24 76" strokeDashoffset="-62" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ami() {
  return (
    <div className="mock mock-ami">
      <div className="mock-head">
        <span className="meter-chip"><Icon name="bolt" size={13} /> Smart meters</span>
        <span className="live"><span /> Live</span>
      </div>
      <svg className="mock-chart" viewBox="0 0 300 110" preserveAspectRatio="none">
        <defs>
          <linearGradient id="amiFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[22, 50, 78].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} className="grid" />)}
        <path className="area" d="M0 80 C30 70 45 40 75 48 S120 82 150 60 S200 18 230 34 S275 62 300 40 V110 H0Z" fill="url(#amiFill)" />
        <path className="line" d="M0 80 C30 70 45 40 75 48 S120 82 150 60 S200 18 230 34 S275 62 300 40" />
        <path className="line2" d="M0 92 C40 88 60 70 95 74 S150 96 185 80 S250 60 300 66" />
        <circle cx="230" cy="34" r="4" className="dot" />
      </svg>
      <div className="mock-meters">
        {['SIM', 'COM', 'SIM', 'COM'].map((t, i) => (
          <span key={i} className="meter"><b>{t}</b><i className={i === 1 ? 'off' : ''} /></span>
        ))}
      </div>
    </div>
  );
}

function Donor() {
  const pins = [
    [18, 30], [70, 22], [82, 64], [30, 74], [58, 82], [12, 56],
  ];
  return (
    <div className="mock mock-donor">
      <div className="map">
        <svg className="roads" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 40 Q30 35 50 50 T100 45" />
          <path d="M35 0 Q40 40 30 100" />
          <path d="M70 0 Q65 50 80 100" />
        </svg>
        {pins.map(([x, y], i) => <span key={i} className="pin" style={{ left: `${x}%`, top: `${y}%` }} />)}
        <span className="pulse" style={{ left: '48%', top: '50%' }} />
        <span className="me" style={{ left: '48%', top: '50%' }}><Icon name="heart" size={14} /></span>
        <span className="pin best" style={{ left: '62%', top: '38%' }} />
        <svg className="link" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M48 50 L62 38" /></svg>
      </div>
      <div className="donor-card">
        <span className="rank">#1</span>
        <div><b>Nearest eligible donor</b><small>KNN match · O+</small></div>
      </div>
    </div>
  );
}

const variants = { uem: Uem, ami: Ami, donor: Donor };

export default function ProjectVisual({ project }) {
  const Mock = variants[project.visual];
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <span /><span /><span />
        <em>{project.url || project.title.toLowerCase().replace(/\s+/g, '-')}</em>
      </div>
      <div className="browser-body">
        {project.image ? (
          <img src={project.image} alt={`${project.title} website screenshot`} loading="lazy" width="1280" height="800" />
        ) : (
          Mock && <Mock />
        )}
      </div>
    </div>
  );
}
