import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Problem = () => {
  return (
    <section className="py-5" id="problem" style={{background: '#0a0a0a'}}>
      <Container>
        {/* Section header - minimal */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <div className="mb-3">
              <span 
                className="badge rounded-pill px-3 py-2"
                style={{background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444'}}
              >
                🚨 Problema urgente
              </span>
            </div>
            <h2 className="text-white fw-bold mb-3" style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}>
              Em 2025, criar blog manualmente é 
              <span style={{
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {' '}suicídio financeiro
              </span>
            </h2>
            <p className="text-white-50 fs-5 mb-0">
              Enquanto você perde tempo escrevendo 1 artigo por semana, seus concorrentes usam IA para criar{' '}
              <strong className="text-white">100 artigos por dia</strong>
            </p>
          </Col>
        </Row>
        
        {/* Problems Grid */}
        <Row className="g-4">
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden text-center"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              {/* Icon with gradient */}
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <IconifyIcon icon="tabler:clock" className="text-white fs-4" />
                </div>
              </div>
              
              {/* Title */}
              <h4 className="text-white fw-bold mb-2" style={{fontSize: '16px'}}>
                Problema #1
              </h4>
              <h5 className="text-white fw-semibold mb-3" style={{fontSize: '18px'}}>
                Você leva 5 horas para escrever 1 artigo
              </h5>
              
              {/* Description */}
              <p className="text-white-50 mb-0 small">
                Enquanto você batalha para escrever 1 artigo por semana,{' '}
                <strong className="text-white">seus concorrentes criam 100 por dia</strong> com IA. 
                Até você terminar 1 post, eles já dominaram o nicho inteiro.
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden text-center"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              {/* Icon with gradient */}
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <IconifyIcon icon="tabler:search-off" className="text-white fs-4" />
                </div>
              </div>
              
              {/* Title */}
              <h4 className="text-white fw-bold mb-2" style={{fontSize: '16px'}}>
                Problema #2
              </h4>
              <h5 className="text-white fw-semibold mb-3" style={{fontSize: '18px'}}>
                Seus artigos não rankeiam no Google
              </h5>
              
              {/* Description */}
              <p className="text-white-50 mb-0 small">
                Você escreve sem otimização SEO, sem pesquisa de palavras-chave, sem estrutura.{' '}
                <strong className="text-white">Google ignora completamente</strong> seus artigos mal otimizados.
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div 
              className="h-100 p-4 rounded-4 position-relative overflow-hidden text-center"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              {/* Icon with gradient */}
              <div className="mb-3">
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <IconifyIcon icon="tabler:cash-off" className="text-white fs-4" />
                </div>
              </div>
              
              {/* Title */}
              <h4 className="text-white fw-bold mb-2" style={{fontSize: '16px'}}>
                Problema #3
              </h4>
              <h5 className="text-white fw-semibold mb-3" style={{fontSize: '18px'}}>
                Custos explodem e você não fatura
              </h5>
              
              {/* Description */}
              <p className="text-white-50 mb-0 small">
                Redator: R$ 100/artigo. Desenvolvedor: R$ 5.000. Ferramentas: R$ 500/mês.{' '}
                <strong className="text-white">Gasta R$ 10.000+ e não vende nada!</strong>
              </p>
            </div>
          </Col>
        </Row>
        
        {/* Solution preview */}
        <Row className="justify-content-center mt-5">
          <Col lg={10} className="text-center">
            <div 
              className="rounded-4 p-4"
              style={{
                background: 'rgba(102, 126, 234, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(102, 126, 234, 0.3)'
              }}
            >
              <h4 className="text-white fw-bold mb-3">🚀 Blog House: A arma secreta dos blogueiros de sucesso</h4>
              <p className="text-white-50 fs-5 mb-4">
                Enquanto outros lutam com WordPress, você cria{' '}
                <strong className="text-white">100 blogs profissionais em 1 dia</strong>.<br />
                Não é curso, não é template - é uma <strong className="text-white">máquina de guerra</strong> contra a concorrência!
              </p>
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h5 className="text-white fw-bold mb-1">⚡ 60 segundos</h5>
                    <small className="text-white-50">Blog pronto e online</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h5 className="text-white fw-bold mb-1">🤖 IA Expert</h5>
                    <small className="text-white-50">SEO que realmente funciona</small>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h5 className="text-white fw-bold mb-1" style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      R$ 97/mês
                    </h5>
                    <small className="text-white-50">vs R$ 10.000+ fazer manual</small>
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

export default Problem