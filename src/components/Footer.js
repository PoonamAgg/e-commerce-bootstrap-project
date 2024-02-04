import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.css'
import { faYoutube, faSpotify, facFacebook } from '@fortawesome/fontawesome-free'

const Footer = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
       
          <Col className='col-6'>
            <h1>The Generics</h1>
          </Col>
          <Col className='col-2'>
          </Col>
          <Col className='col-4'>
            <a href='#'>
              <img src = 'https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' style = {{width:"30px", marginLeft:'50px'}}/>
            </a>
            <a href='#'>
            <img src = 'https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' style = {{width:"30px", marginLeft:'50px'}}/>
            </a>
            <a href='#'>
            <img src = 'https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' style = {{width:"30px", marginLeft:'50px'}}/>
            </a>
          </Col>
          
      </Navbar>
    
  
  )
}

export default Footer;