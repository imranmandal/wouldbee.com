import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import wideBg from '../Images/wouldbee.mp4'
import narrowBg from '../Images/WouldbeeMobile.mp4'
import narrowPoster from '../Images/narrowPoster.png'
import widePoster from '../Images/widePoster.png'
 
function Header() {

  useEffect(()=>(
    window.scroll(0, 0)
  ))


  return (
    <header >
      <div >
          <video id="video" className="bg" autoPlay muted loop poster={window.innerWidth <= "768" ? (narrowPoster) : (widePoster)} >
            <source src={window.innerWidth <= "768" ? (narrowBg) :(wideBg)} type="video/mp4" />            
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
                
              <i className="fab fa-google-play"></i>
              </a>
            </div>            
        </div>
      </div>
    </header>
  )
}
 
export default Header
 