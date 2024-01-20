import React from 'react'
import { Button, Table } from 'react-bootstrap'

const Index = () => {
  return (
   <>
   <div className='container p-4 text-center'>
    <Button variant="outline-info">Get our Latest Album</Button> </div>
    <div className='container text-center p-3'>
    <img src = '../images/Play-icon.jpeg' alt = "icon" style={{width:'40px'}}/>
    </div>
   
   <div className=''>
    <h4 className='text-center'>TOURS</h4>

        </div>
    <div className='text-center p-3'>
    <Table>
      
      <tbody>
        <tr>
          <td>JUL 16</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THREATRE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 19</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THREATRE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 22</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THREATRE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 22</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THREATRE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>JUL 22</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THREATRE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
    <div className = "">

    </div>
   </>
  )
}

export default Index