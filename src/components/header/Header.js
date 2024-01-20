import React, {useContext} from 'react'
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { productsArr } from '../utils/MockData';
import Cart from '../Cart/Cart';
import Footer from '../Footer';
import CartContext from '../store/CartContext';
import { Link, NavLink } from 'react-router-dom';


const Header = (props) => {

 const cartCtx = useContext(CartContext);
  
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
          <NavLink to="/About" eventKey="link-2">ABOUT</NavLink>
        </Nav.Item>
        <Nav.Item className='ms-auto'>
          <Button variant="warning" onClick={props.showCartHandler} >CART:{cartCtx.cart.length}</Button>
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
                  <button className="btn btn-primary" onClick={cartCtx.addItems.bind(null, product)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container fluid className='d-flex align-items-center justify-content-center bg-white text-black p-5'>
        <Button variant="secondary">See the Cart</Button>
      </Container>
<Footer/>      


    </>
  )
}

export default Header;