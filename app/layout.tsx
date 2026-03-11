import type { Metadata, Viewport } from 'next'
import { Open_Sans, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const _merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Threads Of Hope - Let\'s Change South Africa  With Humanity',
  description: 'Threads of is a nonprofit organization dedicated to helping people in need around the South Africa. Support child education, clean water, and medical treatment.',
  generator: 'TOH.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_openSans.variable} ${_merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
