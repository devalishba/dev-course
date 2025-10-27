import React from 'react'
import "./Hero.css"
import { FaAngleDown } from "react-icons/fa";


function Hero() {
  return (
  <>
<section id="hero-section">
  <div className="hero-section">
            <>
    <header id="header">
      <div className="header">
      <div className="logo">

      <h1>imagine</h1>
      </div>
      <div className="links">
        <li><a href="">Home</a></li>
        <li><a href="">Features</a></li>
        <li className='dropdown'><a href="">About Us <FaAngleDown /></a>
        <div className="hamburgur-btn">
          <li><a href="">More Free Templates</a></li>
          <li><a href="">More Teams</a></li>
          <li className='list'><a href="">More Links</a>
         
          </li>
         
        </div>
        
        </li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact Us</a></li>
      </div>
      </div>

    </header>
    </>
    {/* <div className="hero">
    <div className="hero-left">
      <h1>Make Your Business More Profitable</h1>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.

      </p>
          <div className="btns">
      <button>Get Started</button>
    </div>

    </div>
    <div className="hero-right">
      <img src="/public/img.svg" alt="" />
    </div>
      </div> */}
  </div>
</section>
  </>
  )
}

export default Hero
