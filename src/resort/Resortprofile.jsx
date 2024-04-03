import React, { useEffect, useState } from 'react'
import arrow from './Arrow.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Resortprofile = () => {
  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  const[data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }

  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/agency/vwagencyprofile/${id}`)
      console.log(response.data)
      setUserData(response.data)
    }
    fetchdata()
  },[refresh])
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
   let response=await axios.put(`http://localhost:4000/agency/agencyeditprofile/${id}`,formData)
   console.log(response);
   setrefresh(!refresh)
    
}
  
  return (
    <div className='bg-[#1a2954d6] '>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
<span className='text-white'>Resgister as a </span><span className='text-orange-600'>Resort Facility</span>
</div>
<form onSubmit={handleSubmit} class="w-[100%] ">

    <div className='flex w-[100%] justify-center sm:gap-10'>

      <div className='w-[25%] '>

        <div >
          <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Property Name:</label>
          <input onChange={handleChange}  placeholder={userData.propertyName} name='propertyName' type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
        </div>
        <div>
          <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Registration No.:</label>
          <input onChange={handleChange}  placeholder={userData.registrationNumber} type="text" name='registrationNumber' id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
        </div>
        <div >
          <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Property Address:</label>
          <textarea onChange={handleChange}   placeholder={userData.propertyAddress} name="propertyAddress" type="text" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
          <input onChange={handleChange}  placeholder={userData.contactNumber} name='contactNumber' type="number" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div >
          <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">About us:</label>
          <input onChange={handleChange}  placeholder={userData.aboutUs} name='aboutUs' type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        {/* <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Location of Expertise:</label>
          <input type="email" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div >
          <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Address :</label>
          <input type="contact" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div> */}
      </div>
      <div className='w-[25%]'>

        <div >
          <label for="house name" class="block mb-2 text-sm font-medium text-white dark:text-white">Owner Name :</label>
          <input onChange={handleChange}  placeholder={userData.ownerName} name='ownerName' type="text" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
        </div>
        <div >
          <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">Cover Image:</label>
          <input onChange={handlefile} name='coverImage' type="file" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div >
          <label for="description" class="block mb-2 text-sm font-medium text-white dark:text-white">Description:</label>
          <input onChange={handleChange}  placeholder={userData.description} name='description' type="text" id="description" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div >
          <label for="events" class="block mb-2 text-sm font-medium text-white dark:text-white">Events:</label>
          <input onChange={handleChange}  placeholder={userData.events} name='events' type="text" id="events" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
       

        {/* <div >
          <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">Experience(in years) :</label>
          <input type="post" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div> */}
        <div>
          <label for="pin" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
          <input onChange={handleChange}  placeholder={userData.email} name='email' type="email" id="pin" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        <div >
          <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
          <input onChange={handleChange}  placeholder={userData.password} name='password' type="password" id="district" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
      </div>
      
    </div>




    <div class="flex flex-wrap mb-5 mt-8">

{/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
<button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><img  className='w-[35px]' src={arrow} alt="" srcset="" /></button>
</div>
      </form>
</div>
    
  )
}
