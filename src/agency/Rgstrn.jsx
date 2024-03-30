import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Rgstrn = () => {
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
          let formData = new FormData();
          formData.append('companyName',data.companyName);
          formData.append('licenseNumber',data.licenseNumber);
          formData.append('officeAddress',data.officeAddress);
          formData.append('contactNumber',data.contactNumber);
          formData.append('licenseProof',data.licenseProof);
          formData.append('companyLogo',data.companyLogo);
          formData.append('email',data.email);
          formData.append('password',data.password);
          formData.append('userType','agency');
          

            event.preventDefault()
           let response=await axios.post('http://localhost:4000/user/registration',formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
           })
           console.log(response);
            
        }
    return (
        <div className='bg-[#1a2954d6] h-[467px]'>
            <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Resgister as a </span><span className='text-orange-600'> Travel Planner</span>
          </div>
          <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white"> Company Name :</label>
              <input onChange={handleChange} value={data.companyname} name="companyName" type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div>
              <label for="licensenumber" class="block mb-2 text-sm font-medium text-white dark:text-white">License Number:</label>
              <input onChange={handleChange} value={data.licensenumber} name="licenseNumber" type="text" id="licensenumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="address" class="block mb-2 text-sm font-medium text-white dark:text-white">Office Address :</label>
              <input onChange={handleChange} value={data.officeaddress} name="officeAddress" type="text" id="address" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            {/* <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input type="email" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div> */}
            <div >
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number :</label>
              <input onChange={handleChange} value={data.contact} name="contactNumber" type="number" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="licenseproof" class="block mb-2 text-sm font-medium text-white dark:text-white">Licence Proof :</label>
              <input onChange={handlefile} value={data.proof} name="licenseProof" type="file" id="licenseproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
          </div>
          <div className='w-[25%]'>

            
            <div >
              <label for="logo" class="block mb-2 text-sm font-medium text-white dark:text-white">Company Logo :</label>
              <input onChange={handlefile} value={data.companylogo} name="companyLogo" type="file" id="logo" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handleChange} value={data.email} name="email" type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handleChange}  name="password" type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white"> Confirm Password:</label>
              <input onChange={handleChange}  name="cpassword" type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
  </div>
      </form>
          </div>
           

    )
}
