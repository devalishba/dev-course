import React, {useState} from 'react'
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


function popup() {

        
const  [OpenPopup, setOpenPopup]=useState("false")
const [Show , setShow]= useState(true)

const tooglePassword=() =>{
  
  setShow(!Show)
  }
  
  



   
  return (

    <div style={{textAlign:'center'}}>
     
      <button className="pop" style={{textAlign:'center',backgroundColor:'pink',padding:'10px',border:'green'}} onClick={()=>setOpenPopup(true)}>Open  Popup</button>
        
      {
        
        OpenPopup &&
      <div className='super' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>  
            <div className="uppop" style={{width:'300px',height:'190px',backgroundColor:'#eee', padding:'10px'}}>
      <div className="popup"style={{display:'flex', justifyContent:'space-between'}}>
        <h2>Form</h2>
        <button style={{border:'none'}} onClick={()=>setOpenPopup(false)}>X</button>
      </div>
    
  
<div className='icons' style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap:'2px'
}}>
      <input type={Show ? "Password" : 'Text'} placeholder='Password' style={{padding:'0 10px',width:'200px',height:'30px',position:'relative'}} />
       <span className='icon' style={{}}>
{

          Show ? <FaEye onClick={tooglePassword}/> :<FaEyeSlash onClick={tooglePassword}/>
}
</span>
</div>
       </div>

      
</div>

}
    </div>
  )
}

export default popup
