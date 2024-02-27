import React from 'react'

export const Vwnotificatn = () => {
  return (
    <div className='userhome'>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
        <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :  Dennis Philipp<br/>
               Email :  dennisphilipp@gmail.com<br/>
               Mobile:  8113867153 <br/><br/>
               </div>
               <div className='font flex flex-wrap gap-12 justify-between'>
                <div className='text-[20px] '>
                Package </div>
                
                <div>Delhi Delight</div>
                <div>4A 2C</div>
                <button className='bg-gray-400 w-28'>Rs.28000</button>
                </div>
                <div className='font flex flex-wrap gap-12 justify-between'>
                <div className='text-[20px] '>
                Accomodation </div>
                
                <div>Hotel Sea View</div>
                <div>Luxury</div>
                <button className='bg-gray-400 w-28'>Rs.15000</button>
                </div>
                <div className='font flex flex-wrap gap-12 justify-between'>
                <div className='text-[20px] '>
                Guide </div>
                
                <div>Valsaraj Kumar</div>
                
                <button className='bg-gray-400 w-28'>Rs.3000</button>
                </div>
                <div className='flex flex-wrap justify-between'>
                <div className='text-[20px] '>
                Health Assistant </div>
                
                
                
                <button className='bg-gray-400 w-28'>Rs.1500</button>
                </div>
                <div className='flex flex-wrap justify-between'>
                <div className='text-[20px] '>
                Grand Total </div>
                
                
                
                <button className='bg-orange-400 w-28 '>Rs.47500</button>
                </div>
                <div className='flex justify-center'>

            
                <button className='bg-orange-500 '>CONFIRM BOOKING</button>
                </div>
        </div>

    </div>
  )
}
