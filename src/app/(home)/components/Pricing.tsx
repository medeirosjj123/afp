import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className="py-5" id="pricing" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header - minimal */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(102, 126, 234, 0.2)', color: '#667eea'}}
              >
                💳 Planos Blog House 2025
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Escolha seu arsenal
            </h2>
            <p className="text-white-50 fs-5 mb-0">
               Garantia de 7 dias • Cancele quando quiser
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {/* STARTER PLAN */}
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Header */}
              <div className="text-center mb-4">
                <div className="mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)'
                    }}
                  >
                    <IconifyIcon icon="tabler:rocket" className="text-white fs-4" />
                  </div>
                </div>
                <h4 className="text-white fw-bold mb-1">Starter</h4>
                <p className="text-white-50 small mb-0">Perfeito para começar</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-4">
                <h1 className="text-white fw-bold mb-1" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                  R$ 97
                </h1>
                <p className="text-white-50 small mb-0">/mês</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">1 blog</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">40 artigos/reviews por mês</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">IA otimizada para SEO</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Monetização automática</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.1)'}}>
                    <IconifyIcon icon="tabler:x" className="text-white-50" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white-50 small">Criação em Massa</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                className="w-100 py-2 fw-semibold border-0 rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  fontSize: '14px'
                }}
                href="https://pay.kiwify.com.br/OuiK7qL"
                target="_blank"
                rel="noopener noreferrer"
                as="a"
              >
                Começar por R$ 97
              </Button>
            </div>
          </Col>

          {/* PRO PLAN */}
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >

              {/* Header */}
              <div className="text-center mb-4 mt-2">
                <div className="mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #10b981, #059669)'
                    }}
                  >
                    <IconifyIcon icon="tabler:zap" className="text-white fs-4" />
                  </div>
                </div>
                <h4 className="text-white fw-bold mb-1">Pro</h4>
                <p className="text-white-50 small mb-0">Para múltiplos nichos</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-4">
                <h1 className="text-white fw-bold mb-1" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                  R$ 297
                </h1>
                <p className="text-white-50 small mb-0">/mês</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">5 blogs</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">100 artigos/reviews por mês</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">IA avançada para SEO</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#10b981'}}>
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Monetização multi-nicho</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: 'rgba(255, 255, 255, 0.1)'}}>
                    <IconifyIcon icon="tabler:x" className="text-white-50" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white-50 small">Criação em Massa</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                className="w-100 py-2 fw-semibold border-0 rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  fontSize: '14px'
                }}
                href="https://pay.kiwify.com.br/XiRxVyi"
                target="_blank"
                rel="noopener noreferrer"
                as="a"
              >
                Quero 5 Blogs por R$ 297
              </Button>
            </div>
          </Col>

          {/* BLACK BELT PLAN */}
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'rgba(251, 191, 36, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Most popular badge */}
              <div className="position-absolute" style={{top: '-8px', right: '20px'}}>
                <span 
                  className="badge rounded-pill px-3 py-1 fw-semibold"
                  style={{background: '#f59e0b', color: 'white', fontSize: '11px'}}
                >
                  🔥 Mais vendido
                </span>
              </div>

              {/* Header */}
              <div className="text-center mb-4 mt-2">
                <div className="mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                    }}
                  >
                    <IconifyIcon icon="tabler:bolt" className="text-white fs-4" />
                  </div>
                </div>
                <h4 className="text-white fw-bold mb-1">Black Belt</h4>
                <p className="text-white-50 small mb-0">O arsenal completo</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-4">
                <p className="text-white-50 small mb-1 text-decoration-line-through">R$ 3.564/ano</p>
                <h1 className="text-white fw-bold mb-1" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                  R$ 1.997
                </h1>
                <p className="text-white-50 small mb-0">/ano (R$ 206/mês)</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#f59e0b'}}>
                    <IconifyIcon icon="tabler:infinity" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Sites e blogs ILIMITADOS</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#f59e0b'}}>
                    <IconifyIcon icon="tabler:infinity" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Artigos ILIMITADOS</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#f59e0b'}}>
                    <IconifyIcon icon="tabler:bolt" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small fw-semibold">CRIAÇÃO EM MASSA: 100+ reviews</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#f59e0b'}}>
                    <IconifyIcon icon="tabler:users" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Comunidade WhatsApp VIP</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle me-2 d-flex align-items-center justify-content-center" style={{width: '16px', height: '16px', background: '#f59e0b'}}>
                    <IconifyIcon icon="tabler:video" className="text-white" style={{fontSize: '10px'}} />
                  </div>
                  <span className="text-white small">Mentoria semanal ao vivo</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                className="w-100 py-2 fw-semibold border-0 rounded-3"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  fontSize: '14px'
                }}
                href="https://pay.kiwify.com.br/5TkGis8"
                target="_blank"
                rel="noopener noreferrer"
                as="a"
              >
                🔥 Ativar Criação em Massa + Mentoria
              </Button>
            </div>
          </Col>
        </Row>

        {/* Scarcity notice */}
        <Row className="justify-content-center mt-5">
          <Col lg={10} className="text-center">
            <div 
              className="rounded-4 p-4"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <h5 className="text-white fw-bold mb-2">⚠️ Black Belt: Apenas 50 vagas disponíveis!</h5>
              <p className="text-white-50 mb-2">
                Por quê? A mentoria é ao vivo e personalizada. <strong className="text-white">23 vagas já preenchidas</strong>
              </p>
              <p className="text-white-50 mb-0 small">
             
              </p>
            </div>
          </Col>
        </Row>

        {/* Guarantee notice */}
        <Row className="justify-content-center mt-4">
          <Col lg={8} className="text-center">
            <div className="d-flex justify-content-center align-items-center gap-4 text-white-50 small">
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:shield-check" className="fs-6 text-success" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:lock" className="fs-6 text-success" />
                <span>Pagamento seguro</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="tabler:x" className="fs-6 text-success" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
