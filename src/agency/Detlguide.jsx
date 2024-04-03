import React, { useEffect, useState } from 'react'
import guide1 from './images/guide1.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Detlguide = () => {
  let id1=localStorage.getItem('id')
  const [data,setData]=useState([''])
  const [data1,setData2]=useState('')
  let {id}=useParams()
  console.log(id);


  let handleSubmit=async(event)=>{
    event.preventDefault()
    setData2(data1)
    console.log(data1)
    let response=await axios.post('http://localhost:4000/agency/guiderequest',{...data1,agencyid:id1,guideid:id})
    console.log(response)
  }
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get(`http://localhost:4000/agency/detailguide/${id}`)
      console.log(response.data);
      if(response.data){
        setData(response.data)
      }
    }
    fetchdata()
  },[])
  return (
    <div className='pencil'>
      

      <>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>{data.name}</span>
        </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-xl rounded-3xl h-80'>
            <div className='flex flex-wrap gap-7'>
            <img src={`http://localhost:4000/uploads/${data.image}`} className='w-64' alt="" srcset="" />
            
            <div className='font font-bold text-black'>Name:{data.name} 
            <div className='font font-bold text-black'>Age:{data.age}</div>
            <div className='font font-bold'>Gender:{data.gender}</div></div>
            </div>
            <div className='font font-bold pl-72 '>Address:{data.address}</div>
            <div className='font font-bold pl-72  '> Experience(in years):{data.experienceYears}</div> 
            <div className='font  font-bold pl-72 '>location of expertise:{data.locationExpertise}</div>
           
            <button type='submit' onClick={handleSubmit} className='bg-orange-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-80 mt-8'>ENQUIRE</button>

        </div></>
        
    </div>
  )
}
