/**
 * AboutSection - Componente de Apresentação Pessoal
 * 
 * Este componente apresenta a seção "Quem Sou Eu" com:
 * - Foto profissional
 * - Descrição persuasiva
 * - Badges de autoridade
 * - Conquistas e números
 * - Social proof
 * - Elementos visuais de credibilidade
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { createElement } from 'react';
import { IconType } from 'react-icons';
import { FaGlobeAmericas, FaYoutube, FaBook, FaTrophy } from 'react-icons/fa';
import Section from '../common/Section';

interface Achievement {
  number: string;
  label: string;
}

interface Credential {
  icon: IconType;
  title: string;
  description: string;
}

// Componente de Ícone
const IconWrapper = ({ Icon, size = "100%" }: { Icon: IconType; size?: string }) => {
  return createElement(Icon as any, { size });
};

export default function AboutSection() {
  const achievements: Achievement[] = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "1º", label: "Maior Canal de SEO" },
    { number: "10k+", label: "Alunos Formados" },
    { number: "20+", label: "Países Visitados" }
  ];

  const credentials: Credential[] = [
    {
      icon: FaGlobeAmericas,
      title: "Autoridade Global",
      description: "Residente em Chiang Mai, Tailândia - Capital Mundial do SEO"
    },
    {
      icon: FaYoutube,
      title: "Maior Influência",
      description: "Canal #1 em SEO no YouTube Brasil"
    },
    {
      icon: FaBook,
      title: "Best-Seller",
      description: "Autor do livro mais vendido sobre SEO"
    },
    {
      icon: FaTrophy,
      title: "Top Player",
      description: "Reconhecido entre os melhores do Brasil"
    }
  ];

  return (
    <Section
      id="about"
      title="Quem é Bruno Medeiros?"
      subtitle="A Maior Autoridade em SEO do Brasil"
      backgroundColor="bg-black"
      textColor="text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about/bruno-medeiros.jpg"
                alt="Bruno Medeiros - Especialista em SEO"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Conquistas Flutuantes */}
            <div className="grid grid-cols-2 gap-4 absolute -right-8 -bottom-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-red-600 p-4 rounded-lg shadow-lg text-white"
                >
                  <div className="text-2xl font-bold">{achievement.number}</div>
                  <div className="text-sm opacity-90">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-xl font-medium leading-relaxed text-white">
                Bruno Medeiros revoluciona o mercado de SEO no Brasil e no mundo desde 2008.
                <br /><br />
                Sua jornada o levou a se estabelecer em Chiang Mai, Tailândia - 
                reconhecida globalmente como a capital mundial do SEO.
                <br /><br />
                Na Ásia, convive diariamente com os maiores especialistas do planeta,
                dominando e desenvolvendo as técnicas mais avançadas do mercado.
              </p>
              
              <p className="text-lg text-gray-300">
                Criador do maior canal de SEO do Brasil no YouTube desde 2015,
                Bruno transformou a maneira como as empresas pensam em visibilidade online.
                <br /><br />
                Seu conhecimento forma profissionais de alto nível,
                preparados para dominar as primeiras posições do Google.
                <br /><br />
                Com expertise reconhecida internacionalmente,
                é presença constante nos principais eventos globais do setor.
              </p>

              <p className="text-lg text-gray-300">
                Autor de um best-seller sobre SEO que revolucionou o mercado brasileiro,
                é frequentemente listado entre os melhores profissionais do país.
                <br /><br />
                Sua metodologia já impactou milhares de alunos e empresas,
                gerando resultados extraordinários em diferentes mercados.
              </p>
            </div>

            {/* Credenciais */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-red-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 text-red-500">
                    <div className="w-6 h-6">
                      <IconWrapper Icon={credential.icon} />
                    </div>
                    <h3 className="font-bold">{credential.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{credential.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 