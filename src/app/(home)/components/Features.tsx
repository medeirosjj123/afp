'use client'
import React from 'react'
import { featuresData, FeaturesType } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const FeaturesCard = ({ description, icon, title }: FeaturesType) => {
  return (
    <div 
      className="h-100 p-4 rounded-4 position-relative overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Icon with gradient */}
      <div className="mb-3">
        <div 
          className="rounded-3 d-flex align-items-center justify-content-center"
          style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)'
          }}
        >
          <IconifyIcon icon={icon} className="text-white fs-4" />
        </div>
      </div>
      
      {/* Title */}
      <h5 className="text-white fw-bold mb-2" style={{fontSize: '18px'}}>
        {title.replace(/[🚀🧠🔍⚡]/g, '').trim()}
      </h5>
      
      {/* Description */}
      <p className="text-white-50 mb-0 small lh-sm">
        {description}
      </p>
    </div>
  )
}

const Features = () => {
  return (
    <section className="py-5" id="features" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header - minimal */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Como funciona a plataforma
            </h2>
            <p className="text-white-50 fs-5 mb-0">
              4 tecnologias que automatizam completamente a criação do seu blog
            </p>
          </Col>
        </Row>

        {/* Features Grid - Raycast style */}
        <Row className="g-4 mb-5">
          {featuresData.map((item, idx) => (
            <Col lg={3} md={6} key={idx}>
              <FeaturesCard {...item} />
            </Col>
          ))}
        </Row>

        {/* Demo section - glassmorphic */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div 
              className="rounded-4 p-4 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 text-lg-start">
                  <div className="mb-3">
                    <span 
                      className="badge rounded-pill px-3 py-2"
                      style={{background: 'rgba(102, 126, 234, 0.2)', color: '#667eea'}}
                    >
                      🎬 Demo da Plataforma
                    </span>
                  </div>
                  <h4 className="text-white fw-bold mb-3">
                    Veja o Blog House em ação
                  </h4>
                  <p className="text-white-50 mb-4">
                    WordPress instalado e configurado automaticamente em 60 segundos. 
                    Assista nossa ferramenta criando um blog completo do zero.
                  </p>
                  <Button
                    variant="outline-light"
                    className="rounded-3 px-4 py-2"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    Assistir Demo
                  </Button>
                </div>
                <div className="col-lg-6">
                  <div 
                    className="rounded-3 overflow-hidden position-relative"
                    style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    <div className="ratio ratio-16x9">
                      <iframe 
                        src="https://player.vimeo.com/video/1114994833?h=0da962d18b&title=0&byline=0&portrait=0" 
                        width="100%" 
                        height="100%" 
                        style={{border: 0, filter: 'brightness(0.9)'}} 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-3"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
