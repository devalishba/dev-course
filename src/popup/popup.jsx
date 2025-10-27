import React, {useState} from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


function popup() {

        
const  [OpenPopup, setOpenPopup]=useState("false")
const [Password , setPassword]=useState('false')
   
  return (

    <div style={{textAlign:'center'}}>
     
      <button className="pop" style={{textAlign:'center',backgroundColor:'green',padding:'10px',border:'green'}} onClick={()=>setOpenPopup(true)}>Open  Popup</button>
        
      {
        OpenPopup &&
      <div className="uppop" style={{width:'300px',height:'150px',backgroundColor:'#eee', padding:'10px'}}>
      <div className="popup"style={{display:'flex', justifyContent:'space-between'}}>
        <h2>PopUp</h2>
        <button style={{border:'none'}} onClick={()=>setOpenPopup(false)}>X</button>
      </div>
      {/* <p>Popup message here..</p> */}
      <div >
      <input type="name"  placeholder='Name' style={{padding:'0 10px', margin:'10px 0',width:'200px',height:'30px'}}/></div>
      <input type="password" placeholder='Password' style={{padding:'0 10px',width:'200px',height:'30px'}}/>
</div>
}
    </div>
  )
}

export default popup
