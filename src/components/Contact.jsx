import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

const channels = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneLink}`, copy: profile.phone },
  { icon: 'whatsapp', label: 'WhatsApp', value: 'Message me', href: `https://wa.me/${profile.whatsapp}`, external: true },
  { icon: 'linkedin', label: 'LinkedIn', value: 'thilina-sandaruwan', href: profile.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: 'ThilinaSandaruwanprem', href: profile.github, external: true },
];

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState('');
  const toastTimer = useRef();

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2600);
  };

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = 'Please enter a valid email';
    if (form.message.trim().length < 10) er.message = 'Please write a short message (10+ characters)';
    setErrors(er);
    if (Object.keys(er).length) return;

    const subject = form.subject.trim() || `Hello from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast('Opening your email app…');
  };

  return (
    <section className="section section-alt contact" id="contact">
      <div className="container">
        <SectionHeading index="06" eyebrow="Contact" title="Let's build something great together">
          Have a role, a project or an idea in mind? I&apos;d love to hear about it.
        </SectionHeading>

        <div className="contact-grid">
          <Reveal className="channels">
            {channels.map((c) => (
              <div className="channel card card-hover" key={c.label}>
                <a
                  className="channel-link"
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="channel-icon"><Icon name={c.icon} size={21} /></span>
                  <span>
                    <small>{c.label}</small>
                    <strong>{c.value}</strong>
                  </span>
                </a>
                {c.copy && (
                  <button
                    type="button"
                    className="icon-btn copy-btn"
                    onClick={async () => showToast((await copyText(c.copy)) ? `${c.label} copied` : 'Could not copy')}
                    aria-label={`Copy ${c.label.toLowerCase()}`}
                    title={`Copy ${c.label.toLowerCase()}`}
                  >
                    <Icon name="copy" size={17} />
                  </button>
                )}
              </div>
            ))}
            <p className="channel-location"><Icon name="pin" size={17} /> {profile.location}</p>
          </Reveal>

          <Reveal as="form" className="contact-form card" onSubmit={submit} noValidate delay={120}>
            <div className="form-row">
              <label className={errors.name ? 'has-error' : ''}>
                <span>Your name</span>
                <input name="name" value={form.name} onChange={update} autoComplete="name" placeholder="Jane Perera" aria-invalid={!!errors.name} />
                {errors.name && <em role="alert">{errors.name}</em>}
              </label>
              <label className={errors.email ? 'has-error' : ''}>
                <span>Your email</span>
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" placeholder="jane@company.com" aria-invalid={!!errors.email} />
                {errors.email && <em role="alert">{errors.email}</em>}
              </label>
            </div>
            <label>
              <span>Subject <i>(optional)</i></span>
              <input name="subject" value={form.subject} onChange={update} placeholder="Software Engineer role at …" />
            </label>
            <label className={errors.message ? 'has-error' : ''}>
              <span>Message</span>
              <textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell me a little about the role or project…" aria-invalid={!!errors.message} />
              {errors.message && <em role="alert">{errors.message}</em>}
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              <Icon name="send" size={18} /> Send message
            </button>
            <p className="form-hint">This opens your email app with the message ready to send.</p>
          </Reveal>
        </div>
      </div>

      <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">{toast}</div>
    </section>
  );
}
