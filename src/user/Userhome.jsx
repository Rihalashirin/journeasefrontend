import React from 'react'
import plantrip from './PlanTripIcon.png'
import notificatn from './NotificationIcon.png'
import mngprofile from './manageprofile.png'
import reviews from './reviewsicon.png'
import { Link } from 'react-router-dom'

export const Userhome = () => {
  return (
    <div className='userhome' >
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Rihala</span>
          </div>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-96  font text-white '>
       <Link to='/user/planpkg'> <div><img src={plantrip} alt="" className='w-20' />Plan a Trip</div></Link>
        <Link to='/user/notificatn'> <div> <img src={notificatn} alt="" className='w-20'/>Notifications</div> </Link>
            <Link to='/user/addreview' ><div> <img src={reviews} alt="" className='w-20' />Add Reviews</div></Link> 
          <Link to='/user/updateprofile' > <div><img src={mngprofile} alt="" className='w-20' />Edit Profile</div></Link>
  
      </div>
    </div>
  )
}
