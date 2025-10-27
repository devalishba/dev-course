import React from 'react'
import "./feedback.css"

function feedback() {
  return (
    <>
      <section id="feedback">
        <div className="feedback">
            <div className="feedback-left">
                <h1>Communicate and gather feedback</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam
                </p>

                <div className="container">
                    <div className="img">
                        <img src="/public/person_1.jpg" alt="" />
                        <div className="img-write">
                            <div><b>Kimberly Gush</b></div>
                            <div>Co-Founder, XYZ Inc</div>
                        </div>
                    </div>
                    <div className="lorem">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>
                    </div>
                </div>
                    
            </div>
            <div className="feedback-right">
                <img src="/public/img5.svg" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default feedback
