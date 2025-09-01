import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const BulkMode = () => {
  return (
    <section className="section bg-gradient text-white" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}} id="bulk-mode">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <div className="mb-5">
              <div className="bg-warning text-dark px-4 py-2 rounded-pill d-inline-block mb-4">
                <h6 className="mb-0 fw-bold">🔥 EXCLUSIVO BLACK BELT</h6>
              </div>
              <h2 className="text-white fw-bold mb-4">
                BULK MODE: Crie 100+ Artigos de Uma Vez!
              </h2>
              <p className="fs-5 text-light mb-4">
                Enquanto outros levam <strong className="text-danger">6 meses</strong> para criar 100 artigos, 
                você faz isso em <strong className="text-warning">10 minutos</strong> com o Bulk Mode exclusivo.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <Card className="border-0 bg-dark text-white">
              <CardBody className="p-5">
                <div className="mb-4">
                  <IconifyIcon icon="tabler:bolt" className="fs-1 text-warning mb-3" />
                  <h4 className="text-warning fw-bold mb-3">Como Funciona o Bulk Mode?</h4>
                </div>

                <div className="steps">
                  <div className="d-flex align-items-start mb-4">
                    <span className="badge bg-warning text-dark rounded-circle me-3 p-2" style={{minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <strong>1</strong>
                    </span>
                    <div>
                      <h6 className="text-white fw-bold mb-2">Escolha o Nicho</h6>
                      <p className="text-light mb-0">Fitness, tecnologia, receitas... qualquer nicho que quiser dominar</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <span className="badge bg-warning text-dark rounded-circle me-3 p-2" style={{minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <strong>2</strong>
                    </span>
                    <div>
                      <h6 className="text-white fw-bold mb-2">Configure Quantidade</h6>
                      <p className="text-light mb-0">50, 100, 200... quantos artigos quiser criar de uma vez</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <span className="badge bg-warning text-dark rounded-circle me-3 p-2" style={{minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <strong>3</strong>
                    </span>
                    <div>
                      <h6 className="text-white fw-bold mb-2">Aperte 1 Botão</h6>
                      <p className="text-light mb-0">Nossa IA cria todos os artigos otimizados automaticamente</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <span className="badge bg-success text-white rounded-circle me-3 p-2" style={{minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <IconifyIcon icon="tabler:check" />
                    </span>
                    <div>
                      <h6 className="text-success fw-bold mb-2">Pronto! 6 Meses de Conteúdo</h6>
                      <p className="text-light mb-0">Você já tem material para o ano inteiro, otimizado e pronto para converter</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6}>
            <div className="comparison-box">
              <h5 className="text-warning fw-bold mb-4 text-center">⏱️ COMPARAÇÃO DE TEMPO</h5>
              
              <div className="bg-danger bg-opacity-20 rounded p-4 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <IconifyIcon icon="tabler:user" className="fs-3 text-danger me-3" />
                  <div>
                    <h6 className="text-white fw-bold mb-1">Método Manual</h6>
                    <p className="text-light small mb-0">Como 99% das pessoas fazem</p>
                  </div>
                </div>
                <div className="stats text-center">
                  <h3 className="text-danger fw-bold mb-2">6 MESES</h3>
                  <p className="text-light mb-0">Para criar 100 artigos de qualidade</p>
                </div>
              </div>

              <div className="text-center my-4">
                <h4 className="text-warning fw-bold">VS</h4>
              </div>

              <div className="bg-success bg-opacity-20 rounded p-4">
                <div className="d-flex align-items-center mb-3">
                  <IconifyIcon icon="tabler:robot" className="fs-3 text-success me-3" />
                  <div>
                    <h6 className="text-white fw-bold mb-1">Bulk Mode Blog House</h6>
                    <p className="text-light small mb-0">Exclusivo Black Belt</p>
                  </div>
                </div>
                <div className="stats text-center">
                  <h3 className="text-success fw-bold mb-2">10 MINUTOS</h3>
                  <p className="text-light mb-0">Para criar 100+ artigos otimizados</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="bg-warning text-dark rounded p-3">
                  <p className="fw-bold mb-0">💰 ECONOMIA: R$ 10.000+ em redatores!</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="bg-dark bg-opacity-50 rounded p-4">
              <h5 className="text-warning fw-bold mb-3">🎯 CASOS REAIS DE SUCESSO</h5>
              <div className="row">
                <div className="col-md-4">
                  <h6 className="text-white fw-bold">João - Fitness</h6>
                  <p className="text-light small mb-2">500 artigos em 1 dia</p>
                  <p className="text-success fw-bold">Dominou o nicho</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-white fw-bold">Maria - Receitas</h6>
                  <p className="text-light small mb-2">300 artigos em 30min</p>
                  <p className="text-success fw-bold">R$ 8.500/mês</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-white fw-bold">Carlos - Tech</h6>
                  <p className="text-light small mb-2">200 reviews em 15min</p>
                  <p className="text-success fw-bold">R$ 12.000/mês</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={6} className="text-center">
            <Button 
              variant="warning" 
              size="lg"
              className="px-5 py-3 fw-bold fs-5 text-dark"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔥 QUERO O BULK MODE AGORA!
            </Button>
            <p className="mt-3 text-light small">
              <IconifyIcon icon="tabler:alert-triangle" className="me-1 text-warning" />
              Disponível apenas no plano Black Belt • 27 vagas restantes
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BulkMode