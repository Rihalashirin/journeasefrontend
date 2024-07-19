import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

export const Addfacility = () => {
    const [data,setData]=useState('')

    let id= localStorage.getItem('id')
    let handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setData({ ...data, [name]: newValue });
        console.log(data);
    }
    let handleSubmit=async (event)=>{
      event.preventDefault()
     let response=await axios.post('https://journeasebackend.onrender.com/resort/facilities',{...data,resortid:id})
     console.log(response);
  
     toast.success('facility Added')
  }

  return (
    <>
    <ToastContainer/>
    <div className='bg-[#1a2954d6] h-[540px]'>
 <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Add</span><span className='text-orange-600'>facilities</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">
    <div className='flex w-[100%] justify-center sm:gap-10'>
    <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">facility:</label>
              <input onChange={handleChange}  name='name' type="name" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
    </div>
    <div >
              <label for="name" class="block mb-2 ml-56 text-sm font-medium text-white dark:text-white">luxury:</label>
              <input onChange={handleChange}  name='luxury' type="checkbox" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" />
            </div>
            <div >
              <label for="name" class="block mb-2 ml-56 text-sm font-medium text-white dark:text-white">standard:</label>
              <input onChange={handleChange}  name='standard' type="checkbox" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=""  />
            </div>
            <button type='submit' className='bg-orange-600 ml-56'>submit</button>

  </form>
 

    </div>
    </>
  )
}
