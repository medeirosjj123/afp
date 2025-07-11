/**
 * SegmentationSection1 - Componente "Para quem é" com Design Moderno
 * 
 * Este componente apresenta os diferentes segmentos de público-alvo com:
 * - Cards interativos
 * - Ícones ilustrativos
 * - Títulos e descrições
 * - Animações suaves
 * - Layout responsivo em grid
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

export default function SegmentationSection1({
  id,
  title,
  subtitle,
  segments,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        {segments.map((segment, index) => (
          <motion.div
            key={`${id}-segment-${index}`}
            variants={itemVariants}
            className="segment-card group"
          >
            {/* Ícone */}
            {segment.icon && (
              <div className="segment-icon">
                <Image
                  src={segment.icon}
                  alt={segment.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}

            {/* Conteúdo */}
            <div className="space-y-4">
              <h3 className="segment-title">
                {segment.title}
              </h3>
              <p className="segment-description">
                {segment.description}
              </p>
            </div>

            {/* Decoração de hover */}
            <div className="segment-decoration" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 