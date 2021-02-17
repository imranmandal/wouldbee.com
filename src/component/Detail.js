import React , { useState } from 'react'
import phone1 from '../Images/phone1.png'
import phone2 from '../Images/phone2.png'
import phone3 from '../Images/phone3.png'
import phone4 from '../Images/phone4.png'
 
function Detail() {
  return (
    <div className="detail">
        
        
        <div className="para para1">
            <h3>Truly Free Matrimony App - Zero Ads/Zero Payments</h3>
            <p>Every matrimony app offers free registration but asks for money to connect you to potential matches. Not us! We promise to never ask for money.</p>
            <img className="img1" src={phone1} alt=""/>
        </div>
        <div className="para para2">
            <h3>Free Yet SAFE</h3>
            <p>We are fanatic about our users safety. We take all possible measures to keep Fraudsters and Scammers away</p>
            <img className="img2" src={phone2} alt=""/>
        </div>
        <div className="para para3">
            <h3>Smart Compatibility </h3>
            <p>Check your compatibility score based on our proprietary compatibility calculator</p>
            <img className="img3" src={phone3} alt=""/>
        </div>
        <div className="para para4">
            <h3>Take control of your privacy</h3>
            <p>You are in full control of your privacy. You decide who can see your information and how much information to reveal</p>
            <img className="img4" src={phone4} alt=""/>
        </div>
    </div>
  )
}
 
export default Detail
 