'use client';

/**
 * FaqSection.tsx
 * 
 * Este componente representa a seção de Perguntas Frequentes (FAQ) da landing page.
 * Utiliza um acordeão interativo para mostrar as respostas quando o usuário clica nas perguntas,
 * ajudando a resolver as principais dúvidas e objeções dos potenciais clientes.
 */

import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '../Section';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  faqs: FaqItem[];
}

const FaqSection = ({
  id = 'faq',
  title = 'Perguntas Frequentes',
  subtitle = 'Tire suas principais dúvidas sobre o LPgen',
  backgroundColor = 'bg-white',
  faqs
}: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Pergunta */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <m.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-primary"
                  >
                    ↓
                  </m.span>
                </button>

                {/* Resposta */}
                <AnimatePresence>
                  {openIndex === index && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                        <m.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-600"
                        >
                          {faq.answer}
                        </m.p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default FaqSection; 