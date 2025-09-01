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
  star: string
}

export const featuresData: FeaturesType[] = [
  {
    icon: 'tabler:rocket',
    title: '🚀 Blog Builder Engine',
    description: 'Cria blog completo em 60 segundos: design, páginas, estrutura SEO - tudo automatizado. Disponível em TODOS os planos!',
  },
  {
    icon: 'tabler:brain',
    title: '🧠 IA Content Creator',
    description: 'Escreve artigos otimizados que rankeiam no Google. Starter: 40/mês, Pro: 100/mês, Black Belt: ILIMITADO!',
  },
  {
    icon: 'tabler:search',
    title: '🔍 SEO Auto-Optimizer',
    description: 'Pesquisa palavras-chave, otimiza títulos, meta descriptions e estrutura. IA especialista em rankeamento!',
  },
  {
    icon: 'tabler:bolt',
    title: '⚡ Bulk Mode (Black Belt)',
    description: 'EXCLUSIVO: Cria 100+ artigos de uma vez! Domine nichos inteiros em minutos ao invés de meses.',
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
