import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SvgSprite from './SvgSprite'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <SvgSprite />
      <a className="skip-link" href="#main">
        Ugrás a tartalomra
      </a>
      <Header onMenuOpen={() => setMenuOpen(true)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
