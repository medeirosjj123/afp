# LPgen - Sistema de Landing Pages Profissionais

Sistema moderno e completo para criar landing pages de alta conversão, focado em vendas de produtos digitais e infoprodutos. Construído com Next.js 14, TypeScript e Tailwind CSS.

## Sobre o Projeto

O LPgen é uma plataforma completa para criação de landing pages otimizadas para conversão, com foco em:
- Design moderno e minimalista
- Componentes reutilizáveis e customizáveis
- Animações suaves e micro-interações
- SEO otimizado
- Performance máxima
- Responsividade total

## Requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn
- Git

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint
- Prettier

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/lpgen.git
cd lpgen
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000)

## Build

Para gerar uma build de produção:

```bash
npm run build
# ou
yarn build
```

## Estrutura do Projetoas

```
.
├── app/                    # Diretório principal da aplicação
│   ├── components/        # Componentes reutilizáveis
│   │   ├── hero/         # Componentes da seção hero
│   │   ├── testimonials/ # Componentes de depoimentos
│   │   ├── benefits/     # Componentes de benefícios
│   │   ├── pricing/      # Componentes de preço
│   │   ├── bonus/        # Componentes de bônus
│   │   ├── guarantee/    # Componentes de garantia
│   │   ├── faq/         # Componentes de FAQ
│   │   └── cta/         # Componentes de call-to-action
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── public/               # Arquivos estáticos
│   ├── images/          # Imagens
│   └── icons/           # Ícones
└── types/               # Definições de tipos TypeScript
```

## Seções Disponíveis

1. **Hero Section**
   - Headline principal
   - Subheadline
   - CTA primário
   - Elementos de prova social

2. **Depoimentos (TestimonialsSection2)**
   - Carrossel de prints de resultados
   - Overlay com valores destacados
   - Animações suaves

3. **Segmentação (SegmentationSection2 & SegmentationSection3)**
   - Para Quem É
   - Para Quem Não É
   - Layout em duas colunas
   - Imagens ilustrativas

4. **Benefícios (BenefitsSection2)**
   - Lista de benefícios principais
   - Ícones personalizados
   - Animações de entrada

5. **Módulos do Curso (PresentationSectionCourse)**
   - Estrutura do conteúdo
   - Badges especiais
   - Destaques visuais

6. **Bônus (BonusSection)**
   - 9 bônus exclusivos
   - Valores individuais
   - Design minimalista
   - Micro-interações
   - Valor total: R$ 13.276,00

7. **Garantia (GuaranteeSection)**
   - Política de 7 dias
   - Selo de garantia
   - Texto persuasivo

8. **Preço (PriceAnchorSection)**
   - Ancoragem de preço
   - Valor total: R$ 20.764,00
   - Desconto de 95%
   - Preço final: R$ 997,00

9. **FAQ (FaqSection)**
   - Perguntas frequentes
   - Acordeon interativo
   - Respostas detalhadas

10. **CTA Final (FinalCtaSection)**
    - Headline urgente
    - Timer de escassez
    - Botão de ação
    - Lista de benefícios

## Customização

Cada seção pode ser personalizada através de props, permitindo:
- Alteração de textos
- Mudança de cores
- Ajuste de espaçamentos
- Configuração de animações
- Troca de imagens
- Personalização de ícones

## Performance

O projeto foi otimizado para:
- Carregamento rápido
- SEO perfeito
- Core Web Vitals
- Acessibilidade
- Responsividade

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 