import React, { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Cart from './components/Cart/Cart';
import About from './pages/About';
import Index from './pages/Index';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Footer from './components/Footer';
import ProductList from './components/products/ProductList';
import Contact from './pages/Contact-Us';


function App() {
  const [show, setShow] = useState(false);

  const showCartHandler = () => {
    setShow(true)
  }

  const hideCartHandler = () => {
    setShow(false)
  }
  return (
    <>
    <Header showCartHandler={showCartHandler} />
      <Switch >
      <Route exact path='/'>
          <Index />
        </Route>
        
        <Route path='/about'>
          <About  />
        </Route>
        <Route path='/store'>
          <ProductList  />
        </Route>
        <Route path='/contact'>
          <Contact  />
        </Route>

      </Switch>
      <Footer fixed = "bottom"/> 
      {/* <Header showCartHandler = {showCartHandler}/>
    {show && <Cart onClose = {hideCartHandler} showCart = {showCartHandler}/>} */}
    </>
  );
}

export default App;
