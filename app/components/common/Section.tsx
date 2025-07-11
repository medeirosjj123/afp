/**
 * Componente Section
 * 
 * Este é um componente base para todas as seções da landing page.
 * Fornece uma estrutura consistente com título, subtítulo e conteúdo,
 * além de controle sobre o background e espaçamento.
 */

'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

const titleAnimation = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const subtitleAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: "easeOut"
    }
  }
};

const Section = ({
  id,
  title,
  subtitle,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  children
}: SectionProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <section id={id} className={`py-20 ${backgroundColor}`}>
        {(title || subtitle) && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            {title && (
              <m.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={titleAnimation}
                className={`text-4xl font-bold mb-4 ${textColor}`}
              >
                {title}
              </m.h2>
            )}
            {subtitle && (
              <m.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtitleAnimation}
                className={`text-xl ${textColor}`}
              >
                {subtitle}
              </m.p>
            )}
          </div>
        )}
        {children}
      </section>
    </LazyMotion>
  );
};

export default Section; 