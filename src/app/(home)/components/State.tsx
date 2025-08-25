import { currency } from '@/context/constants'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const State = () => {
  return (
    <section className="py-5 counter-section bg-primary bg-shape">
      <Container>
        <Row className="align-items-center justify-content-between g-3">
          <Col lg={12}>
            <Row className="align-items-center g-4">
              <Col lg={3}>
                <div className="d-flex align-items-center gap-4">
                  <h2 className="fw-bold text-white mb-0"> 230 </h2>
                  <p className="mb-0 text-white f-16">Startups We Have Funded</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-4">
                  <h2 className="fw-bold text-white mb-0"> 7k </h2>
                  <p className="mb-0 text-white f-16">Funded From Skywave Community</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-4">
                  <h2 className="fw-bold text-white mb-0"> {currency}68B </h2>
                  <p className="mb-0 text-white f-16">Our Combined Valuation</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center gap-4">
                  <h2 className="fw-bold text-white mb-0"> 10+ </h2>
                  <p className="mb-0 text-white f-16">Years Of Best Experience</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default State
