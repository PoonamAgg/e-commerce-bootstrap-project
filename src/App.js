import React, { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import About from './pages/About';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path:'/About' , element:<About/>},
   { path : '/', element:<Header/>},
   {path:'/Index', element:<Index/>}
]);   

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
   <RouterProvider router = {router}/>
    {/* <Header showCartHandler = {showCartHandler}/>
    {show && <Cart onClose = {hideCartHandler} showCart = {showCartHandler}/>} */}
   </>
  );
}

export default App;
