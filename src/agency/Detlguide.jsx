import React, { useEffect, useState } from 'react'
import guide1 from './images/guide1.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Detlguide = () => {
  const [data,setData]=useState([''])
  let {id}=useParams()
  console.log(id);
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost/4000/agency/detailguide/${id}`)
      console.log(response.data);
      if(response.data){
        setData(response.data)
      }
    }
    fetchdata()
  },[])
  return (
    <div className='pencil'>
      {data.map((item)=>(

      <>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Valsaraj Kumar</span>
        </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='flex flex-wrap gap-7'>
            <img src={guide1} className='w-32' alt="" srcset="" />
            <div className='font font-bold text-white'>Valsaraj Kumar <br />Exp:5 years</div>
            </div>
            <button className='bg-orange-600'>ENQUIRE</button>

        </div></>
        ))}
    </div>
  )
}
