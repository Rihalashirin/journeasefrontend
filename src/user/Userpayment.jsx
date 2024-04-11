import React from 'react'
import { Link } from 'react-router-dom'

export const Userpayment = () => {
  return (
    <div className='userhome'>
        <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            Make Payment
          </div>
          <fieldset>
            <div className='bg-orange-600 w-28 text-white text-center float-end me-2'>Rs.47500</div>
  <legend class="sr-only">Countries</legend>
<div className='flex flex-wrap pt-5'>
  <div class="flex items-center mb-4 ">
    <input id="country-option-1" type="radio" name="countries" value="USA" class=" ms-5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-bold text-white dark:text-gray-300">
      Debit card
    </label>
  </div>
  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Guide.
    </label>
  </div> */}
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
{/* <div>Card Number</div>
<div className='bg-white'>
<input type='text'></input></div>
<div>CVV</div>
<div>Name of the Card Holder</div> */}
<form class="max-w-sm mx-auto">
   
  <div class="mb-3 flex flex-wrap  items-center w-[25rem] justify-between">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">Card Number</label></div>
   <div> <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /></div>
  </div>
  <div class="mb-3 flex flex-wrap w-[25rem] justify-between items-center">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">CVV</label></div>
   <div> <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /></div>
  </div>
  <div class="mb-3 flex flex-wrap w-[25rem] justify-between items-center">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">Name of the Card Holder</label></div>
   <div> <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /></div>
  </div>
  
  </form>
 <Link to='/user/paysucccess'> <button className='bg-orange-600 text-white w-24 rounded-lg float-end me-52'>PAY</button></Link>
  <fieldset>
            <div className='bg-orange-600 w-28 text-white text-center float-end me-2'>Rs.47500</div>
  <legend class="sr-only">Countries</legend>
<div className='flex flex-wrap pt-5'>
  <div class="flex items-center mb-4 ">
    <input id="country-option-1" type="radio" name="countries" value="USA" class=" ms-5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-bold text-white dark:text-gray-300">
      UPI
    </label>
  </div>
  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Guide.
    </label>
  </div> */}
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
    </div>
  )
}



