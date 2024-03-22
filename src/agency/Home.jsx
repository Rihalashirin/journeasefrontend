import React from 'react'
import addpkg from './images/addpackage.png'
import vwpkg from './images/ViewPackIcon.png'
import mngenqry from './images/enquiries.png'
import revws from './images/reviewsicon.png'
import uploads from './images/Group 114.png'


import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='pencil'>
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Planner</span>
          </div>

      <div className='flex flex-wrap gap-20 justify-center items-center  h-[80%]  font text-white '>
        <Link to='/agency/addpkg'><div className='flex flex-col items-center gap-2'><img src={addpkg} alt="" className='w-20 ' /><p>Add Package</p></div></Link>
        <Link to='/agency/vwpkg'> <div className='flex flex-col items-center gap-2'> <img src={vwpkg} alt="" className='w-20 '/><p>View Package</p></div> </Link>
          <Link to='/agency/cstmrenqry'> <div className='flex flex-col items-center gap-2'> <img src={mngenqry} alt="" className='w-20 ' /><p>Customer Enquiries</p></div> </Link> 
           <Link to='/agency/vwreviewagency'><div className='flex flex-col items-center gap-2'> <img src={revws} alt="" className='w-20' /><p>Customer Reviews</p></div> </Link> 
           <Link to='/agency/vwissuesagency'><div className='flex flex-col items-center gap-2'> <img src={uploads} alt="" className='w-20' /><p>Guide Uploads</p></div></Link>
          

      </div>
      
      
    </div>
  )
}

