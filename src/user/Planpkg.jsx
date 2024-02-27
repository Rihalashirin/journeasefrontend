import React from 'react'
import delhi from './delhi.png'
import agency2 from './agency2.png'

export const Planpkg = () => {
  return (
    <div className='userhome'>
      <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
        <span className='text-white'>Select a </span><span className='text-orange-600'> Tour Planner</span>
      </div>
      <div className='flex flex-wrap gap-9'>
        <div className='flex flex-wrap sm:gap-5  '>
          <div className=' pt-28 text-center text-white '>
            <img src={delhi} className='m-auto' alt="" srcset="" />
            <div className='font font-bold'>Weltrip Planners <br />Delhi 4D</div>
          </div>



          <div>
          <div className='flex flex-wrap sm:gap-5  '>
          <div className=' pt-28 text-center text-white '>
            <img src={agency2} className='m-auto' alt="" srcset="" />
            <div className='font font-bold'>Solivagent Travels <br />Delhi 4D</div>
          </div>

          </div>
          </div>

        </div>
      </div>
    </div>

  )
}
