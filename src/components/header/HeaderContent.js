import React, {useContext} from 'react'
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../store/CartContext';
import { NavLink } from 'react-router-dom';

const HeaderContent = (props) => {
    const cartCtx = useContext(CartContext);
  return (
    <div><Nav className="justify-content-center bg-dark text-light p-2" activeKey="/home">
    <Nav.Item>
      <NavLink to = '/Index'>HOME</NavLink>
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
  </Nav></div>
  )
}

export default HeaderContent