import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Userprofile = () => {
  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/agency/vwagencyprofile/${id}`)
      console.log(response.data);
      setUserData(response.data)
    }
    fetchdata()
    
  },[refresh])
  const handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    const formData = new FormData();
    for (const key in userData) {
      if (userData[key]) {
        formData.append(key, userData[key]);
      }
    }


    let response=await axios.put(`http://localhost:4000/agency/agencyeditprofile/${id}`,formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type for FormData
      }
    }
  )
    console.log(response);
    setrefresh(!refresh)
  }
  return (
    <div className='bg-[#1a2954d6] h-[467px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Update </span><span className='text-orange-600'>Profile</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name :</label>
              <input onChange={handlechange} placeholder={userData.name} type="text" name='name' id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.name}  />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Age:</label>
              <input onChange={handlechange} placeholder={userData.age} type="text" name='age' id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"placeholder={userData.age}   />
            </div>
            <div >
              <label for="gender" class="block mb-2 text-sm font-medium text-white dark:text-white">Gender:</label>
              <input onChange={handlechange} placeholder={userData.gender} type="text" name='gender' id="gender" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.gender}   />
            </div>
            <div>
              <label for="contactnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input onChange={handlechange} placeholder={userData.contactNumber} type="number" name='contactNumber' id="contactnumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.contactNumber}   />
            </div>
            <div>
              <label for="image" class="block mb-2 text-sm font-medium text-white dark:text-white">Image:</label>
              <input onChange={handlefile}  type="file" name='image' id="image" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.image}   />
            </div>
            {/* <div >
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">ID proof:</label>
              <input type="contact" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div> */}
          </div>
          <div className='w-[25%]'>

            {/* <div >
              <label for="house name" class="block mb-2 text-sm font-medium text-white dark:text-white">Image :</label>
              <input type="file" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=""  />
            </div> */}
            <div >
              <label for="idproof" class="block mb-2 text-sm font-medium text-white dark:text-white">ID Proof :</label>
              <input onChange={handlefile} type="file" name='idProof' id="idproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.idProof}   />
            </div>
            <div >
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Place:</label>
              <input onChange={handlechange}  placeholder={userData.place} type="text"  name='place' id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.place}   />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handlechange} placeholder={userData.email} type="email" name='email' id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.email}  />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handlechange} placeholder={userData.password} type="password" name='password' id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.password}   />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
  </div>
      </form>
    </div>
  )
}
