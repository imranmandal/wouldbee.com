import React , { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Copyright from './Copyright';
 
function Footer() {
    
    function handleClick(){
        window.scrollTo(0, 0)
    }
   
  return (

        <footer>
        
        <div className="footer-top">
            <div>
                <h5>Would Bee</h5>
                <ul>
                    <li onClick={handleClick}><Link to="/"><a>Home</a></Link></li>
                    <li onClick={handleClick}><Link to="/about"><a>About Us</a></Link></li>
                    <li onClick={handleClick}><Link to="/contact"><a>Contact Us</a></Link></li>
                    <li><a href="https://www.linkedin.com/company/would-bee/jobs/?viewAsMember=true">Career</a></li>
                </ul>                
            </div>
            <div>
                <h5>Help</h5>
                <ul>
                    <li><a href="https://blog.wouldbee.com/">Blog</a></li>
                    <li onClick={handleClick}><Link to="/FAQ"><a>FAQ</a></Link></li>
                    <li onClick={handleClick}><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms Of Service</Link></li>
                </ul>                
            </div>
            <div>
                <h5>Channels</h5>
                <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=apptivism.would_bee.app">Android App</a></li>
                    <li onClick={handleClick}><Link to="/telegram"><a>Telegram Bot</a></Link></li>
                    <li><a href="#">Web (Coming Soon)</a></li>
                    <li><a href="#">iOS (Coming Soon)</a></li>
                </ul>
            </div>
            <div>
                <h5 className="social-h3">Follow Us</h5>
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
 