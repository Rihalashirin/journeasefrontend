import React, { useState } from 'react'
import guide1 from './images/guide1.png'
import guide2 from './images/guide2.png'
import guide3 from './images/guide3.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Assignguide = () => {
   const [data,setData]=useState('')
    
    
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
     let response=await axios.post('http://localhost:4000/user',data)
     console.log(response);
      
  }

  return (
    <div className='pencil h-[31rem]'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Assign a </span><span className='text-orange-600'> Guide</span>
            </div>
            <form onSubmit={handleSubmit} class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg> */}
        </div>
        <input onChange={handleChange} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="available guides" required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
<div className='flex flex-wrap gap-9'>
<div className='flex flex-wrap sm:gap-5  '>
  <div className=' pt-28 text-center text-white '> 
 <Link to='/agency/detailguide'> <img src={guide1} className='m-auto' alt="" srcset="" /></Link>
    <div className='font font-bold'>Valsaraj Kumar <br />Exp:5 years</div>
  </div>
  </div>
  <div className='flex flex-wrap sm:gap-5  '>
  <div className=' pt-28 text-center text-white '> 
  <img src={guide2} className='m-auto' alt="" srcset="" />
    <div className='font font-bold'>Patrick o'Neal <br />Exp:8 years</div>
  </div>
  </div>
  <div className='flex flex-wrap sm:gap-5  '>
  <div className=' pt-28 text-center text-white '> 
  <img src={guide3} className='m-auto' alt="" srcset="" />
    <div className='font font-bold'>Valsaraj Kumar <br />Exp:2 years</div>
  </div>
  </div>
  </div>
    </div>
  )
}
