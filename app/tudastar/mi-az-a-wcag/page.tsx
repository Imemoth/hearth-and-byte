import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mi az a WCAG 2.1 AA, és miért fontos 2025-től? | Heart & Byte Tudástár',
  description:
    'Részletes útmutató a WCAG 2.1 AA szabványról: mit jelent, miben különbözik az A és AAA szinttől, és miért kötelező 2025-től Magyarországon az európai akadálymentesítési irányelv alapján.',
}

export default function MiAzAWcag() {
  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="wrap">
          <nav aria-label="Útmutató" className="crumb">
            <Link href="/" className="c1">Kezdőlap</Link>
            <span className="sl" aria-hidden="true">/</span>
            <Link href="/tudastar" className="c1">Tudástár</Link>
            <span className="sl" aria-hidden="true">/</span>
            <span className="c2" aria-current="page">Mi az a WCAG 2.1 AA?</span>
          </nav>

          <div className="glyph" aria-hidden="true">
            <svg className="lucide" viewBox="0 0 24 24"><use href="#i-shield" /></svg>
          </div>

          <h1>Mi az a <span className="hl">WCAG 2.1 AA</span>,<br />és miért fontos 2025-től?</h1>

          <p className="lead">
            A WCAG — Web Content Accessibility Guidelines — a webes akadálymentesítés
            nemzetközileg elfogadott mércéje. Az AA szint 2025-től törvényi kötelezettség
            lesz számos magyar vállalkozás számára. Ebben a cikkben mindent megtalál,
            amit tudnia kell: mit jelent a szabvány, kit érint, és hogyan lehet megfelelni.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="page-body">
        <div className="wrap stack">

          {/* 1. Miért létezik a WCAG? */}
          <section aria-labelledby="miert-letezik">
            <div className="section-head">
              <span className="eyebrow">Háttér</span>
              <h2 id="miert-letezik">Miért született meg a WCAG?</h2>
            </div>
            <p>
              A World Wide Web Consortium (W3C) az 1990-es évek végén ismerte fel, hogy az
              internet gyors terjedésével párhuzamosan komoly egyenlőtlenségek alakulnak ki:
              a mozgás-, látás- vagy hallássérült felhasználók millióit kizárja a digitális
              világból az átgondolatlanul tervezett weboldalak többsége. Ennek orvoslására
              hozták létre a Web Content Accessibility Guidelines sorozatát.
            </p>
            <p>
              Az első verzió 1999-ben jelent meg. A 2008-as WCAG 2.0 már technológiafüggetlen
              elveket fogalmazott meg — nem csak HTML-re, hanem bármilyen webes technológiára
              alkalmazható. A <strong>WCAG 2.1</strong> 2018-ban bővítette ezt a szabványt
              főként mobileszközök, kis kontrasztérzékenységű és kognitív akadállyal élő
              felhasználók számára releváns kritériumokkal.
            </p>
            <p>
              A szabvány három megfelelési szintet definiál:{' '}
              <strong>A</strong> (minimális),{' '}
              <strong>AA</strong> (ajánlott, és 2025-től jogszabályban előírt) és{' '}
              <strong>AAA</strong> (legmagasabb). A legtöbb európai jogszabály az{' '}
              <span className="hl">AA szintet</span> követeli meg.
            </p>
          </section>

          {/* 2. A négy alapelv */}
          <section aria-labelledby="negy-alapelv">
            <div className="section-head">
              <span className="eyebrow">Az alapok</span>
              <h2 id="negy-alapelv">A WCAG négy alapelve (POUR)</h2>
            </div>
            <p>
              A WCAG minden kritériuma négy alapelv valamelyikébe sorolható. Ezeket az
              angol kezdőbetűkből POUR-elveknek is nevezik.
            </p>

            <div className="stack">
              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-eye" /></svg>
                </div>
                <h3>1. Érzékelhető <span className="muted">(Perceivable)</span></h3>
                <p>
                  Az információnak és a felhasználói felület elemeinek olyan formában kell
                  elérhetőnek lenniük, amelyet a felhasználó érzékelni tud. Ez azt jelenti,
                  hogy képekhez szövegalternatívát (alt-szöveget) kell megadni, videókhoz
                  feliratot kell biztosítani, és a tartalom szín nélkül is érthető kell
                  legyen. A kontrasztarány szöveg esetén legalább 4,5:1 arányú kell legyen
                  az AA szinten.
                </p>
              </div>

              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-keyboard" /></svg>
                </div>
                <h3>2. Működtethető <span className="muted">(Operable)</span></h3>
                <p>
                  A felhasználói felület összes funkciójának elérhetőnek kell lennie
                  billentyűzetről is, egér nélkül. Nem lehet időkorlátos tartalom, amelynek
                  lejárta nem függeszthető fel. A navigációban segítenie kell az oldalaknak
                  a visszatérő elemek átugrásában (skip navigation). Mozgásos tartalom
                  szüneteltethető kell legyen.
                </p>
              </div>

              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-bulb" /></svg>
                </div>
                <h3>3. Érthető <span className="muted">(Understandable)</span></h3>
                <p>
                  A tartalom és a kezelőfelület működése legyen előre megjósolható és
                  könnyen érthető. Az oldal nyelvét HTML-szinten meg kell határozni
                  (lang attribútum). A hibaüzenetek legyenek egyértelműek és segítsék a
                  felhasználót a javításban. Az űrlapmezők legyenek egyértelműen felcímkézve.
                </p>
              </div>

              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-wrench" /></svg>
                </div>
                <h3>4. Robusztus <span className="muted">(Robust)</span></h3>
                <p>
                  A tartalomnak kompatibilisnek kell lennie a jelenlegi és a jövőbeli
                  felhasználói ágensekkel, beleértve a képernyőolvasókat és egyéb
                  segédtechnológiákat. Ez megköveteli az érvényes HTML-struktúrát, a
                  helyes ARIA-attribútumok alkalmazását és az állapotjelzők (fókusz,
                  kiválasztott, megnyitott stb.) programozott közlését.
                </p>
              </div>
            </div>
          </section>

          {/* 3. A, AA, AAA különbség */}
          <section aria-labelledby="szintek">
            <div className="section-head">
              <span className="eyebrow">Megfelelési szintek</span>
              <h2 id="szintek">Mi a különbség az A, AA és AAA szint között?</h2>
            </div>
            <p>
              A WCAG 2.1 összesen 78 sikerességi kritériumot tartalmaz, amelyek három
              szintbe sorolódnak:
            </p>
            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>A szint (25 kritérium)</strong> — A minimális alap. Ha ezek
                  nem teljesülnek, a weboldal egyes felhasználói csoportok számára
                  egyszerűen használhatatlan. Például: képekhez szövegalternatíva,
                  billentyűzettel való teljes navigálhatóság, időkorlátos tartalom
                  szüneteltethetősége.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>AA szint (+25 kritérium, összesen 50)</strong> — Ez a
                  jogszabályban megkövetelt szint. Ide tartozik a szöveg-kontrasztarány
                  (4,5:1), az átméretezhetőség 200%-ig tartalom- vagy funkcióveszteség
                  nélkül, a fókuszjelzés láthatósága, az élő feliratok videókonferenciákhoz
                  és az irányjelzők az összetett navigációban.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>AAA szint (+28 kritérium, összesen 78)</strong> — A legmagasabb
                  szint, amelyet a W3C nem ír elő minden tartalomhoz, mivel bizonyos
                  kritériumok nem alkalmazhatók minden weboldaltípusra. Például
                  jelnyelvű tolmácsolás videóhoz, kontrasztarány 7:1, kontextusfüggő
                  súgó az összes beviteli mezőhöz.
                </div>
              </li>
            </ul>
            <p>
              A legtöbb hazai és európai jogszabály az <span className="hl">AA szintet</span>{' '}
              írja elő, mivel ez kellő védelmet nyújt a leggyakoribb akadályok ellen,
              miközben megvalósítható a webfejlesztési projektek döntő többségénél.
            </p>
          </section>

          {/* 4. Jogi háttér */}
          <section aria-labelledby="jogi-hatter">
            <div className="section-head">
              <span className="eyebrow">Jogszabályi kötelezettség</span>
              <h2 id="jogi-hatter">Miért kötelező 2025-től Magyarországon?</h2>
            </div>
            <p>
              Az Európai Unió 2019-ben fogadta el az{' '}
              <strong>Európai Akadálymentesítési Irányelvet</strong> (European Accessibility
              Act, EAA — 2019/882/EU irányelv). Az irányelv célja az, hogy az EU belső
              piacán egységes akadálymentesítési követelmények vonatkozzanak a digitális
              termékekre és szolgáltatásokra.
            </p>
            <p>
              Magyarország ezt az irányelvet a{' '}
              <strong>2022. évi XVII. törvénnyel</strong> ültette át a nemzeti jogba
              (az egyes termékek és szolgáltatások hozzáférhetőségi követelményeiről).
              A törvény alapján <strong>2025. június 28-tól</strong> számos digitális
              szolgáltatásra kötelező a WCAG 2.1 AA-nak megfelelő akadálymentesítés.
            </p>

            <div className="card">
              <div className="icon-badge" aria-hidden="true">
                <svg className="lucide" viewBox="0 0 24 24"><use href="#i-clock" /></svg>
              </div>
              <h3>Kire vonatkozik a kötelezettség?</h3>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>E-kereskedelmi platformok és webshopok</span>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>Banki és pénzügyi szolgáltatások online felületei</span>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>Közlekedési szolgáltatók utasinformációs rendszerei</span>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>Elektronikus kommunikációs szolgáltatások</span>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>Digitális könyvek és e-könyv-olvasó szoftverek</span>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <span>Médialejátszók és streaming platformok</span>
                </li>
              </ul>
              <p className="muted" style={{ marginTop: '1rem' }}>
                A törvény <strong>mikrovállalkozásokat</strong> (10 főnél kevesebb
                alkalmazott és évi 2 millió eurónál kisebb forgalom) mentesít a
                magánszektorra vonatkozó szabályok alól, de a közszféra és a nagyobb
                vállalkozások számára kivétel nélkül alkalmazandó.
              </p>
            </div>

            <p>
              A megfelelés elmulasztása esetén a hatóság szankciót szabhat ki, és a
              fogyasztók, illetve érintett civil szervezetek panasszal élhetnek. Emellett
              az akadálymentes weboldal üzleti szempontból is előnyös: javítja a SEO
              eredményeket, bővíti az elérhető ügyfélkört, és pozitív márkaképet alakít ki.
            </p>
          </section>

          {/* 5. Legfontosabb AA kritériumok */}
          <section aria-labelledby="kovetelmenyek">
            <div className="section-head">
              <span className="eyebrow">Gyakorlati tudnivalók</span>
              <h2 id="kovetelmenyek">A legfontosabb AA szintű követelmények</h2>
            </div>
            <p>
              Ha szeretné tudni, hol kezdje az akadálymentesítést, az alábbi területek
              a leggyakoribb hiányosságok forrásai a hazai weboldalak körében:
            </p>
            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Kontrasztarány (1.4.3)</strong> — Normál szövegnél legalább
                  4,5:1, nagy szövegnél (18pt vagy 14pt félkövér felett) legalább 3:1.
                  A legtöbb weboldal elbukik ezen, főleg a szürke alcímeknél és a
                  placeholder szövegeknél.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Átméretezés (1.4.4)</strong> — A tartalom 200%-os
                  nagyításig is olvasható és használható kell maradjon vízszintes görgetés
                  nélkül (320px széles viewport esetén).
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Fókuszjelzés (2.4.7)</strong> — A billentyűzettel navigált
                  elemeken mindig látható legyen a fókuszkeret. Nem elegendő a böngésző
                  alapértelmezett outline-ját elrejteni anélkül, hogy vizuális alternatívát
                  kínálnának.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Leíró oldalcímek (2.4.2)</strong> — Minden oldal
                  &lt;title&gt; eleme egyedi és leírja az oldal tartalmát. Nem elegendő
                  ha minden oldalon ugyanaz a cím szerepel.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Hibaazonosítás (3.3.1–3.3.3)</strong> — Az űrlaphibákat
                  szövegesen kell jelezni, nem csupán piros kerettel. A hibaüzenetnek
                  meg kell mondania, melyik mező hibás és miért.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Képek szövegalternatívája (1.1.1)</strong> — Minden
                  tartalmi képhez megfelelő alt-szöveg kell. A dekoratív képeket üres
                  alt=""  attribútummal kell ellátni, hogy a képernyőolvasók átugorják.
                </div>
              </li>
            </ul>
          </section>

          {/* 6. FAQ */}
          <section aria-labelledby="gyik">
            <div className="section-head">
              <span className="eyebrow">Gyakori kérdések</span>
              <h2 id="gyik">GYIK — WCAG 2.1 AA</h2>
            </div>

            <div className="faq">
              <details className="faq-item">
                <summary>Vonatkozik a WCAG-kötelezettség a kis webshopokra is?</summary>
                <div className="ans">
                  <p>
                    Igen, ha a vállalkozás nem minősül mikrovállalkozásnak (azaz legalább
                    10 főt foglalkoztat vagy évi 2 millió eurót meghaladó forgalmat
                    bonyolít le), akkor a webshopra 2025. június 28-tól kötelező a WCAG
                    2.1 AA megfelelés. Mikrovállalkozásoknál a magánszektorra vonatkozó
                    kötelezettség nem érvényes, de az önkéntes megfelelés ajánlott, mivel
                    az akadálymentes weboldal szélesebb ügyfélkört szólít meg.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>Mi a különbség a WCAG 2.1 és a WCAG 2.2 között?</summary>
                <div className="ans">
                  <p>
                    A WCAG 2.2-t 2023 októberében tette közzé a W3C. Visszamenőlegesen
                    kompatibilis a 2.1-gyel: minden 2.1-es kritérium megmaradt, és kilenc
                    új kritériumot adtak hozzá. Ezek főleg a fókuszjelzés megerősítésére,
                    a drag-and-drop alternatívákra és a redundáns belépési adatok
                    elkerülésére vonatkoznak. A jelenlegi európai jogszabályok még a
                    WCAG 2.1 AA szintre hivatkoznak, de érdemes a 2.2-re is tervezni.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>Hogyan ellenőrzöm, hogy weboldalem megfelel-e a WCAG AA szintnek?</summary>
                <div className="ans">
                  <p>
                    Az ellenőrzés két részből áll: automatizált és manuális tesztelésből.
                    Automatizált eszközök (Axe, WAVE, Lighthouse) a hibák kb. 30–40%-át
                    fedezik fel. A fennmaradó hiányosságokat csak manuális teszteléssel
                    lehet megtalálni: billentyűzetes navigáció, képernyőolvasó-teszt
                    (NVDA, JAWS, VoiceOver), és valódi felhasználókkal végzett
                    használhatósági vizsgálat. A Heart &amp; Byte teljes auditot kínál,
                    amelynek eredménye egy prioritizált hibalista és javítási terv.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>Mennyi ideig tart egy weboldal akadálymentesítése?</summary>
                <div className="ans">
                  <p>
                    Ez erősen függ a weboldal méretétől, technológiájától és a jelenlegi
                    állapotától. Egy egyszerűbb, néhány oldalas bemutatkozó weboldal
                    akadálymentesítése 2–4 hetet vesz igénybe. Egy összetettebb e-commerce
                    platform esetén ez 2–4 hónap is lehet. Az audit elvégzése általában
                    1–2 hetet vesz igénybe, és pontos képet ad a szükséges munkáról még
                    az implementáció megkezdése előtt.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>Mi történik, ha nem teszünk eleget a WCAG-kötelezettségnek?</summary>
                <div className="ans">
                  <p>
                    A 2022. évi XVII. törvény alapján a felügyeleti szerv (az érintett
                    szektortól függően a Fogyasztóvédelmi Hatóság vagy az ágazati
                    felügyelet) szankciót szabhat ki. Emellett az érintett személyek
                    és szervezetek panaszt nyújthatnak be. Az esetleges bírságon túl
                    a reputációs kockázat is számottevő: egy akadálymentesítési pert
                    nyilvánosan is követni szoktak a fogyatékosügyi civil szervezetek.
                    A megelőzés mindig olcsóbb, mint a reaktív jogszabályi megfelelés.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-cim" className="cta">
            <div className="icon-badge" aria-hidden="true">
              <svg className="lucide" viewBox="0 0 24 24"><use href="#i-arrow" /></svg>
            </div>
            <h2 id="cta-cim">Szeretné tudni, hol tart most a weboldala?</h2>
            <p>
              A Heart &amp; Byte csapata ingyenes előzetes konzultáción áttekinti
              weboldalát, és elmondja, mik a legfontosabb teendők a WCAG 2.1 AA
              megfelelés eléréséhez. Vegyük fel a kapcsolatot.
            </p>
            <div>
              <Link href="/kapcsolat" className="btn btn-primary btn-lg">
                Ingyenes konzultáció kérése
              </Link>
              <Link href="/tudastar" className="btn btn-ghost">
                Vissza a Tudástárba
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
