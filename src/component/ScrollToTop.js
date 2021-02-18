import React , { useEffect, useState } from 'react'
 
function ScrollToTop() {    
    useEffect(()=>{
        try{
            window.scroll({
                top: 0
            })
        }
        catch(error){
            window.scrollTo(0, 0)
        }
    })
    return null
}
 
export default ScrollToTop;
 