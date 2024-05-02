import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const Vwfeedbck = () => {
    let {id2}=useParams()
    let id=localStorage.getItem("id")
    const[data, setData] = useState('')
    useEffect(() => {
      let fetchdata = async () => {
        let response = await axios.get(
          `http://localhost:4000/guide/vwfeedback/${id2}`
        );
        console.log(response.data);
        setData(response.data);
      };
      fetchdata();
    },[]);
  return (
    
        <div className='guidehome'>
    <div class="relative overflow-x-auto  sm:rounded-lg pt-10">
   <div className='bg-white text-black h-32 w-80 m-auto'>
    <p className='text-black w-full'>{data?.issue}</p>
   </div>
</div>
</div> 
    
  )
}
