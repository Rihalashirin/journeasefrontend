import React, { useEffect, useState } from 'react'
import seaview from './seaview.png'
import delux from './deluxmotel.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Selectresort = () => {
  let {id}=useParams()
    const [data,setData]=useState('')
    const [resortData,setResortdata]=useState([''])
    useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/user/vwaccomodation/${id}`)
          console.log(response.data)
          setResortdata(response.data)
      }
      fetchdata()
  },[])

  return (
    <div className='userhome'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Select an</span><span className='text-orange-600'> Accomodation</span>
          </div>
          <div className='flex flex-wrap sm:gap-5  '>
            {resortData.map((item)=>(
                <div className=' pt-28 text-center text-white '>
                    <img src={`http://localhost:4000/uploads/${item.resort?.coverImage}`} className='m-auto w-28' alt="" srcset="" />
                   <Link to={`/user/vwresortdet/${item.resort?._id}`}> <div className='font font-bold'>{item.resort?.propertyName}</div></Link>
                </div>
                ))}
                </div>
    </div>
  )
}
