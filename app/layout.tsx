// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quartz Consulting Group - FEAM Services | Facilities Equipment Asset Management',
  description: 'Transform aging infrastructure into intelligent assets with our FEAM methodology. Field-verified asset intelligence for educational institutions, healthcare, and government facilities.',
  keywords: 'FEAM, facilities equipment asset management, asset verification, QR code tagging, CMMS integration, construction handover, capital planning, preventative maintenance',
  authors: [{ name: 'Quartz Consulting Group' }],
  creator: 'Quartz Consulting Group',
  publisher: 'Quartz Consulting Group',
  metadataBase: new URL('https://quartz.solutions'),
  openGraph: {
    title: 'Quartz Consulting Group - FEAM Services',
    description: 'Transform your facilities portfolio with field-verified asset intelligence. 770+ buildings documented, 15+ years of expertise.',
    url: 'https://quartz.solutions',
    siteName: 'Quartz Consulting Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quartz FEAM Services - Facilities Equipment Asset Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quartz Consulting Group - FEAM Services',
    description: 'Transform your facilities portfolio with field-verified asset intelligence',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}