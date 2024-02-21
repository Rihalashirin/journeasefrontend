import React from 'react'

export const Resortsignup = () => {
  return (
    <div className='adminbg'>
      <div className='flex flex-col gap-2'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Resort,</span><span className='text-orange-600'> Sign Ups</span>
          </div>
        <div className='w-[90%] h-7 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-normal pl-5 items-center gap-[27rem]' >
          <div className='font text-black'>Resort Name</div>
          <div className='font text-black'>Location</div>
          <div className='bg-white'></div>
          
        </div>
        <div className='w-[90%] h-16 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-between items-center pl-5 pr-8'>
        <div className='font text-black'>Hotel Sea view</div>
          <div className='font text-black'>Delhi</div>
          <button className='font bg-orange-600 rounded-lg text-white '>View Details</button>
        </div></div>
    </div>
  )
}
