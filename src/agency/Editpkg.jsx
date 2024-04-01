import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Editpkg = () => {
    // let id=localStorage.getItem('id')
    let {id}=useParams()
  
    const [userData,setUserData]=useState('')
    const [refresh,setrefresh]=useState(false)
    useEffect(()=>{
      let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:4000/agency/detailvwpkg/${id}`)
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
       let response=await axios.put(`http://localhost:4000/agency/editpackage/${id}`,formData,{
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
        <div className='bg-[#1a2954d6] h-[467px]' >
         <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Update </span><span className='text-orange-600'> Package</span>
          </div>
          
   <form onSubmit={handleSubmit}>
<div class="min-h-screen p-6 bg-[#1a2954d6] flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      {/* <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            {/* <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p> */}
          </div>

          <div class="lg:col-span-2 ">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Package Name</label>
                <input onChange={handleChange} placeholder={userData?.packageName} type="text" name="packageName" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Location</label>
                <input onChange={handleChange}  placeholder={userData?.location}  type="text" name="location" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="destination">Destination</label>
                <input onChange={handleChange}  placeholder={userData?.destination} type="text" name="destination" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>

              <div class="md:col-span-5">
                <label for="email">Cover Image</label>
                <input onChange={handlefile} type="file" name="coverImage" id="email" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"  placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="days">No of days</label>
                <input onChange={handleChange}  placeholder={userData?.noOfDays} type="text" name="noOfDays" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-3">
                <label for="days">price</label>
                <input onChange={handleChange}  placeholder={userData?.price} type="number" name="price" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="email">upload Brochure</label>
                <input onChange={handlefile} type="file" name="uploadBrochure" id="brochure" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"   />
              </div>

              

              
      <div class="md:col-span-5">
                <label for="full_name">Basic Description</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange}  placeholder={userData?.basicDescription} name="basicDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Detailed Information</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange}  placeholder={userData?.detailedDescription} name="detailedDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">update</button>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
                   
                    
</form>                  

    </div>
    </div>
  )
}
