import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
React Bootstrap Configuration
*/
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CartProvider from './components/store/CartProvider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { ProductProvider } from './components/store/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <React.StrictMode>
      <ProductProvider>
        <BrowserRouter> <App /> </BrowserRouter>
      </ProductProvider>
    </React.StrictMode>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

