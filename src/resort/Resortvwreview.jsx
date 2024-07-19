import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Resortvwreview = () => {
  const [data, setData] = useState([''])
  let id =localStorage.getItem("id")
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://journeasebackend.onrender.com/resort/vwreviews/${id}`)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='resorthome'>
         <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Reviews</span>
          </div>
            {data.map((item)=>(
              item.user?.name &&
        <div className='bg-gray-400 p-3 rounded-lg align-text-bottom  w-44 ms-6'>
<>
                      <div className='flex flex-wrap gap-2'>
                        {/* <img className='h-[25px] w-[25px]'src={review} alt="" /> */}
                        <h6 className='text-black ps-1'>{item.user?.name}</h6>
                       <div className='font font-bold text-[10px] text-black '><span>{new Date(item.booking?.date).toLocaleString()}</span></div>
                         
                        </div>
                        <div className='bg-white'>
                        {/* <h1 className='font-semibold text-base text-gray-700'>ADS orph</h1> */}
                      <p className='text-black text-sm'>{item.req?.review}</p>

                      </div>
                      </>
              </div>
                       ))}
    
    </div>
  )
}
