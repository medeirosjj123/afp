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
        title: "MÓDULO 1: A GRANDE REVELAÇÃO - O Jogo Oculto do Google",
        description: "Aqui, eu te entrego o mapa que os 'gurus do O Quê' escondem a sete chaves. Você vai entender como o Google realmente pensa, não como eles dizem que ele pensa. É o fim da paralisia técnica. Você para de adivinhar e começa a ditar as regras do jogo.",
        highlights: [
          { text: "Técnica avançada de OnPage que multiplica rankings" },
          { text: "Método exclusivo de indexação acelerada" },
          { text: "Sistema de IA para prever atualizações do algoritmo" }
        ]
      },
      {
        title: "MÓDULO 2: O MAPA DO TESOURO - Encontrando Ouro em Território Inexplorado",
        description: "Enquanto 99% se digladia por migalhas nos mesmos nichos saturados, você receberá meu sistema 'Copia e Cola' para encontrar oceanos azuis de lucro. A culpa não é sua por não saber onde começar; o sistema foi feito para te confundir. Aqui, nós te damos clareza.",
        highlights: [
          { text: "Mapa dos nichos com maior ROI em 2024" },
          { text: "Método de análise de competição SEO" },
          { text: "Identificação de gaps de conteúdo lucrativos" }
        ]
      },
      {
        title: "MÓDULO 3: O ARSENAL DE KEYWORDS - A Arte de Encontrar Dinheiro Escondido",
        description: "Esqueça a teoria de 'volume de busca'. Isso é fumaça. Vou te mostrar como encontrar as palavras-chave que o seu cliente digita segundos antes de comprar. É a diferença entre ter um blog 'informativo' e uma máquina de vendas automática.",
        highlights: [
          { text: "Keywords com intenção de compra garantida" },
          { text: "Técnica de cluster de palavras-chave" },
          { text: "Padrões ocultos de busca lucrativa" }
        ]
      },
      {
        title: "MÓDULO 4: A FORTALEZA DIGITAL - Construindo o Ativo que o Google Respeita",
        description: "Seu site deixa de ser um 'castelo de areia' vulnerável a qualquer atualização do Google. Com este blueprint, você constrói uma fortaleza de autoridade que o algoritmo não apenas entende, mas favorece. É a sua apólice de seguro contra a irrelevância.",
        highlights: [
          { text: "Estrutura de silos semânticos avançada" },
          { text: "Sistema de interlinking estratégico" },
          { text: "Setup técnico preferido do Google" }
        ]
      },
      {
        title: "MÓDULO 5: A MÁQUINA DE CONTEÚDO - Produção em Massa com Alma Humana",
        description: "Esta é a chave da 'Janela de Oportunidade'. Enquanto outros se afogam no 'deserto de conteúdo' ou criam lixo robótico com IA, você vai usar meu sistema para produzir conteúdo de alta qualidade em escala, resolvendo a dor da criação sem perder sua voz autêntica.",
        highlights: [
          { text: "Templates E-A-T que o Google ama" },
          { text: "Sistema de otimização semântica" },
          { text: "Produção em escala com IA + SEO" }
        ]
      },
      {
        title: "MÓDULO 6: A REDE DE AUTORIDADE - O Sistema de Links que Força o Respeito",
        description: "Esqueça o 'mendigar por links'. Isso é humilhante e ineficaz. Vou te entregar o sistema que usamos para construir uma rede de autoridade que atrai links de forma natural e poderosa, fazendo o Google olhar para o seu site como uma referência inquestionável.",
        highlights: [
          { text: "Técnicas avançadas de outreach" },
          { text: "Sistema de guest post 2.0" },
          { text: "Link building com IA" }
        ]
      },
      {
        title: "MÓDULO 7: A MÁQUINA DE RENDA - Convertendo Cliques em Liberdade Financeira",
        description: "Este é o módulo que resolve a dor final: o 'Muro do AdSense'. Enquanto amadores são reprovados e desistem, você vai construir um ecossistema de monetização que vai muito além do AdSense, transformando cada visitante em uma fonte de renda passiva e previsível.",
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
      title: "BÔNUS 1: O ACOMPANHAMENTO ANTI-TRAVA",
      description: "Este não é um bônus, é o coração do nosso movimento. Sabe o medo de ficar travado sozinho? Ele morre aqui. Toda semana, eu e você, ao vivo, resolvendo o seu problema, na sua tela. É a minha garantia pessoal de que você nunca mais vai desistir por falta de suporte.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus1.jpg",
      highlight: true
    },
    {
      id: 2,
      title: "BÔNUS 2: A COMUNIDADE ANTI-SOLIDÃO",
      description: "A jornada do empreendedor é solitária, mas não precisa ser. Você terá acesso direto a mim e a um círculo fechado de pessoas que estão no mesmo campo de batalha, aplicando o mesmo método. É o seu atalho para parcerias, insights e motivação diária.",
      price: "997,00",
      imageUrl: "/images/bonus/bonus2.jpg",
      highlight: true
    },
    {
      id: 3,
      title: "BÔNUS 3: O MAPA ANTI-PARALISIA",
      description: "A 'paralisia técnica' é o que impede 90% das pessoas de começar. Com este checklist, isso é impossível. É um mapa 'à prova de idiotas' que te guia em cada etapa da configuração, garantindo que seu site seja tecnicamente perfeito, mesmo que você não entenda nada de código.",
      price: "497,00",
      imageUrl: "/images/bonus/bonus3.jpg",
      highlight: false
    },
    {
      id: 4,
      title: "BÔNUS 4: A VANTAGEM INJUSTA",
      description: "Enquanto seus concorrentes usam as mesmas ferramentas públicas e encontram as mesmas keywords, você terá acesso ao meu plugin privado. É a sua 'arma secreta' para encontrar oportunidades de palavras-chave que ninguém mais está vendo.",
      price: "797,00",
      imageUrl: "/images/bonus/bonus4.jpg",
      highlight: false
    },
    {
      id: 5,
      title: "BÔNUS 5: O PASSAPORTE GLOBAL",
      description: "Por que se contentar com o mercado brasileiro quando você pode dominar o mundo? Este módulo te entrega o sistema para replicar seu sucesso em mercados internacionais e multiplicar sua renda em dólar ou euro.",
      price: "2.497,00",
      imageUrl: "/images/bonus/bonus5.jpg",
      highlight: true
    },
    {
      id: 6,
      title: "BÔNUS 6: O REI DO BAIRRO",
      description: "O sistema 'copia e cola' para dominar as buscas locais. Ideal para quem quer prestar serviço para negócios físicos ou criar portais de nicho locais. É a forma mais rápida de gerar sua primeira receita com SEO.",
      price: "1.497,00",
      imageUrl: "/images/bonus/bonus6.jpg",
      highlight: false
    },
    {
      id: 7,
      title: "BÔNUS 7: O SEGURO CONTRA DESASTRES",
      description: "O medo de 'quebrar o site' ou perder todo o seu trabalho ao mudar de plataforma acaba aqui. Este é o guia definitivo para fazer migrações de forma segura, sem perder um pingo de tráfego ou autoridade.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus7.jpg",
      highlight: true
    },
    {
      id: 8,
      title: "BÔNUS 8: ENGENHARIA REVERSA DO SUCESSO",
      description: "Eu não vou apenas te ensinar a teoria. Eu vou abrir a caixa-preta de projetos reais, mostrando o que funcionou, o que falhou e por quê. É o seu atalho para aprender com os erros e acertos dos outros, sem arriscar seu próprio dinheiro.",
      price: "1.997,00",
      imageUrl: "/images/bonus/bonus8.jpg",
      highlight: false
    },
    {
      id: 9,
      title: "BÔNUS 9: A CHAVE DA MINHA SALA DE CONTROLE",
      description: "Chega de gastar dinheiro com ferramentas inúteis. Vou te dar acesso completo ao meu setup: as exatas ferramentas, plugins e configurações que eu uso para gerenciar um portfólio de sites lucrativos. É o seu kit de ferramentas validado no campo de batalha.",
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

      <AboutSection />

      <SegmentationSection2 />

      <NotForSection2 />

      <BenefitsSection2 />

      <PresentationSectionCourse
        id="modulos"
        title="O Arsenal do Movimento: Seu Plano de Batalha Módulo a Módulo"
        subtitle="O Sistema 'Copia e Cola' de 7 Fases Para Construir Sua Máquina de Renda Passiva"
        content={courseModules.content}
        features={courseModules.features}
        backgroundColor="bg-gray-50"
      />

      

      <BonusSection
        id="bonus"
        title="Meu Kit Anti-Fracasso: Os Bônus Que Tornam Impossível Você Não Ter Resultado"
        subtitle="Você não vai pagar por isso. É o meu investimento pessoal no seu sucesso."
        backgroundColor="bg-white"
        bonuses={bonusesData}
      />

      <GuaranteeSection
        id="garantia"
        title="Garantia Incondicional de 7 Dias"
        subtitle="Sua satisfação é nossa prioridade absoluta"
        backgroundColor="bg-gray-50"
        days={7}
        description="Minha promessa é simples: se ao final de 7 dias você não estiver 100% convencido de que este é o caminho mais rápido e seguro para construir sua renda passiva, eu não quero seu dinheiro. Mais do que isso, eu insisto que você peça o reembolso. Eu só quero no meu movimento pessoas que estão tendo resultados. O risco é todo meu."
      />

      <PriceAnchorSection
        id="valor"
        title="Qual o Valor do Investimento?"
        subtitle="Veja o valor real de tudo que você vai receber"
        backgroundColor="bg-white"
        items={[ 
          {
            title: "O Arsenal do Movimento (7 Módulos)",
            description: "O sistema completo para dominar as primeiras posições do Google e construir um império digital lucrativo.",
            value: "1.997,00",
            icon: "/images/pricing/pricing1.jpg"
          },
          {
            title: "O Acompanhamento Anti-Trava (Aulas Semanais)",
            description: "Aulas semanais ao vivo para resolver seus problemas e garantir seu resultado.",
            value: "1.997,00",
            icon: "/images/pricing/pricing2.jpg"
          },
          {
            title: "A Comunidade Anti-Solidão (Grupo VIP)",
            description: "Networking exclusivo e suporte da comunidade de elite.",
            value: "997,00",
            icon: "/images/pricing/pricing3.jpg"
          },
          {
            title: "O Kit Anti-Fracasso (Todos os 9 Bônus)",
            description: "Todos os bônus exclusivos restantes para tornar impossível você não ter resultado.",
            value: "13.276,00",
            icon: "/images/pricing/pricing4.jpg"
          },
          {
            title: "Suporte Premium",
            description: "Atendimento prioritário por 12 meses para tirar todas suas dúvidas",
            value: "1.497,00",
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
        timerText="O PREÇO SOBE EM BREVE. ESTA É SUA ÚLTIMA CHANCE."
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