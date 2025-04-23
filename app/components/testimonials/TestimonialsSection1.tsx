/**
 * TestimonialsSection1 - Componente de Depoimentos com Design Moderno
 * 
 * Este componente apresenta depoimentos em um layout grid responsivo com:
 * - Cards modernos com sombra suave
 * - Foto do cliente (opcional)
 * - Nome e cargo/empresa
 * - Texto do depoimento
 * - Animações suaves de entrada
 * - Totalmente responsivo
 */

'use client';

import { TestimonialSection } from '../types';
import Section from '../Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Animação para os cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function TestimonialsSection1({
  id,
  title,
  subtitle,
  testimonials,
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
}: TestimonialSection) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`${id}-testimonial-${index}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="testimonial-card"
          >
            {/* Aspas decorativas */}
            <div className="testimonial-quote">
              "
            </div>

            {/* Conteúdo do depoimento */}
            <div className="space-y-4">
              {/* Foto e informações do cliente */}
              <div className="flex items-center space-x-4">
                {testimonial.imageUrl && (
                  <div className="testimonial-image">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                )}
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  {testimonial.role && (
                    <p className="testimonial-role">{testimonial.role}</p>
                  )}
                </div>
              </div>

              {/* Texto do depoimento */}
              <p className="testimonial-content">
                {testimonial.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
} 