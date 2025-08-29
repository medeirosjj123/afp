import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className="section bg-dark text-white" id="pricing">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="text-white fw-bold mb-4">
              ⏰ ESTÁ PRONTO PARA TRANSFORMAR SUA VIDA?
            </h2>
            <p className="text-light fs-5 mb-5">
              Você viu a plataforma, conheceu a tecnologia, viu dados reais de usuários e sabe 
              exatamente o que vai receber. <strong className="text-primary">Agora é só decidir!</strong>
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="border-0 shadow-lg bg-white text-dark">
              <CardBody className="p-5 text-center">
                <div className="mb-4">
                  <div className="bg-danger text-white rounded-pill px-4 py-2 d-inline-block mb-3">
                    <h5 className="fw-bold mb-0">⚡ OFERTA LIMITADA - 95% OFF!</h5>
                  </div>
                </div>

                <div className="price-display mb-4">
                  <p className="text-muted mb-2">
                    <span className="fs-5 text-decoration-line-through">De R$ 30.000+</span>
                  </p>
                  <h1 className="fw-bold text-primary mb-0" style={{fontSize: '3.5rem'}}>
                    R$ 1.997
                  </h1>
                  <p className="text-dark fs-5 fw-bold">à vista</p>
                  <div className="bg-light rounded p-3 mb-3">
                    <p className="text-primary fw-bold mb-1">💳 OU PARCELE EM ATÉ 12X:</p>
                    <h4 className="text-dark fw-bold mb-0">12x de R$ 206,54</h4>
                    <small className="text-muted">sem juros no cartão</small>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-success text-white rounded p-3">
                    <div className="row text-center">
                      <div className="col-4">
                        <h6 className="fw-bold mb-1">7 DIAS</h6>
                        <small>Garantia</small>
                      </div>
                      <div className="col-4">
                        <h6 className="fw-bold mb-1">R$ 166</h6>
                        <small>Por mês</small>
                      </div>
                      <div className="col-4">
                        <h6 className="fw-bold mb-1">12 MESES</h6>
                        <small>Acesso</small>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-100 py-4 fw-bold fs-4 mb-3"
                  href="https://pay.kiwify.com.br/vivKkdG"
                  target="_blank"
                  rel="noopener noreferrer"
                  as="a"
                >
                  🚀 QUERO COMEÇAR AGORA!
                </Button>

                <p className="text-center text-muted small mb-0">
                  <IconifyIcon icon="tabler:shield-check" className="me-1 text-success" />
                  Pagamento 100% Seguro • SSL Criptografado • Satisfação Garantida
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="bg-danger rounded p-4">
              <h5 className="text-white fw-bold mb-2">⚠️ ATENÇÃO: OFERTA POR TEMPO LIMITADO!</h5>
              <p className="text-white mb-0">
                Esta promoção pode sair do ar a qualquer momento. Não perca a chance de garantir 
                o preço promocional com 95% de desconto!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
