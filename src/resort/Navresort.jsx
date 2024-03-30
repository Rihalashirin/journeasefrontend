import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import homeicon from '../agency/images/Group 93.png'

export const Navresort = () => {
  let id=localStorage.getItem('id')
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
       <Link to='/resort'><div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link> 
       <Link to='/resort/resortvwbooking'> <div className='font text-orange-600 '>BOOKINGS</div></Link>
       <Link to='/resort/resortmngenqry'> <div className='font text-orange-600 '>ENQUIRIES</div></Link>
      <Link to='/resort/resortvwreview'> <div className='font text-orange-600 '>REVIEWS</div></Link>
      <Link to='/regresort1'> <div className='font text-orange-600 '>add room</div></Link>
      <Link to='/resort/addfacilities'> <div className='font text-orange-600 '>facilities</div></Link>
      <Link to={`/resort/updatereg2/${id}`}> <div className='font text-orange-600 '>updateroom</div></Link>
      <Link to={`/resort/updatereg3/${id}`}> <div className='font text-orange-600 '>updatefacility</div></Link>
        
       <Link to='/'> <div className='font pr-5 text-center text-orange-600'>LOG OUT</div></Link>
        </div>        
    </div>
    <Outlet/>
      
    </div>
  )
}
