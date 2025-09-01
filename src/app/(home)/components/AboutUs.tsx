import Image from 'next/image'
import React from 'react'
import brunoImage from '@/assets/images/bruno-medeiros.jpeg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="py-5" id="about" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(102, 126, 234, 0.2)', color: '#667eea'}}
              >
                👤 Minha história
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Como trouxe a tecnologia de SEO da{' '}
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Ásia para o Brasil
              </span>
            </h2>
          </Col>
        </Row>
        
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <div 
              className="position-relative rounded-4 overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px'
              }}
            >
              <Image src={brunoImage} alt="Bruno Medeiros - Expert em SEO" className="img-fluid rounded-3 w-100" />
            </div>
          </Col>
          <Col lg={7}>
            {/* Story intro */}
            <div 
              className="p-4 rounded-4 mb-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <p className="text-white-50 mb-0">
                <strong className="text-white">Meu nome é Bruno Medeiros</strong> e há 15 anos trabalho com SEO. 
                Há 8 anos moro na Tailândia - a capital mundial do SEO, onde os melhores especialistas do planeta se encontram.
              </p>
            </div>

            {/* Timeline */}
            <div className="timeline-container">
              {/* Timeline item 1 */}
              <div 
                className="d-flex gap-3 mb-4"
                style={{position: 'relative'}}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <IconifyIcon icon="tabler:world" className="text-white" />
                </div>
                <div 
                  className="flex-grow-1 p-3 rounded-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h6 className="text-white fw-semibold mb-2">Descoberta na Ásia</h6>
                  <p className="text-white-50 mb-0 small">
                    Descobri que enquanto brasileiros aprendem TEORIA, o mercado internacional usa PLATAFORMAS 
                    que fazem tudo automaticamente. Blogs criados em minutos, ranqueando em horas.
                  </p>
                </div>
              </div>

              {/* Timeline item 2 */}
              <div 
                className="d-flex gap-3 mb-4"
                style={{position: 'relative'}}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <IconifyIcon icon="tabler:code" className="text-white" />
                </div>
                <div 
                  className="flex-grow-1 p-3 rounded-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h6 className="text-white fw-semibold mb-2">6 meses de desenvolvimento</h6>
                  <p className="text-white-50 mb-0 small">
                    Passei 6 meses desenvolvendo a primeira plataforma brasileira com essa tecnologia. 
                    Cada linha de código tem <strong className="text-white">15 anos de experiência internacional</strong> embutida!
                  </p>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className="d-flex gap-3 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <IconifyIcon icon="tabler:rocket" className="text-white" />
                </div>
                <div 
                  className="flex-grow-1 p-3 rounded-4"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <h6 className="text-white fw-semibold mb-2">Blog House nasce</h6>
                  <p className="text-white-50 mb-0 small">
                    Agora você tem acesso às mesmas ferramentas que os TOP SEOs do mundo usam. 
                    Tecnologia que custaria <strong className="text-white">US$ 50.000 lá fora</strong>, 
                    por preço que cabe no bolso do brasileiro!
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div 
              className="row g-3 mt-4"
            >
              <div className="col-6">
                <div 
                  className="text-center p-3 rounded-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white fw-bold mb-1">15 anos</h4>
                  <small className="text-white-50">Experiência SEO</small>
                </div>
              </div>
              <div className="col-6">
                <div 
                  className="text-center p-3 rounded-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 className="text-white fw-bold mb-1">500+</h4>
                  <small className="text-white-50">Sites ranqueados</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs