import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRevealProps } from '../hooks/useScrollReveal'
import { subscribe } from '../lib/notify'

function ChatIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="34" height="34" viewBox="0 0 24 24" className="lucide">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="20" height="20" viewBox="0 0 24 24" className="lucide">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="16" height="16" viewBox="0 0 24 24" className="lucide" style={{ transform: 'rotate(180deg)' }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Chatbot() {
  const rev = useRevealProps()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setServerError('')
    setSubmitting(true)
    try {
      await subscribe(email, 'chatbot')
      setSubmitted(true)
    } catch {
      setServerError('Valami hiba történt — kérjük próbálja újra.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main id="main">
      <section className="soon-hero">
        <div className="wrap soon-inner">

          <motion.span className="soon-icon" {...rev}>
            <ChatIcon />
          </motion.span>

          <motion.span className="pill pill-accent" {...rev}>
            <span className="dot" aria-hidden="true" />
            {' '}Hamarosan
          </motion.span>

          <motion.h1 {...rev}>AI Chatbot KKV-knak</motion.h1>

          <motion.p className="lead" {...rev}>
            Magyar nyelvű ügyfélszolgálati asszisztens, amely a saját tartalmaidból válaszol — éjjel-nappal, türelmesen.
          </motion.p>

          <motion.div className="soon-chips" {...rev}>
            <div className="card chip">
              <div className="ct">Saját tudásbázis</div>
              <div className="cd">A te tartalmaidból, a te hangodon válaszol.</div>
            </div>
            <div className="card chip">
              <div className="ct">0–24 elérhető</div>
              <div className="cd">Akkor is válaszol, amikor te nem érsz rá.</div>
            </div>
            <div className="card chip">
              <div className="ct">Pár sor kód</div>
              <div className="cd">Beágyazható bármilyen weboldalba.</div>
            </div>
          </motion.div>

          {submitted ? (
            <motion.p
              className="notify-done"
              style={{ display: 'flex' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              role="status"
            >
              <CheckIcon /> Feliratkozva — szólunk, amint indul!
            </motion.p>
          ) : (
            <motion.form
              className="notify"
              onSubmit={handleNotify}
              {...rev}
            >
              <label className="sr-only" htmlFor="notify-email-chatbot">
                Email cím
              </label>
              <input
                id="notify-email-chatbot"
                type="email"
                required
                maxLength={200}
                placeholder="email@céged.hu"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting ? 'Küldés…' : 'Értesítést kérek'}
              </button>
            </motion.form>
          )}
          {serverError && (
            <p role="alert" style={{ color: 'var(--error, #c0392b)', marginTop: 8, fontSize: 'var(--step-1, 0.875rem)' }}>
              {serverError}
            </p>
          )}

          <Link to="/" className="back-link">
            <ArrowIcon /> Vissza a főoldalra
          </Link>

        </div>
      </section>
    </main>
  )
}
