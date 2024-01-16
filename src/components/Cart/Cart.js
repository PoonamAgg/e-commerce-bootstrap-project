import React from 'react'
import { cartElements } from '../utils/MockData'
import { Modal } from 'react-bootstrap'

const Cart = (props) => {
  return (
   <Modal show = {props.showCart} onHide = {props.onClose}>
 <div className='container'>
        <h3 className='text-center'>Cart</h3>
        {cartElements.map((product, index) => (
          <div key={index}>
            <h5>ITEM</h5>
            <hr />
            <h5>PRICE</h5>
            <hr />
            <h5>QUANTITY</h5>
            <hr />
            <div>
              <img src={product.imageUrl} alt={product.title} />
              <h6>{product.price}</h6>
              <h6>{product.quantity}</h6>
              <button className="btn btn-primary">Remove</button>
            </div>
          </div>
        ))}
      </div>
      </Modal>
  )
}

export default Cart