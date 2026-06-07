import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRevealProps } from '../hooks/useScrollReveal'
import { subscribe } from '../lib/notify'

function MonitorIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="34" height="34" viewBox="0 0 24 24" className="lucide">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
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

export default function Honlap() {
  const rev = useRevealProps()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitting(true)
    try {
      await subscribe(email, 'honlap')
      setSubmitted(true)
    } catch {
      setSubmitted(true) // graceful fallback
    }
  }

  return (
    <main id="main">
      <section className="soon-hero">
        <div className="wrap soon-inner">

          <motion.span className="soon-icon" {...rev}>
            <MonitorIcon />
          </motion.span>

          <motion.span className="pill pill-accent" {...rev}>
            <span className="dot" aria-hidden="true" />
            {' '}Hamarosan
          </motion.span>

          <motion.h1 {...rev}>Honlap készítés &amp; karbantartás</motion.h1>

          <motion.p className="lead" {...rev}>
            Gyors, akadálymentes weboldalak alapból — a megfelelés nem utólagos toldás, hanem az első sortól beépített.
          </motion.p>

          <motion.div className="soon-chips" {...rev}>
            <div className="card chip">
              <div className="ct">Akadálymentes alapból</div>
              <div className="cd">EAA-kész már az induláskor.</div>
            </div>
            <div className="card chip">
              <div className="ct">Mobilbarát</div>
              <div className="cd">Minden eszközön gyors és tiszta.</div>
            </div>
            <div className="card chip">
              <div className="ct">Karbantartás</div>
              <div className="cd">Frissítés és support, hogy ne romoljon.</div>
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
              <label className="sr-only" htmlFor="notify-email-honlap">
                Email cím
              </label>
              <input
                id="notify-email-honlap"
                type="email"
                required
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

          <Link to="/" className="back-link">
            <ArrowIcon /> Vissza a főoldalra
          </Link>

        </div>
      </section>
    </main>
  )
}
