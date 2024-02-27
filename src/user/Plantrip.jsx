import React from 'react'

export const Plantrip = () => {
  return (
    <div className='userhome'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Give us a</span><span className='text-orange-600'> Head Start</span>
          </div> 
          <div>
            <div className='flex flex-wrap gap-6 justify-center mt-24'>
              <div><label for="place" class=" font block mb-2 text-sm font-light text-white ">Where would you like to go?:</label></div>
             <div> <input type="place" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-14% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light pt-0 pb-0" required /></div>
            </div>
            <div className='flex flex-wrap gap-6 justify-center m-5'>
              <div><label for="place" class=" font block mb-2 text-sm font-light text-white ">Whom are you traveling with?:</label></div>
              <div><label for="place" class=" font block mb-2 text-sm font-light text-white ">Adults:</label></div>
             <div> <input type="place" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-14% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light pt-0 pb-0" required /></div>
             <div><label for="place" class=" font block mb-2 text-sm font-light text-white ">Children:</label></div>
             <div> <input type="place" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-14% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light pt-0 pb-0" required /></div>
            
            </div>
            <div className='flex justify-center'>
            <button className='bg-orange-600 rounded-lg w-28 h-5 text-white  '>Next</button>
            </div>
            </div>


    </div>
  )
}
