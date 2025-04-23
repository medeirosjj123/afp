import HeroSection1 from './components/herosection/HeroSection1';
import TestimonialsSection2 from './components/testimonials/TestimonialsSection2';
import SegmentationSection2 from './components/segmentation/SegmentationSection2';
import NotForSection2 from './components/segmentation/NotForSection2';
import BenefitsSection2 from './components/benefits/BenefitsSection2';
import PresentationSectionCourse from './components/presentation/PresentationSectionCourse';
import AboutSection from './components/about/AboutSection';
import BonusSection from './components/bonus/BonusSection';
import GuaranteeSection from './components/guarantee/GuaranteeSection';
import PriceAnchorSection from './components/pricing/PriceAnchorSection';
import FaqSection from './components/faq/FaqSection';
import FinalCtaSection from './components/cta/FinalCtaSection';

export default function Home() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO da TechStart",
      content: "O sistema revolucionou a forma como criamos nossas landing pages. Em questão de minutos conseguimos ter uma página profissional e convertendo muito bem.",
      imageUrl: "/testimonials/ana-silva.jpg"
    },
    {
      name: "Carlos Santos",
      role: "Marketing Manager",
      content: "A flexibilidade e rapidez do sistema são impressionantes. Conseguimos testar diferentes versões das páginas com facilidade e os resultados melhoraram muito.",
      imageUrl: "/testimonials/carlos-santos.jpg"
    },
    {
      name: "Mariana Costa",
      role: "Empreendedora Digital",
      content: "Economizei muito tempo e dinheiro usando esta ferramenta. As páginas ficam lindas e profissionais, e o melhor: convertem super bem!",
      imageUrl: "/testimonials/mariana-costa.jpg"
    }
  ];

  const segments = [
    {
      title: "Empreendedores Digitais",
      description: "Ideal para quem vende produtos digitais e precisa de landing pages que convertem. Crie páginas de vendas, captura e obrigado em minutos.",
      icon: "/icons/entrepreneur.svg"
    },
    {
      title: "Agências de Marketing",
      description: "Perfeito para agências que precisam criar múltiplas landing pages para diferentes clientes com rapidez e qualidade.",
      icon: "/icons/agency.svg"
    },
    {
      title: "Profissionais de Marketing",
      description: "Excelente para profissionais que precisam testar diferentes versões de páginas e otimizar conversões constantemente.",
      icon: "/icons/marketer.svg"
    },
    {
      title: "Coaches e Mentores",
      description: "Ideal para profissionais que vendem mentorias e precisam de páginas que transmitam autoridade e gerem confiança.",
      icon: "/icons/coach.svg"
    },
    {
      title: "Afiliados",
      description: "Perfeito para afiliados que precisam criar páginas de pré-venda otimizadas para diferentes produtos e ofertas.",
      icon: "/icons/affiliate.svg"
    },
    {
      title: "Startups e SaaS",
      description: "Excelente para empresas de software que precisam de landing pages profissionais para seus produtos e funcionalidades.",
      icon: "/icons/startup.svg"
    }
  ];

  const notForSegments = [
    {
      title: "Iniciantes Totais em Marketing Digital",
      description: "Se você ainda não entende nada de marketing digital e vendas, recomendamos primeiro estudar os fundamentos antes de usar nossa ferramenta.",
      icon: "/icons/beginner.svg"
    },
    {
      title: "Quem Busca Resultados Instantâneos",
      description: "Nossa ferramenta otimiza o processo, mas você ainda precisa entender seu público e criar conteúdo relevante. Não existe mágica.",
      icon: "/icons/magic.svg"
    },
    {
      title: "Quem Não Quer Aprender",
      description: "Se você espera que a ferramenta faça tudo sozinha sem nenhum esforço seu para aprender e melhorar, este não é o lugar certo.",
      icon: "/icons/lazy.svg"
    },
    {
      title: "Quem Não Tem Produto/Serviço Definido",
      description: "Se você ainda não tem um produto ou serviço claro para vender, primeiro defina isso antes de criar páginas de vendas.",
      icon: "/icons/undefined.svg"
    }
  ];

  const benefits = [
    {
      title: "Páginas que Convertem",
      description: "Layouts otimizados e testados para maximizar suas conversões. Cada elemento é estrategicamente posicionado para gerar resultados.",
      icon: "/icons/conversion.svg",
      highlight: "+300%"
    },
    {
      title: "Rápido de Implementar",
      description: "Crie landing pages completas em minutos, não em dias. Nossa estrutura modular permite montagem rápida e eficiente.",
      icon: "/icons/speed.svg",
      highlight: "5min"
    },
    {
      title: "Totalmente Customizável",
      description: "Adapte cada elemento ao seu estilo e marca. Cores, fontes, imagens e layout - tudo pode ser personalizado facilmente.",
      icon: "/icons/customize.svg",
      highlight: "100%"
    },
    {
      title: "SEO Otimizado",
      description: "Código limpo e otimizado para mecanismos de busca. Suas páginas terão melhor posicionamento no Google naturalmente.",
      icon: "/icons/seo.svg",
      highlight: "1º lugar"
    },
    {
      title: "Mobile First",
      description: "Design responsivo que funciona perfeitamente em qualquer dispositivo. Sua página será impecável no desktop, tablet e celular.",
      icon: "/icons/mobile.svg",
      highlight: "100%"
    },
    {
      title: "Suporte Premium",
      description: "Atendimento rápido e eficiente para ajudar você a tirar o máximo proveito da ferramenta. Estamos aqui para seu sucesso.",
      icon: "/icons/support.svg",
      highlight: "24/7"
    }
  ];

  const courseModules = {
    content: "Prepare-se para uma imersão completa nos segredos mais bem guardados do SEO. Este não é mais um curso básico - é um sistema completo para dominar as primeiras posições do Google e construir um império digital lucrativo.",
    features: [
      {
        title: "DOMINANDO O ALGORITMO DO GOOGLE",
        description: "Os 3 segredos PROIBIDOS que os gurus de SEO não revelam, incluindo a técnica secreta de OnPage que faz sites explodirem no Google em 2024.",
        highlights: [
          { text: "Técnica avançada de OnPage que multiplica rankings" },
          { text: "Método exclusivo de indexação acelerada" },
          { text: "Sistema de IA para prever atualizações do algoritmo" }
        ]
      },
      {
        title: "NICHOS INEXPLORADOS DO SEO",
        description: "A fórmula secreta para encontrar nichos com baixa competição e alto potencial de tráfego, onde você pode dominar as primeiras posições em semanas.",
        highlights: [
          { text: "Mapa dos nichos com maior ROI em 2024" },
          { text: "Método de análise de competição SEO" },
          { text: "Identificação de gaps de conteúdo lucrativos" }
        ]
      },
      {
        title: "KEYWORDS QUE DOMINAM RANKINGS",
        description: "O método secreto para descobrir as keywords mais valiosas que seus concorrentes não conhecem, incluindo termos que geram até R$50 por clique.",
        highlights: [
          { text: "Keywords com intenção de compra garantida" },
          { text: "Técnica de cluster de palavras-chave" },
          { text: "Padrões ocultos de busca lucrativa" }
        ]
      },
      {
        title: "ARQUITETURA SEO IMBATÍVEL",
        description: "O blueprint secreto que faz o Google amar seu site instantaneamente, usando técnicas avançadas de arquitetura de informação que ninguém está usando.",
        highlights: [
          { text: "Estrutura de silos semânticos avançada" },
          { text: "Sistema de interlinking estratégico" },
          { text: "Setup técnico preferido do Google" }
        ]
      },
      {
        title: "CONTEÚDO QUE DOMINA RANKINGS",
        description: "A fórmula proibida para criar conteúdo que rouba a primeira posição dos seus concorrentes, combinando SEO avançado com IA de última geração.",
        highlights: [
          { text: "Templates E-A-T que o Google ama" },
          { text: "Sistema de otimização semântica" },
          { text: "Produção em escala com IA + SEO" }
        ]
      },
      {
        title: "LINKS QUE EXPLODEM RANKINGS",
        description: "As técnicas underground de link building que os sites top 1 usam, incluindo métodos white-hat que parecem black-hat de tão poderosos.",
        highlights: [
          { text: "Técnicas avançadas de outreach" },
          { text: "Sistema de guest post 2.0" },
          { text: "Link building com IA" }
        ]
      },
      {
        title: "MONETIZAÇÃO EXPLOSIVA",
        description: "O sistema definitivo para transformar tráfego orgânico em receita consistente, incluindo técnicas avançadas de CRO que multiplicam sua renda.",
        highlights: [
          { text: "Otimização avançada de conversão" },
          { text: "Sistemas de monetização múltipla" },
          { text: "Automação de receita passiva" }
        ]
      }
    ]
  };

  const bonusesData = [
    {
      id: 1,
      title: "Aulas Semanais para Tirar Dúvidas",
      description: "Acesso direto ao especialista, resolução de casos reais e feedback personalizado para seu projeto.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus1.jpg",
      highlight: true
    },
    {
      id: 2,
      title: "Grupo VIP no WhatsApp",
      description: "Networking exclusivo, atualizações em tempo real e suporte da comunidade de elite.",
      price: "997,00",
      imageUrl: "/images/bonus/bonus2.jpg",
      highlight: true
    },
    {
      id: 3,
      title: "Checklist de Otimização Técnica",
      description: "Passo a passo completo e atualizado constantemente, usado pelas principais agências.",
      price: "497,00",
      imageUrl: "/images/bonus/bonus3.jpg",
      highlight: false
    },
    {
      id: 4,
      title: "Plugin Exclusivo para Keywords",
      description: "Ferramenta proprietária com análise avançada e atualizações inclusas por um ano completo.",
      price: "797,00",
      imageUrl: "/images/bonus/bonus4.jpg",
      highlight: false
    },
    {
      id: 5,
      title: "Módulo de SEO Internacional",
      description: "Estratégias multi-idioma, técnicas de geolocalização e templates multilíngues.",
      price: "2.497,00",
      imageUrl: "/images/bonus/bonus5.jpg",
      highlight: true
    },
    {
      id: 6,
      title: "Pack de Otimização Local",
      description: "Dominação do Google Maps, estratégia multi-localidade e templates de citations.",
      price: "1.497,00",
      imageUrl: "/images/bonus/bonus6.jpg",
      highlight: false
    },
    {
      id: 7,
      title: "Pack de Migração de Sites",
      description: "Checklist completo, preservação de rankings e redirecionamentos seguros.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus7.jpg",
      highlight: true
    },
    {
      id: 8,
      title: "Biblioteca de Cases Resolvidos",
      description: "10 estudos de caso detalhados com análises completas de casos reais e resultados comprovados.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus8.jpg",
      highlight: false
    },
    {
      id: 9,
      title: "Acesso ao Meu Setup Completo",
      description: "Todas as ferramentas que uso, configurações e processos internos revelados.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus9.jpg",
      highlight: true
    }
  ];

  const priceItems = [
    {
      title: "Sistema LPgen",
      description: "Acesso vitalício à plataforma completa com todas as funcionalidades",
      value: "2.997,00",
      icon: "/icons/pricing/platform.svg"
    },
    {
      title: "Curso Completo",
      description: "6 módulos práticos com mais de 30 horas de conteúdo atualizado",
      value: "1.997,00",
      icon: "/icons/pricing/course.svg"
    },
    {
      title: "Suporte Premium",
      description: "Atendimento prioritário por 12 meses para tirar todas suas dúvidas",
      value: "1.497,00",
      icon: "/icons/pricing/support.svg"
    },
    {
      title: "Comunidade VIP",
      description: "Acesso ao grupo exclusivo com outros profissionais e mentoria em grupo",
      value: "997,00",
      icon: "/icons/pricing/community.svg"
    },
    {
      title: "Pack de Bônus",
      description: "Todos os bônus exclusivos listados acima",
      value: "4.232,00",
      icon: "/icons/pricing/bonus.svg"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo preciso dedicar por dia para ver resultados?",
      answer: "Com nossa metodologia baseada em IA, você precisa de apenas 1-2 horas por semana. A IA faz o trabalho pesado de pesquisa, escrita e otimização, enquanto você foca apenas em revisar e aprovar o conteúdo. Muitos alunos conseguem criar semanas de conteúdo em uma única sessão de trabalho."
    },
    {
      question: "E se eu não tiver experiência com tecnologia ou blogs?",
      answer: "Nossa plataforma foi desenvolvida justamente para iniciantes. A IA simplifica todo o processo técnico - você não precisa entender de SEO, WordPress ou programação. Temos alunos de todas as idades e níveis de experiência conseguindo resultados, incluindo pessoas que nunca tinham criado um blog antes."
    },
    {
      question: "Como funciona a garantia de satisfação?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se você perceber que nossa metodologia não é para você, basta solicitar o reembolso. Devolvemos 100% do seu investimento, sem perguntas ou burocracias. Nosso objetivo é ter alunos satisfeitos e realizados."
    },
    {
      question: "Em quanto tempo posso começar a ver resultados financeiros?",
      answer: "Isso varia de acordo com seu nicho e dedicação, mas com nossa metodologia acelerada por IA, muitos alunos começam a ver seus primeiros resultados entre 60-90 dias. Temos casos de alunos que conseguiram sua primeira monetização já no primeiro mês, mas preferimos ser conservadores e prometer menos e entregar mais."
    },
    {
      question: "A IA não vai fazer meu conteúdo parecer robótico?",
      answer: "Não! Nossa metodologia usa IA como assistente, não como substituta. Você mantém total controle editorial e sua voz única. A IA ajuda com pesquisa, estrutura e primeira versão, mas você refina e adiciona sua personalidade. O resultado é conteúdo autêntico e envolvente, criado em uma fração do tempo."
    },
    {
      question: "Que tipo de suporte vocês oferecem?",
      answer: "Durante 12 meses você tem acesso ao nosso suporte premium via chat, com resposta em até 24h úteis. Além disso, participa da nossa comunidade exclusiva onde pode interagir com outros alunos, compartilhar experiências e participar de mentorias em grupo semanais."
    },
    {
      question: "Preciso escolher meu nicho antes de começar?",
      answer: "Não! Temos um módulo específico que usa IA para ajudar você a identificar nichos lucrativos com baixa competição. Nossa ferramenta analisa tendências e oportunidades de mercado para sugerir nichos com alto potencial de monetização, adequados ao seu perfil e interesses."
    },
    {
      question: "O que acontece após os 12 meses de acesso?",
      answer: "Após 12 meses, você pode renovar seu acesso por um valor especial de manutenção ou continuar aplicando tudo que aprendeu de forma independente. Todo o conhecimento e estratégias que você adquire são seus para sempre, mesmo que opte por não renovar."
    }
  ];

  return (
    <main>
      <HeroSection1
        id="hero"
        title="Blog Lucrativo com IA"
        headline="Como Viver de Renda Passiva Com Blogs Gerados Por Inteligência Artificial Sem Conhecimento Técnico"
        description="Descubra o método passo a passo para criar blogs lucrativos usando IA e conquistar sua liberdade financeira em 90 dias"
        ctaText="QUERO COMEÇAR MEU BLOG LUCRATIVO"
        ctaUrl="#cadastro"
        backgroundColor="bg-gradient-to-b from-gray-900 to-black"
        textColor="text-white"
        imageUrl="/images/hero/hero1.jpg"
      />
      
      <TestimonialsSection2
        id="resultados"
        title="Alunos Fazendo Mais de 1K Por Dia"
        subtitle="Resultados reais de quem já está aplicando o método"
        backgroundColor="bg-white"
        prints={[
          {
            src: '/testimonials/prints/print1.jpg',
            alt: 'Print de resultado 1',
            value: '1.909,02',
            period: 'Em 24 horas'
          },
          {
            src: '/testimonials/prints/print2.jpg',
            alt: 'Print de resultado 2',
            value: '1.113,67',
            period: 'Em 24 horas'
          },
          {
            src: '/testimonials/prints/print3.jpg',
            alt: 'Print de resultado 3',
            value: '1.206,25',
            period: 'Em 24 horas'
          },
          {
            src: '/testimonials/prints/print4.jpg',
            alt: 'Print de resultado 4',
            value: '1.330,51',
            period: 'Em 24 horas'
          }
        ]}
      />

      <SegmentationSection2 />

      <NotForSection2 />

      <BenefitsSection2 />

      <PresentationSectionCourse
        id="modulos"
        title="Conteúdo do Curso"
        subtitle="Aprenda do básico ao avançado em 6 módulos práticos"
        content={courseModules.content}
        features={courseModules.features}
        backgroundColor="bg-gray-50"
      />

      <AboutSection />

      <BonusSection
        id="bonus"
        title="Bônus Explosivos"
        subtitle="Mais de R$ 13.276,00 em bônus para acelerar seu sucesso"
        backgroundColor="bg-white"
        bonuses={bonusesData}
      />

      <GuaranteeSection
        id="garantia"
        title="Garantia Incondicional de 7 Dias"
        subtitle="Sua satisfação é nossa prioridade absoluta"
        backgroundColor="bg-gray-50"
        days={7}
        description="Se por qualquer motivo você não ficar 100% satisfeito com o LPgen, basta nos avisar em até 7 dias e devolveremos todo seu investimento. Sem questionamentos, sem burocracia. Você não tem nada a perder e tudo a ganhar."
      />

      <PriceAnchorSection
        id="valor"
        title="Qual o Valor do Investimento?"
        subtitle="Veja o valor real de tudo que você vai receber"
        backgroundColor="bg-white"
        items={[
          {
            title: "Sistema Completo",
            description: "Acesso ilimitado por 12 meses à plataforma completa com todas as funcionalidades",
            value: "2.997,00",
            icon: "/images/pricing/pricing1.jpg"
          },
          {
            title: "Curso Avançado",
            description: "10 módulos práticos com mais de 50 horas de conteúdo atualizado",
            value: "1.997,00",
            icon: "/images/pricing/pricing2.jpg"
          },
          {
            title: "Suporte Premium",
            description: "Atendimento prioritário por 12 meses para tirar todas suas dúvidas",
            value: "1.497,00",
            icon: "/images/pricing/pricing3.jpg"
          },
          {
            title: "Comunidade VIP",
            description: "Acesso ao grupo exclusivo com outros profissionais e mentoria em grupo",
            value: "997,00",
            icon: "/images/pricing/pricing4.jpg"
          },
          {
            title: "Pack de Bônus",
            description: "Todos os 9 bônus exclusivos listados acima",
            value: "13.276,00",
            icon: "/images/pricing/pricing5.jpg"
          }
        ]}
        totalValue="20.764,00"
        realPrice="12x 103,11"
        discount="95"
        savingsText="de desconto"
        ctaText="QUERO GARANTIR MINHA VAGA AGORA →"
        ctaUrl="https://pay.kiwify.com.br/A4sH4Lp"
      />

      <FaqSection
        id="faq"
        title="Perguntas Frequentes"
        subtitle="Tire suas principais dúvidas sobre o LPgen"
        backgroundColor="bg-gray-50"
        faqs={faqs}
      />

      <FinalCtaSection
        id="final-cta"
        mainHeadline="Comece Seu Blog de Sucesso Hoje Mesmo"
        subHeadline="Aproveite o poder da IA para criar conteúdo que gera resultados"
        timerText="Condição Especial - 12x R$ 103,11"
        ctaText="QUERO COMEÇAR AGORA →"
        ctaUrl="https://pay.kiwify.com.br/A4sH4Lp"
        urgencyText="Acesso imediato após a confirmação do pagamento"
        features={[
          '✓ Acesso ilimitado por 12 meses à plataforma',
          '✓ Suporte premium via chat',
          '✓ Garantia incondicional de 7 dias',
          '✓ Comunidade exclusiva de alunos'
        ]}
      />
    </main>
  );
} 