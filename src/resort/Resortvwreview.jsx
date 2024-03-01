import React from 'react'

export const Resortvwreview = () => {
  return (
    <div className='resorthome'>
         <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Reviews</span>
          </div>
        <div className='bg-gray-400 p-3 rounded-lg align-text-bottom  w-44 ms-6'>
            
                      <div className='flex flex-wrap'>
                        {/* <img className='h-[25px] w-[25px]'src={review} alt="" /> */}
                        <h6 className='text-black ps-1'>Dennis Philipp</h6>
                       <div className='font font-bold text-[10px] text-black '><span> 10/02/2024</span></div>
                         
                        </div>
                        <div className='bg-white'>
                        {/* <h1 className='font-semibold text-base text-gray-700'>ADS orph</h1> */}
                      <p className='text-black text-sm'>provided all the necessary items on time</p>

                      </div>
              </div>
    </div>
  )
}
