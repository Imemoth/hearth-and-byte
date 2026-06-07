import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRevealProps } from '../hooks/useScrollReveal'

export default function Home() {
  const r = useRevealProps()
  const barRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = '98%'
      }
    }, 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <main id="main">
      {/* ===== hero ===== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <motion.span className="pill pill-accent" {...r}>
              <span className="dot"></span> Magyar KKV-knak · 2025
            </motion.span>
            <motion.h1 {...r}>
              Digitális megoldások, <span className="hl">amik mindenkinek működnek.</span>
            </motion.h1>
            <motion.p className="hero-lead" {...r}>
              Akadálymentes weboldalak, amelyek megfelelnek a 2025-ös előírásoknak — és tényleg használhatók. Érthető folyamat, fix árak, magyar nyelven.
            </motion.p>
            <motion.div className="hero-cta" {...r}>
              <Link className="btn btn-primary btn-lg" to="/akadalymentesites">
                Akadálymentesítés{' '}
                <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="20" height="20">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link className="btn btn-ghost btn-lg" to="/kapcsolat">Kapcsolatfelvétel</Link>
            </motion.div>
            <motion.div className="hero-trust" {...r}>
              <span>WCAG 2.1 AA</span>
              <span className="sep"></span>
              <span>Válasz 24 órán belül</span>
              <span className="sep"></span>
              <span>Fix, átlátható árak</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" {...r}>
            {/* TODO: valódi fotó a megrendelőtől — aspect-ratio: 4/4.4, --radius-l, object-fit: cover */}
            <div className="hero-photo">
              Húzz ide egy meleg, emberi fotót (csapat / ügyfél / iroda)
            </div>
            <span className="float-tag">
              <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="15" height="15">
                <use href="#i-shield" />
              </svg>{' '}
              Megfelelés 2025
            </span>
            <aside className="audit-chip" aria-label="Akadálymentességi pontszám">
              <div className="row">
                <span className="label">Akadálymentesség</span>
                <span className="score">98<small>/100</small></span>
              </div>
              <div className="audit-bar">
                <i ref={barRef} style={{ width: 0, transition: 'width 1.1s cubic-bezier(.22,.61,.36,1)' }}></i>
              </div>
              <ul className="checks">
                <li>
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="17" height="17">
                    <use href="#i-check" />
                  </svg>
                  Kontraszt &amp; olvashatóság
                </li>
                <li>
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="17" height="17">
                    <use href="#i-check" />
                  </svg>
                  Billentyűzettel bejárható
                </li>
                <li>
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="17" height="17">
                    <use href="#i-check" />
                  </svg>
                  Képernyőolvasó-barát
                </li>
              </ul>
            </aside>
          </motion.div>
        </div>
      </section>

      {/* ===== stats ===== */}
      <section className="stats" aria-label="Számokban">
        <div className="wrap stats-grid">
          <motion.div className="stat" {...r}>
            <div className="n">~60%</div>
            <p className="l">a magyar KKV-k weboldala nem felel meg az új előírásoknak</p>
          </motion.div>
          <motion.div className="stat" {...r}>
            <div className="n">15%</div>
            <p className="l">a lakosság valamilyen formában akadályozottan használja a webet</p>
          </motion.div>
          <motion.div className="stat" {...r}>
            <div className="n">jún. 28.</div>
            <p className="l">a 2025-ös törvényi megfelelési határidő</p>
          </motion.div>
        </div>
      </section>

      {/* ===== services ===== */}
      <section className="section" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="section-head">
            <motion.span className="eyebrow" {...r}>Szolgáltatások</motion.span>
            <motion.h2 id="svc-title" {...r}>Amiben segítünk</motion.h2>
            <motion.p {...r}>Egy aktív szolgáltatással indulunk, és bővülünk — minden a magyar KKV-k valós igényeire szabva.</motion.p>
          </div>
          <div className="svc-grid">
            <motion.div {...r}>
              <Link className="card svc" to="/akadalymentesites">
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-access" />
                  </svg>
                </span>
                <h3>Weboldal akadálymentesítés</h3>
                <p>Audit és javítás WCAG 2.1 AA szerint, megfelelőségi nyilatkozattal. Törvényi kötelezettség 2025-től.</p>
                <div className="svc-foot">
                  <span className="pill pill-accent"><span className="dot"></span> Aktív · 40 000 Ft-tól</span>
                  <span className="arrow">
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="22" height="22">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div {...r}>
              <Link className="card svc is-soon" to="/chatbot">
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-chat" />
                  </svg>
                </span>
                <h3>AI Chatbot KKV-knak</h3>
                <p>Magyar nyelvű ügyfélszolgálati asszisztens, amely a saját tartalmaidból válaszol — éjjel-nappal.</p>
                <div className="svc-foot">
                  <span className="pill pill-soon">Hamarosan</span>
                  <span className="arrow">
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="22" height="22">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
            <motion.div {...r}>
              <Link className="card svc is-soon" to="/honlap">
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-monitor" />
                  </svg>
                </span>
                <h3>Honlap készítés &amp; karbantartás</h3>
                <p>Gyors, akadálymentes weboldalak alapból — a megfelelés nem utólagos toldás, hanem beépített.</p>
                <div className="svc-foot">
                  <span className="pill pill-soon">Hamarosan</span>
                  <span className="arrow">
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="22" height="22">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== closing cta ===== */}
      <section className="section" aria-labelledby="cta-title">
        <div className="wrap">
          <motion.div className="cta" {...r}>
            <div>
              <h2 id="cta-title">Megfelel a weboldalad a 2025-ös előírásoknak?</h2>
              <p>Kezdjük egy díjmentes gyorsaudittal — megmutatjuk, hol állsz, és mi a következő lépés.</p>
            </div>
            <Link className="btn btn-primary btn-lg" to="/kapcsolat">
              Konzultáció kérése{' '}
              <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="20" height="20">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
