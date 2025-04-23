/**
 * PresentationSectionSaaS - Componente de Apresentação de Funcionalidades do SaaS
 * 
 * Este componente apresenta as funcionalidades do software com:
 * - Grid de features
 * - Ícones grandes
 * - Descrições detalhadas
 * - Animações suaves
 */

'use client';

import { PresentationSection } from '../types';
import Section from '../Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function PresentationSectionSaaS({
  id,
  title,
  subtitle,
  content,
  features,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
}: PresentationSection) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {/* Descrição Geral do Software */}
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-center text-gray-600">
          {content}
        </p>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={`${id}-feature-${index}`}
            variants={itemVariants}
            className="feature-card"
          >
            {/* Ícone */}
            {feature.icon && (
              <div className="feature-icon">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}

            {/* Conteúdo */}
            <div className="space-y-3">
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>

            {/* Decoração */}
            <div className="feature-decoration" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 