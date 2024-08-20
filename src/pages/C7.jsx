import React from 'react'
import {Link} from "react-router-dom";
import ind from "../assets/indus.png"
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
import c8 from "../assets/c8.jpg";

export const C7 = () => {
  return (
    <>

<div className='bg-green-500'> 
    <p className='p-2 font-bold text-center pt-2 text-white'> Bicycles and Many More </p>
    <div className='pb-2'>
       
    <input className=' w-full rounded-xl  p-2 ml-3 mr-4' type="text"  placeholder='Search For Products & Services'/>
    
    </div>
</div>
    <div className="grid gap-x-8 gap-y-4 grid-cols-2">
    <Link to="/login">
  <div className='text-center p-5'>
    
    <img src={ind} alt="" />
    <p className='font-semibold'>Cycles </p>
  </div>
  </Link>
  
  <div className='text-center p-5' > <img src={c2} alt="" />
  <p className='font-semibold'>Textile And Garment Machines</p></div>
  <div className='text-center p-5' ><img src={c8} alt="" />
  <p className='font-semibold'>Control Equipments</p></div>

  


  
</div>
</>
  )
}
