import React from 'react'
import propic from './guideprofile.png'
import addimg from './addimg.png'
import issues from './issues.png'
import enqry from './enqryicon.png'
import { Link } from 'react-router-dom'


export const Guidehome = () => {
  return (
    <div className='guidehome'>
        <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Phil</span>
          </div>

         
        <div className='flex flex-wrap gap-10 justify-center items-center  h-[80%]  font text-white '>
       <Link to='/guide/guidemngenqry'> <div><img src={enqry} alt="" className='w-20' />Manage Enquiries</div></Link>
        <Link to='/guide/photoupload'> <div> <img src={addimg} alt="" className='w-20'/>Add Images</div> </Link>
           <Link to='/guide/updatepro'><div> <img src={propic} alt="" className='w-20' />Edit Profile</div> </Link> 
         <Link to='/guide/issuewrite' ><div> <img src={issues} alt="" className='w-20' />Add Issues</div></Link> 
  
        
         </div></div>
         
        
    
  )
}
