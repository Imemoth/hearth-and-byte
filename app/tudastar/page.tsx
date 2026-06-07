import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tudástár — Akadálymentesítés és AI chatbot KKV-knak | Heart & Byte',
  description:
    'Ingyenes útmutatók, cikkek és ellenőrzőlisták webes akadálymentesítésről, WCAG-ról és AI chatbotokról magyar KKV-knak.',
}

const articles = [
  {
    href: '/tudastar/mi-az-a-wcag',
    category: 'Akadálymentesítés',
    title: 'Mi az a WCAG? — A webakadálymentesítés alapjai',
    desc: 'WCAG 2.1 AA közérthetően: mit jelent, miért kötelező 2025-től, és mire számíts az audittól.',
    time: '8 perc',
  },
  {
    href: '/tudastar/kotelezo-e-az-akadalymentesites',
    category: 'Jog & Megfelelés',
    title: 'Kötelező-e az akadálymentesítés? — A 2022. évi XVII. törvény',
    desc: 'Ki érintett, mik a határidők, mi a kivétel, és mi történik nemteljesítés esetén.',
    time: '6 perc',
  },
  {
    href: '/tudastar/akadalymentesites-ellenorzolista',
    category: 'Akadálymentesítés',
    title: 'Weboldal akadálymentesítési ellenőrzőlista — 30 kritérium',
    desc: 'Letölthető és végigkövethető ellenőrzőlista: kontrasztok, alt szövegek, billentyűzet, formok és jogi dokumentumok.',
    time: '10 perc',
  },
  {
    href: '/tudastar/mi-az-az-ai-chatbot',
    category: 'AI Chatbot',
    title: 'Mi az az AI chatbot? — Alapfogalmak KKV-knak',
    desc: 'Hogyan működik egy AI chatbot, milyen esetekben éri meg, és mire nem alkalmas.',
    time: '7 perc',
  },
  {
    href: '/tudastar/chatbot-vs-elive-ugyfelszolgalat',
    category: 'AI Chatbot',
    title: 'Chatbot vs. élő ügyfélszolgálat — Mikor melyiket válaszd?',
    desc: 'Összehasonlítás számokkal, konkrét KKV-s esetekkel és döntési segédlettel.',
    time: '8 perc',
  },
]

export default function Tudastar() {
  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <span className="c1">Heart &amp; Byte</span>
              <span className="sl">/</span>
              <span className="c2">Tudástár</span>
            </div>
            <h1>
              Tudástár — <span className="hl">ingyenes útmutatók</span>
            </h1>
            <p className="lead">
              Cikkek, ellenőrzőlisták és útmutatók webes akadálymentesítésről, WCAG-ról és AI chatbotokról — közérthetően, magyar KKV-knak.
            </p>
            <div className="tag-row">
              <span className="pill pill-accent"><span className="dot"></span> {articles.length} cikk</span>
              <span className="pill">Ingyenes</span>
            </div>
          </div>
          <div className="glyph" aria-hidden="true">KB</div>
        </div>
      </section>

      {/* Articles grid */}
      <div className="page-body">
        <div className="wrap">
          <div className="tudastar-grid">
            {articles.map((a) => (
              <Link key={a.href} href={a.href} className="card tudastar-card">
                <span className="eyebrow">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="tc-foot">
                  <span className="pill">{a.time} olvasás</span>
                  <span className="arrow" aria-hidden="true">
                    <svg className="lucide" viewBox="0 0 24 24" width="22" height="22">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
