import React from 'react'
function Navbar() {
  return (
    <header className="menu">
      <div className="menu-logo">Travel Nepal</div>
      <nav className="menu-link">
        <span><a href="#home">Home</a></span>
        <span><a href="#destinations">Destinations</a></span>
        <span><a href="#tours">Tours</a></span>
        <span><a href="#contact">Contact</a></span>
      </nav>
    </header>
  )
}

export default Navbar