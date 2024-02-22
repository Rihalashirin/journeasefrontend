import React from 'react'
import seaview from './images/seaview.png'
import guide1 from './images/guide1.png'

export const Guidcnfrmtn = () => {
    return (
        <div className='pencil'>
            <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Dennis philipp's</span><span className='text-orange-600'> Enquiry</span>
            </div>
            <div className='font '>
                <div className='text-[20px]'>
                    Basic info </div> <br />
                Name  :  Dennis Philipp<br />
                Email :  dennisphilipp@gmail.com<br />
                Mobile:  8113867153 <br /><br />
                <div className='font '>
                    <div className='text-[20px]'>
                        Travel info </div><br />
                    <div className='flex flex-wrap gap-16'>
                        <div>
                            Adults: 4<br />
                            Children:2
                        </div>
                        <div>
                            Date:10/02/2024-14/02/2024
                        </div>

                    </div><br />
                    <div className='text-[20px]'>
                        Package info </div><br />
                </div>
                <div>  Delhi Delight</div><br />
                <div className='text-[20px]'>
                    Accomodation Chosen </div><br />
                <div className='flex flexwrap  '>
                    <img src={seaview} alt="" srcset="" />
                    <div className='pt-10'>Hotel Sea View <br />Luxury</div>
                    <div className='flex flex-col gap-6 mt-3 '>
                    </div>
                
                <div className='flex flex-col gap-6 mt-3 '>
                <button className='bg-gray-400 w-24 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-green-500 w-24 h-9 rounded-lg text-white'>ACCEPTED</button>
                </div>
                <div className='flex flex-wrap'>
                <img src={guide1} className='m-auto' alt="" srcset="" />
                <div className='font font-bold'>Valsaraj Kumar <br />Exp:5 years</div>
                <div className='flex flex-col gap-6 mt-3 '>
                <button className='bg-gray-400 w-24 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-green-500 w-24 h-9 rounded-lg text-white'>ACCEPTED</button>
                </div>
                </div>
                
                </div>
                <button className='bg-orange-600 ms-72 '>CONFIRM BOOKING</button>

            </div>
            </div>
            
            )
}
