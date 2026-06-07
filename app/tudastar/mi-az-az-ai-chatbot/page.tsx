import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mi az az AI chatbot, és mire jó egy KKV-nak? | Heart & Byte Tudástár',
  description:
    'Részletes útmutató KKV-knak: mi az az AI chatbot, hogyan működik, mire használható ügyfélszolgálatban, foglalásnál és GYIK-megválaszolásnál – és mire NEM alkalmas.',
}

export default function MiAzAzAiChatbot() {
  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="wrap">
          <nav aria-label="Útmutató" className="crumb">
            <Link href="/" className="c1">Főoldal</Link>
            <span className="sl" aria-hidden="true">/</span>
            <Link href="/tudastar" className="c1">Tudástár</Link>
            <span className="sl" aria-hidden="true">/</span>
            <span className="c2" aria-current="page">Mi az az AI chatbot?</span>
          </nav>

          <div className="glyph" aria-hidden="true">
            <svg className="lucide" viewBox="0 0 24 24"><use href="#i-chat" /></svg>
          </div>

          <h1>Mi az az <span className="hl">AI chatbot</span>,<br />és mire jó egy KKV-nak?</h1>

          <p className="lead">
            Az AI chatbot egy mesterséges intelligenciával hajtott virtuális asszisztens,
            amely valós időben válaszol az ügyfelek kérdéseire – éjjel-nappal, hétvégén és
            ünnepnapokon is. Ez a cikk bemutatja, hogyan működik, milyen konkrét problémákat
            old meg egy kis- és középvállalkozás mindennapjaiban, és mire nem szabad számítani tőle.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="page-body">
        <div className="wrap stack">

          {/* 1. Mi az az AI chatbot? */}
          <section aria-labelledby="mi-az">
            <div className="section-head">
              <span className="eyebrow">Alapok</span>
              <h2 id="mi-az">Mi az az AI chatbot, és hogyan különbözik a régi chatbotoktól?</h2>
            </div>
            <p>
              A „chatbot" szó régóta létezik – az első generációs megoldások egyszerű
              döntési fákon alapultak: a felhasználó rákattintott egy gombra, a rendszer
              előre megírt választ adott. Ezek a botok hasznosak voltak korlátozott
              helyzetekben, de bármilyen váratlan kérdésnél megakadtak.
            </p>
            <p>
              Az <strong>AI chatbot</strong> ennél lényegesen okosabb. Nagy nyelvi modellek
              (LLM – Large Language Model) hajtják, amelyek képesek a természetes emberi
              nyelvű szövegeket megérteni és értelmesen megválaszolni. Nem kell a
              felhasználónak varázsszavakat begépelnie: azt írja, amit gondol, és a
              chatbot megérti a kérdés lényegét.
            </p>
            <p>
              A <span className="hl">KKV-knak szánt AI chatbotok</span> egy újabb lépést
              tesznek: a saját vállalkozása adataival – áraival, termékeivel, szabályzataival,
              GYIK-jával – tanítják be az általános intelligenciát. Az eredmény egy olyan
              asszisztens, amely pontosan tudja, mivel foglalkozik az Ön cége, mi a
              nyitvatartás, hogyan lehet foglalni, és mi a visszaküldési határidő.
            </p>
          </section>

          {/* 2. Hogyan működik */}
          <section aria-labelledby="hogyan-mukodik">
            <div className="section-head">
              <span className="eyebrow">Felépítés</span>
              <h2 id="hogyan-mukodik">Hogyan épül fel egy KKV-s AI chatbot?</h2>
            </div>
            <p>
              Egy modern KKV-chatbot bevezetése három fő szakaszból áll. Nem igényel
              programozói tudást – az Ön feladata az, hogy rendelkezésre bocsássa
              a vállalkozásra vonatkozó információkat.
            </p>

            <div className="stack">
              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-bulb" /></svg>
                </div>
                <h3>1. Tudásbázis összeállítása és betanítás</h3>
                <p>
                  Az első lépés a chatbot „agyának" feltöltése. Ide kerülnek a weboldal
                  tartalmai, a GYIK dokumentum, az árlista, a szolgáltatások leírása, a
                  foglalási feltételek és bármilyen más szöveg, amit az ügyfeleknek
                  tudniuk kell. A rendszer feldolgozza ezeket, és képes lesz rájuk
                  hivatkozni, amikor egy ügyfél kérdez. A betanítás általában néhány
                  munkanapot vesz igénybe, és az Ön visszajelzései alapján finomítható.
                </p>
              </div>

              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-chat" /></svg>
                </div>
                <h3>2. Beágyazás a weboldalba</h3>
                <p>
                  A kész chatbot egy kis kódrészlet (widget) formájában kerül a weboldalba –
                  ugyanolyan egyszerűen, mint ahogy egy Google Analytics-kódot vagy egy
                  Facebook-pixelt szokás elhelyezni. Megjelenik egy csevegőablak a jobb
                  alsó sarokban, amelyet az ügyfelek azonnal elkezdhetnek használni.
                  A chatbot megjelenése (szín, logó, üdvözlőszöveg) testreszabható,
                  hogy illeszkedjen a márkaidentitáshoz.
                </p>
              </div>

              <div className="card">
                <div className="icon-badge" aria-hidden="true">
                  <svg className="lucide" viewBox="0 0 24 24"><use href="#i-clock" /></svg>
                </div>
                <h3>3. Havi riport és folyamatos finomítás</h3>
                <p>
                  A bevezetés nem egyszeri esemény. Havi összesítőt készítünk arról, hogy
                  milyen kérdéseket tett fel a legtöbb látogató, melyek azok a témák,
                  amelyekre a chatbot nem adott kielégítő választ, és milyen új tartalmakat
                  érdemes betanítani. Ez segít abban, hogy a chatbot folyamatosan javuljon,
                  és egyre pontosabban tükrözze a vállalkozás valóságát.
                </p>
              </div>
            </div>
          </section>

          {/* 3. KKV felhasználási esetek */}
          <section aria-labelledby="felhasznalasi-esetek">
            <div className="section-head">
              <span className="eyebrow">Konkrét példák</span>
              <h2 id="felhasznalasi-esetek">Mire használják a KKV-k a chatbotot a gyakorlatban?</h2>
            </div>
            <p>
              Az AI chatbot nem egyféle vállalkozástípushoz való: szépségszalonok,
              fogorvosi rendelők, online boltok, ingatlanközvetítők, autószervizek és
              vendéglátóhelyek egyaránt profitálnak belőle. Íme a leggyakoribb
              felhasználási területek:
            </p>

            <ul className="tick-list">
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Ügyfélszolgálat munkaidőn kívül</strong> — Éjjel 11-kor az
                  ügyfél rákeres a szerviz nyitvatartására, vagy arra, hogy elfogadnak-e
                  bankkártyát. Ahelyett, hogy másnap visszahívná Önt, azonnal választ kap.
                  A chatbot nem fárad el, nem hív meg szabadnapot, és nem betegszik le.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Foglaláskezelés és időpont-egyeztetés</strong> — A chatbot
                  tájékoztatja az ügyfelet a szabad időpontokról, ismerteti a foglalás
                  menetét, és továbbirányítja a megfelelő oldalra vagy naptárhoz. Ez
                  csökkenti a telefonos terhelést és a félreértésekből adódó
                  lemondásokat.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>GYIK megválaszolása automatikusan</strong> — „Mennyibe kerül?",
                  „Meddig tart a szállítás?", „Van-e gluténmentes opció?", „Hogyan
                  mondhatom le a rendelésemet?" – ezeket a kérdéseket naponta tucatszor
                  teszik fel. A chatbot pillanatok alatt válaszol mindegyikre, miközben
                  Ön a fontosabb feladatokra koncentrálhat.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Termék- és szolgáltatásajánlás</strong> — Az ügyfél leírja,
                  mire lenne szüksége, a chatbot pedig javasol egy konkrét terméket vagy
                  csomagot a kínálatból. Ez egyfajta digitális értékesítési asszisztens,
                  amely 0-24 elérhető.
                </div>
              </li>
              <li>
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                <div>
                  <strong>Érdeklődők kvalifikálása</strong> — A chatbot megkérdezheti,
                  milyen projektre keres ajánlatot, mekkora a büdzsé, mikor kellene
                  elkészülni – és az összegyűjtött adatokat e-mailben továbbítja Önnek.
                  Így Ön felkészülten hívja vissza az ügyfelet.
                </div>
              </li>
            </ul>
          </section>

          {/* 4. Mit NEM tud */}
          <section aria-labelledby="mit-nem-tud">
            <div className="section-head">
              <span className="eyebrow">Fontos korlátok</span>
              <h2 id="mit-nem-tud">Mit NEM tud az AI chatbot? (Realisztikus elvárások)</h2>
            </div>
            <p>
              Az AI chatbot rendkívül hasznos eszköz, de nem mindenható. Mielőtt bevezeti,
              fontos tisztán látni a korlátait – hogy ne érje csalódás, és az ügyfelei
              se kerüljenek kellemetlen helyzetbe.
            </p>

            <div className="card">
              <div className="icon-badge" aria-hidden="true">
                <svg className="lucide" viewBox="0 0 24 24"><use href="#i-shield" /></svg>
              </div>
              <h3>Amit nem várhat el a chatbottól</h3>
              <ul className="tick-list">
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <div>
                    <strong>Nem helyettesíti az emberi kapcsolatot érzékeny ügyekben.</strong>{' '}
                    Ha az ügyfél panaszt tesz, reklamál, vagy érzelmileg érintett egy
                    problémában, a chatbot átadja a szót az emberi kollégának. Fontos, hogy
                    az átadás zökkenőmentes legyen.
                  </div>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <div>
                    <strong>Nem tud valós idejű rendszeradatokhoz hozzáférni automatikusan.</strong>{' '}
                    Ha a raktárkészletet, a szabad időpontokat vagy a rendelés státuszát valós
                    időben kellene megmutatnia, ehhez integrációt kell kiépíteni a háttérrendszerekkel.
                    Ez megoldható, de külön fejlesztést igényel.
                  </div>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <div>
                    <strong>Nem garantáltan tévedésmentes.</strong> Ha a betanított adatokban
                    pontatlanság van, a chatbot is pontatlan választ adhat. Ezért
                    elengedhetetlen a rendszeres ellenőrzés és a tudásbázis naprakészen tartása.
                  </div>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <div>
                    <strong>Nem hoz önállóan pénzügyi döntéseket.</strong> Szerződést kötni,
                    visszatérítést jóváhagyni, vagy egyedi árajánlatot adni – ezek az
                    emberi döntéshozó hatásköre marad.
                  </div>
                </li>
                <li>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg>
                  <div>
                    <strong>Nem old meg szervezeti problémákat önmagában.</strong> Ha a
                    szolgáltatás minősége rossz, vagy az ügyfélkezelési folyamatok rendezetlenek,
                    a chatbot csak láthatóbbá teszi ezeket – nem orvosolja őket.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Miért éri meg most */}
          <section aria-labelledby="miert-most">
            <div className="section-head">
              <span className="eyebrow">Versenyképesség</span>
              <h2 id="miert-most">Miért éri meg most bevezetni – és nem egy év múlva?</h2>
            </div>
            <p>
              Magyarországon a KKV-szektor két komoly kihívással küzd egyszerre:
              a <strong>munkaerőhiánnyal</strong> és az <strong>ügyfélelvárásos inflációval</strong>.
              Az emberek egyre gyorsabb választ várnak – az online kereskedelem és a
              nagy platformok hozzászoktatták őket ahhoz, hogy perceken belül kapnak
              visszajelzést. Aki nem tud lépést tartani, elveszíti az ügyfelet.
            </p>
            <p>
              Egy chatbot nem a meglévő kollégák helyett dolgozik, hanem a{' '}
              <span className="hl">lefedetlen rések</span> betömésére szolgál: az éjszakai
              kérdések, a hétvégi érdeklődők, a párhuzamos, ismétlődő kérdések kezelése –
              mindaz, amire nincs kapacitása a csapatnak, vagy amire felesleges emberi
              erőforrást fordítani.
            </p>
            <p>
              Az AI technológia ára az elmúlt három évben drámaian csökkent. Ami korábban
              csak nagy vállalatok számára volt megfizethető, ma már egy kisebb szépségszalon
              vagy vendéglátóhely büdzséjébe is belefér. Azok a KKV-k, amelyek most
              elsőként lépnek, <strong>versenyelőnyt szereznek</strong> a saját piacukon –
              míg a többiek még azt fontolgatják, érdemes-e egyáltalán foglalkozni ezzel.
            </p>
            <p>
              Az ügyfelek tapasztalata szerint a jól beállított AI chatbot a beérkező,
              ismétlődő kérdések <strong>60–80%-át</strong> képes önállóan megválaszolni.
              Ez heti több órányi felszabadult kapacitást jelent – ami az értékesítésre,
              a fejlesztésre vagy egyszerűen a pihenésre fordítható.
            </p>
          </section>

          {/* 6. FAQ */}
          <section aria-labelledby="gyik">
            <div className="section-head">
              <span className="eyebrow">Gyakori kérdések</span>
              <h2 id="gyik">GYIK — AI chatbot KKV-knak</h2>
            </div>

            <div className="faq">
              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Kell hozzá programozói tudás, vagy magam is be tudom állítani?
                </summary>
                <div className="ans">
                  <p>
                    A legtöbb modern KKV-chatbot platformhoz nem szükséges programozói
                    háttér. A tartalom feltöltése (tudásbázis, GYIK, termékinformációk)
                    általában egy egyszerű webes felületen keresztül történik. A weboldali
                    beágyazás – egy kódrészlet elhelyezése – technikai segítséget igényel,
                    de ezt jellemzően elvégzi a fejlesztő vagy a tárhelyszolgáltató. A
                    Heart &amp; Byte végigviszi Önt ezen a folyamaton, szükség esetén a
                    beágyazást is elvégzi.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Mennyi idő alatt áll be a chatbot, és mikor lesz éles?
                </summary>
                <div className="ans">
                  <p>
                    A kezdeti beállítás – a tudásbázis összeállításától a weboldali
                    megjelenésig – általában <strong>1–3 hetet</strong> vesz igénybe,
                    attól függően, hogy mennyi tartalmat kell feldolgozni, és milyen gyorsan
                    érkeznek az Ön visszajelzései a tesztfázisban. Az élesítés után a
                    chatbot azonnal működőképes, de az első 4–6 hétben érdemes szorosan
                    figyelni a párbeszédeket, és szükség szerint finomítani a válaszokat.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Mi történik, ha az ügyfél olyan kérdést tesz fel, amire a chatbot nem tud válaszolni?
                </summary>
                <div className="ans">
                  <p>
                    Ilyenkor a chatbot nem talál ki választ – ez fontos biztonsági
                    elem. Ehelyett jelzi, hogy az adott kérdés meghaladja a tudásbázisát,
                    és felajánlja, hogy átirányítja az ügyfelet: e-mailben, telefonon vagy
                    egy kapcsolatfelvételi űrlapon keresztül. Ez megakadályozza a téves
                    információk terjedését, és fenntartja az ügyfél bizalmát.
                  </p>
                </div>
              </details>

              <details className="faq-item">
                <summary>
                  <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
                  Biztonságos az ügyfelek adatainak szempontjából az AI chatbot?
                </summary>
                <div className="ans">
                  <p>
                    A megbízható chatbot-platformok GDPR-kompatibilisan működnek: az
                    üzenetek titkosítva tárolódnak, a személyes adatokat nem használják
                    fel modelltrénezésre, és beállítható az automatikus adattörlési időszak.
                    Fontos, hogy a chatbot ne kérjen olyan érzékeny adatot (pl. bankkártya-szám,
                    jelszó), amelyek kezelésére nincs megfelelő biztonsági infrastruktúra.
                    A Heart &amp; Byte kizárólag GDPR-kompatibilis megoldásokkal dolgozik.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-cim" className="cta">
            <div className="icon-badge" aria-hidden="true">
              <svg className="lucide" viewBox="0 0 24 24"><use href="#i-chat" /></svg>
            </div>
            <h2 id="cta-cim">
              AI chatbot szolgáltatásunk <span className="hl">hamarosan indul</span>
            </h2>
            <p>
              Dolgozunk rajta, hogy a Heart &amp; Byte AI chatbot megoldása elérhető legyen
              magyar KKV-k számára – egyszerű bevezetéssel, átlátható árazással és
              folyamatos magyar nyelvű támogatással. Iratkozzon fel értesítőnkre, vagy
              kérdezzen bátran – szívesen válaszolunk.
            </p>
            <div>
              <Link href="/chatbot" className="btn btn-primary btn-lg">
                Tudjon meg többet a chatbot szolgáltatásról
                <svg className="lucide" viewBox="0 0 24 24" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </Link>
              <Link href="/kapcsolat" className="btn btn-ghost">
                Kapcsolatfelvétel
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
