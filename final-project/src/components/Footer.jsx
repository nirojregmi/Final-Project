import React from 'react'
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Travel Nepal logo" />
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#tours">Tours</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Travel Nepal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer