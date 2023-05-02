import React,{useState} from 'react'

import {AiOutlineShoppingCart} from "react-icons/ai"
import "../Styles/Header.css"

import { Link } from 'react-router-dom'
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="navbar">
    <div className="navbar-container">

          <Link to="/product" className='navbar-logo'>
            Logo
           </Link>

      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
      </div>
      <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
        <li className="navbar-item">
           <Link to="/product" className='navbar-link'>
            Home
           </Link>
        </li>
        <li className="navbar-item">
              <Link to="/cart" className='navbar-link'>
              <AiOutlineShoppingCart/>
              
              </Link>
          
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Header
