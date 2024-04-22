import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Vwreviewagency = () => {
    
    const [data,setData]=useState([''])

    useEffect(()=>{
        let fetchdata=async ()=>{
          let id=localStorage.getItem('id')
            let response=await axios.get(`http://localhost:4000/agency/vwreview/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
 
  return (
    <div className='pencil'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Reviews</span>
          </div>
          {/* <form class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a package..." required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form> */}
          <div className='bg-white ms-4 ps-4 me-8 mt-5'>
            {data?.map((item)=>(
                <>
           <div className='font-bold'> {item?.user?.name}</div>
           <div className='flex flexwrap text-orange-700 gap-10'>
            <div> { new Date(item?.booking?.date).toLocaleDateString()}</div>
            <div>{item.package?.packageName}</div>
            <div>{item.review?.destinationName}</div>
            </div>
            <div>{item.review?.review}</div>
            </>
        ))}
            </div>  
    </div>
  )
}
