import React , { useState } from 'react'
import { Link } from "react-router-dom";
 
function Footer() {
  return (

        <footer>
        <div className="footer-left">
            <div>
                <h3>About Wouldbee</h3>
                <ul>
                    <li><Link to="/"><a>Home</a></Link></li>
                    <li><Link to="/about"><a>About Us</a></Link></li>
                    <li><a href="https://blog.wouldbee.com/">Blog</a></li>
                </ul>                
            </div>
            <div>
                <h3>Help</h3>
                <ul>
                    <li><a href="https://www.linkedin.com/company/would-bee/jobs/?viewAsMember=true">Career</a></li>
                    <li><Link to="/FAQ"><a href="#">FAQ's</a></Link></li>
                    <li><Link to="/contact-us"><a href="#">Contact Us</a></Link></li>
                </ul>                
            </div>
            <div>
            <h3>Channels</h3>
                <ul>
                    <li><a href="#">Playstore App</a></li>
                    <li><a href="https://t.me/WouldBee_Bot">Telegram</a></li>
                    <li><a href="#">Web (Coming Soon)</a></li>
                </ul>
            </div>
            <div>
                <h3 className="social-h3">Social Media</h3>
                <div className="social">
                    <a className="facebook" href="https://www.facebook.com/WouldBeeFB"><i className="fa fa-facebook"></i></a>
                    <a className="instagram" href="https://www.instagram.com/wouldbee_insta/"><i className="fa fa-instagram"></i></a>
                    <a className="twitter" href="https://twitter.com/WouldBee_"><i className="fa fa-twitter"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/company/74802978/admin/"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
            
            
            
            
        </footer>
        
  )
}
 
export default Footer
 