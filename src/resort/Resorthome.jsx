import React from 'react'
import resorthome from './Resort-Home.png'
import bookicon from './bookingicon.png'
import enqryicon from './enqryicon.png'
import reviewicon from './reviewsicon.png'
import profileicon from './profileicon.png'
import { Link } from 'react-router-dom'

export const Resorthome = () => {
  return (
    <div>
    <div className='resorthome h-screen w-[100%] '>
    <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Resort Owner</span>
          </div>
         <div className='flex gap-8 items-center justify-center pt-52 flex-wrap'>
        <Link to='/resort/resortvwbooking'><div className='font text-white text-center'>
         <img src={bookicon} alt="" className='w-28 h-28 font ' srcset="" />
         Bookings
         </div></Link>
        <Link to='/resort/resortmngenqry'><div className='font text-white text-center'> <img src={enqryicon} alt="" className='w-28 h-28' srcset="" />
         Enquiries</div></Link>
         <Link to='/resort/resortvwreview'><div className='font text-white text-center'><img src={reviewicon} alt="" className='w-28 h-28' srcset="" />
         Reviews   </div></Link>
       <Link to='/resort/resortprofile'> <div className='font text-white text-center'> <img src={profileicon} alt="" className='w-28 h-28' srcset="" />
         Edit profile </div></Link>
         </div>
         </div>
    </div>
  )
}
