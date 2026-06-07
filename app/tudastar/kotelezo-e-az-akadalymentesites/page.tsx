import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kötelező-e az akadálymentesítés az én weboldalamonnak? | Heart & Byte',
  description:
    'Megtudhatja, kinek kötelező az EAA szerinti weboldal-akadálymentesítés 2025. június 28-tól, mi a kivétel a mikrovállalkozásoknak, és mi a következménye a mulasztásnak.',
}

export default function KotelezoEAzAkadalymentesites() {
  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumb" aria-label="Oldaltérkép">
            <Link href="/" className="c1">Főoldal</Link>
            <span className="sl" aria-hidden="true">/</span>
            <Link href="/tudastar" className="c1">Tudástár</Link>
            <span className="sl" aria-hidden="true">/</span>
            <span className="c2">Kötelező-e az akadálymentesítés?</span>
          </nav>

          <div className="glyph" aria-hidden="true">
            <svg className="lucide" viewBox="0 0 24 24">
              <use href="#i-shield" />
            </svg>
          </div>

          <h1>
            Kötelező-e az akadálymentesítés<br />
            <span className="hl">az én weboldalamonnak?</span>
          </h1>

          <p className="lead">
            Az Európai Akadálymentesítési Törvény (EAA) 2025. június 28-tól kötelezővé teszi a
            digitális akadálymentesítést számos vállalkozás számára. De vajon az Ön webshopja
            vagy foglalási rendszere is érintett? Ez a cikk megadja a pontos választ.
          </p>

          <div className="date-badge">
            <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true">
              <use href="#i-clock" />
            </svg>
            Frissítve: 2025. május · 8 perc olvasás
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="page-body">
        <div className="wrap stack">

          {/* ── Mi az EAA és miért fontos? ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Jogszabályi háttér</span>
              <h2>Mi az Európai Akadálymentesítési Törvény?</h2>
            </header>

            <p>
              Az Európai Unió 2019-ben fogadta el a 2019/882/EU irányelvet, amelyet Magyarországon
              az <strong>Európai Akadálymentesítési Törvény (EAA)</strong> ültet át a nemzeti
              jogba. A jogszabály célja, hogy a fogyatékossággal élő – közel{' '}
              <strong>87 millió EU-s polgárt</strong> érintő – személyek számára akadálymentesen
              elérhetők legyenek az alapvető termékek és digitális szolgáltatások.
            </p>

            <p>
              A törvény <strong>2025. június 28-án lép hatályba</strong> a legtöbb érintett
              vállalkozásra nézve. Ettől az időponttól kezdve az új és meglévő digitális
              szolgáltatásoknak egyaránt meg kell felelniük az előírásoknak – kivéve, ha
              átmeneti rendelkezés vonatkozik rájuk.
            </p>

            <p>
              Az akadálymentesítési kötelezettség nem csupán a nagy webáruházakat vagy állami
              szerveket érinti. Ha Ön online terméket vagy szolgáltatást értékesít fogyasztóknak
              az EU-ban, nagy valószínűséggel <span className="hl">Önre is vonatkozik</span> a
              jogszabály.
            </p>
          </section>

          {/* ── Kire vonatkozik ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Érintett vállalkozások</span>
              <h2>Kire vonatkozik a kötelezettség?</h2>
            </header>

            <p>
              Az EAA azokra a <strong>magánszektorbeli vállalkozásokra</strong> vonatkozik,
              amelyek az alábbi digitális szolgáltatásokat nyújtják fogyasztóknak (B2C):
            </p>

            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Online kereskedelem (webshop):</strong> ha terméket vagy digitális
                tartalmat értékesít weboldalon, mobilalkalmazáson keresztül
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Elektronikus jegyértékesítés:</strong> rendezvényjegyek, koncertjegyek,
                utazási jegyek online vásárlása
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Online foglalási rendszerek:</strong> szállásfoglalás, éttermi foglalás,
                orvosi időpontfoglalás
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Banki és pénzügyi szolgáltatások:</strong> netbank, mobilfizetés,
                hitelkérelmek benyújtása online
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Elektronikus kommunikációs szolgáltatások</strong> (pl. VoIP, üzenetküldők)
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <strong>Digitális könyvek és e-olvasók</strong> szoftverkomponensei
              </li>
            </ul>

            <p>
              Ha weboldala ezek bármelyikéhez kapcsolódó funkciót tartalmaz – tehát nem csupán
              bemutatkozó oldal, hanem online tranzakciót is lehetővé tesz –, akkor az EAA
              előírásai Önre is érvényesek.
            </p>
          </section>

          {/* ── Kivételek ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Kivételek és mentességek</span>
              <h2>Mikrovállalkozásokra vonatkozó kivétel</h2>
            </header>

            <div className="card">
              <div className="icon-badge" aria-hidden="true">
                <svg className="lucide" viewBox="0 0 24 24"><use href="#i-eye" /></svg>
              </div>
              <h3>Kik számítanak mikrovállalkozásnak?</h3>
              <p>
                Az EAA értelmében <strong>mikrovállalkozásnak</strong> minősül az a cég, amely
                egyszerre teljesíti az alábbi feltételeket:
              </p>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  Kevesebb mint <strong>10 alkalmazott</strong>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  Éves árbevétel vagy mérlegfőösszeg <strong>legfeljebb 2 millió euró</strong>
                </li>
              </ul>
              <p>
                Ha mindkét feltétel teljesül, a magánszektorbeli vállalkozás{' '}
                <strong>mentesül a kötelező EAA megfelelési előírások alól</strong>.
              </p>
            </div>

            <p>
              <strong>Fontos megjegyzés:</strong> a mentesség nem jelenti azt, hogy a
              mikrovállalkozásoknak nem érdemes foglalkozni az akadálymentesítéssel. Egyrészt
              az akadálymentes weboldal <strong>minden felhasználó számára jobb élményt</strong>{' '}
              nyújt – például idősebbek, lassabb internetkapcsolattal rendelkezők vagy
              mobiltelefonon böngészők számára is. Másrészt, ha vállalkozása növekszik és
              átlépi a határértékeket, a kötelezettség azonnal érvénybe lép.
            </p>

            <p>
              Ezen felül az <strong>aránytalan teher</strong> elve alapján átmenetileg
              felmentést kérhet egy vállalkozás, ha az akadálymentesítés megvalósítása
              alapjaiban változtatná meg a szolgáltatást, vagy olyan költséggel járna, amelyet
              a cég nem tud viselni. Ezt azonban dokumentálni kell, és a hatóság felé igazolni.
            </p>
          </section>

          {/* ── Meglévő vs új weboldalak ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Átmeneti szabályok</span>
              <h2>Meglévő és új weboldalak különbsége</h2>
            </header>

            <div className="law-grid">
              <div className="law-card">
                <span className="pill">Új weboldalak</span>
                <h3>2025. június 28. után indított oldalak</h3>
                <p>
                  A 2025. június 28. után <strong>újonnan indított</strong> weboldalaknak,
                  webshopoknak és digitális szolgáltatásoknak már az indulástól kezdve
                  teljes mértékben meg kell felelniük az EAA előírásainak. Nincs átmeneti
                  időszak, nincs halasztás.
                </p>
              </div>

              <div className="law-card">
                <span className="pill-warn">Meglévő weboldalak</span>
                <h3>2025. június 28. előtt indított oldalak</h3>
                <p>
                  A már működő digitális szolgáltatásokra szintén <strong>2025. június
                  28-tól</strong> vonatkozik a kötelezettség. Nem volt hosszabb átmeneti
                  időszak a webhelyekre – szemben például a fizikai termékekkel, amelyekre
                  2030-ig szól az átmenet.
                </p>
              </div>
            </div>

            <p>
              Ez azt jelenti, hogy ha Önnek jelenleg van egy webshopja vagy online foglalási
              rendszere, és az érintett vállalkozási kategóriába esik (nem mikrovállalkozás),
              akkor <strong>most kell cselekednie</strong>. A határidő 2025. június 28.
            </p>
          </section>

          {/* ── Accessibility Statement ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Kötelező dokumentum</span>
              <h2>Akadálymentesítési nyilatkozat (Accessibility Statement)</h2>
            </header>

            <p>
              Az EAA egyik kevésbé ismert, mégis kötelező eleme az{' '}
              <strong>akadálymentesítési nyilatkozat</strong> (angolul: Accessibility Statement).
              Ez egy nyilvánosan elérhető dokumentum, amelyet minden érintett vállalkozásnak
              közzé kell tennie a weboldalán.
            </p>

            <p>A nyilatkozatnak tartalmaznia kell:</p>

            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                A weboldal akadálymentesítési szintjének leírását (pl. WCAG 2.1 AA)
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                Az ismert hiányosságokat és azok kezelési tervét
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                Elérhetőséget, ahová a felhasználók akadálymentesítési problémát jelezhetnek
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                A nyilatkozat készítésének dátumát és az utolsó felülvizsgálat időpontját
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                Hivatkozást az illetékes hatóságra, amennyiben a felhasználó jogorvoslatot kér
              </li>
            </ul>

            <p>
              A nyilatkozatot érdemes a weboldal láblécében elhelyezni, jól látható és
              könnyen megtalálható helyen. Frissíteni kell minden alkalommal, amikor a weboldal
              akadálymentesítési állapota érdemben változik.
            </p>
          </section>

          {/* ── Következmények ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Kockázatok</span>
              <h2>Mi történik, ha nem felelek meg az előírásoknak?</h2>
            </header>

            <p>
              Az EAA betartatása a tagállamok feladata. Magyarországon a{' '}
              <strong>fogyasztóvédelmi hatóság</strong> (Nemzeti Fogyasztóvédelmi Hatóság,
              illetve a területileg illetékes kormányhivatalok fogyasztóvédelmi osztályai)
              jogosult az ellenőrzésre és a szankciók kiszabására.
            </p>

            <div className="card">
              <div className="icon-badge" aria-hidden="true">
                <svg className="lucide" viewBox="0 0 24 24"><use href="#i-shield" /></svg>
              </div>
              <h3>Lehetséges szankciók</h3>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <strong>Felszólítás</strong> a hiányosságok pótlására, meghatározott határidővel
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <strong>Bírság</strong> kiszabása ismételt vagy súlyos jogsértés esetén
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <strong>Kötelezés</strong> a nem megfelelő szolgáltatás felfüggesztésére
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  Fogyasztói panaszok nyomán <strong>hatósági eljárás</strong> indítható
                </li>
              </ul>
            </div>

            <p>
              A pontos bírságösszegeket a magyar implementáló jogszabály határozza meg. Az EU
              más tagállamaiban (pl. Írország, Ausztria) a bírságok akár{' '}
              <strong>több tízezer euróig</strong> is terjedhetnek ismétlődő vagy szándékos
              jogsértés esetén. Emellett – és ez talán fontosabb – egy fogyasztói panasz
              komoly <strong>reputációs kockázatot</strong> is jelent egy KKV számára.
            </p>

            <p>
              Az akadálymentesítés nem csupán jogi kötelezettség: az EAA alapján a
              fogyatékossággal élő felhasználók <strong>közvetlen jogorvoslatot</strong> is
              kérhetnek, ha egy weboldal megtagadja tőlük a hozzáférést.
            </p>
          </section>

          {/* ── Ajánlott lépések ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Teendők</span>
              <h2>Hogyan kezdjen hozzá?</h2>
            </header>

            <p>
              Ha megállapította, hogy vállalkozása érintett, az alábbi lépéseket javasoljuk:
            </p>

            <ol className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow" /></svg>
                <strong>Akadálymentesítési audit:</strong> mérje fel weboldala jelenlegi
                állapotát automatizált eszközzel és manuális ellenőrzéssel egyaránt.
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow" /></svg>
                <strong>Hiányosságok rangsorolása:</strong> döntse el, mely problémák
                kritikusak (gátolják a tranzakciót) és melyek alacsonyabb prioritásúak.
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow" /></svg>
                <strong>Fejlesztési terv:</strong> ütemezze be a javításokat, és rendelje
                hozzá a felelősöket.
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow" /></svg>
                <strong>Akadálymentesítési nyilatkozat:</strong> még a tökéletes megfelelés
                előtt is tegye közzé, jelezve az ismert hiányosságokat és a javítási tervet.
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow" /></svg>
                <strong>Folyamatos karbantartás:</strong> akadálymentesítés nem egyszeri feladat,
                hanem az üzemeltetés része – minden új funkciónál ellenőrizni kell.
              </li>
            </ol>
          </section>

          {/* ── FAQ ── */}
          <section>
            <header className="section-head">
              <span className="eyebrow">Gyakori kérdések</span>
              <h2>Kérdések és válaszok</h2>
            </header>

            <div className="faq">

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Csak egy egyszerű bemutatkozó weboldalunk van, nincs webshop. Ránk is vonatkozik?
                </summary>
                <div className="ans">
                  <p>
                    Ha weboldalán <strong>nincs online tranzakció</strong> – sem vásárlás, sem
                    foglalás, sem fizetős tartalom –, akkor az EAA magánszektorbeli előírásai
                    általában nem vonatkoznak Önre. A tisztán bemutatkozó (ún. brochure) oldalak
                    nincsenek az irányelv hatálya alatt. Ugyanakkor ha bármilyen online
                    vásárlási vagy foglalási funkciót ad hozzá a jövőben, azonnal érintetté
                    válik.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  8 fős csapattal működünk, de éves bevételünk meghaladja a 2 millió eurót. Mentesek vagyunk?
                </summary>
                <div className="ans">
                  <p>
                    Nem. A mikrovállalkozási mentesség csak akkor érvényes, ha{' '}
                    <strong>mindkét feltétel egyszerre teljesül</strong>: kevesebb mint 10
                    alkalmazott ÉS legfeljebb 2 millió eurós éves árbevétel vagy
                    mérlegfőösszeg. Ha valamelyik határértéket átlépik, a teljes EAA-kötelezettség
                    vonatkozik Önre.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  2025. június 28. után indítjuk a webshopunkat. Mitől kell megfelelni az első naptól?
                </summary>
                <div className="ans">
                  <p>
                    Igen, az újonnan indított digitális szolgáltatásokra az EAA <strong>azonnal,
                    az indulás pillanatától érvényes</strong>. Nincs halasztási lehetőség.
                    Ha most tervezi webshopja fejlesztését, az akadálymentesítési
                    szempontokat már a tervezési fázisban érdemes beépíteni – ez sokkal
                    olcsóbb, mint utólag korrigálni.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Elég-e, ha csak az automatizált eszközök (pl. Lighthouse) szerint megfelelünk?
                </summary>
                <div className="ans">
                  <p>
                    Nem teljes mértékben. Az automatizált tesztelők csak a WCAG-hiányosságok
                    kb. <strong>30–40%-át</strong> képesek azonosítani. A valódi megfeleléshez
                    manuális ellenőrzés is szükséges: billentyűzettel való navigáció tesztelése,
                    képernyőolvasó-szoftverrel való ellenőrzés, és ha lehetséges, fogyatékossággal
                    élő felhasználókkal végzett tesztelés. Az automatizált eszközök jó
                    kiindulópontot adnak, de önmagukban nem elegendők.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Külföldi (pl. Shopify, WooCommerce) platformon üzemeltetjük a webshopunkat. Ki a felelős?
                </summary>
                <div className="ans">
                  <p>
                    Az EAA szerint a <strong>szolgáltató felelős</strong> – vagyis Ön, aki
                    a webshopot üzemelteti. A platform maga (Shopify, WooCommerce stb.) a
                    saját rendszerének akadálymentesítéséért felel, de az Ön által hozzáadott
                    tartalmakért, sablonokért, bővítményekért és konfigurációkért Öné a
                    felelősség. Ha platformja nem biztosít akadálymentes sablonokat, érdemes
                    váltani, vagy egyedi fejlesztéssel pótolni a hiányosságokat.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cta">
            <div className="wrap">
              <h2>Nem tudja, hogy az Ön vállalkozása érintett-e?</h2>
              <p>
                Töltse ki ingyenes kérdőívünket, vagy lépjen kapcsolatba velünk – 1 munkanapon
                belül megmondjuk, hogy vonatkozik-e Önre az EAA, és ha igen, mik az első
                teendők.
              </p>
              <div>
                <Link href="/kapcsolat" className="btn btn-primary btn-lg">
                  Ingyenes konzultáció kérése
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </Link>
                <Link href="/tudastar" className="btn btn-ghost">
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
