'use client';

/**
 * PriceAnchorSection.tsx
 * 
 * Este componente representa a seção de ancoragem de preço da landing page.
 * Utiliza a técnica de empilhamento de valor para justificar o investimento,
 * mostrando o valor real de cada componente do produto/curso separadamente.
 */

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../Section';
import Image from 'next/image';

interface ValueItem {
  title: string;
  description: string;
  value: string;
  icon: string;
}

interface PriceAnchorProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  items: ValueItem[];
  totalValue: string;
  realPrice: string;
  discount: string;
  savingsText?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const PriceAnchorSection = ({
  id = 'valor',
  title = 'Qual o Valor do Investimento?',
  subtitle = 'Veja o valor real de tudo que você vai receber',
  backgroundColor = 'bg-white',
  items,
  totalValue,
  realPrice,
  discount,
  savingsText = 'de economia',
  ctaText = 'Quero Começar Agora',
  ctaUrl = '#checkout'
}: PriceAnchorProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-4xl mx-auto">
          {/* Lista de Itens */}
          <div className="space-y-4 mb-12">
            {items.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6"
              >
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {item.description}
                  </p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-gray-400 line-through text-sm">
                    R$ {item.value}
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Resumo do Valor */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary/5 rounded-2xl p-8 text-center"
          >
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-2">Valor Total</p>
                <p className="text-4xl font-bold text-gray-400 line-through">
                  R$ {totalValue}
                </p>
              </div>

              <div className="text-center">
                <p className="text-primary font-semibold text-lg mb-4">Preço Promocional</p>
                <div className="flex flex-col items-center gap-4">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-primary">
                      {realPrice.includes('x') ? (
                        <>
                          <span className="text-4xl">12x </span>
                          R$ 103,11
                        </>
                      ) : (
                        `R$ ${realPrice}`
                      )}
                    </p>
                    <p className="text-lg text-gray-600 mt-3">
                      ou R$ 997,00 à vista
                    </p>
                  </div>
                  <div className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold">
                    {discount}% OFF
                  </div>
                </div>
              </div>

              <m.div
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block bg-green-100 text-green-800 px-8 py-3 rounded-full text-lg font-semibold"
              >
                Você economiza R$ {(parseFloat(totalValue.replace('.', '').replace(',', '.')) - parseFloat(realPrice.replace('.', '').replace(',', '.'))).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} {savingsText}
              </m.div>

              {/* CTA Button */}
              <div className="pt-8">
                <m.a
                  href={ctaUrl}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl font-bold px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">{ctaText}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-700/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </m.a>

                {/* Texto de Urgência */}
                <p className="mt-4 text-gray-600 text-sm">
                  * Oferta por tempo limitado, sujeita a encerramento
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default PriceAnchorSection; 