import React from 'react'
import "./Header.css"
function header() {
  return (
    
           <>
    <header id="header">
      <div className="header">
      <div className="logo">

      <h1>imagine</h1>
      </div>
      <div className="links">
        <li><a href="">Home</a></li>
        <li><a href="features.jsx">Features</a></li>
        <li><a href="">About Us<FaAngleDown /></a>
        <div className="hamburgur-btn">
          <li><a href="">More Free Templates</a></li>
          <li><a href="">More Teams</a></li>
          <li><a href="">More Links</a></li>
        </div>
        </li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact Us</a></li>
      </div>
      </div>

    </header>
    </>
    
  )
}

export default header
