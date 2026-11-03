// All site content lives here. Edit this file to update the portfolio.

// Turns '/images/x.webp' into a URL that also works when the site is served from a sub-folder (GitHub Pages).
export const asset = (path) => (path ? import.meta.env.BASE_URL + path.replace(/^\//, '') : path);

export const profile = {
  name: 'Thilina Sandaruwan',
  firstName: 'Thilina',
  role: 'Software Engineer',
  currently: 'Software Engineer at EvolveIt',
  location: 'Polgahawela, Sri Lanka',
  phone: '071 921 9795',
  phoneLink: '+94719219795',
  whatsapp: '94719219795',
  email: 'prem.tsan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thilina-sandaruwan',
  github: 'https://github.com/ThilinaSandaruwanprem',
  photo: asset('/images/thilina.webp'),
  avatar: asset('/images/avatar.webp'),
  // Put a PDF in public/ and set its path here, e.g. asset('/Thilina_Sandaruwan_CV.pdf'), to show "Download CV" buttons.
  cv: '',
  // Phrases that rotate in the hero headline.
  focus: [
    'scalable microservices',
    'cloud-native platforms on AWS',
    'clean React & Next.js interfaces',
    'enterprise-grade releases',
  ],
  intro:
    'Software Engineer with close to four years of hands-on experience across the full software development lifecycle – from system design through deployment and maintenance.',
  about: [
    'My background spans Java/Spring Boot microservices, React/Next.js frontend development, RESTful APIs and cloud-native deployment on AWS. Most recently I architected the full-stack system design for a tax advisory platform with an AI-powered assistant.',
    'Before that I spent close to four years at Entgra, growing from intern to Associate Software Engineer and contributing to enterprise Unified Endpoint Management (UEM) and IoT/Smart Grid products through 11 GA releases – including serving as Release Manager for UEM v6.4.0.',
    'I graduated top of my batch in Software Engineering (Hons) and I enjoy cross-functional collaboration, customer-facing technical consultation and mentoring junior engineers.',
  ],
};

export const stats = [
  { value: 4, prefix: '~', suffix: '', label: 'Years of experience' },
  { value: 11, suffix: '', label: 'GA releases shipped' },
  { value: 12, suffix: '', label: 'Microservices architected' },
  { value: 3.67, decimals: 2, suffix: '', label: 'GPA · Top of batch' },
];

export const services = [
  {
    icon: 'server',
    title: 'Backend & Microservices',
    text: 'Spring Boot services behind an API gateway, RESTful APIs, JWT/OAuth2 and SSO, designed around clear domain boundaries.',
  },
  {
    icon: 'layout',
    title: 'Frontend & UI/UX',
    text: 'React and Next.js interfaces, designed in Figma and built to be fast, accessible and easy to use.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    text: 'AWS architecture, Docker, NGINX, CI/CD with GitHub Actions and Jenkins, monitoring with Grafana and the ELK stack.',
  },
  {
    icon: 'users',
    title: 'Releases & Mentoring',
    text: 'Release management, full test plans, KT sessions, technical interviews and mentoring interns to independent delivery.',
  },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'EvolveIt',
    period: 'Jul 2026 – Present',
    current: true,
    summary: 'Architecting Evoluer.lk – a tax & accounting platform with an AI-assisted tax assistant.',
    points: [
      'Architected a 12-service microservices platform for Evoluer.lk from the ground up – frontend, backend, data layer and AWS infrastructure – covering user management, billing, CRM, tax advisory, accounting and an AI-assisted tax assistant.',
      'Designed a Spring Boot backend behind a Spring Cloud API Gateway with JWT/OAuth2 authentication and SSO, structured into domain services for users, appointments, tax advisory, accounting, billing, CRM, reporting, tasks and audit logging.',
      'Planned the data layer with PostgreSQL, Redis, Elasticsearch and S3/MinIO, with message-queue background jobs and scheduled report generation and AI-driven document processing.',
      'Defined integrations with PayHere/Stripe, Xero/Zoho Books, Twilio SMS, the WhatsApp Business API and an AI tax assistant powered by OpenAI/Claude/Gemini.',
      'Designed the AWS deployment (Route 53, CloudFront, WAF, ECS/Fargate, RDS PostgreSQL, ElastiCache) with CI/CD via GitHub Actions, Grafana monitoring and centralised ELK logging.',
    ],
    tech: ['Spring Boot', 'Spring Cloud Gateway', 'Next.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS', 'GitHub Actions'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Entgra (Pvt) Ltd',
    place: 'Colombo',
    period: 'Sep 2022 – Jun 2026',
    note: 'Progressed from Software Engineering Intern',
    summary: 'Enterprise Unified Endpoint Management (UEM) and IoT/Smart Grid (AMI) products.',
    points: [
      'Owned end-to-end delivery of enterprise features across the full SDLC, contributing to 11 GA releases across the UEM and AMI product lines under Agile/Scrum.',
      'Delivered features across 8 major GA releases of Entgra UEM (v5.3.0 – v7.0.0) and served as Release Manager for UEM v6.4.0 GA.',
      'Delivered UI, frontend, backend and deployment work for Entgra AMI across 3 GA releases (v3.4.0 – v3.6.0), including the UI for adding and managing SIM and COM devices.',
      'Automated AWS deployment pipelines to reduce manual release overhead and hardened infrastructure for enterprise-grade uptime.',
      'Triaged and resolved customer-reported production issues, and took part in customer discussions, technical demos and solution consultations.',
      'Mentored a rotating cohort of interns and junior engineers, and ran KT sessions and technical interviews to scale hiring.',
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'NGINX', 'ELK Stack', 'JMeter', 'AWS'],
  },
];

// Layers of the Evoluer.lk architecture diagram.
export const architecture = [
  { label: 'Edge', items: ['Route 53', 'CloudFront', 'AWS WAF'] },
  { label: 'Gateway', items: ['Spring Cloud API Gateway', 'JWT / OAuth2', 'SSO'], wide: true },
  {
    label: 'Domain services · ECS / Fargate',
    items: ['Users', 'Appointments', 'Tax Advisory', 'Accounting', 'Billing', 'CRM', 'Reporting', 'Tasks', 'Audit Log', 'AI Tax Assistant'],
    grid: true,
  },
  { label: 'Data', items: ['RDS PostgreSQL', 'ElastiCache Redis', 'Elasticsearch', 'S3 / MinIO', 'Message Queue'] },
  { label: 'Integrations', items: ['PayHere / Stripe', 'Xero / Zoho Books', 'Twilio SMS', 'WhatsApp Business', 'OpenAI / Claude / Gemini'] },
  { label: 'Operations', items: ['GitHub Actions CI/CD', 'Grafana', 'ELK logging'] },
];

export const projects = [
  {
    title: 'Entgra UEM',
    kind: 'Enterprise product · Entgra',
    visual: 'uem',
    url: 'uem · device management',
    accent: 'blue',
    text: 'A Unified Endpoint / Device Management platform used by enterprise clients to manage and secure fleets of devices.',
    highlights: ['8 major GA releases (v5.3.0 – v7.0.0)', 'Release Manager for v6.4.0 GA', 'Load testing with JMeter, deployment with NGINX'],
    tags: ['Java', 'Spring Boot', 'React', 'NGINX', 'JMeter'],
  },
  {
    title: 'Entgra AMI',
    kind: 'IoT / Smart Grid · Entgra',
    visual: 'ami',
    url: 'ami · smart grid',
    accent: 'teal',
    text: 'An Advanced Metering Infrastructure solution for smart-meter device management and device data integration.',
    highlights: ['3 GA releases (v3.4.0 – v3.6.0)', 'Built the SIM & COM device management UI', 'Monitoring with the ELK stack'],
    tags: ['React', 'Docker Compose', 'MySQL / JDBC', 'Maven', 'ELK'],
  },
  {
    title: 'Saving Alert',
    kind: 'Final-year research · OUSL · 2023',
    visual: 'donor',
    url: 'saving-alert · donor match',
    accent: 'rose',
    text: 'A nationwide blood & medical facility donation system that uses a KNN model to rank the nearest eligible donor in real time.',
    highlights: ['Literature review of 20 research papers & systems', 'Low-stock alerts, eligibility ranking, donation-date calculator', 'In-app chat and fundraising, on web and mobile'],
    tags: ['Java', 'Spring Boot', 'React', 'KNN', 'OAuth / TLS'],
  },
  {
    title: 'Dazzling Hearts Gold Jewellery',
    kind: 'Business website · 2026',
    image: asset('/images/dazzling-hearts.webp'),
    url: 'dazzling-hearts · home',
    accent: 'gold',
    text: 'A responsive website for a gold jewellery shop with a filterable collection, quick view, favourites and WhatsApp enquiries.',
    highlights: ['Collection filters by category, purity and search', 'Favourites list sent as a single enquiry', 'Tested on desktop and mobile'],
    tags: ['React', 'Vite', 'React Router', 'CSS'],
  },
];

export const skills = [
  { icon: 'code', title: 'Languages', items: ['Java', 'JavaScript'], extra: ['Python', 'PHP', 'C'], extraLabel: 'Basic' },
  { icon: 'server', title: 'Backend & Architecture', items: ['Spring Boot', 'RESTful APIs', 'Microservices', 'API Gateway', 'JWT / OAuth2'] },
  { icon: 'layout', title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'WordPress'] },
  { icon: 'database', title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MS SQL Server', 'Oracle', 'H2'] },
  {
    icon: 'cloud',
    title: 'Cloud, DevOps & Infrastructure',
    items: ['AWS', 'Linux', 'Docker', 'Docker Compose', 'NGINX', 'Tomcat', 'Apache', 'Maven', 'Nexus', 'Jenkins', 'GitHub Actions', 'ELK Stack', 'Grafana', 'Remote server admin'],
    wide: true,
  },
  { icon: 'check', title: 'Testing & Tools', items: ['Git', 'JMeter', 'IntelliJ IDEA', 'VS Code', 'Android Studio', 'Eclipse'] },
  { icon: 'pen', title: 'Design', items: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
  {
    icon: 'compass',
    title: 'Practices',
    items: ['Agile / Scrum', 'System & Solution Architecture', 'Code review', 'Technical documentation', 'Release management', 'Test planning', 'KT sessions'],
  },
];

export const domains = ['Unified Endpoint Management', 'Device Management', 'IoT & Smart Grid', 'Tax & Accounting Platforms', 'AI / ML (KNN)', 'Neural Networks'];

export const education = [
  {
    title: 'Bachelor of Software Engineering (Honours)',
    school: 'The Open University of Sri Lanka',
    period: '2019 – 2024',
    detail: 'Second Class Upper Division · GPA 3.67',
    note: 'Specialised in full-stack and web development, AI, neural networks and Android development.',
    featured: true,
  },
  { title: 'Higher National Diploma in Software Engineering', school: 'The Open University of Sri Lanka, Colombo' },
  { title: 'Diploma in Information Systems and Technology', school: 'Technical College, Wariyapola', period: '2017 – 2018' },
  { title: 'G.C.E. Advanced Level – Biological Science', school: 'Maliyadewa College, Kurunegala', period: '2011' },
];

export const awards = [
  { title: 'Virtusa Academic Excellence Gold Medal', text: 'Best Student, Bachelor of Software Engineering (Hons), 2024', medal: true },
  { title: 'Top of Batch', text: 'Highest GPA in the batch' },
  { title: "Dean's List Award", text: 'The Open University of Sri Lanka' },
  { title: "Dean's Scholarship", text: 'The Open University of Sri Lanka' },
];

export const leadership = [
  'Financial Team Leader / Treasurer – Nufora Project, SEDS OUSL',
  'Treasurer – SEDS OUSL',
  'Member – SEDS Sri Lanka',
  'Member – ZeroPlastic Movement',
];
