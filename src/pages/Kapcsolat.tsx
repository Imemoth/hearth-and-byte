import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useRevealProps } from '../hooks/useScrollReveal'
import { submitLead } from '../lib/contact'

function MailIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="20" height="20" viewBox="0 0 24 24" className="lucide">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2 7 12 13 22 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="20" height="20" viewBox="0 0 24 24" className="lucide">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12 19.79 19.79 0 0 1 1.85 3.44 2 2 0 0 1 3.82 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="20" height="20" viewBox="0 0 24 24" className="lucide">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="20" height="20" viewBox="0 0 24 24" className="lucide">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="18" height="18" viewBox="0 0 24 24" className="lucide">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

type Fields = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

function validate(fields: Fields): Record<string, string> {
  const e: Record<string, string> = {}
  if (!fields.name.trim()) e.name = 'A név megadása kötelező.'
  if (!fields.email.trim()) e.email = 'Az email megadása kötelező.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Érvénytelen email cím.'
  if (!fields.message.trim()) e.message = 'Az üzenet megadása kötelező.'
  return e
}

export default function Kapcsolat() {
  const rev = useRevealProps()
  const doneRef = useRef<HTMLDivElement>(null)

  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startCooldown = useCallback((seconds: number) => {
    setCooldown(seconds)
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(cooldownRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  useEffect(() => {
    if (submitted && doneRef.current) {
      doneRef.current.focus()
    }
  }, [submitted])

  useEffect(() => {
    return () => { if (cooldownRef.current) clearInterval(cooldownRef.current) }
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (cooldown > 0) return
    setServerError('')
    const errs = validate(fields)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitting(true)
    try {
      await submitLead({
        name: fields.name,
        email: fields.email,
        phone: fields.phone || undefined,
        message: fields.message,
        service: fields.service || undefined,
      })
      setSubmitted(true)
    } catch {
      setServerError(
        'Valami hiba történt — kérjük próbálja újra, vagy írjon emailt a hello@heartandbyte.hu címre.',
      )
      startCooldown(60)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <span className="c1">Részletek</span>
              <span className="sl">/</span>
              <span className="c2">Kapcsolat</span>
            </div>
            <motion.h1 {...rev}>
              Vegyük fel <span className="hl">a kapcsolatot</span>
            </motion.h1>
            <motion.p className="lead" {...rev}>
              Ingyenes 30 perces konzultáció — átnézzük az oldaladat és megmondom, mire kell figyelni. Kötelezettség nélkül.
            </motion.p>
          </div>
          <div className="glyph" aria-hidden="true">HI</div>
        </div>
      </section>

      {/* Page body */}
      <div className="page-body">
        <div className="wrap">
          <div className="contact-grid">

            {/* Contact card */}
            <motion.div className="card contact-card" {...rev}>
              <h3>Elérhetőségek</h3>

              <div className="c-row">
                <span className="icon-badge xs" aria-hidden="true"><MailIcon /></span>
                <div>
                  <div className="c-label">Email</div>
                  <a className="c-val" href="mailto:hello@heartandbyte.hu">hello@heartandbyte.hu</a>
                </div>
              </div>

              <div className="c-row">
                <span className="icon-badge xs" aria-hidden="true"><PhoneIcon /></span>
                <div>
                  <div className="c-label">Telefon</div>
                  <a className="c-val" href="tel:+36301234567">+36 30 123 4567</a>
                </div>
              </div>

              <div className="c-row">
                <span className="icon-badge xs" aria-hidden="true"><ClockIcon /></span>
                <div>
                  <div className="c-label">Válaszidő</div>
                  <div className="c-val">24 órán belül</div>
                </div>
              </div>

              <div className="c-row">
                <span className="icon-badge xs" aria-hidden="true"><PinIcon /></span>
                <div>
                  <div className="c-label">Helyszín</div>
                  <div className="c-val">Magyarország · Online is</div>
                </div>
              </div>
            </motion.div>

            {/* Aside stack */}
            <div className="aside-stack">
              <motion.div className="card aside-card" {...rev}>
                <h3>Mire számíts</h3>
                <ul className="arrow-list">
                  <li>
                    <ArrowIcon />
                    Emailre 24 órán belül válaszolok
                  </li>
                  <li>
                    <ArrowIcon />
                    Az első konzultáció ingyenes és kötelezettségmentes
                  </li>
                  <li>
                    <ArrowIcon />
                    Az audit után mindig kapsz árajánlatot a javításra — te döntesz
                  </li>
                  <li>
                    <ArrowIcon />
                    Általában 1 hetes várólistával számolj
                  </li>
                </ul>
              </motion.div>

              <motion.div className="urgent" {...rev}>
                <b>Sürgős eset?</b> Ha a hatóság már felszólított vagy hamarosan ellenőrzés várható, jelezd az emailben — próbálok soron kívül segíteni.
              </motion.div>
            </div>

          </div>
        </div>

        {/* Contact form */}
        <div className="wrap" style={{ marginTop: 'clamp(44px, 6vw, 80px)' }}>
          <motion.h2 style={{ marginBottom: 32, fontSize: 'var(--step3)' }} {...rev}>
            Írj üzenetet
          </motion.h2>

          {submitted ? (
            <div
              ref={doneRef}
              tabIndex={-1}
              data-contact-done
              style={{
                padding: '24px 28px',
                background: 'var(--accent-weak)',
                border: '1.5px solid var(--accent-line)',
                borderRadius: 'var(--radius-l)',
                color: 'var(--accent-ink)',
                fontWeight: 600,
                fontSize: 'var(--step1)',
                maxWidth: 560,
                outline: 'none',
              }}
            >
              Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.
            </div>
          ) : (
            <form
              id="contact-form"
              noValidate
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                maxWidth: 560,
              }}
            >
              <div className="field">
                <label htmlFor="cf-name">
                  Név <span aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={fields.name}
                  onChange={handleChange}
                  aria-describedby={errors.name ? 'cf-name-err' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="field-error" id="cf-name-err" aria-live="polite">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="cf-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  value={fields.email}
                  onChange={handleChange}
                  aria-describedby={errors.email ? 'cf-email-err' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="field-error" id="cf-email-err" aria-live="polite">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="cf-phone">
                  Telefon <span className="optional">(opcionális)</span>
                </label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={30}
                  value={fields.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="cf-service">Miben segíthetünk?</label>
                <select
                  id="cf-service"
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                >
                  <option value="">Válasszon...</option>
                  <option value="akadalymentesites">Akadálymentesítés</option>
                  <option value="chatbot">AI Chatbot</option>
                  <option value="honlap">Honlap készítés</option>
                  <option value="egyeb">Egyéb</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="cf-message">
                  Üzenet <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  value={fields.message}
                  onChange={handleChange}
                  aria-describedby={errors.message ? 'cf-message-err' : undefined}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span className="field-error" id="cf-message-err" aria-live="polite">
                    {errors.message}
                  </span>
                )}
              </div>

              {serverError && (
                <div className="form-error-msg" role="alert">
                  {serverError}
                </div>
              )}

              <button
                id="cf-submit"
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={submitting || cooldown > 0}
                style={{ alignSelf: 'flex-start' }}
              >
                {submitting ? 'Küldés…' : cooldown > 0 ? `Újraküldés ${cooldown}s múlva` : 'Üzenet küldése'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
