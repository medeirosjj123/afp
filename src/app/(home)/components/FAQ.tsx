'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React, { useState } from 'react'
import { Col, Container, Row, Collapse } from 'react-bootstrap'

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div 
      className="mb-4 rounded-4"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="p-4">
        <button
          className="btn btn-link text-decoration-none p-0 w-100 text-start d-flex align-items-center justify-content-between"
          onClick={onToggle}
        >
          <h6 className="fw-bold text-white mb-0 small">{question}</h6>
          <IconifyIcon 
            icon={isOpen ? "tabler:chevron-up" : "tabler:chevron-down"} 
            className="text-white-50 fs-5 flex-shrink-0 ms-3" 
          />
        </button>
        
        <Collapse in={isOpen}>
          <div className="mt-3">
            <div 
              className="text-white-50 small"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </Collapse>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "🤔 Eu nunca fiz um blog, é muito difícil?",
      answer: "Nossa plataforma é <strong>1-clique!</strong> WordPress instalado automaticamente, temas configurados, IA escreve os artigos. Você só clica e pronto!"
    },
    {
      question: "🔧 Preciso entender de tecnologia?",
      answer: "Absolutamente <strong>NÃO!</strong> Tudo é automático: instalação, configuração, criação de conteúdo. Se você sabe usar WhatsApp, consegue usar nossa plataforma."
    },
    {
      question: "⏰ Quanto tempo por dia preciso dedicar?",
      answer: "Apenas <strong>30 minutos por dia</strong>. Nossa IA faz o trabalho pesado. Você só supervisiona e aprova o conteúdo gerado automaticamente."
    },
    {
      question: "📚 O curso está incluso no valor?",
      answer: "Sim! <strong>Curso completo + mentoria semanal + comunidade VIP + suporte</strong>. Tudo incluído sem custo adicional. (Plano Black Belt)"
    },
    {
      question: "📝 A plataforma funciona melhor para reviews?",
      answer: "Sim! Nossa IA foi <strong>treinada especificamente para reviews</strong> que convertem. Analisa produtos, cria prós/contras, comparações e CTAs automaticamente."
    },
    {
      question: "🛍️ Posso criar reviews de produtos que não conheço?",
      answer: "Claro! Nossa IA <strong>pesquisa e analisa qualquer produto</strong> automaticamente. Você só precisa informar o produto - ela faz todo o resto!"
    },
    {
      question: "🌐 Preciso pagar hospedagem separadamente?",
      answer: "Não está incluso. Você escolhe sua própria hospedagem (recomendamos algumas opções econômicas no curso)."
    },
    {
      question: "📈 Em quanto tempo vou ver resultados?",
      answer: "Primeiros acessos: <strong>24-48 horas</strong>. Primeiras vendas: <strong>30-60 dias</strong> (seguindo nosso sistema completo)."
    },
    {
      question: "🔄 Por quanto tempo tenho acesso?",
      answer: "<strong>12 meses completos</strong> de acesso à plataforma, curso, mentoria e comunidade VIP."
    },
    {
      question: "💳 Como funciona a garantia?",
      answer: "<strong>7 dias de garantia incondicional</strong>. Teste a plataforma, use tudo, se não gostar, devolvemos 100% do valor."
    },
    {
      question: "🆘 E se eu travar em algo?",
      answer: "Impossível ficar travado! Você tem: plataforma automática + curso completo + mentoria semanal + comunidade VIP + suporte direto."
    },
    {
      question: "📈 Qual é o potencial de ganhos?",
      answer: "Nossos usuários da plataforma ganham de <strong>R$ 1.000 a R$ 10.000+ por mês</strong>. Quanto mais blogs criar, mais receita terá."
    },
    {
      question: "🔄 Posso criar vários blogs?",
      answer: "Sim! A plataforma permite criar <strong>quantos blogs quiser</strong>. Cada blog = nova fonte de renda automática."
    }
  ]

  return (
    <section className="py-5" id="faq" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(102, 126, 234, 0.2)', color: '#667eea'}}
              >
                ❓ Dúvidas frequentes
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Perguntas mais{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                frequentes
              </span>
            </h2>
            <p className="text-white-50 fs-5 mb-0">
              Tiramos as principais dúvidas para você tomar a{' '}
              <strong className="text-white">melhor decisão</strong>
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div 
              className="p-4 rounded-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)'
                  }}
                >
                  <IconifyIcon icon="tabler:message-question" className="text-white fs-4" />
                </div>
                <h4 className="text-white fw-bold mb-3">💬 AINDA TEM DÚVIDAS?</h4>
                <p className="text-white-50 mb-4">
                  Adquira a plataforma e tenha acesso à{' '}
                  <strong className="text-white">comunidade VIP exclusiva</strong> com mentoria semanal + suporte completo!
                </p>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn border-0 rounded-3 px-4 py-3 fw-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white'
                  }}
                >
                  🚀 QUERO MINHA PLATAFORMA AGORA!
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ