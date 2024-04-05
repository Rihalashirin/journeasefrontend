import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Uservwpkgreview = () => {
  let id=localStorage.getItem('id')
  const [data,setData]=useState('')
  let {aid}=useParams('')

  useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:4000/user/detailvwagency/${aid}`)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='userhome'>
     <div className='font font-bold text-white text-2xl pt-3 pl-4'>{data.companyName} </div>
     <div className='text-white font-serif text-sm pl-4 pe-4 pt-4'>{data.description}</div>
<div className='text-white font-bold text-xl font pt-4 pl-4'>About us
</div>
<div className='bg-white'>{data.aboutUs}
</div>
<div className='font-semibold font text-white pl-4 text-2xl pt-2 bg-orange-600 w-36 mt-4 m-auto'>why us</div>
<div className='flex flex-wrap gap-8 mt-3'>
<div className='bg-white '>{data.whyUs}</div>


</div>
<div className='font text-white mt-6 ms-[500px]'>CUSTOMER SATISFACTION</div>

        
    </div>
  )
}
