/**
 * Componente NotForSection2
 * 
 * Este componente representa a seção "Para Quem NÃO É" da landing page.
 * Layout:
 * - Título e subtítulo centralizados
 * - 3 cards em layout horizontal
 * - Cada card com ícone, título e descrição
 */

'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Section from '../common/Section';

interface NotForSection2Props {
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

const NotForSection2 = ({
  id = 'para-quem-nao-e',
  title = 'Para Quem NÃO é Este Método?',
  subtitle = 'Se você se identifica com algum desses perfis, este método pode não ser para você',
  backgroundColor = 'bg-white'
}: NotForSection2Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Procrastinadores</h3>
                <p className="text-gray-600">
                  Pessoas que não estão dispostas a colocar em prática o que aprendem.
                  Este método requer ação e dedicação constante para gerar resultados.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Buscadores de Atalhos</h3>
                <p className="text-gray-600">
                  Se você busca resultados mágicos sem esforço, este não é o lugar.
                  Aqui ensinamos o caminho real e sustentável para o sucesso.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mentalidade Negativa</h3>
                <p className="text-gray-600">
                  Pessoas que sempre encontram desculpas e não acreditam ser possível.
                  Este método é para quem tem mentalidade de crescimento.
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default NotForSection2; 