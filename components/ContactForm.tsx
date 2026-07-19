'use client';

import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Lang = 'en' | 'nl';
type Errors = Partial<Record<'name' | 'email' | 'buildType', string>>;

const T = {
  en: {
    name: 'Your name', email: 'Work email', company: 'Company / product', role: 'Your role',
    build: 'What do you want built?', choose: 'Choose one…',
    buildOpts: ['Website / web app', 'MVP', 'Customer portal', 'Internal or ops dashboard', 'API integration', 'Something else', 'Not sure yet'],
    band: 'Rough band', bandOpts: ['Focused', 'Standard', 'Extended', 'Not sure yet'],
    timeline: 'Target timeline', tlPlaceholder: 'e.g. next 4–8 weeks',
    details: 'Project details', detailsPlaceholder: "What are you building, and why now?",
    hint: "A sentence or two helps us prep — but skip it if you'd rather talk it through.",
    founding: "I'm interested in a founding-client slot (founder rate).",
    optional: '(optional)', send: 'Send it to the founders', sending: 'Sending…',
    note: "We'll only use this to reply about your project. We read every message personally.",
    okTitle: 'Got it — thank you.',
    okBody: "We read every message personally and will be in touch within one business day to set up your 30–45 minute discovery call. If it's a fit, you'll have a fixed-price proposal within 48 hours of that call.",
    okLink: 'See how the weekly build works →', okHref: '/approach/',
    errName: 'Please add your name.', errEmail1: 'Please add your email.', errEmail2: "That email doesn't look right.",
    errBuild: 'Pick the closest option.', errGeneric: 'Something went wrong.',
    errNet: 'Network error — please try again or email info@voltage-software.com.',
    ph: { name: 'Jordan Smith', company: 'Acme', role: 'Founder, CTO…' },
  },
  nl: {
    name: 'Je naam', email: 'Werk e-mail', company: 'Bedrijf / product', role: 'Je rol',
    build: 'Wat wil je laten bouwen?', choose: 'Kies er één…',
    buildOpts: ['Website / webapp', 'MVP', 'Klantportaal', 'Intern of ops-dashboard', 'API-integratie', 'Iets anders', 'Weet ik nog niet'],
    band: 'Grove indicatie', bandOpts: ['Compact', 'Standaard', 'Uitgebreid', 'Weet ik nog niet'],
    timeline: 'Gewenste planning', tlPlaceholder: 'bijv. komende 4–8 weken',
    details: 'Projectdetails', detailsPlaceholder: 'Wat bouw je, en waarom nu?',
    hint: 'Eén of twee zinnen helpen ons voorbereiden — maar sla het over als je het liever bespreekt.',
    founding: 'Ik heb interesse in een founding-client plek (founder-tarief).',
    optional: '(optioneel)', send: 'Stuur naar de oprichters', sending: 'Versturen…',
    note: 'We gebruiken dit alleen om op je project te reageren. Wij lezen elk bericht persoonlijk.',
    okTitle: 'Ontvangen — bedankt.',
    okBody: 'Wij lezen elk bericht persoonlijk en nemen binnen één werkdag contact op om je kennismakingsgesprek van 30–45 minuten in te plannen. Als het een match is, heb je binnen 48 uur na dat gesprek een voorstel met vaste prijs.',
    okLink: 'Bekijk hoe de wekelijkse build werkt →', okHref: '/nl/werkwijze/',
    errName: 'Vul je naam in.', errEmail1: 'Vul je e-mail in.', errEmail2: 'Dat e-mailadres klopt niet.',
    errBuild: 'Kies de dichtstbijzijnde optie.', errGeneric: 'Er ging iets mis.',
    errNet: 'Netwerkfout — probeer opnieuw of mail info@voltage-software.com.',
    ph: { name: 'Jordan Smit', company: 'Acme', role: 'Oprichter, CTO…' },
  },
} as const;

export default function ContactForm({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    const next: Errors = {};
    if (!get('name')) next.name = t.errName;
    const email = get('email');
    if (!email) next.email = t.errEmail1;
    else if (!EMAIL_RE.test(email)) next.email = t.errEmail2;
    if (!get('buildType')) next.buildType = t.errBuild;

    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setLoading(true);
    const payload = {
      name: get('name'), email, company: get('company'), role: get('role'),
      buildType: get('buildType'), budget: get('budget'), timeline: get('timeline'),
      details: get('details'), founding: data.get('founding') === 'on', website: get('website'),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({ success: res.ok }));
      if (json && json.success) {
        setSent(true);
        setTimeout(() => document.getElementById('form-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
      } else {
        setLoading(false);
        setErrors({ email: (json && json.error) || t.errGeneric });
      }
    } catch {
      setLoading(false);
      setErrors({ email: t.errNet });
    }
  }

  if (sent) {
    return (
      <div className="form-success" id="form-success" role="status">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="#3DDC84" strokeWidth="2" />
          <path d="M17 28l7 7 14-14" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>{t.okTitle}</h3>
        <p>{t.okBody}</p>
        <a href={t.okHref} className="inline-link">{t.okLink}</a>
      </div>
    );
  }

  return (
    <form className={`contact-form${loading ? ' is-loading' : ''}`} id="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="fg">
        <label htmlFor="name">{t.name} <span className="req" aria-hidden="true">*</span></label>
        <input type="text" id="name" name="name" autoComplete="name" required aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined} placeholder={t.ph.name} />
        <span className="err" role="alert">{errors.name}</span>
      </div>
      <div className="fg">
        <label htmlFor="email">{t.email} <span className="req" aria-hidden="true">*</span></label>
        <input type="email" id="email" name="email" autoComplete="email" required aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined} placeholder="jordan@bedrijf.com" />
        <span className="err" role="alert">{errors.email}</span>
      </div>
      <div className="fg-2">
        <div className="fg">
          <label htmlFor="company">{t.company} <span className="opt">{t.optional}</span></label>
          <input type="text" id="company" name="company" autoComplete="organization" placeholder={t.ph.company} />
        </div>
        <div className="fg">
          <label htmlFor="role">{t.role} <span className="opt">{t.optional}</span></label>
          <input type="text" id="role" name="role" placeholder={t.ph.role} />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="buildType">{t.build} <span className="req" aria-hidden="true">*</span></label>
        <select id="buildType" name="buildType" required aria-required="true" defaultValue=""
          aria-invalid={errors.buildType ? 'true' : undefined}>
          <option value="" disabled>{t.choose}</option>
          {t.buildOpts.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span className="err" role="alert">{errors.buildType}</span>
      </div>
      <div className="fg-2">
        <div className="fg">
          <label htmlFor="budget">{t.band} <span className="opt">{t.optional}</span></label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>—</option>
            {t.bandOpts.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="fg">
          <label htmlFor="timeline">{t.timeline} <span className="opt">{t.optional}</span></label>
          <input type="text" id="timeline" name="timeline" placeholder={t.tlPlaceholder} />
        </div>
      </div>
      <div className="fg">
        <label htmlFor="details">{t.details} <span className="opt">{t.optional}</span></label>
        <textarea id="details" name="details" rows={4} placeholder={t.detailsPlaceholder}></textarea>
        <span className="hint">{t.hint}</span>
      </div>
      <label className="check-row">
        <input type="checkbox" id="founding" name="founding" /> <span>{t.founding}</span>
      </label>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary btn-block" id="submit-btn" disabled={loading}>
        <span className="btn-text">{loading ? t.sending : t.send}</span>
      </button>
      <p className="form-note">{t.note}</p>
    </form>
  );
}
