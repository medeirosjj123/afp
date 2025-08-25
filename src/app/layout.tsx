import '@/assets/scss/style.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Blog Lucrativo com IA',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Crie blogs lucrativos em 1 clique com nossa plataforma IA. WordPress automático, conteúdo SEO otimizado, monetização configurada. Tecnologia asiática, resultados comprovados. 12 meses de acesso + mentoria.',
  keywords: 'blog lucrativo, IA, SEO, WordPress automático, monetização blog, plataforma SEO, Bruno Medeiros, blog com inteligência artificial, SEO Tailândia',
  authors: [{ name: 'Bruno Medeiros', url: 'https://afiliadofaixapreta.com.br' }],
  creator: 'Bruno Medeiros',
  publisher: 'Blog Lucrativo com IA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://afiliadofaixapreta.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://afiliadofaixapreta.com.br',
    title: 'Blog Lucrativo com IA - A Única Plataforma Que Cria Blogs Lucrativos em 1 Clique',
    description: 'Crie blogs lucrativos em 1 clique com nossa plataforma IA. WordPress automático, conteúdo SEO otimizado, monetização configurada. Tecnologia asiática com 15 anos de experiência.',
    siteName: 'Blog Lucrativo com IA',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Lucrativo com IA - Plataforma completa para criar blogs lucrativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Lucrativo com IA - Crie Blogs Lucrativos em 1 Clique',
    description: 'Plataforma completa com IA para criar blogs lucrativos. WordPress automático + SEO otimizado + monetização. Tecnologia asiática comprovada.',
    images: ['/og-image.webp'],
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc3545" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brazil" />
        <meta name="language" content="pt-BR" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <style suppressHydrationWarning>{}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Blog Lucrativo com IA',
              description: 'Plataforma completa para criar blogs lucrativos automaticamente com inteligência artificial. WordPress automático, conteúdo SEO otimizado e monetização configurada.',
              brand: {
                '@type': 'Brand',
                name: 'Blog Lucrativo com IA'
              },
              offers: {
                '@type': 'Offer',
                price: '1997',
                priceCurrency: 'BRL',
                availability: 'https://schema.org/InStock',
                seller: {
                  '@type': 'Person',
                  name: 'Bruno Medeiros'
                }
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '50'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Bruno Medeiros',
              jobTitle: 'Expert Internacional em SEO',
              description: '15 anos de experiência em SEO mundial. Baseado na Tailândia há 8 anos, especialista em tecnologias asiáticas de SEO.',
              url: 'https://afiliadofaixapreta.com.br',
              sameAs: [
                'https://afiliadofaixapreta.com.br'
              ]
            })
          }}
        />
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
