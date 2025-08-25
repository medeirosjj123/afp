import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="section-sm bg-dark bg-shape">
      <Container>
        <Row className="justify-content-center">
          <Col md={9}>
            <div className="cta-content text-white mb-3">
              <h4 className="mb-0 mt-2">Trusted by over 10,000 global businesses. Try Skywave today!</h4>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-lg-end">
              <Button variant="primary">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
