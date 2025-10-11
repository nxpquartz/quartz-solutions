// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quartz Consulting Group - FEAM Services | Enterprise Facilities Management',
  description: 'Transform aging infrastructure into intelligent assets with our FEAM methodology. Field-verified asset intelligence for educational institutions. 770+ buildings assessed.',
  keywords: 'FEAM, facilities management, asset management, asset verification, construction handover, QR code tagging, CMMS integration',
  authors: [{ name: 'Quartz Consulting Group' }],
  creator: 'Quartz Consulting Group',
  publisher: 'Quartz Consulting Group',
  metadataBase: new URL('https://quartz.solutions'),
  openGraph: {
    title: 'Quartz Consulting Group - FEAM Services',
    description: 'Transform your facilities portfolio with field-verified asset intelligence',
    url: 'https://quartz.solutions',
    siteName: 'Quartz Consulting Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quartz FEAM Services',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}