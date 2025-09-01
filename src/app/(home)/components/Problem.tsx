import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Problem = () => {
  return (
    <section className="section bg-dark text-white" id="problem">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="text-white fw-bold mb-4">
              Em 2025, <span className="text-danger">Criar Blog Manualmente</span> É Suicídio Financeiro!
            </h2>
            <p className="fs-5 text-light mb-5">
              Enquanto você perde tempo escrevendo 1 artigo por semana, seus concorrentes usam IA para criar 
              <strong className="text-primary"> 100 artigos por dia</strong>. Veja por que você está perdendo a guerra:
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mt-4">
          <Col lg={4}>
            <div className="text-center">
              <div className="mb-4">
                <IconifyIcon icon="tabler:x" className="fs-1 text-danger bg-white rounded-circle p-3" />
              </div>
              <h4 className="text-danger fw-bold mb-3">PROBLEMA #1</h4>
              <h5 className="text-white mb-3">Você Leva 5 Horas Para Escrever 1 Artigo</h5>
              <p className="text-light">
                Enquanto você batalha para escrever 1 artigo por semana, <strong className="text-danger">seus concorrentes criam 100 por dia</strong> 
                com IA. Até você terminar 1 post, eles já dominaram o nicho inteiro.
                <strong className="text-primary"> BLOG HOUSE CRIA 100+ EM 10 MINUTOS!</strong>
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div className="text-center">
              <div className="mb-4">
                <IconifyIcon icon="tabler:x" className="fs-1 text-danger bg-white rounded-circle p-3" />
              </div>
              <h4 className="text-danger fw-bold mb-3">PROBLEMA #2</h4>
              <h5 className="text-white mb-3">Seus Artigos Não Rankeiam no Google</h5>
              <p className="text-light">
                Você escreve sem otimização SEO, sem pesquisa de palavras-chave, sem estrutura. 
                <strong className="text-danger">Google ignora completamente</strong> seus artigos mal otimizados.
                <strong className="text-primary"> BLOG HOUSE IA É EXPERT EM SEO!</strong>
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div className="text-center">
              <div className="mb-4">
                <IconifyIcon icon="tabler:x" className="fs-1 text-danger bg-white rounded-circle p-3" />
              </div>
              <h4 className="text-danger fw-bold mb-3">PROBLEMA #3</h4>
              <h5 className="text-white mb-3">Custos Explodem e Você Não Fatura</h5>
              <p className="text-light">
                Redator: R$ 100/artigo. Desenvolvedor: R$ 5.000. Ferramentas: R$ 500/mês. 
                <strong className="text-danger">Gasta R$ 10.000+ e não vende nada!</strong>
                <strong className="text-primary"> BLOG HOUSE: R$ 97/MÊS FAZ TUDO!</strong>
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col lg={10} className="text-center">
            <div className="bg-primary p-4 rounded">
              <h4 className="text-white fw-bold mb-3">🚀 BLOG HOUSE: A Arma Secreta dos Blogueiros de Sucesso em 2025</h4>
              <p className="text-white fs-5 mb-3">
                Enquanto outros lutam com WordPress, você cria <strong>100 blogs profissionais em 1 dia</strong>.
                Não é curso, não é template - é uma <strong>MÁQUINA DE GUERRA</strong> contra a concorrência!
              </p>
              <div className="row text-center mt-4">
                <div className="col-4">
                  <h5 className="text-white fw-bold mb-1">⚡ 60 SEGUNDOS</h5>
                  <small className="text-light">Blog pronto e online</small>
                </div>
                <div className="col-4">
                  <h5 className="text-white fw-bold mb-1">🤖 IA EXPERT</h5>
                  <small className="text-light">SEO que realmente funciona</small>
                </div>
                <div className="col-4">
                  <h5 className="text-white fw-bold mb-1">💰 R$ 97/MÊS</h5>
                  <small className="text-light">vs R$ 10.000+ fazer manual</small>
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