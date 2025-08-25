'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React, { useState } from 'react'
import { Card, CardBody, Col, Container, Row, Collapse } from 'react-bootstrap'

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <Card className="mb-3 border-0 shadow-sm">
      <CardBody className="p-4">
        <button
          className="btn btn-link text-decoration-none p-0 w-100 text-start d-flex align-items-center justify-content-between"
          onClick={onToggle}
        >
          <h5 className="fw-bold text-dark mb-0">{question}</h5>
          <IconifyIcon 
            icon={isOpen ? "tabler:chevron-up" : "tabler:chevron-down"} 
            className="text-primary fs-4 flex-shrink-0 ms-3" 
          />
        </button>
        
        <Collapse in={isOpen}>
          <div className="mt-3">
            <div 
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </Collapse>
      </CardBody>
    </Card>
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
      answer: "Sim! <strong>Curso completo + mentoria semanal + comunidade VIP + suporte</strong>. Tudo incluído sem custo adicional."
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
    <section className="section bg-light" id="faq">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="text-dark fw-bold mb-4">
              ❓ PERGUNTAS MAIS FREQUENTES
            </h2>
            <p className="text-muted fs-5 mb-5">
              Tiramos as principais dúvidas para você tomar a melhor decisão:
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
            <div className="bg-primary text-white rounded p-5">
              <h3 className="fw-bold mb-3">💬 AINDA TEM DÚVIDAS?</h3>
              <p className="fs-5 mb-4">
                Adquira a plataforma e tenha acesso à comunidade VIP exclusiva com mentoria semanal + suporte completo!
              </p>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-link text-decoration-none p-0"
              >
                <div className="bg-white text-primary rounded p-3 d-inline-block">
                  <h5 className="fw-bold mb-0">🚀 QUERO MINHA PLATAFORMA AGORA!</h5>
                </div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ