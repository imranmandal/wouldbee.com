import React , { useState } from 'react'
 
function FAQd(props) {
    const [visible, setVisible] = useState(false)
    
    function handleClick(){
        setVisible(prevValue => !prevValue)
    }

    return (
    <div className="faq-d">
        <div onClick={handleClick} className="faq-title">
            <i className="fa fa-plus" />
            <h2>{props.title}</h2>
        </div>
        
        {
            visible ?
            <div className="faq-para">
                <p>{props.para1}</p>
                <p>{props.para2}</p>
            </div> 
            :
            null
        }
        
        

    </div>
  )
}
 
export default FAQd
 