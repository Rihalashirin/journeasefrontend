import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Vwreviewagency = () => {
  
 
  return (
    <div className='pencil'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Reviews</span>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white bg-orange-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   Sl.No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Package
                </th>
                <th scope="col" class="px-6 py-3">
                   Days
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                
                
                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akshay Kumar
                </th> */}
                <td class="px-6 py-4">
                gfd
                </td>
                <td class="px-6 py-4">
                gdhb
                </td>
                <td class="px-6 py-4">  
               fgfdh
                </td>
                <td class="px-6 py-4">
                  dfgfd
                  
                </td>
                <td class="px-6 py-4">
                  pending
                  
                </td>
                
                
                
                
               
                <td class="px-6 py-4">
                  <button className='bg-orange-600 text-white rounded-lg p-2'>View details</button> 
                </td>
            </tr>
           
         

           
        </tbody>
    </table>
</div>
          <div className='bg-white ms-4 ps-4 me-8 mt-5'>
           <div className='font-bold'> Dennis Philipp</div>
           <div className='flex flexwrap text-orange-700 gap-10'>
            <div>10/02/24</div>
            <div>Delhi delight</div></div>
            <div>I had an amazing time at the resort package! The place is so fancy and comfy. The room I stayed in was big and had everything I needed. The pool was cool, surrounded by pretty plants. I also got a spa treatment that felt so nice and ...</div>
            </div>  
    </div>
  )
}
