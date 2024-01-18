import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.css'
import { faYoutube, faSpotify, facFacebook } from '@fortawesome/fontawesome-free'

const Footer = () => {
  return (
    
    <Container fluid className='d-flex align-items-center justify-content-center bg-primary text-white p-2'>
      <Row>
        <Col className='text-start'>
          <h3>The Generics</h3>
        </Col>

        <Col className='d-flex text-end'>
         
          <p className='p-3'>Youtube</p>
          <p className='p-3'>spotify</p>
          <p className='p-3'>facebook</p>
        </Col>
      </Row>
    </Container>
  
  )
}

export default Footer;