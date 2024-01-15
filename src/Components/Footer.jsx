import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer({lightmode}) {
  return (
    <div className='bg-'>
      <Navbar className="">
        <Container >
          <Navbar.Brand style={{marginLeft:'280px'}} className={lightmode?' text-light':'text-dark'}>Created By Mohammed Safeer |  2023 All rights reserved.</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer