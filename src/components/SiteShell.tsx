'use client'
import { useState } from 'react'
import SvgSprite from './SvgSprite'
import Header from './Header'
import MobileMenu from './MobileMenu'
import Footer from './Footer'
import { useTheme } from '../hooks/useTheme'

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  useTheme()

  return (
    <>
      <SvgSprite />
      <a className="skip-link" href="#main">
        Ugrás a tartalomra
      </a>
      <Header onMenuOpen={() => setMenuOpen(true)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <Footer />
    </>
  )
}
