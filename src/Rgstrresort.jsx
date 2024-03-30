import React from 'react'
import arrow from './agency/images/Arrow.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Rgstrresort = () => {
  const navigate=useNavigate()
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
      let formData = new FormData();
      formData.append('propertyName',data.propertyName);
      formData.append('registrationNumber',data.registrationNumber);
      formData.append('propertyAddress',data.propertyAddress);
      formData.append('contactNumber',data.contactNumber);
      formData.append('ownerName',data.ownerName);
      formData.append('coverImage',data.coverImage);
      formData.append('description',data.description);
      formData.append('aboutUs',data.aboutUs);
      formData.append('events',data.events);
      formData.append('email',data.email);
      formData.append('password',data.password);

      formData.append('userType','resort')
      let response=await axios.post('http://localhost:4000/user/registration',formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response);
    }
    //  navigate('/regresort1')
      
  

  return (
    <div className='bg-[#1a2954d6] h-[467px]'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Resort</span><span className='text-orange-600'>Profile</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Property Name:</label>
              <input onChange={handleChange}  name='propertyName' type="name" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div>
              <label for="registrationnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Registration No.:</label>
              <input onChange={handleChange}  name='registrationNumber' type="text" id="registratinnumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="address" class="block mb-2 text-sm font-medium text-white dark:text-white">Property Address:</label>
              <input onChange={handleChange}  name='propertyAddress' type="text" id="address" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="contactnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input onChange={handleChange}  name='contactNumber' type="contactnumber" id="contactnumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
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
              <label for="ownername" class="block mb-2 text-sm font-medium text-white dark:text-white">Owner Name :</label>
              <input onChange={handleChange}  name='ownerName' type="ownername" id="ownername" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div >
              <label for="coverimage" class="block mb-2 text-sm font-medium text-white dark:text-white">Cover Image:</label>
              <input onChange={handlefile}  name='coverImage' type="file" id="coverimage" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">Description :</label>
              <input onChange={handleChange}  name='basicDescription' type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">About us :</label>
              <input onChange={handleChange}  name='aboutUs' type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="post" class="block mb-2 text-sm font-medium text-white dark:text-white">events :</label>
              <input onChange={handleChange}  name='events' type="text" id="post" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handleChange} name='email' type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handleChange}  name='password' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Confirm Password:</label>
              <input  onChange={handleChange}  name='cpassword' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
 <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><img className='w-[35px]' src={arrow} alt="" srcset="" /></button>
  </div>
      </form>
    </div>
  )
}
