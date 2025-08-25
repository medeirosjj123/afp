'use client'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ActionBox2 = () => {
  return (
    <section className="section-sm bg-danger text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <div className="bg-white text-dark rounded p-5">
              <h2 className="fw-bold mb-4 text-danger">
                🚨 ÚLTIMAS VAGAS - PLATAFORMA COM 95% OFF!
              </h2>
              <p className="fs-4 mb-4">
                <strong>Esta é sua última chance!</strong> Nossa plataforma completa por apenas R$ 1.997. 
                Próximo lote volta para R$ 2.997. <strong className="text-danger">Não perca!</strong>
              </p>
              <div className="row justify-content-center mb-4">
                <div className="col-md-3 text-center mb-3">
                  <h3 className="text-primary fw-bold">R$ 1.997</h3>
                  <small className="text-muted">Em vez de R$ 43.788</small>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <h3 className="text-success fw-bold">PLATAFORMA</h3>
                  <small className="text-muted">Completa + Treinamento</small>
                </div>
                <div className="col-md-3 text-center mb-3">
                  <h3 className="text-warning fw-bold">12 MESES</h3>
                  <small className="text-muted">Acesso completo</small>
                </div>
              </div>
              <Button 
                variant="danger" 
                size="lg" 
                className="px-5 py-4 fw-bold fs-3 pulse-animation"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 SIM! QUERO MINHA PLATAFORMA COM 95% OFF!
              </Button>
              <p className="mt-4 text-danger fw-bold">
                ⚠️ ATENÇÃO: Apenas 17 vagas restantes neste lote promocional!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox2
