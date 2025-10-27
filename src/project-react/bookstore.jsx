import React from 'react'
import "./bookstore.css"
import { FaRegStar } from "react-icons/fa";

let booksData = [
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/6d2f865bb23ec0c315a29c539a919437.jpg_400x400q75.avif",
        bookTitle: "Pakistan: A Personal History Imran Khan English Novel - KS",
        bookPrice:"Rs. 307",
        bookDesc:"581 sold"
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/45bf0fd2be54f5e42fee5c4a9f947bac.png_400x400q75.avif",
        bookTitle:"Atomic Habits Book By James Clear Urdu Translation / Atimi Adaatein / Atmi Aadat Urdu Book ",
        bookPrice:"RS. 200",
        bookDesc:"482 sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/62cab182ae46eb41a56b413cd875f7df.jpg_400x400q75.avif",
        bookTitle:"Rich Dad, Poor Dad by Robert T. Kiyosaki",
        bookPrice:"Rs .200",
        bookDesc:"482 sold",
    },{
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/bcc796a73b29a0dc70146c622af7c1db.jpg_400x400q75.avif",
        bookTitle:"Rich Dad, Poor Dad by Robert T. Kiyosaki",
        bookPrice:"Rs. 140",
        bookDesc:"3.8K sold"
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/bbe6760280d0e27cbd8e195f640701ca.jpg_400x400q75.avif",
        bookTitle:"Jannat ka pattsy urdu Novel by Nimra Ahmad by selling",
        bookPrice:"Rs. 589",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/bc45592aee6b0c502925f632f0bbca44.jpg_400x400q75.avif",
        bookTitle:"Baby Girls Record Book- Memory Book for girls. MY first picture book...",
        bookPrice:"Rs. 909",
        bookDesc:"401 sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/767f22ba58adc51a91120c9073505dc2.jpg_400x400q75.avif",
        bookTitle:"Peer e Kamel by umer Ahmad Best Selling Urdu Book",
        bookPrice:"Rs. 589",
        bookDesc:"5k solid",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/f00e88f130b46480245563538cfd570c.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/g/kf/S5ce9ca74ccbd455c92f3b979e4efe2585.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/9920cd235bf361ab50fa820dd765d18f.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/348d7f1e4edd880583fcbb80babeb4c8.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/c0e263443cba79bde76aaf3e0f8de23d.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/88084528837ce648e7b15da79af27a8d.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/1f4f562f82fd4c258ab1f28dcf8c822d.jpg_400x400q75.avif",
        bookTitle:"Dogar Brothers PMA Long Course 157-158 Graduate Course",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/g/kf/Sc9f66533c12143c19548d3aefec555f6K.jpg_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/g/kf/Sc9f66533c12143c19548d3aefec555f6K.jpg_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/a01b34fc33f3b3f8ad2d408097c8ab52.jpg_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/static/pk/p/54ce3419fc8c1ee7fb0dffecbf3c97eb.png_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/g/kf/Sf8911bd775ae4c1e88b3cff24d58ca37F.jpg_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
    {
        bookImage:"https://img.drz.lazcdn.com/g/kf/Sed7f2680fd0941a2b68a05ba449f6684W.jpg_400x400q75.avif",
        bookTitle:"Haalim Part 1 And Part 2 Complete Novel By Nimra Ahmede",
        bookPrice:"Rs . 309",
        bookDesc:"1.5K sold",
    },
]

function bookstore() {
  return (
    <div>
      <h1>Bookstore</h1>
      <div className="books">
      {
        booksData.map((meribook)=>{
            return <Book {...meribook}/>
        })
      }
    
      </div>
    </div>
  )
}

export default bookstore

function Book(props) {
    let icons = <FaRegStar />
return <div className='Book'>
<img src={props.bookImage} alt="" />
<h5>{props.bookTitle}</h5>
<span>{props.bookPrice}
</span>
<div className="star">
<p>{props.bookDesc }<span>{icons}{icons}{icons}{icons}{icons}</span></p>
</div>

</div>
    
    
}