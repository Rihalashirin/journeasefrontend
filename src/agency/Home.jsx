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
        <Link to='/agency/addpkg'><div><img src={addpkg} alt="" className='w-20 ' />Add Package</div></Link>
        <Link to='/agency/vwpkg'> <div> <img src={vwpkg} alt="" className='w-20 '/>View Package</div> </Link>
          <Link to='/agency/cstmrenqry'> <div> <img src={mngenqry} alt="" className='w-20 ' />Customer Enquiries</div> </Link> 
           <Link to='/agency/vwreviewagency'><div> <img src={revws} alt="" className='w-20' />Customer Reviews</div> </Link> 
           <Link to='/agency/vwissuesagency'><div> <img src={uploads} alt="" className='w-20' />Guide Uploads</div></Link>
          

      </div>
      
      
    </div>
  )
}

