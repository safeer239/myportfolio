import React from 'react'
import Card from 'react-bootstrap/Card'
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';


function Skills({lightmode}) {
  return (
    <div className='bg- '>
      <section id='skill'>
        <div>
            <h1 style={{color:lightmode?'cyan':'darkblue',fontSize:'50px'}} className='text-center fa-bold'> Skills</h1>
        </div>
        </section>
        {/* <div className="container p-5 m-5"> */}
        {/* style={{marginLeft:'150px',border:'solid 2px',marginRight:'180px'}} */}
        <MDBContainer   className='p-5  '>
      <MDBRow className=' text-center d-flex justify-content-center' >
      <MDBCol lg='4' md='12' className='mb-4'>
          <img 
            src='https://neerav-vinod-portfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png'
            className='img-fluid shadow-2-strong rounded-4 '
            alt=''
            style={{width:'150px', height:'130px'}}          />
          <p className={lightmode?'text-light':'text-dark'} >HTML</p>
        </MDBCol>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img
            src='https://neerav-vinod-portfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
          <p className={lightmode?'text-light':'text-dark'} >CSS</p>
        </MDBCol>

        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://neerav-vinod-portfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
          <p className={lightmode?'text-light':'text-dark'} >JAVASCRIPT</p>
        </MDBCol>

        
      </MDBRow >

      <MDBRow className=' text-center d-flex justify-content-center'>
      <MDBCol lg='4' md='6'  className='mb-4'>
          <img
            src='https://th.bing.com/th/id/OIP.Xocpg5L0y-BXBnnCrHqvowHaFj?pid=ImgDet&w=1280&h=960&rs=1'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
          <p className={lightmode?'text-light':'text-dark'} >BOOTSTRAP</p>
        </MDBCol>
        <MDBCol lg='4' md='6'  className='mb-4'>
          <img
            src='https://neerav-vinod-portfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
          <p className={lightmode?'text-light':'text-dark'} >REACT</p>
        </MDBCol>
        <MDBCol lg='4' md='12' className='mb-4'>
          <img
            src='https://th.bing.com/th/id/OIP.23VRF2RtxpYXoX3-qBtWnQHaGa?pid=ImgDet&rs=1'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
                    <p className={lightmode?'text-light':'text-dark'} >ANGULAR</p>

        </MDBCol>

        

        
      </MDBRow>
      <MDBRow className=' text-center d-flex justify-content-center'>
      <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://neerav-vinod-portfolio.netlify.app/static/media/mongo.2a1528ddc31d4ce8518d.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
                    <p className={lightmode?'text-light':'text-dark'} >MONGODB</p>

        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://neerav-vinod-portfolio.netlify.app/static/media/node.952a9ea986dcfa5229ad.png'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}          />
                    <p className={lightmode?'text-light':'text-dark'} >NODE.JS</p>

        </MDBCol>
        <MDBCol lg='4' md='6' className='mb-4'>
          <img
            src='https://th.bing.com/th/id/OIP.1ji9NLQl3sOXktSoEYnt3wHaHa?pid=ImgDet&rs=1'
            className='img-fluid shadow-2-strong rounded-4'
            alt=''
            style={{width:'150px', height:'130px'}}
          />
                    <p className={lightmode?'text-light':'text-dark'} >EXPRESS.JS</p>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </div>
        
    // </div>
    
  )
} 

export default Skills
