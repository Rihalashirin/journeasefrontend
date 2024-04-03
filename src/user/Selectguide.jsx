import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Selectguide = () => {
  const [data,setData]=useState('')
  // const navigate=useNavigate()
  let id2=localStorage.getItem('id')  
  let {id}=useParams()

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
}
let handleSubmit=async (event)=>{
    event.preventDefault()
    setData(data)
    console.log(data)
   let response=await axios.post(`http://localhost:4000/user/booking`,{...data,userId:id2,packageid:id})
   console.log(response);
    // navigate(`/user/selectadventure/${id}`)
}
  return (
    <div className='userhome'>
<form onSubmit={handleSubmit} action="">
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Request a</span><span className='text-orange-600'> Guide</span>
          </div>
          <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            

<fieldset>
  <legend class="sr-only">Countries</legend>
<div className='flex flex-wrap justify-around'>
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-1" type="radio" name="guide" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
      Yes,I would like to have a Guide.
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-2" type="radio" name="guide" value="false" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Guide.
    </label>
  </div>
  </div>

  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-4" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      United Kingdom
    </label>
  </div> */}

  {/* <div class="flex items-center">
    <input id="option-disabled" type="radio" name="countries" value="China" class="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" disabled/>
    <label for="option-disabled" class="block ms-2 text-sm font-medium text-gray-300 dark:text-gray-700">
      China (disabled)
    </label>
  </div> */}
</fieldset>
<div className='font'>Set preferences</div>
<div className='flex flex-wrap gap-9'>
<div className='flex flex-col gap-0'>
<div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="gender" value="male" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      male
    </label>
  </div>
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="gender" value="female"  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      female
    </label>
  </div>
  </div>
  <div className='flex flex-wrap flex-col '>
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="experience" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Experience  5 Years
    </label>
  </div>
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="experience" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Experience 5 years
    </label>
  </div>
  </div>
  </div>
  
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="health" value="true" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Yes,I would like to have Health assistant
    </label>
  </div>
  
  <div className='flex flex-wrap flex-col '>
  <div class="flex items-center mb-4">
    <input onChange={handleChange} id="country-option-3" type="radio" name="health" value="false" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-3" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Health Assistant
    </label>
  </div>
  </div>
  
  
  
  

          </div>
          <Link to='/user/vwresortdet'></Link><div className='flex flex-wrap gap-11  justify-center m-7 '><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button>
           <button type='submit' className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></div>
        
          </form>
    </div>
  )
}
