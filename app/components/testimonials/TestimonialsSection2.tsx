'use client';

/**
 * TestimonialsSection2.tsx
 * 
 * Este componente exibe um carrossel de prints de resultados dos alunos.
 * Cada print tem um overlay sutil que mostra o valor do resultado ao passar o mouse.
 */

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Section from '../Section';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PrintResult {
  src: string;
  alt: string;
  value: string;
  period: string;
}

interface TestimonialsSection2Props {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  prints: PrintResult[];
}

const TestimonialsSection2 = ({
  id = 'resultados',
  title = 'Alunos Fazendo Mais de 1K Por Dia',
  subtitle = 'Resultados reais de quem já está aplicando o método',
  backgroundColor = 'bg-gray-50',
  prints = []
}: TestimonialsSection2Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <Section
        id={id}
        title={title}
        subtitle={subtitle}
        backgroundColor={backgroundColor}
      >
        <div className="max-w-7xl mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="py-8 px-4"
            >
              {prints.map((print, index) => (
                <SwiperSlide key={index}>
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="aspect-[9/16] relative">
                      <Image
                        src={print.src}
                        alt={print.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay com o resultado */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-white">
                          <div className="w-full max-w-[80%] bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                            <div className="text-center space-y-1">
                              <p className="text-2xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                                R$ {print.value}
                              </p>
                              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
                              <p className="text-xs font-medium uppercase tracking-wider text-white/90">
                                Em 24 horas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Customização das setas de navegação */}
            <style jsx global>{`
              .swiper-button-next,
              .swiper-button-prev {
                color: #000;
                background: white;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              }

              .swiper-button-next:after,
              .swiper-button-prev:after {
                font-size: 20px;
              }

              .swiper-pagination-bullet {
                background: #000;
              }

              .swiper-pagination-bullet-active {
                background: #000;
              }
            `}</style>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
};

export default TestimonialsSection2; 