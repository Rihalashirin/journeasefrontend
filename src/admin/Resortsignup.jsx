import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Resortsignup = () => {
    const [data,setData]=useState([''])
    
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/vwresort`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])

  return (
    <div className='adminbg'>
      <div className='flex flex-col gap-2'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Resort,</span><span className='text-orange-600'> Sign Ups</span>
          </div>
          <form class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg> */}
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
        {/* <div className='w-[90%] h-7 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-normal pl-5 items-center gap-[27rem]' >
          <div className='font text-black'>Resort Name</div>
          <div className='font text-black'>Location</div>
          <div className='bg-white'></div>
          
        </div>
        <div className='w-[90%] h-16 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-between items-center pl-5 pr-8'>
        <div className='font text-black'>Hotel Sea view</div>
          <div className='font text-black'>Delhi</div>
         <Link to='/admin/vwacceptresort'><button className='font bg-orange-600 rounded-lg text-white '>View Details</button></Link> 
        </div> */}
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full  text-sm text-center rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#9B9B9B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   RESORT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                   LOCATION
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="bg-white border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 font-semibold">
                   {index}
                </td>
                <td class="px-6 py-4">
                    {item.propertyName}
                </td>
                <td class="px-6 py-4">
               {item.propertyAddress}
                </td>
                <td class="px-6 py-4">
             {item.status}
                </td>
       
                <td class="px-6 py-4 flex flex-wrap flex-col gap-2">
                    {/* <a href="#" class="font-bold text-sm text-black bg-orange-600 hover:underline hover:bg-gray p-1">view details</a> */}
                    <Link to={`/admin/vwacceptresort/${item._id}`}><button className='font bg-orange-600 rounded-lg text-white w-32'>View Details</button></Link>
                </td>
                
            </tr>
        ))}
        </tbody>
    </table>
</div>
        </div>
    </div>
  )
}
