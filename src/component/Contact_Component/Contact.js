import React , { useState } from 'react'
import Navbar from '../Navbar';
import SubContact from './SubContact'
 
function ContactUs() {
    return (
        <div>
            <Navbar />
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="contactS">
                    <SubContact 
                        icon="comments"
                        title="Help & Support"
                        para="If you have anything to share about your experience on the app, facing an error or need support with your profile, we are here to help!"
                        email="support@Wouldbee.com"
                    />
                    <SubContact 
                        icon="comments"
                        title="Success Stories"
                        para="Did you find your would-be  on Wouldbee? We would love to hear all about it !"
                        email="connect@Wouldbee.com"
                    />
                </div>
            </div>
            
        </div>
  )
}
 
export default ContactUs;
 