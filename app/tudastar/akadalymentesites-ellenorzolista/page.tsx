import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Weboldal akadálymentesítés ellenőrzőlistája KKV-knak | Tudástár | Heart & Byte',
  description:
    'Töltsd le és használd ingyenesen ezt az átfogó WCAG 2.1 AA ellenőrzőlistát. 6 kategória, 30+ szempont — kontraszttól a jogi nyilatkozatig. Magyar KKV-knak összeállítva.',
  openGraph: {
    title: 'Weboldal akadálymentesítés ellenőrzőlistája KKV-knak',
    description:
      'Átfogó WCAG 2.1 AA ellenőrzőlista kis- és középvállalkozásoknak. Vizuális, billentyűzetes, formos és jogi szempontok egy helyen.',
    url: 'https://heartandbyte.hu/tudastar/akadalymentesites-ellenorzolista',
    locale: 'hu_HU',
    type: 'article',
  },
  alternates: {
    canonical: 'https://heartandbyte.hu/tudastar/akadalymentesites-ellenorzolista',
  },
}

export default function AkadalymentesitesEllenorzolista() {
  return (
    <main id="main">

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <nav className="crumb" aria-label="Navigációs útvonal">
              <Link className="c1" href="/tudastar">Tudástár</Link>
              <span className="sl" aria-hidden="true">/</span>
              <span className="c2">Ellenőrzőlista</span>
            </nav>
            <h1>
              Weboldal akadálymentesítés{' '}
              <span className="hl">ellenőrzőlistája</span> KKV-knak
            </h1>
            <p className="lead">
              Nem tudod, hol kezdd az akadálymentesítést? Ez a lista végigvezet minden fontos
              szempontón — a szövegkontraszt méréstől a kötelező jogi nyilatkozatig. WCAG 2.1
              AA szabvány szerint, magyar KKV-kra szabva.
            </p>
            <div className="tag-row">
              <span className="pill pill-accent">WCAG 2.1 AA</span>
              <span className="pill pill-warn">
                <span className="dot" aria-hidden="true"></span>
                2025. június 28-tól kötelező
              </span>
              <span className="pill">Ingyenes útmutató</span>
            </div>
          </div>
          <div className="glyph" aria-hidden="true">✓</div>
        </div>
      </section>

      {/* ===== PAGE BODY ===== */}
      <div className="page-body">
        <div className="wrap stack">

          {/* ===== BEVEZETŐ SZÖVEG ===== */}
          <section>
            <div className="section-head">
              <span className="eyebrow">Hogyan használd</span>
              <h2>Mire való ez az ellenőrzőlista?</h2>
            </div>
            <div className="prose-cols">
              <p>
                A 2022. évi XVII. törvény (az Európai Akadálymentesítési Irányelv — EAA — magyar
                átültetése) alapján 2025. június 28-tól minden online terméket vagy szolgáltatást
                értékesítő vállalkozásnak akadálymentesen kell üzemeltetnie a weboldalát. Ez nem
                csupán a nagy cégek feladata: a törvény a kis- és középvállalkozásokat is érinti,
                amennyiben webshopot, online foglalót, vagy bármilyen digitális ügyfélfelületet
                üzemeltetnek.
              </p>
              <p>
                Ez az ellenőrzőlista abban segít, hogy saját magad is felmérhesd, hol tart a
                weboldalad. <strong>Nem helyettesíti a szakértői auditot</strong> — a WCAG 2.1 AA
                szabványnak való teljes megfelelés manuális tesztelést és képernyőolvasós
                ellenőrzést is igényel —, de kiváló kiindulópont ahhoz, hogy tudd, mire kell
                figyelni, és mivel érdemes foglalkoznod először.
              </p>
              <p>
                A listák három súlyossági szinttel dolgoznak. A{' '}
                <strong>kritikus</strong> elemek a törvény szempontjából legfontosabb, bírságot
                vonzó hiányosságokat jelölik. A <strong>közepes</strong> elemek nem feltétlenül
                törvényi követelmények, de jelentősen rontják a felhasználói élményt fogyatékkal
                élő látogatók számára. Az <strong>ajánlott</strong> elemek az „arany szint" felé
                mutatnak — jó gyakorlatok, amelyekkel a weboldalad valóban befogadóvá válik.
              </p>
            </div>

            <div className="legend" role="list" aria-label="Súlyossági szintek jelkulcsa">
              <span role="listitem"><i className="sev-c" aria-label="Kritikus"></i> Kritikus — törvényi megfelelés</span>
              <span role="listitem"><i className="sev-m" aria-label="Közepes"></i> Közepes — felhasználói élmény</span>
              <span role="listitem"><i className="sev-l" aria-label="Ajánlott"></i> Ajánlott — legjobb gyakorlat</span>
            </div>
          </section>

          {/* ===== CHECK-GRID: 6 KÁRTYA ===== */}
          <section aria-labelledby="checklist-heading">
            <div className="section-head">
              <span className="eyebrow">WCAG 2.1 AA szempontok</span>
              <h2 id="checklist-heading">Az ellenőrzőlista</h2>
              <p className="muted">
                Menj végig minden kártyán sorban. Ha egy elemet nem tudsz kipipálni, jegyezd fel —
                ezek lesznek a fejlesztési prioritásaid.
              </p>
            </div>

            <div className="check-grid">

              {/* 1. Vizuális & kontraszt */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-eye" />
                  </svg>
                  <h3>Vizuális &amp; kontraszt</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Szöveg–háttér kontraszt legalább 4,5:1 arányú (normál szöveg)
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Nagy szöveg (18pt vagy 14pt félkövér) kontrasztja legalább 3:1
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    UI komponensek (gombok, beviteli mezők kerete) kontrasztja legalább 3:1
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    Az oldal 200%-ra nagyítva sem törik szét (nem jelenik meg vízszintes görgetősáv)
                  </li>
                  <li>
                    <i className="sev-l" aria-label="Ajánlott"></i>
                    Az információ nem kizárólag színnel van közvetítve (pl. hibás mezőnél piktogram is van)
                  </li>
                </ul>
              </div>

              {/* 2. Képek & média */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-file" />
                  </svg>
                  <h3>Képek &amp; média</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Minden tartalmi képhez van értelmes <code>alt</code> szöveg
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Dekoratív képeknél üres <code>alt=""</code> attribútum van (képernyőolvasó átugorja)
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Videókhoz felirat (cc) vagy szöveges átirat érhető el
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    Infografikáknál, diagramoknál szöveges magyarázat is szerepel az oldalon
                  </li>
                  <li>
                    <i className="sev-l" aria-label="Ajánlott"></i>
                    Automatikusan lejátszó animációk megállíthatók, szüneteltethetők
                  </li>
                </ul>
              </div>

              {/* 3. Billentyűzet & navigáció */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-keyboard" />
                  </svg>
                  <h3>Billentyűzet &amp; navigáció</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Az oldal minden interaktív eleme elérhető kizárólag Tab billentyűvel
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A fókuszállapot (focus ring) vizuálisan egyértelműen látható minden elemen
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Nincs fókuszcsapda: modálokból, dropdown-okból is ki lehet lépni Escape-pel
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    „Ugrás a tartalomra" (skip navigation) link van az oldal tetején
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    A navigációs menük és dropdown-ok billentyűzettel is teljes mértékben kezelhetők
                  </li>
                </ul>
              </div>

              {/* 4. Formok & interakciók */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-doc" />
                  </svg>
                  <h3>Formok &amp; interakciók</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Minden beviteli mezőhöz látható, programozottan társított <code>&lt;label&gt;</code> tartozik
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A hibaüzenetek szövegesen leírják a hibát (nem csak piros szín jelzi)
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A kötelező mezők jelöltek (csillag + szöveges magyarázat a form elején)
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    Az <code>autocomplete</code> attribútum helyesen be van állítva a személyes adatmezőkön
                  </li>
                  <li>
                    <i className="sev-l" aria-label="Ajánlott"></i>
                    Ha van CAPTCHA, alternatív ellenőrzési módszer is elérhető (pl. audio)
                  </li>
                </ul>
              </div>

              {/* 5. HTML struktúra & szemantika */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-monitor" />
                  </svg>
                  <h3>HTML struktúra &amp; szemantika</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A heading-hierarchia helyes: oldalanként egy H1, alatta H2, H3 stb. sorrendben
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Landmark régiók jelen vannak: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code>
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    Minden oldalnak egyedi, leíró <code>&lt;title&gt;</code> eleme van
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    Listák szemantikus elemekkel szerepelnek (<code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code>, nem csak CSS-sel formázott div-ek)
                  </li>
                  <li>
                    <i className="sev-l" aria-label="Ajánlott"></i>
                    A <code>&lt;html&gt;</code> tagen be van állítva a <code>lang="hu"</code> attribútum
                  </li>
                </ul>
              </div>

              {/* 6. Jogi dokumentumok */}
              <div className="card check-card">
                <div className="ch-head">
                  <svg
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <use href="#i-shield" />
                  </svg>
                  <h3>Jogi dokumentumok</h3>
                </div>
                <ul>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A weboldalon elérhető az Akadálymentesítési Nyilatkozat (Accessibility Statement)
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A nyilatkozat tartalmaz visszajelzési mechanizmust (email, form, telefonszám)
                  </li>
                  <li>
                    <i className="sev-c" aria-label="Kritikus"></i>
                    A nyilatkozat tartalmazza, hogy panasz esetén melyik hatósághoz lehet fordulni
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    A nyilatkozat egyértelműen megjelöli a megfelelési szintet (pl. WCAG 2.1 AA részleges)
                  </li>
                  <li>
                    <i className="sev-m" aria-label="Közepes"></i>
                    Az ismert hiányosságok és az elhárítás tervezett időpontja szerepel a nyilatkozatban
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* ===== ÚTMUTATÓ SZÖVEG ===== */}
          <section aria-labelledby="guide-heading">
            <div className="section-head">
              <span className="eyebrow">Lépésről lépésre</span>
              <h2 id="guide-heading">Hogyan használd ezt a listát a gyakorlatban?</h2>
            </div>

            <div className="prose-cols">
              <div>
                <h3>1. lépés: Nyisd meg az oldaladat és indítsd el az auditot</h3>
                <p>
                  A leggyorsabb első lépés a böngésző beépített eszközeinek használata. Chrome-ban
                  a DevTools &rarr; Lighthouse fülén futtatható egy automatikus akadálymentesítési
                  audit. Ez nem teljes, de a legkritikusabb hibák nagy részét megtalálja — és
                  ingyenes. Alternatív: a{' '}
                  <strong>WAVE</strong> (wave.webaim.org) böngészőbővítmény vizuálisan jelöli ki a
                  hibákat az oldalon.
                </p>
                <h3>2. lépés: Ellenőrizd a kontrasztokat</h3>
                <p>
                  A kontraszt a leggyakoribb hibaforrás KKV weboldalak esetén. Minden szöveg–háttér
                  kombinációt ellenőrizz a{' '}
                  <strong>WebAIM Contrast Checker</strong> eszközzel. Ne felejts el kiemelni minden
                  szövegszínt: a szürke alcímeket, a placeholder szövegeket és a linkeket is.
                </p>
                <h3>3. lépés: Teszteld billentyűzettel</h3>
                <p>
                  Tedd félre az egeret, és navigálj végig az oldalon kizárólag Tab, Shift+Tab,
                  Enter és Escape billentyűkkel. Minden gomb, link, form mező és menüpont elérhető?
                  Minden fókuszállapot jól látható? Ha valahol elakadsz vagy a fókusz eltűnik —
                  az komoly probléma.
                </p>
              </div>
              <div>
                <h3>4. lépés: Ellenőrizd a HTML struktúrát</h3>
                <p>
                  A Chrome DevTools Elements paneljén gyorsan átnézheted a heading struktúrát.
                  Egy jó segédeszköz a{' '}
                  <strong>HeadingsMap</strong> böngészőbővítmény, amely fa-nézetben mutatja a
                  H1–H6 hierarchiát. Keress duplikált H1-et, kihagyott szinteket (H2 után H4),
                  vagy dizájn célú headingeket (pl. H3 azért, mert kisebb betűméretet akarunk).
                </p>
                <h3>5. lépés: Készítsd el az Akadálymentesítési Nyilatkozatot</h3>
                <p>
                  Ez a legtöbb KKV-nál hiányzik, pedig törvényi kötelezettség. A nyilatkozatnak
                  tartalmaznia kell: a vizsgált szabvány megnevezését (WCAG 2.1 AA), a megfelelési
                  szintet, az ismert hiányosságokat, az elkészítés dátumát és egy elérhetőséget.
                  Az EU-s minta alapján magyarul is el lehet készíteni, mi ebben is segítünk.
                </p>
                <h3>6. lépés: Dokumentálj és priorizálj</h3>
                <p>
                  Minden megtalált hibát dokumentálj: melyik oldalon, melyik elemen, mi a probléma,
                  melyik WCAG kritérium sérül, és milyen szintű. A kritikus hibákat érdemes 30
                  napon belül javítani — ezek hordozzák a legnagyobb jogi kockázatot. A közepes és
                  ajánlott szempontokat ütemezd be a következő fejlesztési ciklusba.
                </p>
              </div>
            </div>
          </section>

          {/* ===== TIPIKUS HIBÁK SZEKCIÓ ===== */}
          <section aria-labelledby="common-errors-heading">
            <div className="section-head">
              <span className="eyebrow">Amit a legtöbben elront</span>
              <h2 id="common-errors-heading">A leggyakoribb hibák KKV weboldalon</h2>
              <p className="muted">
                Több száz weboldal audit tapasztalata alapján ezek a problémák fordulnak elő
                a leggyakrabban magyarországi kis- és középvállalkozások weboldalain.
              </p>
            </div>
            <div className="card" style={{ padding: 'var(--space-m)' }}>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A kapcsolatfelvételi form mezőin hiányzik a <code>&lt;label&gt;</code> — csak placeholder
                  szöveg van, ami el is tűnik gépelés közben
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A logóképnek nincs <code>alt</code> szövege, vagy az <code>alt="logo"</code>
                  szöveg semmit nem mond a cégnévről
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A márkapaletta szerinti szürke szöveg (pl. #888) fehér háttéren nem éri el a 4,5:1
                  kontrasztarányt
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A hamburger menügomb nem tartalmaz szöveges leírást — a képernyőolvasó
                  nem tudja mi ez a gomb
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A cookie consent felugró ablak csak egérrel zárható be, billentyűzettel nem
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Egyáltalán nincs Akadálymentesítési Nyilatkozat az oldalon
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  A galériában lévő képeknek nincs <code>alt</code> szövegük, vagy az
                  automatikusan generált fájlnév az <code>alt</code> értéke (pl. <code>IMG_2034.jpg</code>)
                </li>
              </ul>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section>
            <div className="cta">
              <div>
                <h2>Megvan a lista — mi legyen a következő lépés?</h2>
                <p>
                  Ha megvan a hibajegyzéked, de nem tudod, hogyan javítsd, vagy egyáltalán nem
                  volt időd végigmenni az ellenőrzőlistán — kérj ingyenes konzultációt.
                  30 percben átnézzük az oldaladat, és megmondom, hol állsz.
                </p>
              </div>
              <div className="hero-cta">
                <Link className="btn btn-primary btn-lg" href="/kapcsolat">
                  Ingyenes konzultáció{' '}
                  <svg
                    aria-hidden="true"
                    className="lucide"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link className="btn btn-lg btn-ghost" href="/tudastar">
                  Vissza a Tudástárba
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
