import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function footer() {
  return (
    <>
      <section id="footer">
        <div className="footer">
            <div className="footer-icons">
               <a href=""> <FaFacebookF /></a>
              <a href="">  <FaTwitter /></a>
               <a href=""> <FaLinkedinIn /></a>
               <a href=""> <FaInstagram /></a>
                <a href=""><FaPinterest /></a>
            </div>
            <div className="footer-para">
                <p>Copyright ©2025 All rights reserved | This template is made with <span><FaHeart /></span> by <a href="">Colorliba </a></p>
            </div>
        </div>
      </section>
    </>
  )
}

export default footer
