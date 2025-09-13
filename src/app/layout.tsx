// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourTechs - Project Management & IT Help Platform',
  description: 'Professional project management with Kanban boards, real-time collaboration, and community IT support. Track software projects and get expert help from experienced developers.',
  keywords: 'project management, software development, IT help, kanban boards, collaboration, programming help, tech support, developer community',
  authors: [{ name: 'YourTechs' }],
  creator: 'YourTechs',
  publisher: 'YourTechs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourtechs.com'), // Update with your actual domain
  openGraph: {
    title: 'Your Techs - Project Management Made Simple',
    description: 'Professional project management platform for custom development projects. Connect with developers and IT specialists for websites, mobile apps, and software solutions.',
    url: 'https://yourtechs.com',
    siteName: 'Your Techs',
    images: [
      {
        url: '/og-image.jpg', // We'll create this later
        width: 1200,
        height: 630,
        alt: 'Your Techs - Project Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Techs - Project Management & Custom Development Platform',
    description: 'Professional project management for custom development projects with developers and IT specialists.',
    images: ['/og-image.jpg'], // We'll create this later
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
    // Add these later when you set up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
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
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://yourtechs.com" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        
        {/* Favicon and app icons - we'll add these later */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}