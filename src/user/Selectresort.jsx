import React from 'react'
import seaview from './seaview.png'
import delux from './deluxmotel.png'
import { Link } from 'react-router-dom'

export const Selectresort = () => {
  return (
    <div className='userhome'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Select an</span><span className='text-orange-600'> Accomodation</span>
          </div>
          <div className='flex flex-wrap sm:gap-5  '>
                <div className=' pt-28 text-center text-white '>
                    <img src={seaview} className='m-auto' alt="" srcset="" />
                   <Link to='/user/vwresortdet'> <div className='font font-bold'>Hotel Sea View</div></Link>
                </div>
                <div className=' pt-28 text-center text-white '>
                    <img src={delux} className='m-auto' alt="" srcset="" />
                    <div className='font font-bold'>Delux Motel</div>
                </div>
                </div>
    </div>
  )
}
