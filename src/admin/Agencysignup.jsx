import React from 'react'
import { Link } from 'react-router-dom'

export const Agencysignup = () => {
  return (
    <div className='adminbg'>
    <div className='flex flex-col gap-2'>
     <div className=' font text-[30px] font-bold pl-5 pt-6'>
          <span className='text-white'>Agency,</span><span className='text-orange-600'> Sign Ups</span>
        </div>
      {/* <div className='w-[90%] h-7 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-normal pl-5 items-center gap-[27rem]' >
        <div className='font text-black'>Company Name</div>
        <div className='font text-black'>OfficeAddress</div>
        <div className='bg-white'></div>
        
      </div> */}
      {/* <div className='w-[90%] h-16 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-between items-center pl-5 pr-8'>
      <div className='font text-black'>Well Trip Planners</div>
        <div className='font text-black'>Kerala</div>
        <Link to='/admin/vwandacceptagency'><button className='font bg-orange-600 rounded-lg text-white '>View Details</button></Link>
      </div> */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-center rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#9B9B9B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    COMPANY NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    OFFICE ADDRESS
                </th>
                
                
                
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 font-semibold">
                    1.
                </td>
                <td class="px-6 py-4">
                    WellTrip Planners
                </td>
                <td class="px-6 py-4">
                  Kozhikode
                </td>
                
       
                <td class="px-6 py-4 flex flex-wrap flex-col gap-2">
                    {/* <a href="#" class="font-bold text-sm text-black bg-orange-600 hover:underline hover:bg-gray p-1">view details</a> */}
                    <Link to='/admin/vwandacceptagency'><button className='w-32 font bg-orange-600 rounded-lg text-white '>View Details</button></Link>
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>
      </div>
  </div>
  )
}
