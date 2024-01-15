import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({lightmode,setLightmode}) {
    
  return (
    <div>
       <Navbar className='sticky-top' bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className={lightmode?'text-light':'text-dark'}>Mohammed <span style={{color:lightmode?'cyan':'darkblue'}}>Safeer</span></Navbar.Brand>
          <Nav className="">
          
            <Nav.Link href="#home" className={lightmode?'text-light':'text-dark'}>Home</Nav.Link>
            <Nav.Link href="#about" className={lightmode?'text-light':'text-dark'}>About</Nav.Link>
            <Nav.Link href="#skill" className={lightmode?'text-light':'text-dark'}>Skill</Nav.Link>
            <Nav.Link href="#project" className={lightmode?'text-light':'text-dark'}>Project</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mohammed-safeer-a93758282/" className={lightmode?'text-light':'text-dark'}>Contact Me</Nav.Link>
            <i onClick={()=>setLightmode(!lightmode)} className={lightmode?"fa-solid fa-moon fa-lg theme m-4":"fa-regular fa-sun fa-lg theme m-4"}  style={{color: '#5b739f'}}></i>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header