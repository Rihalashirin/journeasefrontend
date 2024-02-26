import React from 'react'
import seaview from './images/seaview.png'
import adventure from './images/adventure.png'

export const Vwcstrenqry = () => {
  return (
    <div className='pencil'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Dennis philipp's</span><span className='text-orange-600'> Enquiry</span>
          </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :  Dennis Philipp<br/>
               Email :  dennisphilipp@gmail.com<br/>
               Mobile:  8113867153 <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults: 4<br/>
                Children:2
                </div>
                <div>
                  Date:10/02/2024-14/02/2024
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info </div><br/>
                </div>
             <div>  Delhi Delight</div><br/>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap  justify-between '>
                <img src={seaview} alt="" srcset="" />
                <div className='pt-10'>Hotel Sea View <br />Luxury</div>
                <div className='flex flex-col gap-6 mt-3 '>
                <button className='bg-yellow-500 w-20 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-gray-400 w-20 h-9 rounded-lg text-white'>STATUS</button>
                </div>
                <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN GUIDE</button>
                <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN A HA</button>
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap  justify-start '>
                <img src={adventure} alt="" srcset="" />
                <div className='pt-10'>Bungee Jumping <br />3000-5000/Head</div>
                {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
                </div>

                


            </div>

        </div>
    </div>
  )
}
