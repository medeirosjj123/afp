import Image from 'next/image'
import React from 'react'
import brunoImage from '@/assets/images/bruno-medeiros.jpeg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className="section pb-lg-0" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="img-part">
              <Image src={brunoImage} alt="Bruno Medeiros - Expert em SEO" className="img-fluid rounded shadow-lg" />
            </div>
          </Col>
          <Col lg={6}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Minha História </span>
            </p>
            <h3 className="lh-base">Como Trouxe a Tecnologia de SEO da Ásia para o Brasil</h3>
            <p className="text-muted mb-4">
              <strong>Meu nome é Bruno Medeiros</strong> e há 15 anos trabalho com SEO. Há 8 anos moro na Tailândia - 
              a capital mundial do SEO, onde os melhores especialistas do planeta se encontram.
            </p>
            <p className="text-muted mb-4">
              Aqui descobri que enquanto brasileiros aprendem TEORIA em cursos, o mercado internacional usam PLATAFORMAS que fazem tudo 
              automaticamente. Blogs criados em minutos, ranqueando em horas. O Brasil está 5 anos atrasado.
            </p>
            <p className="text-muted mb-4">
              Passei 6 meses desenvolvendo a primeira plataforma brasileira com essa tecnologia. Cada linha de código tem 
              <strong className="text-primary"> 15 anos de experiência internacional embutida!</strong>
            </p>
            <div className="bg-light border-start border-primary border-4 p-4 mb-4">
              <p className="mb-3 fw-bold text-primary">Agora você tem acesso...</p>
              <p className="text-muted mb-0">
                Agora você também pode ter acesso às mesmas ferramentas que os TOP SEOs do mundo usam. 
                Tecnologia que custaria US$ 50.000 lá fora, por preço que cabe no bolso do brasileiro!
              </p>
            </div>
            <div className="user-detail border-start border-success mt-4 ps-4">
              <p className="fs-6 text-success fw-bold mb-2">
                🌏 Experiência Internacional:
              </p>
              <p className="fs-6 text-muted mb-1">✅ 15 anos de experiência em SEO mundial</p>
              <p className="fs-6 text-muted mb-1">✅ 500+ sites ranqueados internacionalmente</p>
              <p className="fs-6 text-muted mb-3">✅ Baseado na Tailândia há 8 anos</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs