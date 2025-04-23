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
  // Definindo classes de background com Tailwind se imageUrl estiver presente
  const bgClasses = imageUrl
    ? `bg-[url('${imageUrl}')] bg-cover bg-center`
    : backgroundColor;
  return (
    <Section
      id={id}
      title=""
      backgroundColor={bgClasses}
      textColor={textColor}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 max-w-xl"
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
    </Section>
  );
} 