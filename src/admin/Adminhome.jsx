import React from 'react'
import { Link } from 'react-router-dom'
import packImg from '../agency/images/ViewPackIcon.png'
export const Adminhome = () => {
  return (
    <div className='adminbg'>
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Admin</span>
          </div>
          <div className='flex flex-wrap gap-16 justify-center items-center  h-[80%]  font text-white '>
        <Link to='/admin/request'> <div><img src="/images/friend-request.png" alt="" className='w-20' />Manage Request</div></Link>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-[80%]  font text-white '>
         <Link to='/admin/bookings'><div><img src="/images/bookingicon.png" alt="" className='w-20' />Bookings</div></Link>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-[80%]  font text-white '>
        <Link to='/admin/pkg'><div><img src={packImg} alt="" className='w-20' />Packages</div></Link> 
          </div> 
          </div>
  
      </div>
    </div>
  )
}

