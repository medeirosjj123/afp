import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <section className="py-5" id="testimonial" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(102, 126, 234, 0.2)', color: '#667eea'}}
              >
                🔓 Segredo #2
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              IA especialista em{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                reviews que convertem
              </span>
            </h2>
            <p className="text-white-50 fs-5 mb-4">
              Enquanto outros gastam <strong className="text-white">HORAS</strong> criando um review,<br />
              nossa IA especializada cria reviews completos que <strong className="text-white">realmente vendem</strong>
            </p>
          </Col>
        </Row>

        {/* Reviews Demo Grid */}
        <Row className="g-4">
          <Col lg={6}>
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <IconifyIcon icon="tabler:device-mobile" className="text-white fs-4" />
                </div>
                <h5 className="text-white fw-bold mb-2">Reviews de Produtos</h5>
                <p className="text-white-50 small mb-3">
                  IA analisa especificações técnicas, cria prós e contras automaticamente, 
                  gera comparações com concorrentes
                </p>
                <div className="bg-success bg-opacity-10 rounded p-2 mb-2">
                  <p className="text-white small mb-0">✓ iPhone 15 vs Samsung Galaxy S24</p>
                </div>
                <div className="bg-success bg-opacity-10 rounded p-2">
                  <p className="text-white small mb-0">✓ 2.847 palavras em 90 segundos</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  <IconifyIcon icon="tabler:tools" className="text-white fs-4" />
                </div>
                <h5 className="text-white fw-bold mb-2">Reviews de Serviços</h5>
                <p className="text-white-50 small mb-3">
                  Avaliação detalhada de features, análise de custo-benefício, 
                  recomendações personalizadas
                </p>
                <div className="bg-success bg-opacity-10 rounded p-2 mb-2">
                  <p className="text-white small mb-0">✓ Canva vs Adobe Creative Suite</p>
                </div>
                <div className="bg-success bg-opacity-10 rounded p-2">
                  <p className="text-white small mb-0">✓ Score SEO: 98% otimizado</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                  }}
                >
                  <IconifyIcon icon="tabler:cash" className="text-white fs-4" />
                </div>
                <h5 className="text-white fw-bold mb-2">Reviews de Afiliados</h5>
                <p className="text-white-50 small mb-3">
                  Otimizado para conversão, CTAs estratégicos, 
                  links de afiliado automatizados
                </p>
                <div className="bg-success bg-opacity-10 rounded p-2 mb-2">
                  <p className="text-white small mb-0">✓ Taxa de conversão: +340%</p>
                </div>
                <div className="bg-success bg-opacity-10 rounded p-2">
                  <p className="text-white small mb-0">✓ Links automáticos Amazon/Hotmart</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div 
              className="p-4 rounded-4 h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)'
                  }}
                >
                  <IconifyIcon icon="tabler:chart-line" className="text-white fs-4" />
                </div>
                <h5 className="text-white fw-bold mb-2">Métricas de Performance</h5>
                <p className="text-white-50 small mb-3">
                  Cada review sai otimizado, pronto para ranquear 
                  e converter desde o primeiro dia
                </p>
                <div className="bg-success bg-opacity-10 rounded p-2 mb-2">
                  <p className="text-white small mb-0">✓ 2.000+ palavras por review</p>
                </div>
                <div className="bg-success bg-opacity-10 rounded p-2">
                  <p className="text-white small mb-0">✓ Tempo médio: 2 minutos</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Video Demo Section */}
        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div 
              className="p-4 rounded-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="mb-3">
                    <div 
                      className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)'
                      }}
                    >
                      <IconifyIcon icon="tabler:robot" className="text-white fs-4" />
                    </div>
                  </div>
                  <h4 className="text-white fw-bold mb-3">🎬 Vídeo: IA criando review completo</h4>
                  <p className="text-white-50 mb-0">
                    Assista nossa IA escrever um review completo de 2.000+ palavras, 
                    otimizado para SEO e conversão, em menos de 2 minutos!
                  </p>
                </div>
                <div className="col-lg-6">
                  <div 
                    className="rounded-4 overflow-hidden"
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

export default Testimonial
