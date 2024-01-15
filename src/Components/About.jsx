import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../media/about.png'

function About({lightmode}) {
  return (
    <div className='bg-'>
        <section id='about'>
        <div>
            <h1 style={{color:lightmode?'cyan':'darkblue'}} className='text-center'>About Me</h1>
        </div>
        <Row>
            <Col className='text-end'>
                <img src={about} alt="" />
            </Col>
            <Col className='text-start p-3' >
                <p className={lightmode?'text-light':'text-dark'} style={{marginTop:'150px'}}>In my portfolio as a MEA(R)N stack developer with a Bachelor of Computer Applications (BCA) degree, you'll find a blend of technical prowess and educational foundation. I excel in full-stack web development, harnessing the power of the MEA(R)N stack to create robust and dynamic web applications. My education in BCA has equipped me with a deep understanding of computer applications, enhancing my ability to craft innovative digital solutions. </p>
            </Col>
        </Row>
        </section>
    </div>
  )
}

export default About