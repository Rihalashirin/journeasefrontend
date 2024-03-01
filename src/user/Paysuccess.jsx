import React from 'react'

export const Paysuccess = () => {
  return (
    <div className='userhome'>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 h-96'>
          <div className='font-bold text-white text-center text-4xl mt-20'>  PAYMENT SUCCESSFUL</div>
         <div className='flex flex-col flex-wrap items-center gap-7 mt-36'><button className='bg-white w-48 rounded-lg'>Download Receipt</button>
          <button className='bg-orange-600 w-48 rounded-lg'>Back to Home</button>
          </div> 
        </div>

    </div>
  )
}
