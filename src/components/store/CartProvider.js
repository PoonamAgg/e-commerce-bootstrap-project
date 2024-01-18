import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
const [cart, setCart]  = useState([]);

const addItems = (newItem) =>{
   const existingItemIndex = cart.findIndex((item) =>item.productId === newItem.productId)
   const existingItem = cart[existingItemIndex];
   let updatedCart;
   if(existingItem)
   {
      const updatedItem = {
         ...existingItem, quantity:existingItem.quantity+1
      }
      updatedCart= [...cart]
     updatedCart[existingItemIndex]= updatedItem;
      setCart(updatedCart)
   }
   else{
      const updatednewItem = {
...newItem, quantity:1
      }
      updatedCart = [...cart, updatednewItem]
      setCart(updatedCart)
   }
}

const removeItems =(deletingItem) =>{

}

 const obj = {
    cart, addItems, removeItems
 }
 
 
    return (
    <CartContext.Provider value={obj}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider