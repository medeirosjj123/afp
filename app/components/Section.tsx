'use client';

import { BaseSection } from './types';
import { LazyMotion, domAnimation, m } from 'framer-motion';

interface SectionProps extends BaseSection {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  children,
  className = '',
}: SectionProps) {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id={id}
        className={`py-16 ${backgroundColor} ${textColor} ${className}`}
      >
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-center mb-8 text-gray-600">{subtitle}</p>
            )}
            {children}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
} 