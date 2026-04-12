import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="menu">
      <div className="menu-logo">Travel Nepal</div>

      <nav className="menu-link">
        <span>
          <Link to="/">Home</Link>
        </span>

        <span>
          <a href="#destinations">Destinations</a>
        </span>

        <span>
          <a href="#tours">Tours</a>
        </span>

        <span>
          <a href="#contact">Contact</a>
        </span>

        {/* NEW FORM LINK */}
        <span>
          <Link to="/form">Booking Form</Link>
        </span>
      </nav>
    </header>
  )
}

export default Navbar