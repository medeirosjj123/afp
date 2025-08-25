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
              Por Que <span className="text-danger">CURSOS TRADICIONAIS</span> Não Funcionam?
            </h2>
            <p className="fs-5 text-light mb-5">
              A maioria dos "gurus" vende PDF por R$ 2.000 e te deixa na mão. Vou mostrar 
              por que essa abordagem falha e como nossa <strong className="text-primary">PLATAFORMA</strong> resolve tudo:
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
              <h5 className="text-white mb-3">Te Dão PDF e Dizem "Se Vira"</h5>
              <p className="text-light">
                Cursos tradicionais te ensinam teoria mas <strong className="text-danger">não dão as ferramentas</strong>. 
                Você precisa encontrar hospedagem, instalar WordPress, configurar plugins...
                <strong className="text-primary"> NOSSA PLATAFORMA FAZ TUDO EM 1 CLIQUE!</strong>
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div className="text-center">
              <div className="mb-4">
                <IconifyIcon icon="tabler:x" className="fs-1 text-danger bg-white rounded-circle p-3" />
              </div>
              <h4 className="text-danger fw-bold mb-3">PROBLEMA #2</h4>
              <h5 className="text-white mb-3">Você Fica Perdido e Desiste</h5>
              <p className="text-light">
                Sem plataforma pronta, você gasta <strong className="text-danger">semanas configurando</strong> ao invés de focando nos resultados. 
                90% desiste antes mesmo de publicar o primeiro artigo.
                <strong className="text-primary"> NOSSA IA ESCREVE TUDO PARA VOCÊ!</strong>
              </p>
            </div>
          </Col>
          
          <Col lg={4}>
            <div className="text-center">
              <div className="mb-4">
                <IconifyIcon icon="tabler:x" className="fs-1 text-danger bg-white rounded-circle p-3" />
              </div>
              <h4 className="text-danger fw-bold mb-3">PROBLEMA #3</h4>
              <h5 className="text-white mb-3">Zero Suporte Quando Trava</h5>
              <p className="text-light">
                Quando você trava (e vai travar!), não tem ninguém para ajudar. Fóruns vazios, suporte inexistente.
                <strong className="text-danger">Você fica na mão!</strong>
                <strong className="text-primary"> NOSSA COMUNIDADE TE APOIA 24/7!</strong>
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <div className="bg-primary p-4 rounded">
              <h4 className="text-white fw-bold mb-3">A SOLUÇÃO que Ninguém Te Oferece:</h4>
              <p className="text-white fs-5 mb-0">
                Uma <strong>PLATAFORMA COMPLETA</strong> que faz tudo por você + treinamento + comunidade + suporte.
                Não é curso, é uma máquina de fazer dinheiro pronta para usar!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Problem