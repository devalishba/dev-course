import React from 'react'
import "./contact.css"

function contact() {
  return (
    <>
     <section id="contact">
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="form">
            
              <span>  First Name </span>
              
                <div>
                <input type="name" />
</div>
               <span> Last Name:</span>
                <div>
                <input type="name" />
                </div>
            
                  <span>  Email:</span>
                <div>
                
                    

                    <input type="email" />
                </div>
                <span>  Subject:</span>
                <div>
                  
                    
                    <input type="subject" />
                </div>
                Message:
                
                <div>
                    <textarea placeholder='Leave your message here...'></textarea>
                </div>
                <div className="btns">
                    <button>Get Started</button>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default contact
