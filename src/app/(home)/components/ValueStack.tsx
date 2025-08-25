import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const ValueStackItem = ({ title, description, value, isBonus = false }: {
  title: string
  description: string
  value: string
  isBonus?: boolean
}) => {
  return (
    <Card className={`border-0 shadow-sm mb-3 ${isBonus ? 'border-start border-warning border-4' : 'border-start border-success border-4'}`}>
      <CardBody className="p-4">
        <Row className="align-items-center">
          <Col lg={8}>
            <h5 className={`fw-bold mb-2 ${isBonus ? 'text-warning' : 'text-success'}`}>
              {isBonus ? '🎁 BÔNUS:' : '✅'} {title}
            </h5>
            <p className="text-muted mb-0">{description}</p>
          </Col>
          <Col lg={4} className="text-end">
            <h4 className={`fw-bold m-0 ${isBonus ? 'text-warning' : 'text-success'}`}>{value}</h4>
            {isBonus && <small className="text-muted">GRÁTIS!</small>}
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

const ValueStack = () => {
  return (
    <section className="section bg-light" id="value-stack">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="text-dark fw-bold mb-3">💰 PLATAFORMA COMPLETA + TREINAMENTO:</h2>
              <p className="text-muted fs-5">
                Você não está comprando só um curso... está levando uma <strong className="text-primary">TECNOLOGIA COMPLETA</strong> que vale mais de <strong className="text-danger">R$ 43.000</strong>!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            {/* PLATAFORMA TECNOLÓGICA */}
            <div className="bg-primary text-white p-3 rounded mb-4">
              <h5 className="fw-bold text-center mb-0">🚀 PLATAFORMA TECNOLÓGICA</h5>
            </div>
            
            <ValueStackItem
              title="Sistema WordPress 1-Click"
              description="Plataforma que instala WordPress completo em qualquer hospedagem em 60 segundos. Zero configuração manual, zero dor de cabeça."
              value="R$ 5.000"
            />

            <ValueStackItem
              title="IA Escritora Ilimitada (12 meses)"
              description="Inteligência artificial integrada que escreve artigos de 2.000+ palavras perfeitos para SEO. Uso ilimitado durante todo período."
              value="R$ 8.000"
            />

            <ValueStackItem
              title="Biblioteca 50+ Plugins Premium"
              description="Todos os plugins profissionais necessários já inclusos e pré-configurados. Economia de milhares em licenças anuais."
              value="R$ 3.000"
            />

            <ValueStackItem
              title="100+ Templates Profissionais"
              description="Designs exclusivos que convertem visitas em vendas. Templates testados pelos nossos top performers da comunidade."
              value="R$ 2.000"
            />

            {/* TREINAMENTO COMPLETO */}
            <div className="bg-success text-white p-3 rounded mb-4 mt-4">
              <h5 className="fw-bold text-center mb-0">📚 TREINAMENTO COMPLETO</h5>
            </div>

            <ValueStackItem
              title="Curso 7 Módulos em HD"
              description="Mais de 20 horas de conteúdo prático em alta qualidade. Do absoluto zero até blogs que geram R$ 10.000+/mês."
              value="R$ 5.000"
            />

            <ValueStackItem
              title="Mentorias Semanais ao Vivo"
              description="Calls ao vivo toda semana comigo pessoalmente. Tire dúvidas, receba feedback e acelere seus resultados com orientação direta."
              value="R$ 10.000"
            />

            <ValueStackItem
              title="Comunidade VIP (12 meses)"
              description="Acesso durante todo período ao grupo exclusivo com suporte direto, networking com early adopters focados em SEO e dicas diárias 24/7."
              value="R$ 3.000"
            />

            <ValueStackItem
              title="Suporte Prioritário (12 meses)"
              description="Canal exclusivo de suporte técnico e educacional durante todo o período. Resposta garantida em até 24h."
              value="R$ 2.000"
            />

            {/* BÔNUS EXCLUSIVOS */}
            <div className="bg-warning text-dark p-3 rounded mb-4 mt-4">
              <h5 className="fw-bold text-center mb-0">🎁 BÔNUS EXCLUSIVOS</h5>
            </div>

            <ValueStackItem
              title="Lista 500 Nichos Mais Lucrativos"
              description="Pesquisa exclusiva com os nichos que mais geram dinheiro no Brasil. Pule a pesquisa e vá direto aos que funcionam!"
              value="R$ 997"
              isBonus={true}
            />

            <ValueStackItem
              title="Pack 1000 Títulos Virais"
              description="Banco de títulos testados que geram milhares de cliques. Nunca mais fique sem ideias para seus artigos!"
              value="R$ 497"
              isBonus={true}
            />

            <ValueStackItem
              title="Scripts de Vendas 15% Conversão"
              description="Os mesmos scripts que uso para vender R$ 50.000+/mês. Templates que transformam visitas em vendas automaticamente."
              value="R$ 1.997"
              isBonus={true}
            />

            <ValueStackItem
              title="Biblioteca de Prompts IA"
              description="200+ prompts testados para a IA escrever qualquer tipo de conteúdo. De reviews a tutoriais, tudo pronto para usar."
              value="R$ 797"
              isBonus={true}
            />

            {/* VALOR TOTAL */}
            <Card className="border-0 shadow-lg bg-primary text-white">
              <CardBody className="p-5 text-center">
                <h3 className="fw-bold mb-3">💎 VALOR TOTAL DA PLATAFORMA + TREINAMENTO:</h3>
                <div className="mb-3">
                  <span className="fs-4 text-decoration-line-through opacity-75">R$ 41.291</span>
                </div>
                <h1 className="fw-bold mb-3" style={{fontSize: '3rem'}}>R$ 43.788</h1>
                <p className="fs-5 mb-0">
                  Isso é mais que um carro popular! Mas você não vai pagar nem 5% disso...
                </p>
              </CardBody>
            </Card>

            {/* OFERTA ESPECIAL */}
            <Card className="border-0 shadow-lg bg-danger text-white mt-4">
              <CardBody className="p-5 text-center">
                <h3 className="fw-bold mb-3">🔥 MAS HOJE VOCÊ LEVA A PLATAFORMA COMPLETA POR:</h3>
                <div className="mb-3">
                  <span className="fs-5 text-decoration-line-through">De R$ 43.788</span>
                </div>
                <h1 className="fw-bold mb-3" style={{fontSize: '4rem'}}>
                  R$ 1.997
                </h1>
                <p className="fs-4 fw-bold mb-3">OU 12x de R$ 206,54</p>
                <div className="bg-white text-danger rounded p-3 d-inline-block">
                  <h4 className="fw-bold mb-0">95% de DESCONTO!</h4>
                </div>
                <p className="mt-3 mb-0">
                  <strong>ATENÇÃO:</strong> Próximo lote volta para R$ 2.997. Esta é sua última chance com este preço!
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ValueStack