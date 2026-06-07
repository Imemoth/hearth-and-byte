import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chatbot vagy élő ügyfélszolgálat — melyiket válassza egy KKV? | Tudástár | Heart & Byte',
  description:
    'Chatbot vagy emberi ügyfélszolgálat? Konkrét számokkal, előnyökkel és hátrányokkal mutatjuk be, melyik megoldás mikor éri meg — és hogyan kombinálhatja a kettőt egy KKV.',
  openGraph: {
    title: 'Chatbot vagy élő ügyfélszolgálat — melyiket válassza egy KKV?',
    description:
      'Konkrét számokkal, előnyökkel és hátrányokkal: melyik ügyfélszolgálati megoldás éri meg egy kis- és középvállalkozásnak? Mikor chatbot, mikor ember — és mikor a kettő együtt?',
    url: 'https://heartandbyte.hu/tudastar/chatbot-vs-elive-ugyfelszolgalat',
    locale: 'hu_HU',
    type: 'article',
  },
  alternates: {
    canonical: 'https://heartandbyte.hu/tudastar/chatbot-vs-elive-ugyfelszolgalat',
  },
}

export default function ChatbotVsEloUgyfelszolgalat() {
  return (
    <main id="main">

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="wrap">
          <div>
            <nav className="crumb" aria-label="Navigációs útvonal">
              <Link className="c1" href="/">Főoldal</Link>
              <span className="sl" aria-hidden="true">/</span>
              <Link className="c1" href="/tudastar">Tudástár</Link>
              <span className="sl" aria-hidden="true">/</span>
              <span className="c2">Chatbot vs. élő ügyfélszolgálat</span>
            </nav>
            <h1>
              Chatbot vagy élő ügyfélszolgálat —{' '}
              <span className="hl">melyiket válassza egy KKV?</span>
            </h1>
            <p className="lead">
              Egy átlagos magyar KKV heti 6–10 munkaórát tölt el ismétlődő ügyfélfkérdések
              megválaszolásával: nyitvatartás, szállítási idő, visszaküldési feltételek. Ez az idő
              felszabadítható — de nem minden helyzetre való a chatbot. Megmutatjuk, mikor melyiket
              érdemes választani, és hogyan lehet a kettőt okosan kombinálni.
            </p>
            <div className="tag-row">
              <span className="pill pill-accent">Ügyfélszolgálat</span>
              <span className="pill">AI chatbot</span>
              <span className="pill">KKV döntéshozatal</span>
            </div>
          </div>
          <div className="glyph" aria-hidden="true">
            <svg className="lucide" viewBox="0 0 24 24">
              <use href="#i-chat" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== PAGE BODY ===== */}
      <div className="page-body">
        <div className="wrap stack">

          {/* ===== BEVEZETŐ ===== */}
          <section>
            <div className="section-head">
              <span className="eyebrow">A valódi kérdés</span>
              <h2>Miért nem egyszerű a válasz?</h2>
            </div>
            <p>
              Az ügyfélszolgálati döntés látszólag egyszerű: a chatbot olcsóbb, az ember jobb. A
              valóságban azonban a legtöbb KKV nem ezt a kérdést teszi fel magának, hanem azt, hogy
              egyáltalán megengedheti-e magának a hiányosságokat az ügyfélkiszolgálásban. Ha egy
              vállalkozásban nincs dedikált ügyfélszolgálatos — és ez a helyzet a hazai
              mikrovállalkozások döntő többségénél —, akkor a chatbot nem alternatíva, hanem az
              egyetlen lehetőség arra, hogy az ügyfelek hétvégén, este tíz után is kapjanak
              választ.
            </p>
            <p>
              Ugyanakkor az emberi ügyfélszolgálat pótolhatatlan marad bizonyos helyzetekben: egy
              dühös ügyfél, egy összetett reklamáció, vagy egy értékesítési lehetőség esetén a
              chatbot nemcsak keveset segít, hanem aktívan árthat — ha a felhasználó falba ütközik,
              és nem kap emberhez utat.
            </p>
            <p>
              Ez a cikk nem azt mondja, hogy az egyik jobb a másiknál. Azt mutatja meg, hogy{' '}
              <strong>mikor melyik döntés racionális</strong> — és hogyan lehet a kettőt úgy
              kombinálni, hogy a vállalkozás nyerjen, az ügyfél pedig ne érezze magát falhoz
              szorítva.
            </p>
          </section>

          {/* ===== ÖSSZEHASONLÍTÁS ===== */}
          <section aria-labelledby="comparison-heading">
            <div className="section-head">
              <span className="eyebrow">Összehasonlítás</span>
              <h2 id="comparison-heading">Chatbot vs. élő ügyfélszolgálat — mi miben jobb?</h2>
              <p className="muted">
                Minden szempont mellé valódi KKV-kontextust adunk, nem csak elméleti előnyöket.
              </p>
            </div>

            <div className="law-grid">

              {/* CHATBOT */}
              <div className="law-card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24" width="22" height="22">
                    <use href="#i-chat" />
                  </svg>
                </div>
                <h3>Miben jobb a chatbot?</h3>

                <ul className="tick-list">
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>0–24 elérhetőség, hétvégén és ünnepnapokon is.</strong> Az ügyfél este
                    tizenegykor kérdez a visszaküldési határidőről — és azonnal kap választ, nem
                    másnap reggel.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Nincs szabadság, betegszabadság, felmondás.</strong> Egy chatbot nem
                    megy nyaralni júliusban, és nem mondja fel az állását két héttel a Black Friday
                    előtt.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Egyforma minőség, minden alkalommal.</strong> Nem függ attól, hogy
                    milyen napja van az ügyfélszolgálatosnak. A tizedik kérdés is ugyanolyan
                    gondosan megválaszolt, mint az első.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Alacsonyabb fix költség.</strong> Egy jól beállított chatbot havi
                    fix díja töredéke egy részállású ügyfélszolgálatos munkabérének — és nem
                    igényel betanítást, céges e-mail-fiókot vagy eszközparkot.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Párhuzamos kiszolgálás.</strong> Egyszerre tíz ügyfél is kérdezhet
                    — a chatbot mindet egyszerre kezeli, várólista nélkül.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Mérhetőség és elemzés.</strong> A chatbot minden kérdést naplóz —
                    így pontosan látja, mit kérdeznek leggyakrabban az ügyfelei, és ez segít a
                    termékoldal, az GYIK és a kommunikáció fejlesztésében.
                  </li>
                </ul>
              </div>

              {/* ÉLŐ ÜGYFÉLSZOLGÁLAT */}
              <div className="law-card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24" width="22" height="22">
                    <use href="#i-phone" />
                  </svg>
                </div>
                <h3>Miben jobb az élő ügyfélszolgálat?</h3>

                <ul className="tick-list">
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Komplex, egyedi problémák kezelése.</strong> Ha az ügyfél visszaküldött
                    csomagja elveszett, és három szereplő érintett a folyamatban, egy ember képes
                    rugalmasan navigálni — a chatbot csak falba ütközik.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Érzelmi helyzetek kezelése.</strong> Egy dühös vagy frusztrált ügyfelet
                    egy empatikus kolléga meg tud nyugtatni. Egy chatbot ezzel szemben könnyen
                    olajat önt a tűzre — különösen, ha sablonos választ ad.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Értékesítési lehetőségek azonosítása.</strong> Egy tapasztalt kolléga
                    felismeri, mikor van az ügyfélnek valójában nagyobb igénye, és képes ajánlani a
                    megfelelő terméket vagy csomagot. Ez konverziót jelent — a chatbot általában
                    nem jut el idáig.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Bizalomépítés prémium ügyfeleknél.</strong> Ha magas értékű B2B
                    ügyfélről van szó, a személyes kapcsolat döntő lehet. Senki nem akar egy
                    fontos szerződéskötés előtt chatbottal tárgyalni.
                  </li>
                  <li>
                    <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    <strong>Rugalmasság és kreativitás.</strong> Az ember tud kivételt tenni, el
                    tud térni a szabálytól, és döntést tud hozni, ha az ügyfél helyzete
                    indokolja — a chatbot csak azt tudja, amire betanították.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* ===== KONKRÉT SZÁMOK ===== */}
          <section aria-labelledby="numbers-heading">
            <div className="section-head">
              <span className="eyebrow">Konkrét számok</span>
              <h2 id="numbers-heading">Mennyi időt nyerhet vissza egy KKV a chatbottal?</h2>
            </div>

            <p>
              Mielőtt elvont előnyökről beszélnénk, nézzük meg a valódi terhet, amit az ismétlő
              kérdések jelentenek egy tipikus hazai kis- és középvállalkozás számára.
            </p>

            <div className="card" style={{ padding: 'var(--space-m)' }}>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  Egy webshopot üzemeltető KKV-nál az ügyfélkérdések{' '}
                  <strong>60–75%-a ismétlődő</strong>: nyitvatartás, szállítási idő, visszaküldés,
                  mérettáblázat, fizetési módok. Ezek megválaszolása gépiesen elvégezhető.
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  Egy átlagos válasz megírása (e-mailben vagy chaten) <strong>3–7 percet</strong>{' '}
                  vesz igénybe. Ha naponta 15 ilyen kérdés érkezik, ez heti 5–7 munkaóra tisztán
                  adminisztratív terhet jelent.
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  Éves szinten ez <strong>250–350 munkaóra</strong>, amit egy jól beállított
                  chatbot a töredékére csökkenthet — a tulajdonos, vagy egy munkatárs idejét
                  felszabadítva valódi, értékteremtő munkára.
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  Az ügyfelek <strong>53%-a</strong> otthagyja a weboldalt, ha nem kap azonnal
                  választ a kérdésére. Ez látható konverzióveszteség — amelyet egy azonnali
                  chatbot-válasz megakadályozhat.
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                  A beérkező kérdések <strong>40%-a munkaidőn kívül</strong> érkezik. Ezek
                  korábban mind elveszett lehetőséget, késői választ vagy elégedetlen ügyfelet
                  jelentettek — a chatbot ezeket azonnal kezeli.
                </li>
              </ul>
            </div>

            <p style={{ marginTop: 'var(--space-s)' }}>
              Ezek az arányok természetesen iparáganként változnak: egy szolgáltatóiparban dolgozó
              vállalkozásnál az ismétlő kérdések aránya kisebb lehet, egy e-kereskedelmi cégnél
              viszont általában magasabb. Az alapkérdés mindig ugyanaz: <em>meg tudja-e mondani
              a chatbot, amit az ügyfelei leggyakrabban kérdeznek?</em> Ha igen, érdemes
              bevezetni.
            </p>
          </section>

          {/* ===== AJÁNLOTT KOMBINÁCIÓ ===== */}
          <section aria-labelledby="combo-heading">
            <div className="section-head">
              <span className="eyebrow">A legjobb stratégia</span>
              <h2 id="combo-heading">Az ajánlott kombináció: chatbot + ember, okosan rétegezve</h2>
              <p className="muted">
                A legtöbb sikeres KKV nem egyiket vagy másikat választja — hanem egy kétszintű
                rendszert épít ki.
              </p>
            </div>

            <p>
              A tapasztalat azt mutatja, hogy az ügyfélkiszolgálás nem fekete-fehér döntés. A
              leghatékonyabb megközelítés az, ha a chatbot és az ember <strong>egymás munkáját
              egészíti ki</strong>, nem pedig versenyez egymással.
            </p>

            <div className="card" style={{ padding: 'var(--space-m)', marginBottom: 'var(--space-s)' }}>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>
                1. szint — Chatbot: az ismétlő kérdések automatizálása
              </h3>
              <p>
                A chatbot legyen az első érintkezési pont — és kezelje önállóan mindazt, ami
                sablonos. Ide tartozik: nyitvatartási idők, szállítási határidők és díjak,
                visszaküldési szabályzat, alapvető termékinformációk, a rendelési státusz
                lekérdezése, és a GYIK-ben szereplő kérdések. Ha a vállalkozás jól dokumentálja
                ezeket a folyamatokat, a chatbot megbízható és gyors kiszolgálást tud nyújtani —
                éjjel-nappal, emberi beavatkozás nélkül.
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-m)', marginBottom: 'var(--space-s)' }}>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>
                2. szint — Átadás embernek: amikor a chatbot korlátaiba ütközik
              </h3>
              <p>
                Minden jó chatbot-rendszernek van egy „emberhez kapcsolom" funkciója — és ezt nem
                szabad elrejteni. Ha az ügyfél jelzi, hogy nem kapta meg a választ, ha a kérdés
                komplexnek tűnik, ha reklamációról van szó, vagy ha az ügyfél egyszerűen azt kéri,
                hogy emberrel szeretne beszélni — az átadás legyen azonnali és zökkenőmentes.
                A frusztrált ügyfelek legnagyobb panasza nem az, hogy chatbottal kellett
                kommunikálniuk, hanem hogy <em>nem jutottak el emberhez, amikor szükségük lett
                volna rá.</em>
              </p>
            </div>

            <div className="card" style={{ padding: 'var(--space-m)' }}>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>
                3. szint — Proaktív emberi jelenlét: értékesítés és megtartás
              </h3>
              <p>
                Az emberi ügyfélszolgálat valódi értékét nem a rutinkérdések megválaszolásában
                rejlik, hanem abban, amit egy algoritmus nem tud elvégezni: felismerni egy
                értékesítési lehetőséget, megőrizni egy elégedetlen ügyfelet, vagy személyes
                kapcsolatot építeni egy visszatérő vásárlóval. Ha a chatbot átveszi az ismétlő
                terhet, a munkatársak erre a magasabb értékű munkára tudnak koncentrálni — és ez
                nem csupán hatékonyságnövekedést jelent, hanem magasabb konverziót és jobb
                ügyfél-elégedettséget is.
              </p>
            </div>
          </section>

          {/* ===== MIKOR VÁLASSZON CHATBOTOT? ===== */}
          <section aria-labelledby="when-chatbot-heading">
            <div className="section-head">
              <span className="eyebrow">Döntési útmutató</span>
              <h2 id="when-chatbot-heading">Mikor éri meg chatbotot bevezetni?</h2>
            </div>

            <p>
              Nem minden vállalkozásnak kell chatbot — de van néhány egyértelmű jel, ami alapján
              érdemes komolyan megfontolni a bevezetést.
            </p>

            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Heti rendszerességgel érkeznek ugyanolyan kérdések, amelyekre ugyanolyan választ ad
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Az ügyfelek munkaidőn kívül is keresik — és ezek a kontaktok eddig válasz nélkül
                maradtak, vagy másnap késve érkeztek
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Nincs dedikált ügyfélszolgálatos — a tulajdonos vagy a kollégák saját munkájuk
                mellett válaszolnak, ami mindkét feladatot rontja
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Az ügyfélszolgálati terhelés csúcsidőszakos — pl. szezonális forgalomban
                robban, és ilyenkor nincs kapacitás minden kérdést időben megválaszolni
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                A weboldalon nagy a forgalom, de alacsony a konverzió — és az ügyfelek kérdésekkel
                hagyják el az oldalt vásárlás előtt
              </li>
            </ul>

            <p style={{ marginTop: 'var(--space-s)' }}>
              Ha ezek közül legalább kettő igaz az Ön vállalkozására, egy jól beállított chatbot
              valószínűleg megtérülő befektetés — nem csupán időmegtakarítás, hanem mérhető
              bevételhatás szempontjából is.
            </p>
          </section>

          {/* ===== MIKOR NEM ELÉG A CHATBOT? ===== */}
          <section aria-labelledby="when-human-heading">
            <div className="section-head">
              <span className="eyebrow">Korlátok és veszélyek</span>
              <h2 id="when-human-heading">Mikor veszélyes a chatbotra hagyatkozni?</h2>
            </div>

            <p>
              A chatbot nem csodaszer — és vannak helyzetek, ahol a kizárólag automatizált
              kiszolgálás komoly kárt okozhat. Ezeket ismerni kell.
            </p>

            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-x" />
                </svg>
                <span className="neg">
                  <strong>Reklamáció és kártérítési igény esetén.</strong> Ha az ügyfél elveszett
                  csomagról, hibás termékről vagy meg nem kapott visszatérítésről kérdez, a
                  chatbot könnyen felhúzza a vérnyomást egy sablonos válasszal. Ez a helyzet
                  emberhez való azonnali átadást igényel.
                </span>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-x" />
                </svg>
                <span className="neg">
                  <strong>B2B és magas értékű értékesítési tárgyalások során.</strong> Ha egy
                  potenciális partner vagy nagyobb ügyfél az első interakcióban chatbotba ütközik
                  és nem kap emberhez utat, az komoly bizalomvesztést okozhat.
                </span>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-x" />
                </svg>
                <span className="neg">
                  <strong>Rosszul betanított, téves információkat adó chatbot esetén.</strong> Egy
                  rosszul beállított chatbot, amely hibás szállítási időt vagy téves árat közöl,
                  többe kerül a cégnek, mint amennyit megspórol. A bevezetés minősége kulcskérdés.
                </span>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <use href="#i-x" />
                </svg>
                <span className="neg">
                  <strong>Ha nincs „emberhez kapcsolom" opció.</strong> Az ügyfelek tolerálják a
                  chatbotot, ha tudják, hogy szükség esetén élő segítséget kapnak. Ha ez az út
                  el van zárva, a frusztráció gyorsan negatív értékelésbe torkollik.
                </span>
              </li>
            </ul>
          </section>

          {/* ===== FAQ ===== */}
          <section aria-labelledby="faq-heading">
            <div className="section-head">
              <span className="eyebrow">Gyakori kérdések</span>
              <h2 id="faq-heading">Amit a legtöbben kérdeznek</h2>
            </div>

            <div className="faq">

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                  Mennyibe kerül egy chatbot egy kis vállalkozásnak?
                </summary>
                <div className="ans">
                  <p>
                    A piacon elérhető megoldások ára széles skálán mozog. Egyszerűbb, sablonos
                    chatbot-platformok (pl. Tidio, Intercom, Crisp) havi 20–80 euró között
                    elérhetők kisebb vállalkozások számára. Egy egyedi, AI-alapú, a cég tudásbázisán
                    betanított chatbot bevezetése jellemzően egyszeri 300 000–800 000 Ft közötti
                    beruházást jelent, amelyhez havi fenntartási díj járul. A megtérülési idő
                    általában 3–8 hónap, ha a chatbot valóban átvesz érdemi ügyfélszolgálati terhet.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                  Tud egy chatbot magyarul megfelelő minőségben kommunikálni?
                </summary>
                <div className="ans">
                  <p>
                    A modern AI-alapú chatbotok (GPT-4, Claude, Gemini alapú megoldások) kiváló
                    minőségű magyar szövegeket generálnak. A kulcs nem az alapmodell nyelvtudása,
                    hanem az, hogy a cég tudásbázisa milyen minőségben van összeállítva: ha a
                    chatbot pontos, részletes és naprakész információkat kap, ezeket magyarul is
                    pontosan és természetes stílusban adja vissza. Az egyszerűbb, döntési fa alapú
                    chatbotoknál a szövegeket manuálisan kell megírni — ami szintén teljes
                    mértékben lehetséges magyarul.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                  Hogyan reagálnak az ügyfelek arra, ha chatbottal kell kommunikálniuk?
                </summary>
                <div className="ans">
                  <p>
                    A felhasználói elfogadás az elmúlt 3–4 évben jelentősen javult. Amennyiben a
                    chatbot gyors, pontos választ ad, az ügyfelek döntő többsége elégedett —
                    függetlenül attól, hogy emberrel vagy automatával kommunikáltak. A negatív
                    visszajelzések szinte kivétel nélkül két forrásból erednek: a chatbot
                    nem tudta megválaszolni a kérdést, és nem volt lehetőség emberhez kerülni;
                    vagy a chatbot téves információt adott. Mindkét probléma a bevezetés
                    minőségén múlik, nem magán a technológián.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                  Milyen időtávon érdemes gondolkodni egy chatbot bevezetésekor?
                </summary>
                <div className="ans">
                  <p>
                    Egy egyszerűbb, döntési fa alapú chatbot bevezetése 2–4 hétre tehető, ha a
                    cég rendelkezik az alaptartalmakkal (GYIK, termékinformációk, folyamatok
                    leírása). Egy AI-alapú, tudásbázisra épülő megoldás esetén reális időkeret
                    6–10 hét — ez magában foglalja a tudásbázis összeállítását, a betanítást és
                    a tesztelési szakaszt. A chatbot soha nem „kész" véglegesen: az első hónapok
                    adatai alapján folyamatosan finomítani kell, hogy valóban jól teljesítsen.
                    Hosszú távon — 6–12 hónap után — általában az első bevezetéskor nem várt
                    előnyök is megjelennek: pl. a chatbot-naplókból feltáruló ügyféligények, amelyek
                    a termék- vagy szolgáltatásfejlesztést is segítik.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ===== CTA ===== */}
          <section>
            <div className="cta">
              <div>
                <h2>Megéri chatbotot bevezetni az Ön vállalkozásában?</h2>
                <p>
                  Nem biztos, hogy minden KKV-nak ugyanolyan megoldásra van szüksége. Ingyenes
                  konzultáción átnézzük az ügyfélszolgálati folyamatait, és megmondjuk, hol nyerhet
                  a legtöbbet egy chatbottal — és hol maradjon az ember.
                </p>
              </div>
              <div className="hero-cta">
                <Link className="btn btn-primary btn-lg" href="/chatbot">
                  Chatbot megoldásaink{' '}
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
                <Link className="btn btn-lg btn-ghost" href="/kapcsolat">
                  Ingyenes konzultáció
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
