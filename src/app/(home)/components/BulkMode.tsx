'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const BulkMode = () => {
  return (
    <section className="py-5" id="bulk-mode" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(251, 191, 36, 0.2)', color: '#f59e0b'}}
              >
                🔥 Exclusivo Black Belt
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Criação em Massa: Crie{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                100+ reviews
              </span>
              {' '}de uma vez
            </h2>
            <p className="text-white-50 fs-5 mb-0">
              Enquanto outros levam <strong className="text-white">6 meses</strong> para criar 100 reviews,<br />
              você faz isso em <strong className="text-white">10 minutos</strong> com a Criação em Massa exclusiva
            </p>
          </Col>
        </Row>

        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <div 
              className="p-4 rounded-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                  }}
                >
                  <IconifyIcon icon="tabler:bolt" className="text-white fs-4" />
                </div>
                <h4 className="text-white fw-bold mb-3">Como funciona a Criação em Massa?</h4>
              </div>

              <div className="steps">
                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                    style={{minWidth: '32px', height: '32px', background: '#f59e0b'}}
                  >
                    1
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Escolha o nicho</h6>
                    <p className="text-white-50 mb-0" style={{fontSize: '13px'}}>
                      Fitness, tecnologia, receitas... qualquer nicho que quiser dominar
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                    style={{minWidth: '32px', height: '32px', background: '#f59e0b'}}
                  >
                    2
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Configure quantidade</h6>
                    <p className="text-white-50 mb-0" style={{fontSize: '13px'}}>
                      50, 100, 200... quantos reviews quiser criar de uma vez
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center text-dark fw-bold"
                    style={{minWidth: '32px', height: '32px', background: '#f59e0b'}}
                  >
                    3
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Aperte 1 botão</h6>
                    <p className="text-white-50 mb-0" style={{fontSize: '13px'}}>
                      Nossa IA cria todos os reviews otimizados automaticamente
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                    style={{minWidth: '32px', height: '32px', background: '#10b981'}}
                  >
                    <IconifyIcon icon="tabler:check" className="text-white" style={{fontSize: '14px'}} />
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Pronto! 6 meses de reviews</h6>
                    <p className="text-white-50 mb-0" style={{fontSize: '13px'}}>
                      Você já tem reviews para o ano inteiro, otimizados e prontos para converter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div>
              <h5 className="text-white fw-bold mb-4 text-center">⏱️ Comparação de tempo</h5>
              
              {/* Manual Method */}
              <div 
                className="p-3 rounded-4 mb-4"
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                    }}
                  >
                    <IconifyIcon icon="tabler:user" className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Método manual</h6>
                    <p className="text-white-50 small mb-0" style={{fontSize: '12px'}}>Como 99% das pessoas fazem</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">6 meses</h3>
                  <p className="text-white-50 small mb-0">Para criar 100 reviews de qualidade</p>
                </div>
              </div>

              <div className="text-center my-3">
                <span className="text-white fw-bold">VS</span>
              </div>

              {/* Bulk Mode */}
              <div 
                className="p-3 rounded-4 mb-4"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #10b981, #059669)'
                    }}
                  >
                    <IconifyIcon icon="tabler:robot" className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white fw-bold mb-1 small">Criação em Massa Blog House</h6>
                    <p className="text-white-50 small mb-0" style={{fontSize: '12px'}}>Exclusivo Black Belt</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white fw-bold mb-1">10 minutos</h3>
                  <p className="text-white-50 small mb-0">Para criar 100+ reviews otimizados</p>
                </div>
              </div>

              {/* Economy */}
              <div 
                className="text-center p-3 rounded-4"
                style={{
                  background: 'rgba(251, 191, 36, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(251, 191, 36, 0.3)'
                }}
              >
                <p className="text-white fw-bold mb-0 small">💰 Economia: R$ 10.000+ em redatores!</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Success Cases */}
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
              <h5 className="text-white fw-bold mb-4 text-center">🎯 Casos reais de sucesso</h5>
              <div className="row g-3">
                <div className="col-md-4 text-center">
                  <div 
                    className="p-3 rounded-3"
                    style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    <h6 className="text-white fw-bold small">João - Fitness</h6>
                    <p className="text-white-50 small mb-2">500 reviews em 1 dia</p>
                    <p className="text-white fw-semibold small mb-0" style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Dominou o nicho
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div 
                    className="p-3 rounded-3"
                    style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    <h6 className="text-white fw-bold small">Maria - Receitas</h6>
                    <p className="text-white-50 small mb-2">300 reviews em 30min</p>
                    <p className="text-white fw-semibold small mb-0" style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      R$ 8.500/mês
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div 
                    className="p-3 rounded-3"
                    style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    <h6 className="text-white fw-bold small">Carlos - Tech</h6>
                    <p className="text-white-50 small mb-2">200 reviews em 15min</p>
                    <p className="text-white fw-semibold small mb-0" style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      R$ 12.000/mês
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* CTA */}
        <Row className="justify-content-center mt-5">
          <Col lg={6} className="text-center">
            <Button 
              className="px-5 py-3 fw-semibold border-0 rounded-3 mb-3"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: 'white',
                fontSize: '16px'
              }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔥 Quero a Criação em Massa agora!
            </Button>
            <p className="text-white-50 small mb-0">
              <IconifyIcon icon="tabler:alert-triangle" className="me-1" style={{color: '#f59e0b'}} />
              Disponível apenas no plano Black Belt • 27 vagas restantes
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BulkMode