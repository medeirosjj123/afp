'use client';

/**
 * FinalCtaSection.tsx
 * 
 * Este componente representa a última seção da landing page, com um CTA agressivo
 * para criar urgência e incentivar a ação imediata do usuário. Utiliza elementos
 * visuais e copy persuasivo para maximizar as conversões no último momento de decisão.
 */

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../common/Section';

interface FinalCtaSectionProps {
  id?: string;
  backgroundColor?: string;
  mainHeadline?: string;
  subHeadline?: string;
  timerText?: string;
  ctaText?: string;
  ctaUrl?: string;
  urgencyText?: string;
  features?: string[];
}

const FinalCtaSection = ({
  id = 'final-cta',
  backgroundColor = 'bg-black',
  mainHeadline = 'Comece Seu Blog de Sucesso Hoje Mesmo',
  subHeadline = 'Aproveite o poder da IA para criar conteúdo que gera resultados',
  timerText = 'Condição Especial - 12x R$ 103,11',
  ctaText = 'QUERO COMEÇAR AGORA →',
  ctaUrl = '#checkout',
  urgencyText = 'Acesso imediato após a confirmação do pagamento',
  features = [
    '✓ Acesso ilimitado por 12 meses à plataforma',
    '✓ Suporte premium via chat',
    '✓ Garantia incondicional de 7 dias',
    '✓ Comunidade exclusiva de alunos'
  ]
}: FinalCtaSectionProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title=""
        subtitle=""
        backgroundColor={backgroundColor}
        className="py-16 md:py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline Principal */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {mainHeadline}
          </m.h2>

          {/* Subheadline */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            {subHeadline}
          </m.p>

          {/* Timer/Urgência */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 rounded-lg py-3 px-6 inline-block mb-8"
          >
            <p className="text-white font-semibold">
              💰 {timerText}
            </p>
          </m.div>

          {/* Features em duas colunas */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-left text-white/90 text-lg md:text-xl"
              >
                {feature}
              </div>
            ))}
          </m.div>

          {/* CTA Principal */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <a
              href={ctaUrl}
              className="inline-block bg-red-600 text-white text-xl md:text-2xl font-bold py-4 px-8 rounded-full hover:bg-red-500 hover:scale-105 transform transition-all duration-200 shadow-lg"
            >
              {ctaText}
            </a>
            
            <p className="text-white/80 text-sm md:text-base">
              {urgencyText}
            </p>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default FinalCtaSection; 