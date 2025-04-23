/**
 * Componente SegmentationSection2
 * 
 * Este componente representa a seção "Para Quem É" da landing page.
 * Layout em duas partes:
 * 1. Imagem à esquerda e texto à direita (primeiros 3 perfis)
 * 2. Imagem à direita e texto à esquerda (outros 3 perfis)
 */

'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../common/Section';
import Image from 'next/image';

interface SegmentationSection2Props {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const SegmentationSection2 = ({
  id = 'para-quem-e',
  title = 'Para Quem é Este Método?',
  subtitle = 'Se você se identifica com um desses perfis, este método foi feito para você',
  backgroundColor = 'bg-white'
}: SegmentationSection2Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Primeira Seção - Imagem à Esquerda */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Coluna da Imagem */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/segmentation/forwho1.jpg"
                  alt="Para quem é este método - primeira parte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coluna do Texto */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Pessoas Ocupadas</h3>
                    <p className="text-lg text-gray-600">
                      Profissionais que querem criar conteúdo mas não têm tempo. Com IA, você produz em 1 hora o que outros fazem em dias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Iniciantes em Tecnologia</h3>
                    <p className="text-lg text-gray-600">
                      Mesmo sem experiência técnica, você conseguirá criar conteúdo profissional. A IA simplifica todo o processo técnico.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Empreendedores Práticos</h3>
                    <p className="text-lg text-gray-600">
                      Para quem quer resultados rápidos sem complicação. Automatize a produção de conteúdo enquanto foca no estratégico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* Segunda Seção - Imagem à Direita */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
          >
            {/* Coluna da Imagem */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/segmentation/forwho2.jpg"
                  alt="Para quem é este método - segunda parte"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coluna do Texto */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Blogueiros Desanimados</h3>
                    <p className="text-lg text-gray-600">
                      Se você já tentou e não conseguiu resultados, a IA é seu recomeço: produza conteúdo em escala sem se sobrecarregar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">5</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Escapando da CLT</h3>
                    <p className="text-lg text-gray-600">
                      Quer trocar seu emprego por renda própria? Use IA para construir seu negócio digital nas horas vagas, sem comprometer seu trabalho atual.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mt-1">
                    <span className="text-xl font-bold text-white">6</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Renda Automatizada</h3>
                    <p className="text-lg text-gray-600">
                      Deixe a IA criar conteúdo constantemente enquanto você foca em monetização. Seu blog trabalha, você colhe os resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default SegmentationSection2; 