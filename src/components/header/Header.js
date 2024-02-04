import React, {useContext} from 'react'
import { Button, Nav, Row , Col} from 'react-bootstrap';
import CartContext from '../store/CartContext';
import { NavLink } from 'react-router-dom';


const Header = (props) => {

 const cartCtx = useContext(CartContext);
  
  return (
    <>
    <Nav className="bg-dark text-light p-2 d-flex justify-content-center" activeKey="/home">
  <Nav.Item>
    <NavLink to="/">HOME</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink to="/store">STORE</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink to="/About" eventKey="link-2">
      ABOUT
    </NavLink>
    <NavLink to="/contact">
      CONTACT-US
    </NavLink>
  </Nav.Item>
  <Nav.Item className="ms-auto">
    <Button variant="warning" onClick={props.showCartHandler}>
      CART:{cartCtx.cart.length}
    </Button>
  </Nav.Item>
</Nav>
      
      
     


    </>
  )
}

export default Header;


