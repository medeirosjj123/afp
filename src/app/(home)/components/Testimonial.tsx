import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import { testimonialData, TestimonialType } from '../data'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const TestimonialCard = ({ description, image, name, role, star }: TestimonialType) => {
  return (
    <Card className="border-0 shadow-lg border-start border-success border-4">
      <CardBody className="p-4">
        <div className="d-flex align-items-start gap-3">
          <Image src={image} alt="avatar" className="rounded-circle flex-shrink-0" height={80} width={80} />
          <div className="flex-grow-1">
            <div className="d-flex align-items-center gap-2 mb-2">
              <h5 className="text-dark fw-bold m-0">{name}</h5>
              <span className="badge bg-success text-white small">{star}</span>
            </div>
            <p className="text-muted small mb-2">{role}</p>
            <p className="mb-0 text-dark fw-medium">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const Testimonial = () => {
  return (
    <section className="section bg-light" id="testimonial">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:edit" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-primary text-white py-2 px-3 f-14">🔓 SEGREDO #2</span>
              </p>
              <h3 className="text-primary fw-bold">IA Cria Conteúdo SEO Perfeito em 1 Clique</h3>
              <h4 className="text-dark mb-4">"Como Nossa IA Escreve Artigos de 2.000+ Palavras Otimizados para o Google"</h4>
              <p className="text-muted fs-5">
                Enquanto outros gastam HORAS escrevendo um artigo, nossa <strong className="text-primary">IA ESPECIALIZADA</strong> faz tudo automaticamente. 
                <strong className="text-success">Veja a facilidade da criação de conteúdo:</strong>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="border-0 shadow-lg">
              <CardBody className="p-4">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                       style={{width: '60px', height: '60px'}}>
                    <IconifyIcon icon="tabler:robot" className="fs-4 text-white" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-dark fw-bold mb-2">🎬 Vídeo: IA Criando Artigo SEO</h5>
                    <p className="text-muted mb-3">
                      Assista nossa IA escrever um artigo completo de 2.000+ palavras, 
                      otimizado para SEO, em menos de 2 minutos!
                    </p>
                  </div>
                </div>
                <div className="position-relative">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src="https://player.vimeo.com/video/1113039059?h=142d695c97&title=0&byline=0&portrait=0" 
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

          <Col lg={6}>
            <Card className="border-0 shadow-lg">
              <CardBody className="p-4">
                <div className="mb-4">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                         style={{width: '60px', height: '60px'}}>
                      <IconifyIcon icon="tabler:search" className="fs-4" />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-dark fw-bold mb-2">⚡ O Que Nossa IA Faz Automaticamente:</h5>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-1">Pesquisa de Palavras-chave</p>
                      <p className="text-muted small mb-0">Encontra automaticamente as keywords mais lucrativas</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-1">Estrutura SEO Perfeita</p>
                      <p className="text-muted small mb-0">H1, H2, H3 otimizados para o Google</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-1">Meta Description + Título</p>
                      <p className="text-muted small mb-0">Otimizados para máxima taxa de clique</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-1">Conteúdo de 2.000+ Palavras</p>
                      <p className="text-muted small mb-0">Artigos completos e informativos que Google ama</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IconifyIcon icon="tabler:check" className="text-success fs-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-1">Links Internos Automáticos</p>
                      <p className="text-muted small mb-0">Estrutura de links para autoridade do site</p>
                    </div>
                  </div>
                </div>

                <div className="bg-success bg-opacity-10 rounded p-3 mt-4">
                  <p className="text-dark fw-bold text-center mb-0">
                    ⏱️ Tempo: 2 minutos vs 3-4 horas manualmente!
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

export default Testimonial
