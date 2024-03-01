import React from 'react'
import place1 from './Rectangle 36.png'
import place2 from './Rectangle 37.png'
import place3 from './Rectangle 38.png'
import place4 from './Rectangle 39.png'
import place5 from './Rectangle 40.png'
import place6 from './Rectangle 41.png'
import place7 from './Rectangle 42.png'

export const Photosupload = () => {
  return (
    <div className='guidehome'>
         <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Add</span><span className='text-orange-600'> Images</span>
          </div>
        

          <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<div className='flex flex-wrap gap-3 mt-5 bg-slate-300'>
  <img  className='w-32 pt-2 ps-2 pb-2' src={place1} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place2} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place3} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place4} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place5} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place6} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place7} alt="" srcset="" />
  
 
</div>

    </div>
  )
}
