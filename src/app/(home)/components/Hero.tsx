'use client'
import Image from 'next/image'
import React from 'react'
import google from '@/assets/images/google.png'
import linkedin from '@/assets/images/linkedin.png'
import hero1 from '@/assets/images/hero1.webp'
import userImg from '@/assets/images/user-msg.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-home-2 pb-0" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col lg={6}>
                <div>
                  <div className="bg-primary text-white px-3 py-2 rounded d-inline-block mb-3">
                    <h6 className="mb-0 fw-bold">🔥 BLOG HOUSE 2025</h6>
                  </div>
                  <h1 className="text-dark display-4 fw-bold lh-base">
                    Blog House: <span className="text-primary">Crie Blogs Lucrativos</span> Com 1 Clique em 2025
                  </h1>
                  <h3 className="mt-4 text-muted fw-medium">
                    A Única Plataforma Com IA Que Gera Artigos SEO Que Convertem • De R$ 97 a R$ 1.997
                  </h3>
                  <p className="mt-3 text-dark fw-bold fs-5">
                    ✅ Blog completo criado em 60 segundos<br/>
                    ✅ IA gera artigos SEO que convertem<br/>  
                    ✅ Monetização automática configurada<br/>
                    ✅ BULK MODE: 100+ artigos de uma vez (Black Belt)
                  </p>
                  <div className="d-flex align-items-center justify-content-start mt-4 gap-4">
                    <div className="text-center">
                      <h4 className="text-primary fw-bold m-0">R$ 97</h4>
                      <p className="mt-1 mb-0 text-muted small">Starter</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-success fw-bold m-0">R$ 297</h4>
                      <p className="mt-1 mb-0 text-muted small">Pro</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-danger fw-bold m-0">R$ 166/MÊS</h4>
                      <p className="mt-1 mb-0 text-muted small">Black Belt</p>
                    </div>
                  </div>
                  <div className="main-btn mt-5 text-center">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="px-5 py-3 fw-bold fs-5"
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      🔥 VER PLANOS E COMEÇAR AGORA!
                    </Button>
                    <p className="mt-3 text-muted small">
                      <IconifyIcon icon="tabler:shield-check" className="me-1 text-success" />
                      Garantia de 7 Dias • Sem Teste Grátis Porque Já Funciona • 500+ Usuários
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="main-top-img text-center">
                  <Image src={hero1} alt="Blog Lucrativo com IA" className="img-fluid rounded shadow-lg" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Hero
