import React from 'react'

function Contact({lightmode}) {
  return (
    <div className={lightmode?'text-light':'text-dark'}>
         <h2 className='text-center  mt-5'>Get In Touch</h2>
      <div className="d-flex justify-content-around align-items-center mt-5 mb-5 flex-column">
       
          <h3>Contact Me</h3>
         <p className='mt-4'><i className="fa-solid fa-envelope"></i>mohammedsafeershefi@gmail.com</p>

         <p><i className="fa-solid fa-phone"></i> 8593852681</p>
         <div  className='d-flex alignitems-center  '>
         <a href=""><i class="fa-brands fa-facebook fs-3" style={{color:lightmode? '#e0e2e6':'darkblue'}}></i></a>
         <a href="https://www.linkedin.com/in/mohammed-safeer-a93758282/"><i class="ms-3 fa-brands fa-linkedin fs-3" style={{color:lightmode? '#e0e2e6':'darkblue'}}></i></a>
         <a href="https://github.com/dashboard"><i class="ms-3 fa-brands fa-github fs-3" style={{color:lightmode? '#e0e2e6':'darkblue'}}></i></a>
         <a href="https://www.instagram.com/mhd._safeer/?hl=en"><i class="ms-3 fa-brands fa-instagram fs-3" style={{color:lightmode? '#e0e2e6':'darkblue'}}></i></a>
         </div>
        </div>
    </div>
  )
}

export default Contact