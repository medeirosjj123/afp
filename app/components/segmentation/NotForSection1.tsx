/**
 * NotForSection1 - Componente "Para quem NÃO é" 
 * 
 * Este componente apresenta os perfis que NÃO são ideais para o produto:
 * - Cards com design diferenciado (mais sóbrio)
 * - Ícones ilustrativos
 * - Explicação clara do motivo
 * - Layout responsivo
 */

'use client';

import { SegmentationSection } from '../types';
import Section from '../common/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function NotForSection1({
  id,
  title,
  subtitle,
  segments,
  backgroundColor = 'bg-neutral-900',
  textColor = 'text-white',
}: SegmentationSection) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {segments.map((segment, index) => (
          <motion.div
            key={`${id}-segment-${index}`}
            variants={itemVariants}
            className="not-for-card group"
          >
            <div className="flex items-start gap-4">
              {/* Ícone */}
              {segment.icon && (
                <div className="not-for-icon">
                  <Image
                    src={segment.icon}
                    alt={segment.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              )}

              {/* Conteúdo */}
              <div className="space-y-2">
                <h3 className="not-for-title">
                  {segment.title}
                </h3>
                <p className="not-for-description">
                  {segment.description}
                </p>
              </div>
            </div>

            {/* Decoração de hover */}
            <div className="not-for-decoration" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 