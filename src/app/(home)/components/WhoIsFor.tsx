import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const WhoIsFor = () => {
  return (
    <section className="section bg-light" id="who-is-for">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="text-dark fw-bold mb-4">
              ❓ ESTE CURSO É PARA VOCÊ?
            </h2>
            <p className="text-muted fs-5 mb-5">
              Antes de tomar sua decisão, veja se você se encaixa no perfil ideal dos nossos alunos de sucesso:
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* PARA QUEM É */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100 border-start border-success border-4">
              <CardBody className="p-4">
                <div className="text-center mb-4">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <IconifyIcon icon="tabler:check" className="fs-1 text-white" />
                  </div>
                  <h3 className="text-success fw-bold mt-3">✅ PARA QUEM É:</h3>
                </div>

                <div className="space-y-3">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Iniciantes absolutos</strong> que nunca criaram um blog na vida mas querem uma renda extra
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas ocupadas</strong> que têm pouco tempo mas querem uma renda passiva funcionando 24/7
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Desempregados ou aposentados</strong> que precisam de uma nova fonte de renda urgente
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Empreendedores frustrados</strong> que já tentaram outros métodos e falharam
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas que odeiam tecnologia</strong> mas querem ganhar dinheiro online de forma simples
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Quem tem disciplina</strong> para seguir um sistema por pelo menos 30 minutos por dia
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas sérias</strong> que querem uma transformação real na vida financeira
                    </p>
                  </div>
                </div>

                <div className="bg-success rounded p-3 mt-4">
                  <p className="text-white fw-bold text-center mb-0">
                    Se você se identificou com pelo menos 3 itens acima, este curso FOI FEITO PARA VOCÊ! ✅
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* PARA QUEM NÃO É */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100 border-start border-danger border-4">
              <CardBody className="p-4">
                <div className="text-center mb-4">
                  <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <IconifyIcon icon="tabler:x" className="fs-1 text-white" />
                  </div>
                  <h3 className="text-danger fw-bold mt-3">❌ PARA QUEM NÃO É:</h3>
                </div>

                <div className="space-y-3">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas que buscam esquemas</strong> de "ficar rico rápido" sem fazer nada
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Quem quer ganhar dinheiro</strong> sem seguir um sistema ou fazer qualquer esforço
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas negativas</strong> que sempre encontram desculpas para não agir
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Quem não tem nem 30 minutos</strong> por dia para dedicar ao negócio
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas que desistem fácil</strong> na primeira dificuldade que aparece
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Quem já está satisfeito</strong> com a situação financeira atual
                    </p>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:x" className="text-danger fs-5 mt-1 flex-shrink-0" />
                    <p className="mb-0">
                      <strong>Pessoas que não investem</strong> em conhecimento e preferem ficar reclamando
                    </p>
                  </div>
                </div>

                <div className="bg-danger rounded p-3 mt-4">
                  <p className="text-white fw-bold text-center mb-0">
                    Se você se identificou com algum item acima, este curso NÃO é para você! ❌
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhoIsFor