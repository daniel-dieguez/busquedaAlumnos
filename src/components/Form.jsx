import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Register from './Register';
import umgImages from '../img/Escudo_de_la_universidad_Mariano_Gálvez_Guatemala.svg.png'
import Image from 'react-bootstrap/Image';


export default function Form() {
  return (
<div>
    //Estructura de Form
      <h1></h1>
    <Container className='mt-5'>
      <Row>
      <Col ms="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Card body>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2>Busqueda de alumnos</h2>
                <Image src={umgImages} roundedCircle style={{ width: '50px', height: '50px' }} />
              </div>
            <hr></hr>
            <Register></Register>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
