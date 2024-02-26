import React from 'react'


export const Guidehome = () => {
  return (
    <div className='guidehome'>
        <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Phil</span>
          </div>

         
        <div className='flex flex-wrap gap-20 justify-center items-center  h-[80%]  font text-white '>
        <div><img src="/guide/Guide-Home.png" alt="" className='w-20' />Manage Profile</div>
         <div> <img src="/guide/Guide-Home.png" alt="" className='w-20'/>Manage Enquiries</div> 
            <div> <img src="/guide/Guide-Home.png" alt="" className='w-20' />Add images</div> 
  
        
         </div></div>
         
        
    
  )
}
