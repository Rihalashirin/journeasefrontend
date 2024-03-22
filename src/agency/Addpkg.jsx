import React, { useState } from 'react'
import arrow from './images/Arrow.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Addpkg = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
    
    
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
     let response=await axios.post('http://localhost:4000/agency/package',data)
     console.log(response);

      navigate('/agency/addpkg1')
  }
  return (
    <div className='bg-[#1a2954d6] h-[467px]' >
         <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Add a </span><span className='text-orange-600'> Package</span>
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
                <input onChange={handleChange} type="text" name="packageName" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Location</label>
                <input onChange={handleChange} type="text" name="location" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="destination">Destination</label>
                <input onChange={handleChange} type="text" name="destination" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>

              <div class="md:col-span-5">
                <label for="email">Cover Image</label>
                <input onChange={handleChange} type="file" name="coverImage" id="email" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"  placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="days">No of days</label>
                <input onChange={handleChange} type="text" name="noOfDays" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="email">upload Brochure</label>
                <input onChange={handleChange} type="file" name="uploadBrochure" id="brochure" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"   />
              </div>

              {/* <div class="md:col-span-2">
                <label for="city">Upload Brochure</label>
                <input type="file" name="city" id="city" class="h-10 border mt-1 rounded px-4 ms-6  bg-gray-50" value="" placeholder="" />
              </div> */}

              {/* <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div> */}

              {/* <div class="md:col-span-2">
                <label for="state">Basic Description</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div> */}
{/* 
              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div> */}

              {/* <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div> */}

              {/* <div class="md:col-span-2">
                <label for="soda">How many soda pops?</label>
                <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div> */}
      <div class="md:col-span-5">
                <label for="full_name">Basic Description</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange} name="basicDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Detailed Information</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange} name="detailedDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
      <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"/>
    </a> */}
  </div>
</div>
                   
                    
</form>                  

    </div>
  )
}
