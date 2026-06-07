'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoMark from '../assets/LogoMark'
import { setTheme, useThemeValue } from '../hooks/useTheme'

interface HeaderProps {
  onMenuOpen: () => void
  menuOpen: boolean
}

export default function Header({ onMenuOpen, menuOpen }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="Heart & Byte főoldal">
          <span className="logo-mark">
            <LogoMark />
          </span>
          <span className="logo-word">
            Heart <span className="amp">&amp;</span> Byte
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Fő navigáció">
          <Link
            href="/akadalymentesites"
            aria-current={pathname === '/akadalymentesites' ? 'page' : undefined}
          >
            Akadálymentesítés{' '}
            <span className="nav-mini">Aktív</span>
          </Link>
          <Link
            href="/chatbot"
            aria-current={pathname === '/chatbot' ? 'page' : undefined}
          >
            Chatbot{' '}
            <span className="nav-mini soon">Hamarosan</span>
          </Link>
          <Link
            href="/honlap"
            aria-current={pathname === '/honlap' ? 'page' : undefined}
          >
            Honlap{' '}
            <span className="nav-mini soon">Hamarosan</span>
          </Link>
          <Link
            href="/tudastar"
            aria-current={pathname.startsWith('/tudastar') ? 'page' : undefined}
          >
            Tudástár
          </Link>
          <Link
            href="/arlista"
            aria-current={pathname === '/arlista' ? 'page' : undefined}
          >
            Árlista
          </Link>
          <Link
            href="/kapcsolat"
            aria-current={pathname === '/kapcsolat' ? 'page' : undefined}
          >
            Kapcsolat
          </Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href="/kapcsolat" className="btn btn-primary desktop-cta">
            Konzultáció{' '}
            <svg aria-hidden="true" focusable={false}>
              <use href="#i-arrow" />
            </svg>
          </Link>
          <button
            className="hamburger"
            type="button"
            aria-label="Menü megnyitása"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={onMenuOpen}
          >
            <svg aria-hidden="true" focusable={false}>
              <use href="#i-menu" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export function ThemeToggle() {
  const current = useThemeValue()

  return (
    <div className="theme-toggle" role="group" aria-label="Téma váltása">
      <button
        type="button"
        data-theme-set="light"
        aria-label="Világos téma"
        aria-pressed={current === 'light'}
        onClick={() => setTheme('light')}
      >
        <svg aria-hidden="true" focusable={false}>
          <use href="#i-sun" />
        </svg>
      </button>
      <button
        type="button"
        data-theme-set="dark"
        aria-label="Sötét téma"
        aria-pressed={current === 'dark'}
        onClick={() => setTheme('dark')}
      >
        <svg aria-hidden="true" focusable={false}>
          <use href="#i-moon" />
        </svg>
      </button>
    </div>
  )
}
