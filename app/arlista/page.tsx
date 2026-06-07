'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRevealProps } from '@/src/hooks/useScrollReveal'

function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="17" height="17" viewBox="0 0 24 24" className="lucide">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" focusable={false} width="16" height="16" viewBox="0 0 24 24" className="lucide">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function Arlista() {
  const rev = useRevealProps()

  return (
    <main id="main">
      {/* Page hero */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <span className="c1">Részletek</span>
              <span className="sl">/</span>
              <span className="c2">Árlista</span>
            </div>
            <motion.h1 {...rev}>
              Átlátható <span className="hl">árazás</span>
            </motion.h1>
            <motion.p className="lead" {...rev}>
              Nincs rejtett díj. Az akadálymentesítési csomagok azonnal igénybe vehetők — a többi hamarosan elindul.
            </motion.p>
            <motion.div className="tag-row" {...rev}>
              <span className="pill">Nettó árak · ÁFA nélkül</span>
            </motion.div>
          </div>
          <div className="glyph" aria-hidden="true">ÁR</div>
        </div>
      </section>

      {/* Page body */}
      <div className="page-body">
        <div className="wrap stack">

          {/* Active plans */}
          <section>
            <div className="section-head" style={{ marginBottom: 28 }}>
              <motion.span className="eyebrow" {...rev}>Akadálymentesítés</motion.span>
              <motion.h2 {...rev}>Elérhető csomagok</motion.h2>
            </div>

            <div className="plan-grid">
              {/* Audit */}
              <motion.div className="card plan" {...rev}>
                <span className="pname">Audit</span>
                <span className="price">40 000</span>
                <span className="unit">Ft + ÁFA · egyszeri</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> Automatizált + manuális tesztelés</li>
                  <li><CheckIcon /> Részletes hibajegyzék prioritással</li>
                  <li><CheckIcon /> Javítási javaslatok minden hibához</li>
                  <li><CheckIcon /> Lighthouse &amp; axe riport</li>
                  <li><CheckIcon /> PDF összefoglaló</li>
                </ul>
                <Link href="/kapcsolat" className="btn btn-ghost">Audit kérése</Link>
              </motion.div>

              {/* Audit + Javítás — featured */}
              <motion.div className="card plan featured" {...rev}>
                <span className="ribbon">Legtöbbet választott</span>
                <span className="pname">Audit + Javítás</span>
                <span className="price">120 000–</span>
                <span className="unit">Ft + ÁFA · komplexitástól függ</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> Minden audit csomag tartalma</li>
                  <li><CheckIcon /> Összes kritikus hiba javítása</li>
                  <li><CheckIcon /> ARIA, kontraszt, alt szövegek, heading</li>
                  <li><CheckIcon /> Accessibility Statement nyilatkozat</li>
                  <li><CheckIcon /> Megfelelési teszt átadás után</li>
                  <li><CheckIcon /> 30 nap garancia</li>
                </ul>
                <Link href="/kapcsolat" className="btn btn-primary">Ajánlatot kérek</Link>
              </motion.div>

              {/* Csak Statement */}
              <motion.div className="card plan" {...rev}>
                <span className="pname">Csak Statement</span>
                <span className="price">18 000</span>
                <span className="unit">Ft + ÁFA · egyszeri</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> Accessibility Statement nyilatkozat</li>
                  <li><CheckIcon /> Magyar és angol verzió</li>
                  <li><CheckIcon /> Beágyazási segítség</li>
                  <li><CheckIcon /> Visszajelzési form ajánlás</li>
                </ul>
                <Link href="/kapcsolat" className="btn btn-ghost">Nyilatkozatot kérek</Link>
              </motion.div>
            </div>

            {/* Addon */}
            <motion.div className="card addon" {...rev}>
              <div className="a-txt">
                <h4>Éves megfelelés-fenntartás</h4>
                <p>Negyedéves ellenőrzés — ha az oldal tartalma változik, az akadálymentesség is romolhat.</p>
              </div>
              <div className="a-price">12 000 Ft/hó</div>
              <Link href="/kapcsolat" className="btn btn-ghost">
                Érdekel <ArrowIcon />
              </Link>
            </motion.div>
          </section>

          {/* Coming soon plans */}
          <section>
            <div className="section-head" style={{ marginBottom: 28 }}>
              <motion.span className="eyebrow" {...rev}>Hamarosan elérhető</motion.span>
              <motion.h2 {...rev}>Tervezett árazás</motion.h2>
            </div>

            <div className="plan-grid">
              {/* AI Chatbot Basic */}
              <motion.div className="card plan is-soon" {...rev}>
                <span className="pname">AI Chatbot · Basic</span>
                <span className="price">80 000–</span>
                <span className="unit">Ft + ÁFA setup · + 8 000 Ft/hó</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> FAQ chatbot, 20-30 kérdés-válasz</li>
                  <li><CheckIcon /> Weboldalba beágyazva</li>
                  <li><CheckIcon /> Havi karbantartás és riport</li>
                </ul>
                <div className="soon-tag">Hamarosan</div>
              </motion.div>

              {/* Honlap Starter */}
              <motion.div className="card plan is-soon" {...rev}>
                <span className="pname">Honlap · Starter</span>
                <span className="price">150 000–</span>
                <span className="unit">Ft + ÁFA · egyszeri</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> 5 oldalas, mobilbarát</li>
                  <li><CheckIcon /> EAA akadálymentes alapból</li>
                  <li><CheckIcon /> Alap SEO beállítás</li>
                </ul>
                <div className="soon-tag">Hamarosan</div>
              </motion.div>

              {/* Honlap Business */}
              <motion.div className="card plan is-soon" {...rev}>
                <span className="pname">Honlap · Business</span>
                <span className="price">350 000–</span>
                <span className="unit">Ft + ÁFA · egyszeri</span>
                <hr />
                <ul className="feats">
                  <li><CheckIcon /> 8-10 oldal + blog</li>
                  <li><CheckIcon /> Analytics, chatbot integráció</li>
                  <li><CheckIcon /> 3 hónap support</li>
                </ul>
                <div className="soon-tag">Hamarosan</div>
              </motion.div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
