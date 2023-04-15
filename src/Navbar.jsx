import React from 'react'
import "./navbar.css"
const Navbar = ({src}) => {
  return (
    <nav className="navbar">
      <img className="navbar-title" src={src}/>
    </nav>
  )
}

export default Navbar