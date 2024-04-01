import React from 'react'

import { Link } from 'react-router-dom'

export const Uservwresortdetail = () => {
  
  return (
    <div className='userhome'>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
        <div className='flex flex-wrap sm:gap-5  '>
                <div className=' pt-28 text-center text-white '>
                    </div>
                    
                 <Link to='/user/vwreviewresort'> <button className='bg-orange-600 rounded-lg w-28 h-5 text-white pb-4 ms-96'>Review</button></Link> 
                
        </div>
        <div className='flex flex-wrap gap-8'>
       <Link to='/user/Accomodatn'><button className='bg-orange-600 w-32 h-5'>GO BACK</button></Link> 
       <Link to='/user/chooseguide'> <button className='bg-orange-600 w-32 h-5'>PROCEED</button></Link>
        </div>

        </div>

    </div>
  )
}
