import Link from 'next/link'
import LogoMark from '../assets/LogoMark'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Heart & Byte főoldal">
              <span className="logo-mark">
                <LogoMark />
              </span>
              <span className="logo-word">
                Heart <span className="amp">&amp;</span> Byte
              </span>
            </Link>
            <p>
              Akadálymentes web, AI és honlapok magyar kis- és középvállalkozásoknak.
            </p>
          </div>

          {/* Szolgáltatások */}
          <div className="footer-col">
            <h4>Szolgáltatások</h4>
            <ul>
              <li>
                <Link href="/akadalymentesites">Akadálymentesítés</Link>
              </li>
              <li>
                <Link href="/chatbot">AI Chatbot</Link>
              </li>
              <li>
                <Link href="/honlap">Honlap készítés</Link>
              </li>
            </ul>
          </div>

          {/* Cég */}
          <div className="footer-col">
            <h4>Cég</h4>
            <ul>
              <li>
                <Link href="/arlista">Árlista</Link>
              </li>
              <li>
                <Link href="/kapcsolat">Kapcsolat</Link>
              </li>
              <li>
                <Link href="/">Főoldal</Link>
              </li>
            </ul>
          </div>

          {/* Jogi */}
          <div className="footer-col">
            <h4>Jogi</h4>
            <ul>
              <li>
                <Link href="/kapcsolat">Adatvédelem</Link>
              </li>
              <li>
                <Link href="/akadalymentesites">
                  Akadálymentességi nyilatkozat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Heart &amp; Byte · Minden jog fenntartva</span>
          <span>Készült akadálymentesen — WCAG 2.1 AA</span>
        </div>
      </div>
    </footer>
  )
}
