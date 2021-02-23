import React , { useEffect } from 'react'
import logo from '../Images/wouldbee1.png'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav id="top">
        <Link to="/" ><img className="logo" src={logo} alt=""/></Link>
    </nav>
  )
}
 
export default Navbar;
 