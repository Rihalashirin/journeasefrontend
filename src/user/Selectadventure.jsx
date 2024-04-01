import React, { useEffect, useState } from 'react'
import zipline from './zipline.jpg'
import adventure from './adventure.png'
import axios from 'axios'

export const Selectadventure = () => {
  const [data,setData]=useState([''])
  const [agencyData,setAgencydata]=useState([''])
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/user/findpackage`)
        console.log(response.data)
        setAgencydata(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='userhome'>
        
        <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Select</span><span className='text-orange-600'> Adventures</span>
          </div>
          <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div className='flex flex-wrap gap-9'>
        <div className='flex flex-wrap sm:gap-5  '>
          <div className=' pt-28 text-center text-white '>
            <img src={zipline} className='m-auto w-24 h-24 rounded-2xl' alt="" srcset="" />
            <div className='font font-bold'>Zipline <br /> <div className='font font-light'>3000-5000/Head</div></div>
          </div>
          </div>
          <div className='flex flex-wrap sm:gap-5  '>
          <div className=' pt-28 text-center text-white '>
            <img src={adventure} className='m-auto w-24 h-24 rounded-2xl' alt="" srcset="" />
            <div className='font font-bold'>Bungee Jumping <br /> <div className='font font-light'>3000-5000/Head</div></div>
          </div>
          </div>
          </div>
          <div className='flex flex-wrap gap-11  justify-center m-7 '><button className='bg-orange-600 text-white rounded-lg w-40'>SKIP</button>
            <button className='bg-orange-600 text-white rounded-lg w-40'>SUBMIT</button></div>
            </div>
          </div>

    
  )
}
