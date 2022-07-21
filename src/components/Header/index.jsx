import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


export const Header = ({ title }) => {
  return (   
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className='container'>
              <h2>{title}</h2>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
