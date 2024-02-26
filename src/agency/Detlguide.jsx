import React from 'react'
import guide1 from './images/guide1.png'

export const Detlguide = () => {
  return (
    <div className='pencil'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Valsaraj Kumar</span>
        </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='flex flex-wrap gap-7'>
            <img src={guide1} alt="" srcset="" />
            <div className='font font-bold text-white'>Valsaraj Kumar <br />Exp:5 years</div>
            </div>
            <button className='bg-orange-600'>Request</button>

        </div>
    </div>
  )
}
