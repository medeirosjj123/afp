import Image from 'next/image'
import React from 'react'
import features from '@/assets/images/features-1.png'
import { featuresData, FeaturesType } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
//:

const FeaturesCard = ({ description, icon, title }: FeaturesType) => {
  return (
    <Card className="border-0">
      <CardBody>
        <div className="d-flex align-items-center gap-3 mb-3">
          <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
            <IconifyIcon icon={icon} className="fs-4" />
          </span>
          <p className="mb-0 fw-semibold f-18">{title}</p>
        </div>
        <p className="mb-0 text-muted">{description}</p>
      </CardBody>
    </Card>
  )
}

const Features = () => {
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-primary text-white py-2 px-3 f-14">🔓 SEGREDO #1</span>
              </p>
              <h3 className="text-primary fw-bold">A Plataforma Que Faz Tudo em 1 Clique</h3>
              <h4 className="text-dark mb-4">&ldquo;Como Nossa Tecnologia Elimina TODA a Complexidade&rdquo;</h4>
              <p className="text-muted fs-5">
                Enquanto outros cursos te ensinam teoria, nossa <strong>PLATAFORMA</strong> já vem com tudo pronto!
                Veja as 4 tecnologias que fazem todo o trabalho por você:
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6}>
            <Row className="g-3">
              {featuresData.map((item, idx) => {
                return (
                  <Col lg={6} key={idx}>
                    <FeaturesCard {...item} />
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col lg={6}>
            <Card className="border-0">
              <CardBody>
                <div className="d-flex gap-3 mb-3">
                  <span className="icon-lg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                    <IconifyIcon icon="tabler:play" className="fs-2" />
                  </span>
                  <div>
                    <p className="mb-1 fw-semibold f-18 text-primary">🎬 Veja a Plataforma Funcionando</p>
                    <p className="mb-0 f-15 text-muted fw-bold">
                      <span className="text-success">WordPress instalado em 60 segundos</span> - assista a demonstração real 
                      da ferramenta de 1-clique em ação!
                    </p>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://player.vimeo.com/video/1113039081?h=5a7036d8c5&title=0&byline=0&portrait=0" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
