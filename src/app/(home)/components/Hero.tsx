'use client'
import React from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden" id="home" style={{
      minHeight: '100vh',
      background: '#0a0a0a'
    }}>
      {/* Raycast-style subtle gradient background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)'
      }}></div>
      
      {/* Floating geometric shapes - very subtle */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity: '0.02'}}>
        <div className="position-absolute" style={{
          top: '20%', 
          left: '80%', 
          width: '400px', 
          height: '400px',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
      </div>

      <Container className="position-relative" style={{zIndex: 10}}>
        <Row className="min-vh-100 align-items-center justify-content-center py-5">
          <Col lg={10} className="text-center">
            
            {/* Trust indicator - minimal */}
            <div className="mb-4">
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill" 
                   style={{
                     background: 'rgba(255, 255, 255, 0.05)',
                     backdropFilter: 'blur(10px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <div className="bg-success rounded-circle" style={{width: '6px', height: '6px'}}></div>
                <span className="text-white fw-medium small">127 blogs criados hoje</span>
              </div>
            </div>

            {/* Giant minimalist headline */}
            <h1 className="text-white fw-bold mb-4" style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Crie blogs lucrativos
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                em 60 segundos Com Apenas 1 Clique
              </span>
            </h1>

            {/* Subtle subtitle */}
            <p className="text-white-50 fs-5 mb-5 mx-auto" style={{maxWidth: '600px'}}>
              IA + Automação + Monetização = Renda passiva no piloto automático
            </p>

            {/* CTAs - Raycast style */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <Button 
                size="lg" 
                className="px-5 py-3 fw-semibold border-0 rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  fontSize: '16px'
                }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar por R$ 97
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="px-5 py-3 fw-semibold rounded-3"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '16px'
                }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como funciona
              </Button>
            </div>

            {/* Trust indicators - minimal */}
            <div className="d-flex flex-wrap justify-content-center gap-4 text-white-50 small">
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:shield-check" className="fs-6" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:users" className="fs-6" />
                <span>500+ usuários</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:zap" className="fs-6" />
                <span>Setup em 60s</span>
              </div>
            </div>

          </Col>
        </Row>
      </Container>

      {/* Glassmorphic dashboard preview - floating */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="position-relative mb-5" style={{marginTop: '-120px', zIndex: 5}}>
              <div 
                className="rounded-4 p-4 mx-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxWidth: '900px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Browser bar */}
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-danger rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    <div className="bg-warning rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    <div className="bg-success rounded-circle" style={{width: '12px', height: '12px'}}></div>
                  </div>
                  <small className="text-white-50 fw-medium">blog-house.app</small>
                  <div style={{width: '60px'}}></div>
                </div>
                
                {/* Dashboard content */}
                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div className="text-center p-3 rounded-3" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                      <div className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                           style={{
                             width: '48px', 
                             height: '48px',
                             background: 'linear-gradient(135deg, #667eea, #764ba2)'
                           }}>
                        <IconifyIcon icon="tabler:article" className="text-white fs-5" />
                      </div>
                      <h4 className="text-white fw-bold mb-1">1.247</h4>
                      <small className="text-white-50">Artigos publicados</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 rounded-3" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                      <div className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                           style={{
                             width: '48px', 
                             height: '48px',
                             background: 'linear-gradient(135deg, #10b981, #059669)'
                           }}>
                        <IconifyIcon icon="tabler:trending-up" className="text-white fs-5" />
                      </div>
                      <h4 className="text-white fw-bold mb-1">127K</h4>
                      <small className="text-white-50">Visitantes/mês</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center p-3 rounded-3" style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                      <div className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                           style={{
                             width: '48px', 
                             height: '48px',
                             background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                           }}>
                        <IconifyIcon icon="tabler:cash" className="text-white fs-5" />
                      </div>
                      <h4 className="text-white fw-bold mb-1">R$ 8.4K</h4>
                      <small className="text-white-50">Receita mensal</small>
                    </div>
                  </div>
                </div>

                {/* AI status */}
                <div className="rounded-3 p-3" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-white small fw-medium">IA escrevendo artigo...</span>
                    <span className="badge rounded-pill" style={{background: 'rgba(16, 185, 129, 0.2)', color: '#10b981'}}>
                      Ativo
                    </span>
                  </div>
                  <div className="progress mb-2" style={{height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <div className="progress-bar" 
                         style={{
                           width: '73%',
                           background: 'linear-gradient(135deg, #667eea, #764ba2)'
                         }}></div>
                  </div>
                  <small className="text-white-50">&ldquo;Melhores Ferramentas de IA para Marketing 2025&rdquo; • 2.1K palavras</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
