import React from 'react'

export const Userhome = () => {
  return (
    <div className='userhome' >
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Rihala</span>
          </div>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-[80%]  font text-white '>
        <div><img src="/images/Rectangle 516.png" alt="" className='w-20' />Plan a Trip</div>
         <div> <img src="/images/Rectangle 517.png" alt="" className='w-20'/>Notifications</div> 
            <div> <img src="/images/Rectangle 518.png" alt="" className='w-20' />Add Reviews</div> 
  
      </div>
    </div>
  )
}
