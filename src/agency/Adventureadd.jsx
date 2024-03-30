import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Adventureadd = () => {
 let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
    
    
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    let formData = new FormData();
      formData.append('adventureName',data.adventureName);
      formData.append('location',data.location);
      formData.append('description',data.description);
      formData.append('image',data.image);
      formData.append('price',data.price);
      
      formData.append('agencyid',id);
      setData(data)
      console.log(data);
   let response=await axios.post('http://localhost:4000/agency/adventureadd',formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
   })
   console.log(response);

    // navigate('/agency/addpkg1')
}
  return (
    <div>
         <div className='bg-[#1a2954d6] h-[467px]' >
         <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Add  </span><span className='text-orange-600'> Adventures</span>
          </div>
          <form  onSubmit={handleSubmit} class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Adventure Name
      </label>
      <input onChange={handleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"  name="adventureName" type="text" placeholder=""/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Location
      </label>
      <input onChange={handleChange} name='location' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Upload Image
      </label>
      <input onChange={handlefile} name='image' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="file" placeholder=""/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        price
      </label>
      <input onChange={handleChange} name='price' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder=""/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label> */}
      <div class="relative">
        {/* <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select> */}
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Description
      </label>
      <input onChange={handleChange} name='description' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder=""/>
    </div>
  </div>
  <button className='bg-orange-600 w-32 text-white rounded-lg '>submit</button>
</form>


          </div>
    </div>
  )
}
