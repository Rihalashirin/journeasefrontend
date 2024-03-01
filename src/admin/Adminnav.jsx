import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import homeicon from '../agency/images/Group 93.png'

export const Adminnav = () => {
  return (
    <div className=''>
        <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
        <img  src="" alt="" className='w-16'/>
       <Link to='/admin'> <div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link>
      <Link to='/admin/bookings'>  <div className='font text-orange-600 '>BOOKINGS</div></Link>
       <Link to='/admin/request'> <div className='font text-orange-600 '>REQUEST</div></Link>
       <Link to='/admin/pkg'><div className='font text-orange-600 '>PACKAGE</div></Link> 
       <Link to='/'><div className='font pr-5 text-center text-orange-600'>LOG OUT</div></Link> </div>        
    </div>
    <Outlet></Outlet>
    
    
    
    </div>
  )
}
