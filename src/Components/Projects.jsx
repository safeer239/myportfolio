import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import mediaapp from '../media/mediaapp.png'
import moviefinder from '../media/moviefinder.png'
import restaurant from '../media/restaurant.png'
import travelblog from '../media/travelblog.png'
import weather from '../media/weather.png'
import lmnr from '../media/lmnr.png'


function Projects({lightmode}) {
  return (
    // <div className='bg- '>
      // <div className='p-5'>
      // <h1 style={{color:'cyan',fontSize:'50px'}} className='text-center fa-bold'> Projects</h1>
      // </div>
    //   <div className=' text-center d-flex justify-content-center pb-5' >
    //     <Carousel style={{width:'850px'}} >
    //   <Carousel.Item>
    //    <img src={mediaapp} style={{height:'450px'}} alt=""  />
    //     <Carousel.Caption>
    //       <h3 className='text-dark'>Media App</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={weather} style={{height:'450px'}} alt="" />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={moviefinder} style={{height:'450px'}} alt="" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={restaurant} style={{height:'450px'}} alt="" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <img src={travelblog} style={{height:'450px'}} alt="" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // </div>
    // </div>





    <div className=''>
      <section id='project'>
      <div >
      <h1 style={{color:lightmode?'cyan':'darkblue',fontSize:'50px'}} className='text-center fa-bold'> Projects</h1>
      </div>
      </section>
      <div className='p-5' >

    <Row style={{gap:'50px',marginLeft:'80px'}} className="text-center container d-flex justify-content-center">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'150px'}} src={mediaapp} />
      <Card.Body>
        <Card.Title>Media App</Card.Title>
        <a href=" https://mediaapps.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'150px'}} src={lmnr} />
      <Card.Body>
        <Card.Title>Luminar Clone</Card.Title>
        
        <a href="https://luminar-technolab.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'150px'}} src={weather} />
      <Card.Body>
        <Card.Title>weather App</Card.Title>
       
        <a href="https://open-weather2.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    </Row>

    <Row style={{gap:'50px',marginLeft:'80px'}} className=" text-center container d-flex justify-content-center my-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'150px'}} src={moviefinder} />
      <Card.Body>
        <Card.Title>Movie Finder</Card.Title>
        
        <a href="https://safeer-movie-finder.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'150px'}} src={restaurant} />
      <Card.Body>
        <Card.Title>Restaurant App</Card.Title>
        
        <a href="https://dulcet-cendol-1b4cac.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'150px'}} src={travelblog} />
      <Card.Body>
        <Card.Title>Travel Blog</Card.Title>
        
        <a href="https://oneikatravelblog.netlify.app/"><Button variant="info">LIVE SITE</Button></a>
      </Card.Body>
    </Card>
    
    </Row>
    </div>
    </div>
  )
}

export default Projects