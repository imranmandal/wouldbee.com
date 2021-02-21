import React, { useEffect } from 'react'
import Navbar from './Navbar'
import bg from '../Images/wouldbee.mp4'
import poster from '../Images/poster.png'
 
function Header() {

  useEffect(()=>(
    window.scroll(0, 0)
  ))

  function videoOnProgress(){
    
  }
  
  return (
    <header >
      <div id="video">
        <video onProgress={videoOnProgress} className="bg" autoPlay muted loop >
          <source src={bg} type="video/mp4" />
        </video>
      </div>
      
      <div className="header" >
        <Navbar/>
        
        <div className="header-content">
        
            <h1>Matrimony That's Really Free</h1>
            <p>Pre-Launch Offer: Register Today For Lifetime Unrestricted Access</p>
            <div className="download-btn">
              <a className="download" href="">
              Download App
                
              <img src="https://img.icons8.com/material-rounded/24/000000/google-play.png"/>
              </a>
            </div>
            
            
            
        </div>
      </div>
    </header>
  )
}
 
export default Header
 