import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const CostComparison = () => {
  return (
    <section className="section bg-light" id="cost-comparison">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="text-dark fw-bold mb-4">
              💰 QUANTO CUSTA CRIAR UM BLOG SEM BLOG HOUSE?
            </h2>
            <p className="text-muted fs-5 mb-5">
              Fizemos as contas: veja o <strong className="text-danger">absurdo que você gastaria</strong> 
              tentando fazer tudo manualmente vs <strong className="text-success">economia brutal</strong> com Blog House:
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* MÉTODO MANUAL */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100 border-start border-danger border-4">
              <CardBody className="p-5">
                <div className="text-center mb-4">
                  <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                       style={{width: '80px', height: '80px'}}>
                    <IconifyIcon icon="tabler:user" className="fs-1" />
                  </div>
                  <h3 className="text-danger fw-bold mt-3 mb-2">MÉTODO MANUAL</h3>
                  <p className="text-muted">Como 99% das pessoas fazem</p>
                </div>

                <div className="cost-breakdown">
                  <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                    <div>
                      <h6 className="fw-bold mb-1">👨‍💻 Desenvolvedor Web</h6>
                      <small className="text-muted">Criar 1 blog profissional</small>
                    </div>
                    <div className="text-end">
                      <h5 className="text-danger fw-bold mb-0">R$ 5.000</h5>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                    <div>
                      <h6 className="fw-bold mb-1">✍️ Redator SEO</h6>
                      <small className="text-muted">40 artigos x R$ 100 cada</small>
                    </div>
                    <div className="text-end">
                      <h5 className="text-danger fw-bold mb-0">R$ 4.000</h5>
                      <small className="text-muted">/mês</small>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                    <div>
                      <h6 className="fw-bold mb-1">🔧 Ferramentas SEO</h6>
                      <small className="text-muted">Ahrefs + SEMrush + outras</small>
                    </div>
                    <div className="text-end">
                      <h5 className="text-danger fw-bold mb-0">R$ 800</h5>
                      <small className="text-muted">/mês</small>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded">
                    <div>
                      <h6 className="fw-bold mb-1">🌐 Hospedagem Premium</h6>
                      <small className="text-muted">Servidor rápido e confiável</small>
                    </div>
                    <div className="text-end">
                      <h5 className="text-danger fw-bold mb-0">R$ 200</h5>
                      <small className="text-muted">/mês</small>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded">
                    <div>
                      <h6 className="fw-bold mb-1">🎓 Seu Tempo</h6>
                      <small className="text-muted">200h aprendendo e configurando</small>
                    </div>
                    <div className="text-end">
                      <h5 className="text-danger fw-bold mb-0">R$ 10.000</h5>
                      <small className="text-muted">valor/hora R$ 50</small>
                    </div>
                  </div>

                  <hr />

                  <div className="text-center">
                    <h4 className="text-muted mb-2">CUSTO TOTAL PRIMEIRO MÊS:</h4>
                    <h1 className="text-danger fw-bold display-4">R$ 20.000</h1>
                    <p className="text-muted mb-3">+ R$ 5.000/mês recorrente</p>
                    <div className="bg-danger bg-opacity-10 rounded p-3">
                      <p className="text-dark fw-bold mb-0">
                        😰 E ainda corre o risco de não funcionar!
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* BLOG HOUSE */}
          <Col lg={6}>
            <Card className="border-0 shadow-lg h-100 border-start border-success border-4 position-relative">
              <div className="position-absolute top-0 start-50 translate-middle">
                <span className="badge bg-success px-4 py-2 fs-6 fw-bold">🔥 INTELIGENTE</span>
              </div>
              <CardBody className="p-5">
                <div className="text-center mb-4 mt-3">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                       style={{width: '80px', height: '80px'}}>
                    <IconifyIcon icon="tabler:robot" className="fs-1" />
                  </div>
                  <h3 className="text-success fw-bold mt-3 mb-2">BLOG HOUSE 2025</h3>
                  <p className="text-muted">A forma inteligente de 2025</p>
                </div>

                <div className="plan-options mb-4">
                  <div className="bg-primary bg-opacity-10 rounded p-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-primary fw-bold mb-1">STARTER</h5>
                        <p className="small mb-0">1 blog + 40 artigos/mês</p>
                      </div>
                      <h3 className="text-primary fw-bold">R$ 97</h3>
                    </div>
                  </div>

                  <div className="bg-success bg-opacity-10 rounded p-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-success fw-bold mb-1">PRO</h5>
                        <p className="small mb-0">5 blogs + 100 artigos/mês</p>
                      </div>
                      <h3 className="text-success fw-bold">R$ 297</h3>
                    </div>
                  </div>

                  <div className="bg-warning bg-opacity-10 rounded p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-warning fw-bold mb-1">BLACK BELT</h5>
                        <p className="small mb-0">Ilimitado + Bulk Mode</p>
                      </div>
                      <h3 className="text-warning fw-bold">R$ 166</h3>
                    </div>
                  </div>
                </div>

                <div className="included mb-4">
                  <h6 className="fw-bold mb-3">✅ INCLUSO EM TODOS OS PLANOS:</h6>
                  <div className="row small">
                    <div className="col-6">
                      <p className="mb-2">✅ IA Criadora</p>
                      <p className="mb-2">✅ Blogs Profissionais</p>
                      <p className="mb-2">✅ SEO Automático</p>
                    </div>
                    <div className="col-6">
                      <p className="mb-2">✅ Monetização</p>
                      <p className="mb-2">✅ Suporte</p>
                      <p className="mb-2">✅ Atualizações</p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="text-center">
                  <h4 className="text-muted mb-2">ECONOMIA MENSAL:</h4>
                  <h1 className="text-success fw-bold display-4">R$ 4.703</h1>
                  <p className="text-muted mb-3">vs R$ 5.000 método manual (Starter)</p>
                  <div className="bg-success bg-opacity-10 rounded p-3">
                    <p className="text-dark fw-bold mb-0">
                      🚀 Resultado garantido desde o dia 1!
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div className="bg-dark text-white rounded p-5 text-center">
              <h3 className="text-warning fw-bold mb-4">🧮 RESUMO DA MATEMÁTICA:</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h5 className="text-danger fw-bold">MANUAL (1º MÊS)</h5>
                  <h2 className="text-danger">R$ 20.000</h2>
                  <p className="text-light small">+ R$ 5.000/mês depois</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 className="text-success fw-bold">BLOG HOUSE</h5>
                  <h2 className="text-success">R$ 97</h2>
                  <p className="text-light small">Starter - tudo incluso</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 className="text-warning fw-bold">VOCÊ ECONOMIZA</h5>
                  <h2 className="text-warning">R$ 19.903</h2>
                  <p className="text-light small">só no primeiro mês!</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-light fs-5 mb-0">
                  <strong>Em 12 meses:</strong> Método manual = R$ 75.000 | Blog House = R$ 1.164
                  <br />
                  <span className="text-warning fw-bold fs-4">ECONOMIA TOTAL: R$ 73.836!</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CostComparison