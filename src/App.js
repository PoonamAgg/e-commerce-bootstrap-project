import React, { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import { Button } from 'react-bootstrap';
import Cart from './components/Cart/Cart';

function App() {
  const [show, setShow] = useState(false);

  const showCartHandler = () =>{
    setShow(true)
  }

  const hideCartHandler = () =>{
    setShow(false)
  }
  return (
   <>
   {/* <Header/> */}
    <Header showCartHandler = {showCartHandler}/>
    {show && <Cart onClose = {hideCartHandler} showCart = {showCartHandler}/>}
   </>
  );
}

export default App;
