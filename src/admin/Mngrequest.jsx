import React from 'react'
import { Link } from 'react-router-dom'

export const Mngrequest = () => {
  return (
    <div className='adminbg'>
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Manage,</span><span className='text-orange-600'> Request</span>
          </div>
          <div className='flex flex-col flex-wrap gap-9 items-center pt-44'>  
          <Link to='/admin/resortsign'><button className=' rounded-lg font text-orange-600 w-40 h-8 bg-white '>Hotel Signup</button> </Link>  
           <Link to='/admin/agencysign'> <button className='font rounded-lg text-orange-600 w-40 h-8 bg-white'>Agency Signup</button> </Link>
          <Link to='/admin/guidesignup'> <button className='font rounded-lg text-orange-600 w-40 h-8 bg-white'>Guide Signup</button> </Link> 
    </div>
    </div>
    
   
  )
}
