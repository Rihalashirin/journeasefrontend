import React from 'react'
import { Outlet } from 'react-router-dom' 
import homeicon from './Group 93.png'
import { Link } from 'react-router-dom'
export const Navuser = () => {
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
         <Link to='/user'><div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link> 
          <Link to='/user/plantrip'><div className='font text-orange-600 '>TRIP</div></Link>
           <Link to='/user/notificatn'><div className='font text-orange-600 '>NOTIFICATION</div></Link>
         <Link to='/user/addreview'> <div className='font text-orange-600 '>REVIEW</div></Link>
         <Link to='/user/mybookingtable'> <div className='font text-orange-600 '>MYBOOKING</div></Link>
        
       <Link to='/'><div className='font pr-5 text-center text-orange-600'>LOG OUT</div></Link> </div>        
    </div>
    <Outlet/>
      
    </div>
  )
}
