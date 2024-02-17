import React from 'react'
import { Outlet } from 'react-router-dom'

export const Adminnav = () => {
  return (
    <div className=''>
        <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-2 items-center'>
        <img  src="" alt="" className='w-16'/>
        <div className='font pr-5 text-center'>LOG OUT</div></div>        
    </div>
    <Outlet></Outlet>
    
    
    
    </div>
  )
}
