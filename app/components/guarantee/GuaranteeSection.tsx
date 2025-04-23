'use client';

/**
 * GuaranteeSection.tsx
 * 
 * Este componente representa a seção de garantia da landing page.
 * Apresenta a política de garantia do produto/curso de forma clara e transparente,
 * transmitindo confiança e reduzindo a objeção de compra do cliente.
 * 
 * Utiliza 4 imagens de garantia em um grid para maior impacto visual.
 */

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../Section';
import Image from 'next/image';

interface GuaranteeProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  days?: number;
  description?: string;
}

const GuaranteeSection = ({
  id = 'garantia',
  title = 'Garantia Incondicional de 7 Dias',
  subtitle = 'Sua satisfação é nossa prioridade absoluta',
  backgroundColor = 'bg-white',
  days = 7,
  description = 'Se por qualquer motivo você não ficar 100% satisfeito com o LPgen, basta nos avisar em até 7 dias e devolveremos todo seu investimento. Sem questionamentos, sem burocracia. Você não tem nada a perder e tudo a ganhar.'
}: GuaranteeProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title=""
        backgroundColor={backgroundColor}
      >
        <div className="max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Título e Subtítulo */}
            <div className="text-center mb-12">
              <m.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                {title}
              </m.h2>
              <m.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                {subtitle}
              </m.p>
            </div>

            {/* Selo Principal de Garantia */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-64 md:h-64 relative mx-auto mb-12"
            >
              <Image
                src="/images/guarantee/guarantee1.png"
                alt="Selo de Garantia"
                fill
                className="object-contain"
                priority
              />
            </m.div>

            {/* Conteúdo */}
            <div className="max-w-2xl mx-auto text-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="text-5xl md:text-7xl font-bold">
                  {days}
                </span>
                <div className="text-2xl md:text-4xl font-semibold leading-tight text-gray-900">
                  Dias de<br />Garantia
                </div>
              </m.div>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-600 mb-12"
              >
                {description}
              </m.p>

              {/* Benefícios com ícones e texto */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600"
              >
                {[
                  { img: 'guarantee2.png', text: 'Devolução em até 24h' },
                  { img: 'guarantee3.png', text: 'Sem burocracia' },
                  { img: 'guarantee4.png', text: '100% do seu dinheiro de volta' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 relative">
                      <Image
                        src={`/images/guarantee/${item.img}`}
                        alt={item.text}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-center">{item.text}</span>
                  </div>
                ))}
              </m.div>
            </div>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default GuaranteeSection; 