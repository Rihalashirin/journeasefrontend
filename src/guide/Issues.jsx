import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Issues = () => {
  const [data,setData]=useState('')
  let id=localStorage.getItem('id')
    let {id1}=useParams()
    console.log(id1,'ihhhjjh');
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
      setData(data)
      console.log(data)
     let response=await axios.post(`http://localhost:4000/guide/addissue`,{...data,guideid:id,packageid:id1})
     console.log(response);
      
  }
  return (
    
    <div className='guidehome'>
      <form onSubmit={handleSubmit}>
        <div className='pt-11'>
       <div className='bg-slate-500 w-fit p-4 ml-96 '>

            <textarea onChange={handleChange} name="issue" id="" cols="50" rows="5" className='border-none'></textarea>
        <div className='text-center'>

        <button type='submit' className='bg-orange-600 w-24'>POST</button>
        </div>
       </div>
       </div>
       </form>
    </div>
  
  )
}
