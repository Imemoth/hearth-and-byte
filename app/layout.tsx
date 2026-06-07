import type { Metadata } from 'next'
import './globals.css'
import SiteShell from '@/src/components/SiteShell'

export const metadata: Metadata = {
  title: 'Heart & Byte — Digitális megoldások, amik működnek',
  description:
    'Akadálymentes weboldalak, AI chatbot és honlapkészítés magyar KKV-knak. WCAG 2.1 AA megfelelés a 2025-ös határidőre.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" data-scheme="green" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#faf9f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
