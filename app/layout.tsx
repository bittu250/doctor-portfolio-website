import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Dr. Binaya Paudel | Healthcare Technology & Health Informatics',
  description: 'MBBS Doctor and Health Informatics Researcher building healthcare technology that fits real clinical workflow. Specializing in EMR systems, HL7 FHIR interoperability, and Healthcare AI.',
  keywords: ['Healthcare Technology', 'Health Informatics', 'EMR', 'HL7 FHIR', 'Healthcare AI', 'Digital Health', 'Nepal'],
  authors: [{ name: 'Dr. Binaya Paudel' }],
  openGraph: {
    title: 'Dr. Binaya Paudel | Healthcare Technology & Health Informatics',
    description: 'MBBS Doctor and Health Informatics Researcher building healthcare technology that fits real clinical workflow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Binaya Paudel | Healthcare Technology',
    description: 'MBBS Doctor and Health Informatics Researcher building healthcare technology that fits real clinical workflow.',
  },
}

export const viewport = {
  themeColor: '#0f1221',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
