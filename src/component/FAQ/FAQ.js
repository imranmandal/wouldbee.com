import React , { useState } from 'react'
import Navbar from '../Navbar'
import FAQd from './FAQ-detail'
 
function FAQ() {
  return (
    <div>
        <Navbar />
        <div className="faq">
            <h1>FAQ</h1>
            <div>
                <FAQd 
                  title="What is Would Bee?"
                  para1="Would Bee is a matrimony app that is truly free. Other popular apps such as Shaadi.com, Jeevansathi etc allows a user to register for free but asks for money to connect with your potential matches. Not Us !"
                />
                <FAQd 
                  title="How can I register on Would Bee?"
                  para1="Click on the link provided on Home Page to download the app"
                  para2="Click on sign up and fill the registration form"
                />
                <FAQd 
                  title="My Religion/Caste/Mother tongue/Profession is not listed in the Registration form. What should I do?"
                  para1="Would Bee has tried to be as comprehensive as possible while creating the many lists being used in the Registration form. However, it is possible that your particular religion / caste, mother tongue, education, profession etc may not be represented here."
                  para2="In such a case we request that you use the 'Other' option provided to you. Also, you can send an email to suport@wouldbee.com, clearly listing the new addition you would like us to make to the Registration form. While we do not guarantee that your suggestion will be Accepted, we will try our best to ensure that it does."
                />
                <FAQd 
                  title="Are there any specific DOs and DON'Ts while creating a matchmaking Profile on Wouldbee.com?"
                  para1="Do not use your Profile to display your contact details. Do not make commercial use of it and do not include content that is vulgar, pornographic or racist. See our terms of use / service agreement for more details of what type of content is prohibited on Wouldbee.com."
                  para2="Be as detailed as possible while creating your Profile. After your Profile is activated, be sure to fill in the Partner Profile and also to upload a photograph. The more information you add, the more your chances of finding a partner."

                />
                <FAQd 
                  title="Why should I set my Partner Preferences?"
                  para1="Setting your Partner Preferences tells us more about the kind of partner you are looking for and helps Wouldbee.com suggest better matching Profiles for you. Also, your Preferences helps other Members decide whether you will be interested if they were to contact you."
                />
                
            </div>
        </div>
        
        
    </div>
  )
}
 
export default FAQ
 