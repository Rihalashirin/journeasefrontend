import React from 'react'
import { Link } from 'react-router-dom'

export const Notification = () => {
  return (
    <div className='userhome'>
        <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            Notifications
          </div>
         <Link to='/user/vwnotificatn'> <div className='flex flex-wrap justify-between bg-white me-8 ms-6 h-10 items-center rounded-lg'>
         <div className= 'text-black pl-6'>WelTrip Planners</div>
          <div className='text-red-600 me-4'><li>New</li></div>
          </div></Link>

    </div>
  )
}
