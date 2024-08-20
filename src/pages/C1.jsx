import React from 'react'
import {Link} from "react-router-dom";
import m1 from "../assets/mach.jpg"
import m2 from "../assets/text.jpg";
import m3 from "../assets/control.jpg"
import m4 from "../assets/print.jpg"
import m5 from "../assets/used.jpg"
import m6 from "../assets/paper.jpg"
import m7 from "../assets/pri.jpg"
import m8 from "../assets/rolling.jpg";

export const C1 = () => {
  return (
    <>

<div className='bg-green-400'>
 <h1 className='text-black font-bold text-center mb-2'> #    All Categories</h1>
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none p-3 ">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 ps-10 text-sm p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>

    </div>


<div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
    </div>
</div>

<div className='bg-green-500'> 
    <p className='p-2 font-bold text-center pt-2 text-white'>Industrial Plants , Machinerys</p>
    <div className='pb-2'>
       
    <input className=' w-11/12 rounded-xl  p-2 ml-3 mr-4' type="text"  placeholder='Search For Products & Services'/>
    
    </div>
</div>
    <div className="grid gap-x-8 gap-y-4 grid-cols-2">
    <Link to="/login">
  <div className='text-center p-5'>
    
    <img src={m1} alt="" />
    <p className='font-semibold'>Machines & Equipments</p>
  </div>
  </Link>
  
  <div className='text-center p-5' > <img src={m2} alt="" />
  <p className='font-semibold'>Textile And Garment Machines</p></div>
  <div className='text-center p-5' ><img src={m3} alt="" />
  <p className='font-semibold'>Control Equipments</p></div>
  <div className='text-center p-5'> <img src={m4} alt="" />
  <p className='font-semibold'>Printing Machinery</p></div>
  <div className='text-center p-5'> <img src={m5} alt="" />
  <p className='font-semibold'>Used Machinery & Tools</p></div>
  <div className='text-center p-5'> <img src={m6} alt="" />
  <p className='font-semibold'>Paper Work & Making Machine</p></div>
  <div className='text-center p-5'>  <img src={m7} alt="" />
  <p className='font-semibold'>Digital Printers</p></div>
  <div className='text-center p-5'> <img src={m8} alt="" />
  <p className='font-semibold'>Rolling Machines</p></div>
</div>
</>
  )
}
