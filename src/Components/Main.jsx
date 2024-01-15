import React from 'react'
import Typewriter from "typewriter-effect";
import './Main.css';
import me from '../media/me.jpg'


function Main({lightmode}) {
  return (

    <div className='  '>
      <section id='home'>
        <div className='d-flex'>
        <div style={{color:lightmode?'white':'black'}} className='content'>
          {/* content */}
          <span className='mt-5'>Hello,</span><br />
          <span className=''><h1>I'm <span style={{color:lightmode?'cyan':'darkblue'}}>Mohammed Safeer</span><br />  <Typewriter
        options={{
          strings: [ "Front End Developer","Back End Developer","Full Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      /></h1></span>
          
          <p>I am a MEARN Stack Web developer with a strong foundation in front-end and back-end technologies.Passionate in creating web applications that are both user-friendly and responsive.</p>
          <div className='icon '>
            <a href="https://www.linkedin.com/in/mohammed-safeer-a93758282/"><i class="fa-brands fa-linkedin fa-2xl " style={{color:lightmode? '#e0e2e6':'darkslateblue'}}></i></a>
            <a href="https://github.com/dashboard"><i class="fa-brands fa-github fa-2xl" style={{color:lightmode? '#e0e2e6':'darkslateblue'}}></i></a>
          

          </div>
          <br />
          <a href="https://www.linkedin.com/in/mohammed-safeer-a93758282/">
          <button className='btn btn-warning'>LET'S CONNECT</button>
          </a>

        </div>
        <div className='m-5 '>
          {/* image  */}
          <img src={me} alt="" style={{height:'500px',width:'400px',borderRadius:'10px'}}/>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Main