import React , { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Copyright from './Copyright';
 
function Footer() {
    
    function handleClick(){
        window.scroll(0, 0)
    }
   
  return (

        <footer>
        
        <div className="footer-top">
            <div>
                <h3>Would Bee</h3>
                <ul>
                    <li onClick={handleClick}><Link to="/"><a>Home</a></Link></li>
                    <li onClick={handleClick}><Link to="/about"><a>About Us</a></Link></li>
                    <li onClick={handleClick}><Link to="/contact-us"><a>Contact Us</a></Link></li>
                    <li><a href="https://blog.wouldbee.com/">Blog</a></li>
                </ul>                
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/company/would-bee/jobs/?viewAsMember=true">Career</a></li>
                    <li onClick={handleClick}><Link to="/FAQ"><a>FAQ</a></Link></li>
                    <li><a href="https://www.wouldbee.com/privacy">Privacy Policy</a></li> 
                    <li><a href="https://www.wouldbee.com/terms">Term of Use</a></li>
                </ul>                
            </div>
            <div>
            <h3>Channels</h3>
                <ul>
                    <li onClick={handleClick}><a href="#">Android App</a></li>
                    <li onClick={handleClick}><Link to="/WB-telegram"><a>Would Bee on Telegram</a></Link></li>
                    <li onClick={handleClick}><a href="#">Web (Coming Soon)</a></li>
                </ul>
            </div>
            <div>
                <h3 className="social-h3">Follow Us</h3>
                <div className="social">
                    <a className="facebook" href="https://www.facebook.com/WouldBeeFB"><i className="fa fa-facebook"></i></a>
                    <a className="instagram" href="https://www.instagram.com/wouldbee_insta/"><i className="fa fa-instagram"></i></a>
                    <a className="twitter" href="https://twitter.com/WouldBee_"><i className="fa fa-twitter"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/company/74802978/admin/"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <Copyright />
        </div>
            
            
            
            
        </footer>
        
  )
}
 
export default Footer
 