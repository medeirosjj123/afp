/**
 * BonusSection - Seção de Bônus Exclusivos
 * 
 * Versão minimalista e moderna que apresenta os bônus do curso em layout vertical com:
 * - Design clean e elegante
 * - Micro-interações sutis
 * - Hierarquia visual clara
 * - Alta legibilidade e contraste
 * - Paleta monocromática em preto
 * - Layout vertical com imagens
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createElement } from 'react';
import { IconType } from 'react-icons';
import { FaGift } from 'react-icons/fa';
import Section from '../Section';

interface Bonus {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  highlight?: boolean;
}

interface BonusSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
  bonuses: Bonus[];
}

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
      damping: 25,
      stiffness: 100
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const IconWrapper = ({ Icon, className = "" }: { Icon: IconType; className?: string }) => {
  return createElement(Icon as any, { className });
};

export default function BonusSection({ 
  id = "bonus",
  title,
  subtitle,
  backgroundColor = "bg-gray-50",
  bonuses 
}: BonusSectionProps) {
  const totalValue = bonuses.reduce((acc, bonus) => acc + parseFloat(bonus.price.replace(/[^0-9,]/g, '').replace(',', '.')), 0);

  return (
    <Section
      id={id}
      title={title}
      subtitle={subtitle}
      backgroundColor={backgroundColor}
      textColor="text-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-out
                ${bonus.highlight 
                  ? 'bg-white ring-2 ring-gray-900 shadow-lg' 
                  : 'bg-white ring-1 ring-gray-900/70 hover:ring-gray-900 hover:shadow-md'}
                ${index !== bonuses.length - 1 ? 'mb-2' : ''}`}
            >
              <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={bonus.imageUrl}
                    alt={bonus.title}
                    fill
                    className="object-cover rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <h3 className={`text-xl font-bold tracking-tight text-gray-900`}>
                        {bonus.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed max-w-3xl text-gray-600">
                        {bonus.description}
                      </p>
                    </div>

                    <div className="ml-0 md:ml-8 text-left md:text-right">
                      <div className="text-sm font-medium mb-1 text-gray-500">
                        Valor:
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        R$ {bonus.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                ${bonus.highlight ? 'bg-gray-900' : 'bg-gray-900/70'}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="https://pay.kiwify.com.br/A4sH4Lp" className="inline-block">
            <motion.div 
              animate={pulseAnimation}
              className="px-12 py-8 rounded-2xl bg-green-600 shadow-lg ring-2 ring-green-700 transition-all duration-300 hover:shadow-xl hover:bg-green-500"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <IconWrapper Icon={FaGift} className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">Valor Total em Bônus</h3>
              </div>
              <div className="text-4xl font-bold mb-2 text-white">
                R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-green-100 text-sm">
                Desbloqueie todos os bônus ao se matricular hoje
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
} 