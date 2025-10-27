import React from 'react'
import "./hero.css"

function superhero() {
  return (
    <>
       <div className="hero">
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
      </div>
    </>
  )
}

export default superhero
