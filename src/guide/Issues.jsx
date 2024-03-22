import axios from 'axios'
import React, { useState } from 'react'

export const Issues = () => {
  const [data,setData]=useState('')
    
    
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
     let response=await axios.post('http://localhost:4000/user',data)
     console.log(response);
      
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='guidehome'>
       <div className='bg-slate-500 w-fit p-4'>

            <textarea onChange={handleChange} name="" id="" cols="50" rows="5" className='border-none'></textarea>
        <div className='text-center'>

        <button className='bg-orange-600 w-24'>POST</button>
        </div>
       </div>
       <div className='flex flex-wrap justify-between bg-white mt-5'>
       <div >10/12/24 <br />Delhi Delight</div>
       <div>the issue we found that..</div></div>

    </div>
    </form>
  )
}
