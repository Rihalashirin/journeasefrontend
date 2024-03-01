import React from 'react'
import place1 from './images/Rectangle 37.png'
import place2 from './images/Rectangle 38.png'
import place3 from './images/Rectangle 39.png'
import place4 from './images/Rectangle 40.png'
import place5 from './images/Rectangle 41.png'
import place6 from './images/Rectangle 42.png'

export const Vwphotoagency = () => {
  return (
    <div className='pencil'>
         <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Photos</span>
          </div>
          <div className='flex flex-wrap gap-6'>
  <img  className='w-32 pt-2 ps-2 pb-2' src={place1} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place2} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place3} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place4} alt="" srcset="" />
  <img className='w-32 pt-2 ps-2 pb-2' src={place5} alt="" srcset=""/>
  </div>  
    </div>
  )
}
