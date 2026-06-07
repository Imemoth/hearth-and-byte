'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useRevealProps } from '@/src/hooks/useScrollReveal'

export default function Akadalymentesites() {
  const r = useRevealProps()

  return (
    <main id="main">
      {/* ===== page hero ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <span className="c1">Szolgáltatások</span>
              <span className="sl">/</span>
              <span className="c2">Akadálymentesítés</span>
            </div>
            <motion.h1 {...r}>
              Weboldal <span className="hl">akadálymentesítés</span>
            </motion.h1>
            <motion.p className="lead" {...r}>
              A 2022. évi XVII. törvény alapján 2025. június 28-tól minden céget érint, amely online értékesít. WCAG 2.1 AA megfelelés — audittól a nyilatkozatig.
            </motion.p>
            <motion.div className="tag-row" {...r}>
              <span className="pill pill-warn"><span className="dot"></span> Törvényi kötelezettség</span>
              <span className="pill pill-accent">WCAG 2.1 AA</span>
              <span className="pill">40 000 Ft-tól</span>
            </motion.div>
          </div>
          <div className="glyph" aria-hidden="true">A11Y</div>
        </div>
      </section>

      <div className="page-body">
        <div className="wrap stack">

          {/* ===== law + principles ===== */}
          <section>
            <div className="law-grid">
              <div>
                <motion.span className="eyebrow" {...r}>A törvény</motion.span>
                <motion.h2 style={{ fontSize: 'var(--step3)', marginTop: '12px' }} {...r}>Mit ír elő?</motion.h2>
                <motion.p className="muted" style={{ marginTop: '14px', fontSize: 'var(--step0)', maxWidth: '48ch' }} {...r}>
                  Az Európai Akadálymentesítési Irányelv (EAA) és a magyar 2022. évi XVII. törvény alapján minden online terméket vagy szolgáltatást nyújtó cégnek akadálymentesen kell üzemeltetnie a weboldalát.
                </motion.p>
              </div>
              <motion.div className="card law-card" {...r}>
                <span className="date-badge">
                  <svg className="lucide" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>{' '}
                  2025. június 28.
                </span>
                <h3>Kikre vonatkozik?</h3>
                <ul className="tick-list">
                  <li>
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18">
                      <use href="#i-check" />
                    </svg>
                    Online termékeket, szolgáltatásokat kínáló cégek
                  </li>
                  <li>
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18">
                      <use href="#i-check" />
                    </svg>
                    Webshopot üzemeltetők
                  </li>
                  <li>
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18">
                      <use href="#i-check" />
                    </svg>
                    Foglalást, időpontot fogadók online
                  </li>
                  <li className="neg">
                    <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18">
                      <use href="#i-x" />
                    </svg>
                    Kivétel: 10 főnél kisebb mikrovállalkozások (egyes esetekben)
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="principle-grid" style={{ marginTop: '28px' }}>
              <motion.div className="card principle" {...r}>
                <div className="num">01</div>
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-eye" />
                  </svg>
                </span>
                <h3>Érzékelhető</h3>
                <p>Alt szövegek, színkontraszt, szövegalternatívák minden felhasználónak.</p>
                <span className="pill en">Perceivable</span>
              </motion.div>
              <motion.div className="card principle" {...r}>
                <div className="num">02</div>
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-keyboard" />
                  </svg>
                </span>
                <h3>Működtethető</h3>
                <p>Billentyűzettel is teljes mértékben irányítható, nincs fókuszcsapda.</p>
                <span className="pill en">Operable</span>
              </motion.div>
              <motion.div className="card principle" {...r}>
                <div className="num">03</div>
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-bulb" />
                  </svg>
                </span>
                <h3>Érthető</h3>
                <p>Kiszámítható működés, hibakezelés, konzisztens navigáció.</p>
                <span className="pill en">Understandable</span>
              </motion.div>
              <motion.div className="card principle" {...r}>
                <div className="num">04</div>
                <span className="icon-badge">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="26" height="26">
                    <use href="#i-wrench" />
                  </svg>
                </span>
                <h3>Robusztus</h3>
                <p>Képernyőolvasóval, nagyítóval is tökéletesen működik.</p>
                <span className="pill en">Robust</span>
              </motion.div>
            </div>
          </section>

          {/* ===== process ===== */}
          <section>
            <div className="section-head" style={{ marginBottom: '28px' }}>
              <motion.span className="eyebrow" {...r}>Munkamenet</motion.span>
              <motion.h2 {...r}>Hogyan dolgozom?</motion.h2>
            </div>
            <div className="step-grid">
              <motion.div className="card step-card" {...r}>
                <div className="num">01</div>
                <h3>Ingyenes konzultáció</h3>
                <p>30 perces egyeztetés, átnézzük az oldalt és a platformot. Kötelezettség nélkül.</p>
                <span className="pill dur">Ingyenes · 30 perc</span>
              </motion.div>
              <motion.div className="card step-card is-key" {...r}>
                <div className="num">02</div>
                <h3>Audit &amp; hibajegyzék</h3>
                <p>Automatizált (axe, WAVE, Lighthouse) és manuális tesztelés. Prioritizált PDF riport.</p>
                <span className="pill pill-accent dur">1–3 munkanap</span>
              </motion.div>
              <motion.div className="card step-card" {...r}>
                <div className="num">03</div>
                <h3>Javítás</h3>
                <p>Kontrasztok, alt szövegek, ARIA attribútumok, fókuszkezelés, form feliratok.</p>
                <span className="pill dur">3–10 munkanap</span>
              </motion.div>
              <motion.div className="card step-card" {...r}>
                <div className="num">04</div>
                <h3>Nyilatkozat &amp; átadás</h3>
                <p>Kötelező Accessibility Statement elkészítése, ellenőrzés, dokumentáció átadása.</p>
                <span className="pill dur">1–2 munkanap</span>
              </motion.div>
            </div>
          </section>

          {/* ===== audit checklist ===== */}
          <section>
            <div className="section-head" style={{ marginBottom: '18px' }}>
              <motion.span className="eyebrow" {...r}>Audit ellenőrzőlista</motion.span>
              <motion.h2 {...r}>Mit vizsgálok?</motion.h2>
              <motion.p {...r}>Minden szempont részletes hibaleírással és javítási javaslattal kerül a jelentésbe.</motion.p>
            </div>
            <motion.div className="legend" {...r}>
              <span><i className="sev-c"></i> Kritikus — törvényi</span>
              <span><i className="sev-m"></i> Közepes</span>
              <span><i className="sev-l"></i> Ajánlott</span>
            </motion.div>
            <div className="check-grid">
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-eye" /></svg>
                  <h3>Vizuális &amp; kontraszt</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Szöveg–háttér kontraszt (min. 4.5:1)</li>
                  <li><i className="sev-c"></i> Nagy szöveg kontraszt (min. 3:1)</li>
                  <li><i className="sev-c"></i> UI elemek kontrasztja</li>
                  <li><i className="sev-m"></i> 200%-os zoom törés nélkül</li>
                  <li><i className="sev-l"></i> Betűköz növelés funkció</li>
                </ul>
              </motion.div>
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-file" /></svg>
                  <h3>Képek &amp; média</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Alt szöveg minden tartalmi képnél</li>
                  <li><i className="sev-c"></i> Dekoratív képek üres alt=""</li>
                  <li><i className="sev-c"></i> Videók feliratozása</li>
                  <li><i className="sev-m"></i> Komplex képek szöveges leírása</li>
                  <li><i className="sev-l"></i> Animációk megállíthatósága</li>
                </ul>
              </motion.div>
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-keyboard" /></svg>
                  <h3>Billentyűzet &amp; navigáció</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Tab-sorrend logikus</li>
                  <li><i className="sev-c"></i> Fókuszállapot vizuálisan látható</li>
                  <li><i className="sev-c"></i> Nincs fókuszcsapda</li>
                  <li><i className="sev-m"></i> Skip navigation link</li>
                  <li><i className="sev-m"></i> Dropdown menük billentyűzettel</li>
                </ul>
              </motion.div>
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-doc" /></svg>
                  <h3>Formok &amp; interakciók</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Form mezők helyes label</li>
                  <li><i className="sev-c"></i> Hibaüzenetek érthetők</li>
                  <li><i className="sev-c"></i> Kötelező mezők jelölve</li>
                  <li><i className="sev-m"></i> Autocomplete attribútumok</li>
                  <li><i className="sev-l"></i> CAPTCHA alternatíva</li>
                </ul>
              </motion.div>
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-monitor" /></svg>
                  <h3>HTML struktúra</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Heading hierarchia (h1→h2→h3)</li>
                  <li><i className="sev-c"></i> Landmark régiók (header, main, nav)</li>
                  <li><i className="sev-c"></i> Egyedi oldalcím minden oldalon</li>
                  <li><i className="sev-m"></i> Listák szemantikus elemekkel</li>
                  <li><i className="sev-l"></i> lang attribútum</li>
                </ul>
              </motion.div>
              <motion.div className="card check-card" {...r}>
                <div className="ch-head">
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="18" height="18"><use href="#i-shield" /></svg>
                  <h3>Jogi dokumentumok</h3>
                </div>
                <ul>
                  <li><i className="sev-c"></i> Accessibility Statement megléte</li>
                  <li><i className="sev-c"></i> Visszajelzési mechanizmus</li>
                  <li><i className="sev-c"></i> Hatósághoz fordulás lehetősége</li>
                  <li><i className="sev-m"></i> Megfelelési szint megjelölve</li>
                  <li><i className="sev-m"></i> Ismert hiányosságok listája</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ===== FAQ ===== */}
          <section>
            <div className="section-head" style={{ marginBottom: '18px' }}>
              <motion.span className="eyebrow" {...r}>Kérdések</motion.span>
              <motion.h2 {...r}>Amit a legtöbben kérdeznek</motion.h2>
            </div>
            <motion.div className="faq" {...r}>
              <details className="faq-item">
                <summary>
                  Engem is érint a törvény?{' '}
                  <svg className="ic lucide" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <div className="ans">
                  Ha online értékesítesz, foglalást fogadsz, webshopot üzemeltetsz, vagy bármilyen digitális szolgáltatást nyújtasz – igen, valószínűleg érint. A 2022. évi XVII. törvény a magánszektorra 2025. június 28-tól vonatkozik.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  Mi történik, ha nem felelek meg?{' '}
                  <svg className="ic lucide" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <div className="ans">
                  A fogyasztóvédelmi hatóság ellenőrzi. Először felszólítás és határidős javítás, ismétlés esetén pénzbírság következhet.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  Mennyi ideig tart az audit?{' '}
                  <svg className="ic lucide" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <div className="ans">
                  Egyszerűbb weboldalnál 1-2 munkanap. Összetettebb webshopnál 3-4 munkanap. Az eredményt mindig részletes PDF dokumentumban adom át.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  Mi az Accessibility Statement?{' '}
                  <svg className="ic lucide" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </summary>
                <div className="ans">
                  Kötelező, nyilvánosan elérhető dokumentum a weboldalon, amely leírja a megfelelési szintet, az ismert hiányosságokat, és megad egy elérhetőséget a visszajelzéshez.
                </div>
              </details>
            </motion.div>
          </section>

          {/* ===== closing CTA ===== */}
          <section>
            <motion.div className="cta" {...r}>
              <div>
                <h2>Nézzük meg együtt, hol állsz.</h2>
                <p>Ingyenes gyorsaudit, utána részletes árajánlat — kötelezettség nélkül.</p>
              </div>
              <div className="hero-cta">
                <Link className="btn btn-primary btn-lg" href="/arlista">
                  Árlista{' '}
                  <svg aria-hidden="true" className="lucide" viewBox="0 0 24 24" width="20" height="20">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="btn btn-lg btn-white" href="/kapcsolat">Ajánlatot kérek</Link>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </main>
  )
}
