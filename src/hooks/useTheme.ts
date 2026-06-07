'use client'
import { useEffect, useState } from 'react'

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    function getStored(): string | null {
      try { return localStorage.getItem('hb-theme') } catch { return null }
    }
    function apply(theme: string) {
      root.setAttribute('data-theme', theme)
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) {
        const bg = getComputedStyle(root).getPropertyValue('--bg').trim()
        if (bg) meta.setAttribute('content', bg)
      }
    }

    const stored = getStored()
    apply(stored || (mq.matches ? 'dark' : 'light'))

    const handler = (e: MediaQueryListEvent) => {
      if (!getStored()) apply(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
}

function save(v: string) {
  try { localStorage.setItem('hb-theme', v) } catch {}
}

export function setTheme(v: string) {
  save(v)
  document.documentElement.setAttribute('data-theme', v)
  window.dispatchEvent(new CustomEvent('hb-theme-change', { detail: v }))
}

/** Returns the current data-theme value and updates when it changes. */
export function useThemeValue(): string {
  const [theme, setThemeState] = useState<string>(() => {
    if (typeof window === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') ?? 'light'
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const v = document.documentElement.getAttribute('data-theme') ?? 'light'
      setThemeState(v)
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const handler = (e: Event) => {
      setThemeState((e as CustomEvent<string>).detail)
    }
    window.addEventListener('hb-theme-change', handler)

    return () => {
      observer.disconnect()
      window.removeEventListener('hb-theme-change', handler)
    }
  }, [])

  return theme
}
