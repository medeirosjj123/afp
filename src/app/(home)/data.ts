import { StaticImageData } from 'next/image'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'

export type FeaturesType = {
  icon: string
  title: string
  description: string
}
export type ServicesType = {
  icon: string
  title: string
  description: string
}

export type TestimonialType = {
  image: StaticImageData
  name: string
  description: string
  role: string
  star: number
}

export const featuresData: FeaturesType[] = [
  {
    icon: 'tabler:click',
    title: '⚡ WordPress 1-Clique',
    description: 'Instala WordPress completo em qualquer hospedagem em 60 segundos. Zero configuração manual, zero dor de cabeça!',
  },
  {
    icon: 'tabler:robot',
    title: '🤖 IA Escritora Integrada',
    description: 'Escreve artigos de 2.000+ palavras perfeitos para SEO. Só escolher o tema e clicar - artigo pronto em 2 minutos!',
  },
  {
    icon: 'tabler:palette',
    title: '🎨 Templates Profissionais',
    description: 'Biblioteca com 100+ templates prontos que convertem. Designs testados que transformam visitas em vendas!',
  },
  {
    icon: 'tabler:trending-up',
    title: '📊 Monetização Automática',
    description: 'Sistema identifica e configura as melhores formas de monetizar automaticamente. Ganhos desde o primeiro dia!',
  },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'tabler:login',
    title: '🔐 PASSO 1: Acesse a Plataforma',
    description: "Login simples e você já tem acesso a todas as ferramentas. Interface intuitiva que qualquer um usa!",
  },
  {
    icon: 'tabler:click',
    title: '⚡ PASSO 2: Crie Blog em 1 Clique',
    description: 'Escolha template, clique em "Criar" - WordPress instalado e configurado automaticamente em 60 segundos!',
  },
  {
    icon: 'tabler:robot',
    title: '🤖 PASSO 3: IA Escreve o Conteúdo',
    description: 'Selecione nicho, clique em "Gerar Artigo" - IA escreve conteúdo profissional otimizado para SEO!',
  },
  {
    icon: 'tabler:cash',
    title: '💰 PASSO 4: Monetização Automática',
    description: 'Sistema configura anúncios e afiliados automaticamente. Blog pronto para gerar receita!',
  },
  {
    icon: 'tabler:repeat',
    title: '🔄 PASSO 5: Repita e Escale',
    description: 'Crie quantos blogs quiser usando a mesma plataforma. Mais blogs = mais fontes de renda!',
  },
  {
    icon: 'tabler:users',
    title: '🆘 PASSO 6: Suporte Completo',
    description: 'Comunidade VIP, mentoria semanal e suporte técnico. Você nunca fica sozinho!',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: avatar1,
    name: 'Maria Santos',
    description: "💰 R$ 1.113 em apenas 24 horas! Eu não acreditava que fosse possível até ver o dinheiro na minha conta. O sistema realmente funciona!",
    role: 'Dona de casa, São Paulo',
    star: 'R$ 1.113',
  },
  {
    image: avatar3,
    name: 'Carlos Pereira',
    description: "💸 R$ 1.909 na primeira semana! Seguindo exatamente o que ensina no curso, consegui esses resultados incríveis mesmo sendo iniciante total.",
    role: 'Aposentado, Rio de Janeiro',
    star: 'R$ 1.909',
  },
  {
    image: avatar5,
    name: 'Ana Silva',
    description: "🚀 R$ 2.450 no segundo mês! Nunca imaginei que criar blogs pudesse ser tão fácil com IA. Estou impressionada com os resultados!",
    role: 'Professora, Minas Gerais',
    star: 'R$ 2.450',
  },
  {
    image: avatar6,
    name: 'João Oliveira',
    description: "💎 R$ 3.200 em 45 dias! Era cético no início, mas os resultados falam por si. O método funciona mesmo para quem não entende nada de tecnologia.",
    role: 'Comerciante, Bahia',
    star: 'R$ 3.200',
  },
]
