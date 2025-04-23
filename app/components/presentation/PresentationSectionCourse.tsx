/**
 * PresentationSectionCourse - Componente de Apresentação de Módulos do Curso
 * 
 * Este componente apresenta os módulos do curso com:
 * - Layout vertical moderno
 * - Números dos módulos com destaque
 * - Descrições persuasivas e agressivas
 * - Elementos geométricos decorativos
 * - Animações de entrada e hover
 * - Elementos de urgência e exclusividade
 */

'use client';

import { PresentationSection } from '../types';
import Section from '../Section';
import { motion } from 'framer-motion';
import { FaLock, FaFire } from 'react-icons/fa';
import { createElement } from 'react';
import { IconType } from 'react-icons';

// Tipos
interface ModuleHighlight {
  text: string;
  icon?: IconType;
}

interface ModuleFeature {
  title: string;
  description: string;
  highlights?: ModuleHighlight[];
}

interface ExtendedPresentationSection extends Omit<PresentationSection, 'features'> {
  features: ModuleFeature[];
}

// Componente de Ícone
const IconWrapper = ({ Icon, size = "100%" }: { Icon: IconType; size?: string }) => {
  return createElement(Icon as any, { size });
};

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5
    }
  }
};

// Badges para módulos especiais
const ModuleBadge = ({ type }: { type: 'hot' | 'new' | 'exclusive' }) => {
  const badges = {
    hot: { text: 'EXPLOSIVO', bg: 'bg-red-600' },
    new: { text: 'NOVO', bg: 'bg-blue-600' },
    exclusive: { text: 'EXCLUSIVO', bg: 'bg-purple-600' }
  };

  const badge = badges[type];
  
  return (
    <span className={`${badge.bg} text-white text-xs px-3 py-1 rounded-full font-bold ml-2 shadow-sm`}>
      {badge.text}
    </span>
  );
};

export default function PresentationSectionCourse({
  id,
  title,
  subtitle,
  content,
  features,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
}: ExtendedPresentationSection) {
  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {/* Descrição Geral do Curso */}
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-lg text-center text-gray-600 font-medium">
          {content}
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center text-amber-500">
            <div className="w-5 h-5 mr-2">
              <IconWrapper Icon={FaLock} />
            </div>
            <span className="text-sm font-bold">CONTEÚDO RESTRITO</span>
          </div>
          <div className="flex items-center text-red-600">
            <div className="w-5 h-5 mr-2">
              <IconWrapper Icon={FaFire} />
            </div>
            <span className="text-sm font-bold">VAGAS LIMITADAS</span>
          </div>
        </div>
      </div>

      {/* Lista Vertical de Módulos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 relative"
      >
        {/* Linha vertical conectora */}
        <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-red-600/50 via-red-600/20 to-transparent"></div>

        {features.map((feature, index) => (
          <motion.div
            key={`${id}-module-${index}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, translateX: 4 }}
            className="relative mb-8 last:mb-0"
          >
            <div className="flex items-start gap-6">
              {/* Círculo do número */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-red-600/20 flex items-center justify-center shadow-lg relative z-10">
                <span className="text-2xl font-black text-red-600">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex-grow bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-red-600/20 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  {index === 0 && <ModuleBadge type="exclusive" />}
                  {index === 3 && <ModuleBadge type="hot" />}
                  {index === 7 && <ModuleBadge type="new" />}
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {feature.highlights && (
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></div>
                        {highlight.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
} 