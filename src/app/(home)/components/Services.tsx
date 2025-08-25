import React from 'react'
import { servicesData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="section" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:devices-cog" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-primary text-white py-2 px-3 f-14">🔓 SEGREDO #3</span>
              </p>
              <h3 className="text-primary fw-bold">O Sistema Que Funciona Automaticamente</h3>
              <h4 className="text-dark mb-4">"Nossa Plataforma + Treinamento = Sucesso Garantido"</h4>
              <p className="mb-0 text-muted fs-5">
                Com nossa <strong className="text-primary">PLATAFORMA PRONTA</strong> + treinamento completo, você tem tudo que precisa para ter sucesso.
                Veja como é simples usar nosso sistema:
              </p>
            </div>
          </Col>
        </Row>
        <hr className="my-5 border" />
        <Row className="g-4">
          {servicesData.map((item, idx) => {
            return (
              <Col lg={4} key={idx}>
                <div className="d-flex gap-3 mb-3">
                  <span className="icon-lg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                    <IconifyIcon icon={item.icon} className="fs-2" />
                  </span>
                  <div>
                    <p className="mb-1 fw-semibold f-18">{item.title}</p>
                    <p className="mb-0 f-15 text-muted">{item.description}</p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services
