import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quartz Consulting Group - FEAM Services',
  description: 'Facilities Equipment Asset Management (FEAM) services for enterprise facility portfolios. Transform your facilities with field-verified asset intelligence.',
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
        alt: 'Quartz Consulting Group',
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
  verification: {
    // Add these when you have them:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}