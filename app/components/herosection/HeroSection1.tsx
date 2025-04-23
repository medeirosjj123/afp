'use client';

/**
 * HeroSection1 - Componente de Hero Section moderno e minimalista
 * 
 * Este componente apresenta um layout limpo e moderno com:
 * - Título principal com destaque
 * - Subtítulo descritivo
 * - Botão CTA principal
 * - Imagem ilustrativa (opcional)
 * - Animações suaves de entrada
 */

import { HeroSection } from '../types';
import Section from '../Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection1({
  id,
  title,
  subtitle,
  headline,
  description,
  ctaText,
  ctaUrl,
  imageUrl,
  backgroundColor = 'bg-gradient-to-r from-primary-50 to-primary-100',
  textColor = 'text-neutral-900',
}: HeroSection) {
  return (
    <Section
      id={id}
      title=""
      backgroundColor={backgroundColor}
      textColor={textColor}
      className="min-h-[80vh] flex items-center"
    >
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-300">
              {description}
            </p>
            <motion.a
              href={ctaUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-hero-cta"
            >
              {ctaText}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 