'use client';

/**
 * HeroSection2.tsx
 * 
 * Este componente representa a seção hero da landing page com layout vertical:
 * - Headline principal usando Inter
 * - Vídeo centralizado
 * - Subheadline usando Inter para melhor legibilidade
 * - CTA na parte inferior com Inter
 * 
 * Design inspirado no 8links.com.br com tipografia moderna.
 */

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../Section';

interface HeroSection2Props {
  id?: string;
  backgroundColor?: string;
  headline?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const HeroSection2 = ({
  id = 'hero',
  backgroundColor = 'bg-black',
  headline = 'Como Ganhar R$10.000/mês com Seu Blog - Mesmo Sem Experiência!',
  videoUrl = 'https://www.youtube.com/embed/your-video-id',
  videoThumbnail = '/video-thumbnail.jpg',
  subheadline = 'Descubra o passo a passo para criar um blog lucrativo com SEO e backlinks automáticos!',
  ctaText = 'Quero Viver De Renda Passiva',
  ctaUrl = '#cadastro'
}: HeroSection2Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title=""
        subtitle=""
        backgroundColor={backgroundColor}
        className="min-h-screen flex items-center justify-center py-6 md:py-8"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col justify-between h-full">
          {/* Headline Principal */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-3xl md:text-4xl lg:text-[52px] font-extrabold text-white text-center mb-6 md:mb-8 max-w-[800px] mx-auto leading-[1.1] md:leading-[1.15] tracking-[-0.02em] px-3"
          >
            {headline}
          </m.h1>

          {/* Container do Vídeo */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto aspect-video mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={videoUrl}
              title="Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </m.div>

          <div className="space-y-6 md:space-y-8">
            {/* Subheadline */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-inter text-lg md:text-2xl text-white/90 text-center max-w-3xl mx-auto font-medium leading-relaxed"
            >
              {subheadline}
            </m.p>

            {/* CTA Button */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <a
                href={ctaUrl}
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full transform transition-all duration-200 hover:scale-105 shadow-lg font-inter tracking-wide uppercase"
              >
                {ctaText}
              </a>
            </m.div>
          </div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default HeroSection2; 