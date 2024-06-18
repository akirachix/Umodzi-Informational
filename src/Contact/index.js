import './index.css';
import email from '../image/email.png'
import location from '../image/location.png'
import call from '../image/call.png'




function About(){
    return(
      <div className='contact'>
        <div className='header'>
          <h1>Contact Us</h1>
        </div>
         <h2>Get in Touch</h2>
         <div className='email'>
         <img src={email} alt='Email'></img>
         <p>umodzigroup@gmail.com</p>
         </div>
         <div className='location'>
          <img src={location} alt='Location'></img>
         <p>616Korongo Rd, Nairobi</p>
         </div>
         <div className='call'>
          <img src={call} alt='Call'></img>
         <p>+254 7299310  +254 797792275</p> 
         </div>
      </div>
    )
  }

  export default About;