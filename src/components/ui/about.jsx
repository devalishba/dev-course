import React from 'react'
import "./about.css"
import { FaCheck } from "react-icons/fa6";

function about() {
  return (
    <>
     <section id="about">
        <div className="about">
            <div className="about-left">
                <img src="/public/img4.svg" alt="" />
            </div>
            <div className="about-right">
                <h1>Our Mission</h1>
                <p>Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                
                
             <div> <span><FaCheck /></span>  Laborum enim quasi at modi</div>
             <div>  <span><FaCheck /></span> Ad at tempore</div>
             <div>  <span><FaCheck /></span> Labore quaerat esse</div>
             <div className="btns"><button>Learn More</button></div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default about
