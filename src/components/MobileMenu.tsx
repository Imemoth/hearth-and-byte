'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import LogoMark from '../assets/LogoMark'
import { ThemeToggle } from './Header'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // scroll-lock + initial focus
  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open')
      setTimeout(() => {
        const first = menuRef.current?.querySelector<HTMLElement>('a, button')
        first?.focus()
      }, 50)
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  // ESC + focus trap
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!open) return
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // close on desktop breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) onClose()
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          id="mobile-menu"
          className="mobile-menu"
          data-open="true"
          aria-modal="true"
          role="dialog"
          aria-label="Navigációs menü"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div
            className="wrap"
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            {/* top bar */}
            <div className="mm-top">
              <Link
                href="/"
                className="brand"
                aria-label="Heart & Byte főoldal"
                onClick={onClose}
              >
                <span className="logo-mark">
                  <LogoMark />
                </span>
                <span className="logo-word">
                  Heart <span className="amp">&amp;</span> Byte
                </span>
              </Link>
              <button
                className="mm-close"
                type="button"
                aria-label="Menü bezárása"
                onClick={onClose}
              >
                <svg aria-hidden="true" focusable={false}>
                  <use href="#i-x" />
                </svg>
              </button>
            </div>

            {/* scrollable body */}
            <div className="mm-body">
              {/* Navigáció */}
              <div className="mm-group">
                <span className="lbl">Navigáció</span>
                <Link
                  className="mm-link"
                  href="/"
                  aria-current={pathname === '/' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-monitor" />
                  </svg>
                  <span className="t">Főoldal</span>
                </Link>
              </div>

              {/* Szolgáltatások */}
              <div className="mm-group">
                <span className="lbl">Szolgáltatások</span>
                <Link
                  className="mm-link"
                  href="/akadalymentesites"
                  aria-current={pathname === '/akadalymentesites' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-access" />
                  </svg>
                  <span className="t">Akadálymentesítés</span>
                  <span className="pill pill-accent">
                    <span className="dot" />
                    Aktív
                  </span>
                </Link>
                <Link
                  className="mm-link"
                  href="/chatbot"
                  aria-current={pathname === '/chatbot' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-chat" />
                  </svg>
                  <span className="t">Chatbot</span>
                  <span className="pill pill-soon">Hamarosan</span>
                </Link>
                <Link
                  className="mm-link"
                  href="/honlap"
                  aria-current={pathname === '/honlap' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-monitor" />
                  </svg>
                  <span className="t">Honlap</span>
                  <span className="pill pill-soon">Hamarosan</span>
                </Link>
              </div>

              {/* Tudástár */}
              <div className="mm-group">
                <span className="lbl">Tudástár</span>
                <Link
                  className="mm-link"
                  href="/tudastar"
                  aria-current={pathname.startsWith('/tudastar') ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-doc" />
                  </svg>
                  <span className="t">Tudástár</span>
                  <span className="pill pill-accent"><span className="dot" />5 cikk</span>
                </Link>
              </div>

              {/* Részletek */}
              <div className="mm-group">
                <span className="lbl">Részletek</span>
                <Link
                  className="mm-link"
                  href="/arlista"
                  aria-current={pathname === '/arlista' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-file" />
                  </svg>
                  <span className="t">Árlista</span>
                </Link>
                <Link
                  className="mm-link"
                  href="/kapcsolat"
                  aria-current={pathname === '/kapcsolat' ? 'page' : undefined}
                  onClick={onClose}
                >
                  <svg className="lead" aria-hidden="true" focusable={false}>
                    <use href="#i-mail" />
                  </svg>
                  <span className="t">Kapcsolat</span>
                </Link>
              </div>

              {/* footer: CTA + theme */}
              <div className="mm-foot">
                <Link
                  href="/kapcsolat"
                  className="btn btn-primary"
                  onClick={onClose}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Konzultáció kérése{' '}
                  <svg aria-hidden="true" focusable={false}>
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <div className="mm-theme">
                  <span
                    className="lbl"
                    style={{ color: 'var(--text-2)', fontWeight: 600 }}
                  >
                    Téma
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
