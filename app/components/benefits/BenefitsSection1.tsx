/**
 * BenefitsSection1 - Componente de Benefícios com Design Moderno
 * 
 * Este componente apresenta os principais benefícios do produto com:
 * - Cards com ícones grandes
 * - Animações suaves
 * - Destaque para números/estatísticas
 * - Layout responsivo em grid
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../Section';

interface Benefit {
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

interface BenefitsSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  benefits: Benefit[];
  backgroundColor?: string;
  textColor?: string;
}

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function BenefitsSection1({
  id,
  title,
  subtitle,
  benefits,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
}: BenefitsSectionProps) {
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={`${id}-benefit-${index}`}
            variants={itemVariants}
            className="benefit-card group"
          >
            {/* Ícone */}
            <div className="benefit-icon">
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Destaque (se houver) */}
            {benefit.highlight && (
              <div className="benefit-highlight">
                {benefit.highlight}
              </div>
            )}

            {/* Conteúdo */}
            <div className="space-y-3">
              <h3 className="benefit-title">
                {benefit.title}
              </h3>
              <p className="benefit-description">
                {benefit.description}
              </p>
            </div>

            {/* Decoração de hover */}
            <div className="benefit-decoration" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 