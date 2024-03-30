import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Updatereg3 = () => {
  let id=localStorage.getItem('id')
  
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost:4000/resort/viewfacility/${id}`)
      console.log(response.data)
      setUserData(response.data)
    }
    fetchdata()
  },[refresh])
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
let handleSubmit=async (event)=>{
  event.preventDefault()
  const formData = new FormData();
    for (const key in data) {
    if (data[key]) {
      formData.append(key, data[key]);
    }
  }
 let response=await axios.put(`http://localhost:4000/resort/editfacility/${id}`,formData,{
  headers: {
    "Content-Type": "multipart/form-data", // Set the content type for FormData
  }
 })
 console.log(response);
 setrefresh(!refresh)
 setData('')
  
}
  return (
    <div>
    <div className='bg-[#1a2954d6] h-[467px]'>
<div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
<span className='text-white'>Update,</span><span className='text-orange-600'> Resort Facility</span>
</div>
<form onSubmit={handleSubmit} class="w-[100%] ">
    <div className='flex w-[100%] justify-center sm:gap-10'>
    <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">facility:</label>
              <input onChange={handleChange} name='name' type="name" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
    </div>
    <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">luxury:</label>
              <input onChange={handleChange}  name='luxury' type="checkbox" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">standard:</label>
              <input onChange={handleChange}  name='standard' type="checkbox" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            {/* <button type='submit' className='bg-orange-600'>submit</button> */}

  </form>
<div className='text-center m-7'>
<button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl  px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">UPDATE</button>
</div>
</div>
</div>
  )
}
