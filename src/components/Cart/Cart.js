import React, { useContext } from 'react'
import { cartElements } from '../utils/MockData'
import { Modal } from 'react-bootstrap'
import CartContext from '../store/CartContext'

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    // const hasItem = cartCtx.cart.length>0;
    
  return (
   <Modal show = {props.showCart} onHide = {props.onClose}>
 <div className='container '>
        <h3 className='text-start'>Cart</h3>
        <button className = 'text-end' onClick={props.onClose}>X</button>
        <hr/>
        <div className='d-flex p-2 m-1'>
            <h6>ITEM  ------  PRICE  ------  QUANTITY</h6>
            </div>
        {cartCtx.cart.map((product, index) => (
          <div key={index} >
            
            <div className='d-flex p-5 m-2'>
              <img src={product.imageUrl} alt={product.title} style={{ width: '25%', height: '100px' }} />
              <h6>${product.price}</h6>
              <h6>{product.quantity}</h6>
              </div>
              <button>-</button>
              <button>+</button>
              <hr/>
            </div>
          
        ))}
      
      </div>
      <h3>Total Amount: ${}</h3>
      {<button className="btn btn-primary m-2">Purchase</button>}
      </Modal>
  )
}

export default Cart