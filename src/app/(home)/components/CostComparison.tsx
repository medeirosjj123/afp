import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const CostComparison = () => {
  return (
    <section className="py-5" id="cost-comparison" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444'}}
              >
                💰 Comparação de custos
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Quanto custa criar um blog{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                sem Blog House?
              </span>
            </h2>
            <p className="text-white-50 fs-5 mb-0">
              Fizemos as contas: veja o <strong className="text-white">absurdo que você gastaria</strong><br />
              tentando fazer tudo manualmente vs <strong className="text-white">economia brutal</strong> com Blog House
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* MÉTODO MANUAL */}
          <Col lg={6}>
            <div 
              className="h-100 p-4 rounded-4"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              <div className="text-center mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <IconifyIcon icon="tabler:user" className="text-white fs-4" />
                </div>
                <h4 className="text-white fw-bold mb-2">Método Manual</h4>
                <p className="text-white-50 small mb-0">Como 99% das pessoas fazem</p>
              </div>

              <div className="cost-breakdown">
                <div 
                  className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                  style={{background: 'rgba(255, 255, 255, 0.05)'}}
                >
                  <div>
                    <h6 className="text-white fw-semibold mb-1 small">👨‍💻 Desenvolvedor Web</h6>
                    <small className="text-white-50" style={{fontSize: '12px'}}>Criar 1 blog profissional</small>
                  </div>
                  <div className="text-end">
                    <h6 className="text-white fw-bold mb-0">R$ 5.000</h6>
                  </div>
                </div>

                <div 
                  className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                  style={{background: 'rgba(255, 255, 255, 0.05)'}}
                >
                  <div>
                    <h6 className="text-white fw-semibold mb-1 small">✍️ Redator SEO</h6>
                    <small className="text-white-50" style={{fontSize: '12px'}}>40 artigos x R$ 100 cada</small>
                  </div>
                  <div className="text-end">
                    <h6 className="text-white fw-bold mb-0">R$ 4.000</h6>
                    <small className="text-white-50" style={{fontSize: '11px'}}>/mês</small>
                  </div>
                </div>

                <div 
                  className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                  style={{background: 'rgba(255, 255, 255, 0.05)'}}
                >
                  <div>
                    <h6 className="text-white fw-semibold mb-1 small">🔧 Ferramentas SEO</h6>
                    <small className="text-white-50" style={{fontSize: '12px'}}>Ahrefs + SEMrush + outras</small>
                  </div>
                  <div className="text-end">
                    <h6 className="text-white fw-bold mb-0">R$ 800</h6>
                    <small className="text-white-50" style={{fontSize: '11px'}}>/mês</small>
                  </div>
                </div>

                <div 
                  className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-3"
                  style={{background: 'rgba(255, 255, 255, 0.05)'}}
                >
                  <div>
                    <h6 className="text-white fw-semibold mb-1 small">🌐 Hospedagem Premium</h6>
                    <small className="text-white-50" style={{fontSize: '12px'}}>Servidor rápido e confiável</small>
                  </div>
                  <div className="text-end">
                    <h6 className="text-white fw-bold mb-0">R$ 200</h6>
                    <small className="text-white-50" style={{fontSize: '11px'}}>/mês</small>
                  </div>
                </div>

                <div 
                  className="d-flex justify-content-between align-items-center mb-4 p-3 rounded-3"
                  style={{background: 'rgba(255, 255, 255, 0.05)'}}
                >
                  <div>
                    <h6 className="text-white fw-semibold mb-1 small">🎓 Seu tempo</h6>
                    <small className="text-white-50" style={{fontSize: '12px'}}>200h aprendendo e configurando</small>
                  </div>
                  <div className="text-end">
                    <h6 className="text-white fw-bold mb-0">R$ 10.000</h6>
                    <small className="text-white-50" style={{fontSize: '11px'}}>valor/hora R$ 50</small>
                  </div>
                </div>

                <div className="border-top pt-3" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="text-center">
                    <p className="text-white-50 small mb-2">Custo total primeiro mês:</p>
                    <h2 className="text-white fw-bold mb-2" style={{fontSize: '2rem'}}>R$ 20.000</h2>
                    <p className="text-white-50 small mb-3">+ R$ 5.000/mês recorrente</p>
                    <div 
                      className="rounded-3 p-3"
                      style={{background: 'rgba(239, 68, 68, 0.2)'}}
                    >
                      <p className="text-white fw-semibold mb-0 small">
                        😰 E ainda corre o risco de não funcionar!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* BLOG HOUSE */}
          <Col lg={6}>
            <div 
              className="h-100 p-4 rounded-4 position-relative"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}
            >
              <div className="position-absolute top-0 start-50 translate-middle">
                <span className="badge bg-success px-4 py-2 fs-6 fw-bold">🔥 INTELIGENTE</span>
              </div>
              <div className="p-5">
                <div className="text-center mb-4 mt-3">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #10b981, #059669)'
                    }}
                  >
                    <IconifyIcon icon="tabler:robot" className="text-white fs-4" />
                  </div>
                  <h4 className="text-white fw-bold mb-2">BLOG HOUSE 2025</h4>
                  <p className="text-white-50 small mb-0">A forma inteligente de 2025</p>
                </div>

                <div className="plan-options mb-4">
                  <div 
                    className="p-4 mb-3 rounded-4"
                    style={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(102, 126, 234, 0.3)'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-white fw-bold mb-1 small">STARTER</h5>
                        <p className="text-white-50 small mb-0" style={{fontSize: '12px'}}>1 blog + 40 artigos/mês</p>
                      </div>
                      <h3 className="text-white fw-bold">R$ 97</h3>
                    </div>
                  </div>

                  <div 
                    className="p-4 mb-3 rounded-4"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-white fw-bold mb-1 small">PRO</h5>
                        <p className="text-white-50 small mb-0" style={{fontSize: '12px'}}>5 blogs + 100 artigos/mês</p>
                      </div>
                      <h3 className="text-white fw-bold">R$ 297</h3>
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-4"
                    style={{
                      background: 'rgba(251, 191, 36, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(251, 191, 36, 0.3)'
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="text-white fw-bold mb-1 small">BLACK BELT</h5>
                        <p className="text-white-50 small mb-0" style={{fontSize: '12px'}}>Ilimitado + Bulk Mode</p>
                      </div>
                      <h3 className="text-white fw-bold">R$ 166</h3>
                    </div>
                  </div>
                </div>

                <div className="included mb-4">
                  <h6 className="text-white fw-bold mb-3 small">✅ INCLUSO EM TODOS OS PLANOS:</h6>
                  <div className="row small">
                    <div className="col-6">
                      <p className="text-white-50 mb-2 small">✅ IA Criadora</p>
                      <p className="text-white-50 mb-2 small">✅ Blogs Profissionais</p>
                      <p className="text-white-50 mb-2 small">✅ SEO Automático</p>
                    </div>
                    <div className="col-6">
                      <p className="text-white-50 mb-2 small">✅ Monetização</p>
                      <p className="text-white-50 mb-2 small">✅ Suporte</p>
                      <p className="text-white-50 mb-2 small">✅ Atualizações</p>
                    </div>
                  </div>
                </div>

                <div className="border-top pt-3 mb-4" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="text-center">
                    <h6 className="text-white-50 mb-2 small">ECONOMIA MENSAL:</h6>
                    <h1 
                      className="fw-bold mb-2"
                      style={{
                        fontSize: '2rem',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      R$ 4.703
                    </h1>
                    <p className="text-white-50 small mb-3">vs R$ 5.000 método manual (Starter)</p>
                    <div 
                      className="rounded-3 p-3"
                      style={{background: 'rgba(16, 185, 129, 0.2)'}}
                    >
                      <p className="text-white fw-semibold mb-0 small">
                        🚀 Resultado garantido desde o dia 1!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={10}>
            <div 
              className="p-4 rounded-4 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="mb-4">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                  }}
                >
                  <IconifyIcon icon="tabler:calculator" className="text-white fs-4" />
                </div>
                <h4 className="text-white fw-bold mb-0">🧮 RESUMO DA MATEMÁTICA</h4>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div 
                    className="p-4 rounded-4"
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <h6 className="text-white fw-bold mb-2 small">MANUAL (1º MÊS)</h6>
                    <h2 className="text-white fw-bold mb-2">R$ 20.000</h2>
                    <p className="text-white-50 small mb-0">+ R$ 5.000/mês depois</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div 
                    className="p-4 rounded-4"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <h6 className="text-white fw-bold mb-2 small">BLOG HOUSE</h6>
                    <h2 className="text-white fw-bold mb-2">R$ 97</h2>
                    <p className="text-white-50 small mb-0">Starter - tudo incluso</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div 
                    className="p-4 rounded-4"
                    style={{
                      background: 'rgba(251, 191, 36, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(251, 191, 36, 0.3)'
                    }}
                  >
                    <h6 className="text-white fw-bold mb-2 small">VOCÊ ECONOMIZA</h6>
                    <h2 className="text-white fw-bold mb-2">R$ 19.903</h2>
                    <p className="text-white-50 small mb-0">só no primeiro mês!</p>
                  </div>
                </div>
              </div>
              <div 
                className="mt-4 p-4 rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <p className="text-white-50 mb-3">
                  <strong className="text-white">Em 12 meses:</strong> Método manual = R$ 75.000 | Blog House = R$ 1.164
                </p>
                <h4 
                  className="fw-bold mb-0"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  ECONOMIA TOTAL: R$ 73.836!
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CostComparison