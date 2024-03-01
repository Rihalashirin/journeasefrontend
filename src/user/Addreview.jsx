import React from 'react'
import { Link } from 'react-router-dom'

export const Addreview = () => {
  return (
    <div className='userhome'>
         <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            Add Review
          </div>
          <div className='flex flex-wrap justify-between bg-white me-8 ms-6 mt-12 h-10 items-center rounded-lg'>
       <Link to='/user/writereview'>  <div className= 'text-black pl-6 font-bold'>Delhi Delight</div></Link> 
          
          </div>

    </div>
  )
}
