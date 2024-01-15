import React from 'react'
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.css'
import { faYoutube, faSpotify, facFacebook } from '@fortawesome/fontawesome-free'

import Card from 'react-bootstrap/Card';
import {productsArr} from '../utils/MockData';

const Header = () => {

  console.log(productsArr)

  return (
    <>
      <Nav className="justify-content-center bg-dark text-light p-2" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">STORE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item className='ms-auto'>
          <Button variant="warning">CART:{0}</Button>
        </Nav.Item>
      </Nav>
      <Container fluid className='d-flex align-items-center justify-content-center bg-secondary text-dark p-5'>
        <Row>
          <Col className="text-center font-weight-bold"><h1>THE GENERICS</h1></Col>
        </Row>
      </Container>
      <Container fluid className='d-flex align-items-center justify-content-center bg-white text-black p-4'>
        <Row>
          <Col className="text-center font-weight-bold"><h2>Music</h2></Col>
        </Row>
      </Container>
      <div className="container">
  <div className="row justify-content-center">
    {productsArr.map((product, index) => (
      <div key={index} className="col-md-6 col-lg-4 mb-4">
        <div className="card" style={{ width: '100%' }}>
          <h5 className="card-title text-center">{product.title}</h5>
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.title}
            style={{ width: '100%', height: '300px' }}
          />
          <div className="card-body">
            <p className="card-text text-start">Price: ${product.price}</p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      <Container fluid className='d-flex align-items-center justify-content-center bg-white text-black p-5'>
        <Button variant="secondary">See the Cart</Button>
      </Container>

      <footer >
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
      </footer>


    </>
  )
}

export default Header;