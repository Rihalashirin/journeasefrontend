import React from 'react'
import { Outlet } from 'react-router-dom'
import homeicon from './Group 93.png'
import { Link } from 'react-router-dom'

export const Navguide = () => {
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
       <Link to='/guide'> <div><img className='w-[40px] ' src={ homeicon} alt="" srcset="" /></div></Link>
      <Link to='/guide/issuewrite'> <div className='font text-orange-600 '>ISSUES</div></Link> 
        <Link to='/guide/guidemngenqry'><div className='font text-orange-600 '>ENQUIRIES</div></Link>
      <Link to='/guide/photoupload'> <div className='font text-orange-600 '>IMAGES</div></Link> 
        
      <Link to='/'><div className='font text-orange-600 pr-5 text-center'>LOG OUT</div></Link>  </div>        
    </div>
    <Outlet/>
      
    </div>
  )
}
