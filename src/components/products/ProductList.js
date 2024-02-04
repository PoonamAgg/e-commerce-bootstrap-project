import React, {useContext} from 'react'
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import ProductContext from '../store/ProductContext';
import CartContext from '../store/CartContext';

const ProductList = () => {
    const productCtx = useContext(ProductContext);
    const cartCtx = useContext(CartContext);
    
   return (
    <>
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
          {productCtx.productsArr.map((product, index) => (
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
      </>
  )
}

export default ProductList