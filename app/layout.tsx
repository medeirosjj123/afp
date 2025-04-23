import type { Metadata } from 'next'
import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Como Viver de Renda Passiva Com Blogs Gerados Por IA | Método 2024',
  description: 'Descubra como criar blogs lucrativos usando Inteligência Artificial e conquistar sua liberdade financeira, mesmo sem conhecimento técnico. Método comprovado com resultados em 90 dias.',
  keywords: 'blog lucrativo, renda passiva, inteligência artificial, IA para blogs, blog sem conhecimento técnico, como criar blog, blog rentável, blog profissional, monetização de blog, SEO para blogs',
  openGraph: {
    title: 'Como Viver de Renda Passiva Com Blogs Gerados Por IA | Método 2024',
    description: 'Descubra como criar blogs lucrativos usando Inteligência Artificial e conquistar sua liberdade financeira, mesmo sem conhecimento técnico. Método comprovado com resultados em 90 dias.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Blog Lucrativo com IA',
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
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600,500&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${poppins.variable} font-body`}>
        {children}
      </body>
    </html>
  )
} 