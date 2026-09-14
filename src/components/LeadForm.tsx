import { useRef, useState, type FormEvent } from 'react';
import {
  AUTH_URL,
  LEAD_FROM_NAME,
  LEAD_SUBJECT,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_KEY,
} from '../config';
import { IconArrowRight, IconCheck } from './icons';

type Field = 'name' | 'email' | 'phone';
type Errors = Partial<Record<Field, string>>;
type Status = 'idle' | 'sending' | 'success' | 'error';

const FIELD_ORDER: Field[] = ['name', 'email', 'phone'];

const INTERESTS = [
  'US stocks & ETFs',
  'Structured income notes',
  'Pre-IPO & private equity',
  'Treasuries & bonds',
  'Global funds & REITs',
  'Not sure yet',
];

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const digits = phone.replace(/\D/g, '');

  if (name.length < 2) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email address.';
  if (digits.length < 10 || digits.length > 15 || /[^\d\s()+-]/.test(phone)) {
    errors.phone = 'Please enter a valid phone number, including the country code.';
  }
  return errors;
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = validate(data);
    setErrors(found);
    setServerError('');

    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      form.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', LEAD_SUBJECT);
    data.append('from_name', LEAD_FROM_NAME);

    setStatus('sending');
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (response.ok && result?.success) {
        setStatus('success');
        requestAnimationFrame(() => successRef.current?.focus());
      } else {
        setStatus('error');
        setServerError(result?.message || 'Could not submit. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" ref={successRef} tabIndex={-1} role="status">
        <span className="form-success-icon" aria-hidden="true">
          <IconCheck size={30} strokeWidth={2.2} />
        </span>
        <h3 className="form-card-title">Got it, we&apos;re on it.</h3>
        <p className="form-success-text">
          A Bonanza powered by Valura.Ai specialist will reach out within one business day. Meanwhile, the
          Valura.Ai app is the fastest way to feel the platform.
        </p>
        <a className="btn btn-primary" href={AUTH_URL}>
          Open the platform
        </a>
      </div>
    );
  }

  const describedBy = (field: Field) => (errors[field] ? `lead-${field}-error` : undefined);

  return (
    <form
      id="lead-form"
      className="contact-form"
      data-testid="lead-form"
      aria-labelledby="lead-form-title"
      aria-busy={status === 'sending'}
      noValidate
      onSubmit={handleSubmit}
    >
      <div>
        <h3 id="lead-form-title" className="form-card-title">
          Talk to a specialist
        </h3>
        <p className="form-card-sub">One business day response, no auto-newsletters</p>
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {serverError}
        </p>
      )}

      <div className="form-group">
        <label htmlFor="lead-name">Full name</label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy('name')}
        />
        {errors.name && (
          <p id="lead-name-error" className="field-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lead-email">Email</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@domain.com"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy('email')}
        />
        {errors.email && (
          <p id="lead-email-error" className="field-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lead-phone">Phone</label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 9XXXXXXXXX"
          required
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={describedBy('phone')}
        />
        {errors.phone && (
          <p id="lead-phone-error" className="field-error">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lead-interest">Primary interest</label>
        <select id="lead-interest" name="interest" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {INTERESTS.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </div>

      <input type="hidden" name="source" value="bonanza-valura-landing" />
      {/* Web3Forms honeypot: real visitors never see or fill it. */}
      <input type="checkbox" name="botcheck" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="btn btn-primary form-submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Contact us'}
        {status !== 'sending' && <IconArrowRight className="btn-icon" size={20} />}
      </button>

      <p className="form-disclaimer">
        By submitting, you agree to be contacted by Bonanza and Valura.Ai about this enquiry. We never sell
        your data and there&apos;s no marketing list to unsubscribe from.
      </p>
    </form>
  );
}
