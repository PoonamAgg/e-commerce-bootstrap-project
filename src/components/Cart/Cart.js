import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import CartContext from '../store/CartContext'
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const hasItem = cartCtx.cart.length>0;

  return (
    <Modal show={props.showCart} onHide={props.onClose} animation={false}>

      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>

            {cartCtx.cart.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.imageUrl} alt={product.title} style={{ width: '80px' }} />
                </td>
                <td > {product.title}</td>
                <td> ${product.price} </td>
                <td>  {product.quantity} </td>
                <td>
                  <div className={classes.parent}>
                    <Button variant='outline-warning'>-</Button>
                    <Button variant='outline-warning'>+</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>Close</Button>
        <Button variant="secondary">Purchase</Button>
      </Modal.Footer>
    </Modal>


  )
}

export default Cart