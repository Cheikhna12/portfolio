import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cheikhamouhamedou.dev'),
  title: 'Cheikhna Mouhamedou Ould | Développeur Full-Stack | Portfolio',
  description: 'Portfolio de Cheikhna Mouhamedou Ould - Développeur Full-Stack passionné. Expertise en React, Next.js, Angular, Java Spring Boot, Python Django, Flutter. Disponible pour projets freelance et opportunités professionnelles.',
  keywords: ['Cheikhna Mouhamedou Ould', 'développeur full-stack', 'portfolio développeur', 'React', 'Next.js', 'Angular', 'Java Spring Boot', 'Python Django', 'Flutter', 'développeur web', 'applications mobiles', 'IA', 'data science', 'Epitech', 'Rennes'],
  authors: [{ name: 'Cheikhna Mouhamedou Ould' }],
  creator: 'Cheikhna Mouhamedou Ould',
  publisher: 'Cheikhna Mouhamedou Ould',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://cheikhamouhamedou.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cheikhamouhamedou.dev',
    siteName: 'Portfolio Cheikhna Mouhamedou Ould',
    title: 'Cheikhna Mouhamedou Ould | Développeur Full-Stack',
    description: 'Portfolio professionnel - Développeur Full-Stack spécialisé en React, Angular, Java Spring Boot. Créateur de solutions digitales élégantes.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheikhna Mouhamedou Ould - Portfolio Développeur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheikhna Mouhamedou Ould | Développeur Full-Stack',
    description: 'Portfolio professionnel - Développeur Full-Stack passionné',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Cheikhna Mouhamedou Ould',
              jobTitle: 'Développeur Full-Stack',
              url: 'https://cheikhamouhamedou.dev',
              sameAs: [
                'https://www.linkedin.com/in/cheikhna-mouhamedou-ould',
                'https://github.com/cheikhna-mouhamedou-ould',
              ],
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Java', 'Spring Boot', 'Angular', 'Flutter'],
              alumniOf: {
                '@type': 'Organization',
                name: 'Epitech',
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
