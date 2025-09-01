import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className="section bg-dark text-white" id="pricing">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="text-white fw-bold mb-4">
              🔥 ESCOLHA SEU PLANO BLOG HOUSE 2025
            </h2>
            <p className="text-light fs-5 mb-5">
              <strong className="text-primary">Sem Teste Grátis</strong> • Com Garantia de 7 Dias • Já Validado por 500+ Usuários
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {/* STARTER PLAN */}
          <Col lg={4}>
            <Card className="border-0 shadow-lg bg-white text-dark h-100">
              <CardBody className="p-4 text-center">
                <div className="mb-4">
                  <h4 className="fw-bold text-primary mb-2">STARTER</h4>
                  <p className="text-muted">Perfeito para começar</p>
                </div>
                
                <div className="price-display mb-4">
                  <h1 className="fw-bold text-primary mb-0" style={{fontSize: '3rem'}}>R$ 97</h1>
                  <p className="text-dark fw-bold">/mês</p>
                </div>

                <div className="features mb-4 text-start">
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>1 blog</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>40 artigos/reviews por mês</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>IA otimizada para SEO</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>Monetização automática</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:x" className="text-danger me-2" />
                    <span className="text-muted">Bulk Mode</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  className="w-100 py-3 fw-bold"
                  href="https://pay.kiwify.com.br/vivKkdG"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  Começar por R$ 97
                </Button>
              </CardBody>
            </Card>
          </Col>

          {/* PRO PLAN */}
          <Col lg={4}>
            <Card className="border-0 shadow-lg bg-white text-dark h-100 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle">
                <span className="badge bg-success px-4 py-2 fs-6 fw-bold">MAIS VENDIDO</span>
              </div>
              <CardBody className="p-4 text-center">
                <div className="mb-4 mt-3">
                  <h4 className="fw-bold text-success mb-2">PRO</h4>
                  <p className="text-muted">Para múltiplos nichos</p>
                </div>
                
                <div className="price-display mb-4">
                  <h1 className="fw-bold text-success mb-0" style={{fontSize: '3rem'}}>R$ 297</h1>
                  <p className="text-dark fw-bold">/mês</p>
                </div>

                <div className="features mb-4 text-start">
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>5 blogs</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>100 artigos/reviews por mês</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>IA avançada para SEO</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:check" className="text-success me-2" />
                    <span>Monetização multi-nicho</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:x" className="text-danger me-2" />
                    <span className="text-muted">Bulk Mode</span>
                  </div>
                </div>

                <Button 
                  variant="success" 
                  className="w-100 py-3 fw-bold"
                  href="https://pay.kiwify.com.br/vivKkdG"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  Quero 5 Blogs por R$ 297
                </Button>
              </CardBody>
            </Card>
          </Col>

          {/* BLACK BELT PLAN */}
          <Col lg={4}>
            <Card className="border-0 shadow-lg bg-gradient text-white h-100 position-relative" style={{background: 'linear-gradient(45deg, #000000, #434343)'}}>
              <div className="position-absolute top-0 start-50 translate-middle">
                <span className="badge bg-danger px-4 py-2 fs-6 fw-bold">🔥 EXCLUSIVO</span>
              </div>
              <CardBody className="p-4 text-center">
                <div className="mb-4 mt-3">
                  <h4 className="fw-bold text-warning mb-2">BLACK BELT</h4>
                  <p className="text-light">O arsenal completo</p>
                </div>
                
                <div className="price-display mb-4">
                  <p className="text-muted mb-1">
                    <span className="fs-6 text-decoration-line-through">R$ 3.564/ano</span>
                  </p>
                  <h1 className="fw-bold text-warning mb-0" style={{fontSize: '2.5rem'}}>R$ 1.997</h1>
                  <p className="text-light fw-bold">/ano (R$ 166/mês)</p>
                </div>

                <div className="features mb-4 text-start">
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:infinity" className="text-warning me-2" />
                    <span>Sites e blogs ILIMITADOS</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:infinity" className="text-warning me-2" />
                    <span>Artigos ILIMITADOS</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:bolt" className="text-warning me-2" />
                    <span><strong>BULK MODE: 100+ artigos de uma vez</strong></span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:users" className="text-warning me-2" />
                    <span>Comunidade WhatsApp VIP</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IconifyIcon icon="tabler:video" className="text-warning me-2" />
                    <span>Mentoria semanal ao vivo</span>
                  </div>
                </div>

                <Button 
                  variant="warning" 
                  className="w-100 py-3 fw-bold text-dark"
                  href="https://pay.kiwify.com.br/vivKkdG"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  🔥 Ativar Bulk Mode + Mentoria
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10} className="text-center">
            <div className="bg-danger rounded p-4">
              <h5 className="text-white fw-bold mb-2">⚠️ BLACK BELT: APENAS 50 VAGAS DISPONÍVEIS!</h5>
              <p className="text-white mb-2">
                Por quê? A mentoria é ao vivo e personalizada. <strong>23 vagas já preenchidas</strong>
              </p>
              <p className="text-white mb-0 small">
                Próxima turma: março • Preços sobem 40% em 2025
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col lg={8} className="text-center">
            <p className="text-center text-light mb-0">
              <IconifyIcon icon="tabler:shield-check" className="me-1 text-success" />
              Garantia de 7 Dias • Pagamento Seguro • Cancele Quando Quiser
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
