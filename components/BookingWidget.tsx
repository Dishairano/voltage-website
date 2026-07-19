'use client';

import { useEffect, useState } from 'react';

type Step = 'pick' | 'details' | 'done';
type Lang = 'en' | 'nl';

const localDay = (iso: string) => new Date(iso).toLocaleDateString('en-CA');
const fmtDayChip = (ymd: string) => {
  const d = new Date(ymd + 'T12:00:00');
  return { dow: d.toLocaleDateString(undefined, { weekday: 'short' }), date: d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) };
};
const fmtTime = (iso: string) => new Date(iso).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
const fmtFull = (iso: string) => new Date(iso).toLocaleString(undefined, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });

const T = {
  en: {
    loading: 'Loading available times…',
    loadErr1: "We couldn't load available times right now.", loadErr2: 'send us a message instead', contact: '/contact/',
    step1: 'Step 1 of 2 · Pick a time', step2: 'Step 2 of 2 · Your details',
    changeTime: '← Change time', noTimes1: 'No open times in the next two weeks.', noTimes2: 'Send us a message',
    tz: (z: string, m: number) => `Times shown in your timezone (${z}). Each call is ${m} minutes.`,
    name: 'Your name', email: 'Work email', company: 'Company', build: 'What do you want built?',
    buildChoose: 'Choose one…', buildOpts: ['Website / web app', 'MVP', 'Customer portal', 'Internal or ops dashboard', 'API integration', 'Something else', 'Not sure yet'],
    prep: 'Anything to prep?', prepPh: "A sentence on what you're building, and why now.",
    optional: '(optional)', confirm: 'Confirm booking', booking: 'Booking…',
    errNamed: 'Please add your name and email.', taken: 'That time was just taken. Please choose another.',
    generic: 'Something went wrong — please try again.', net: 'Network error — please try again, or use the contact form.',
    note: "No obligation. We'll only use this to prep and confirm your call.",
    doneTitle: "You're booked in.", doneBody: "We've emailed you a confirmation. One of us will reach you at that time — if it's a fit, you'll have a fixed-price proposal within 48 hours. Need to change it? Just reply to that email.",
    home: '/', back: 'Back to home →',
    fallback1: 'Prefer email?', fallback2: 'Send a message instead →',
  },
  nl: {
    loading: 'Beschikbare tijden laden…',
    loadErr1: 'We konden de beschikbare tijden nu niet laden.', loadErr2: 'stuur ons in plaats daarvan een bericht', contact: '/nl/contact/',
    step1: 'Stap 1 van 2 · Kies een tijd', step2: 'Stap 2 van 2 · Je gegevens',
    changeTime: '← Tijd wijzigen', noTimes1: 'Geen vrije tijden in de komende twee weken.', noTimes2: 'Stuur ons een bericht',
    tz: (z: string, m: number) => `Tijden in jouw tijdzone (${z}). Elk gesprek duurt ${m} minuten.`,
    name: 'Je naam', email: 'Werk e-mail', company: 'Bedrijf', build: 'Wat wil je laten bouwen?',
    buildChoose: 'Kies er één…', buildOpts: ['Website / webapp', 'MVP', 'Klantportaal', 'Intern of ops-dashboard', 'API-integratie', 'Iets anders', 'Weet ik nog niet'],
    prep: 'Iets om voor te bereiden?', prepPh: 'Eén zin over wat je bouwt, en waarom nu.',
    optional: '(optioneel)', confirm: 'Bevestig afspraak', booking: 'Bezig…',
    errNamed: 'Vul je naam en e-mail in.', taken: 'Die tijd is net bezet. Kies een andere.',
    generic: 'Er ging iets mis — probeer opnieuw.', net: 'Netwerkfout — probeer opnieuw of gebruik het contactformulier.',
    note: 'Geen verplichtingen. We gebruiken dit alleen om je gesprek voor te bereiden en te bevestigen.',
    doneTitle: 'Je afspraak staat.', doneBody: 'We hebben je een bevestiging gemaild. Een van ons belt je op dat moment — als het een match is, heb je binnen 48 uur een voorstel met vaste prijs. Wijzigen? Reageer gewoon op die mail.',
    home: '/nl/', back: 'Terug naar home →',
    fallback1: 'Liever mailen?', fallback2: 'Stuur een bericht →',
  },
} as const;

export default function BookingWidget({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState(false);
  const [slots, setSlots] = useState<string[]>([]);
  const [durationMin, setDurationMin] = useState(45);
  const [day, setDay] = useState('');
  const [selected, setSelected] = useState('');
  const [step, setStep] = useState<Step>('pick');
  const [submitting, setSubmitting] = useState(false);
  const [formErr, setFormErr] = useState('');

  async function loadSlots() {
    setLoading(true); setLoadErr(false);
    try {
      const r = await fetch('/api/booking/slots', { headers: { Accept: 'application/json' } });
      const j = await r.json();
      if (!j?.success) throw new Error('bad');
      setSlots(j.data.slots || []);
      setDurationMin(j.data.durationMin || 45);
    } catch { setLoadErr(true); }
    setLoading(false);
  }
  useEffect(() => { loadSlots(); }, []);

  const days = Array.from(new Set(slots.map(localDay)));
  const activeDay = day || days[0] || '';
  const dayTimes = slots.filter((s) => localDay(s) === activeDay);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? '').trim();
    if (!get('name') || !get('email')) { setFormErr(t.errNamed); return; }
    setSubmitting(true); setFormErr('');
    try {
      const r = await fetch('/api/booking/create', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: get('name'), email: get('email'), company: get('company'), buildType: get('buildType'), notes: get('notes'), start: selected, website: get('website') }),
      });
      const j = await r.json();
      if (j?.success) { setStep('done'); }
      else if (r.status === 409) { setFormErr(t.taken); setSelected(''); setStep('pick'); await loadSlots(); }
      else { setFormErr(j?.error || t.generic); }
    } catch { setFormErr(t.net); }
    setSubmitting(false);
  }

  if (loading) return <div className="booking"><p className="booking-muted">{t.loading}</p></div>;

  if (loadErr) return (
    <div className="booking">
      <p className="booking-muted">{t.loadErr1}<br /><a className="inline-link" href={t.contact}>{t.loadErr2}</a>.</p>
    </div>
  );

  if (step === 'done') return (
    <div className="booking">
      <div className="booking-done">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <circle cx="28" cy="28" r="26" stroke="#3DDC84" strokeWidth="2" />
          <path d="M17 28l7 7 14-14" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>{t.doneTitle}</h3>
        <p className="lead">{fmtFull(selected)} · {durationMin} min</p>
        <p>{t.doneBody}</p>
        <a href={t.home} className="inline-link">{t.back}</a>
      </div>
    </div>
  );

  if (step === 'details') return (
    <div className="booking">
      <p className="booking-step-h">{t.step2}</p>
      <div className="booking-summary">
        <span className="bs-when">{fmtFull(selected)} · {durationMin} min</span>
        <button type="button" className="booking-back" onClick={() => { setStep('pick'); setFormErr(''); }}>{t.changeTime}</button>
      </div>
      <form className="contact-form" onSubmit={submit} noValidate>
        <div className="fg">
          <label htmlFor="b-name">{t.name} <span className="req" aria-hidden="true">*</span></label>
          <input id="b-name" name="name" type="text" autoComplete="name" required placeholder="Jordan Smit" />
        </div>
        <div className="fg">
          <label htmlFor="b-email">{t.email} <span className="req" aria-hidden="true">*</span></label>
          <input id="b-email" name="email" type="email" autoComplete="email" required placeholder="jordan@bedrijf.com" />
        </div>
        <div className="fg-2">
          <div className="fg">
            <label htmlFor="b-company">{t.company} <span className="opt">{t.optional}</span></label>
            <input id="b-company" name="company" type="text" autoComplete="organization" placeholder="Acme" />
          </div>
          <div className="fg">
            <label htmlFor="b-build">{t.build} <span className="opt">{t.optional}</span></label>
            <select id="b-build" name="buildType" defaultValue="">
              <option value="">{t.buildChoose}</option>
              {t.buildOpts.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="fg">
          <label htmlFor="b-notes">{t.prep} <span className="opt">{t.optional}</span></label>
          <textarea id="b-notes" name="notes" rows={3} placeholder={t.prepPh}></textarea>
        </div>
        <div className="hp" aria-hidden="true"><label htmlFor="b-website">Leave empty</label><input id="b-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
        <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>{submitting ? t.booking : t.confirm}</button>
        {formErr && <p className="booking-err" role="alert">{formErr}</p>}
        <p className="form-note">{t.note}</p>
      </form>
    </div>
  );

  return (
    <div className="booking">
      <p className="booking-step-h">{t.step1}</p>
      {days.length === 0 ? (
        <p className="booking-muted">{t.noTimes1}<br /><a className="inline-link" href={t.contact}>{t.noTimes2}</a>.</p>
      ) : (
        <>
          {formErr && <p className="booking-err" role="alert" style={{ marginTop: 0, marginBottom: '1rem' }}>{formErr}</p>}
          <div className="booking-days" role="tablist" aria-label="Days">
            {days.map((d) => {
              const c = fmtDayChip(d);
              return (
                <button key={d} type="button" role="tab" aria-selected={d === activeDay}
                  className={`day-chip${d === activeDay ? ' sel' : ''}`} onClick={() => setDay(d)}>
                  {c.dow}<b>{c.date}</b>
                </button>
              );
            })}
          </div>
          <div className="booking-times">
            {dayTimes.map((s) => (
              <button key={s} type="button" className="time-chip" onClick={() => { setSelected(s); setStep('details'); setFormErr(''); }}>
                {fmtTime(s)}
              </button>
            ))}
          </div>
          <p className="booking-tz">{t.tz(tz, durationMin)}</p>
        </>
      )}
      <p className="booking-fallback">{t.fallback1} <a className="inline-link" href={t.contact}>{t.fallback2}</a></p>
    </div>
  );
}
