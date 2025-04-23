/**
 * Componente BenefitsSection2
 * 
 * Este componente apresenta os benefícios do produto em um formato alternado:
 * - 3 seções com imagens e bullet points alternados
 * - Foco em lifestyle e resultados práticos
 * - Cada seção tem uma imagem e 3 benefícios principais
 */

'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../common/Section';
import Image from 'next/image';

interface BenefitsSection2Props {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const BenefitsSection2 = ({
  id = 'beneficios-lifestyle',
  title = 'O Que Você Vai Conquistar',
  subtitle = 'Transforme sua vida com um blog lucrativo',
  backgroundColor = 'bg-white'
}: BenefitsSection2Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Primeira Seção - Imagem à Esquerda */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Coluna da Imagem */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/benefits/benefits1.jpg"
                  alt="Liberdade financeira e geográfica"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coluna dos Benefícios */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Renda Passiva Real</h3>
                    <p className="text-lg text-gray-600">
                      Construa uma fonte de renda consistente que trabalha 24/7 para você, mesmo enquanto dorme.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Liberdade Geográfica</h3>
                    <p className="text-lg text-gray-600">
                      Trabalhe de qualquer lugar do mundo, tudo que você precisa é um notebook e internet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Horários Flexíveis</h3>
                    <p className="text-lg text-gray-600">
                      Defina seus próprios horários e trabalhe quando quiser, sem chefe ou rotina fixa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Segunda Seção - Imagem à Direita */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
          >
            {/* Coluna da Imagem */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/benefits/benefits2.jpg"
                  alt="Crescimento profissional e pessoal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coluna dos Benefícios */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Produção Sem Esforço</h3>
                    <p className="text-lg text-gray-600">
                      Crie semanas de conteúdo em poucas horas: deixe a IA fazer o trabalho pesado enquanto você aprova os resultados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Crescimento Constante</h3>
                    <p className="text-lg text-gray-600">
                      Veja seus resultados crescerem mês após mês com estratégias comprovadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Networking Valioso</h3>
                    <p className="text-lg text-gray-600">
                      Conecte-se com outros profissionais e amplie suas oportunidades de negócio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Terceira Seção - Imagem à Esquerda */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Coluna da Imagem */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/benefits/benefits3.jpg"
                  alt="Qualidade de vida e realização"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coluna dos Benefícios */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Qualidade de Vida</h3>
                    <p className="text-lg text-gray-600">
                      Mais tempo para família, hobbies e para cuidar da sua saúde e bem-estar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Realização Pessoal</h3>
                    <p className="text-lg text-gray-600">
                      Impacte positivamente a vida das pessoas enquanto realiza seus sonhos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Memórias Incríveis</h3>
                    <p className="text-lg text-gray-600">
                      Viaje, conheça lugares novos e crie memórias inesquecíveis com sua família.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default BenefitsSection2; 