import React, { useEffect, useState } from 'react'
import arrow from './Arrow.png'
import { Link, json, useParams } from 'react-router-dom'
import axios from 'axios'

export const Updatereg2 = () => {
  let id=localStorage.getItem('id')
  
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost:4000/resort/viewroom/${id}`)
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
   let response=await axios.put(`http://localhost:4000/resort/editroom/${id}`,formData,{
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type for FormData
    }
   })
   console.log(response);
   setrefresh(!refresh)
   setData('')
    
}

  return (
    <div className='bg-[#1a2954d6] '>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
<span className='text-white'>Update, </span><span className='text-orange-600'> Room Facility</span>
</div>
<form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%]  '>

            <div className='mb-2'>
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Room Types Available:</label>
              <div className='flex flex-wrap items-center gap-10 text-[30px] '>
              <div className='flex gap-10 items-center  '>

              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Luxury:</label>
              {/* <input onChange={handleChange} type="checkbox" id="name" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" placeholder="" required /> */}
              </div>
              <div className='flex gap-10 items-center '>

              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Standard:</label>
              {/* <input onChange={handleChange} type="checkbox" id="name" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" placeholder="" required /> */}
              </div>
              </div>
            </div>
            <div>
              <p>{data.luxury}</p>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">No of Rooms Available-Luxury.:</label>
              <input onChange={handleChange} placeholder={userData.luxury} name="luxury" type="number" id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Add Images:</label>
              <input onChange={handlefile}  placeholder={userData.image} name='image' type="file" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">No of Rooms Available-Standard:</label>
              <input onChange={handleChange} placeholder={userData.standard} name="standard" type="number" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Add Images:</label>
              <input onChange={handlefile}name='images' placeholder={userData.images} type="file" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            {/* <div >
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Address :</label>
              <input type="contact" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div> */}
          </div>
          <div className='w-[25%]'>

            <div >
              <label for="occupancy" class="block mb-2 text-sm font-medium text-white dark:text-white">Maximum Occupancy/Rooms-Luxury :</label>
              <input onChange={handleChange} name="luxuryOccupancy"  placeholder={userData.luxuryOccupancy} type="number" id="occupancy" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
            </div>
            <div >
              <label for="occupancy" class="block mb-2 text-sm font-medium text-white dark:text-white">Maximum Occupancy/Rooms-Standard:</label>
              <input onChange={handleChange} type="number" name='standardOccupancy' placeholder={userData.standardOccupancy} id="occupancy" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="price" class="block mb-2 text-sm font-medium text-white dark:text-white">Price-Luxury :</label>
              <input onChange={handleChange} placeholder={userData.luxuryprice } type="number" id="price" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="price" class="block mb-2 text-sm font-medium text-white dark:text-white">Price-Standard:</label>
              <input onChange={handleChange} placeholder={userData.standardPrice} type="number" id="price" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            {/* <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input type="district" id="district" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div> */}
          </div>
          
        </div>






        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto  m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl  px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><img className='w-[35px] ' src={arrow} alt="" srcset="" /></button>
  </div>
      </form>


    </div>
  )
}
