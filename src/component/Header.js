import React , { useState } from 'react'
import Navbar from './Navbar'
import bg from '../Images/wouldbee.mp4'
 
function Header() {
  return (
    <header >
      <video className="bg" autoPlay muted loop >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="header" >
        <Navbar/>
        
        <div className="header-content">
        
            <h1>Matrimony That's Really Free</h1>
            <p>Pre-Launch Offer: Register Today For Lifetime Unrestricted Access</p>
            <div className="download-btn">
              <a className="download" href="">
              <span>Download App</span>
                
              <img src="https://img.icons8.com/material-rounded/24/000000/google-play.png"/>
              </a>
            </div>
            
            
            
        </div>
      </div>
    </header>
  )
}
 
export default Header
 