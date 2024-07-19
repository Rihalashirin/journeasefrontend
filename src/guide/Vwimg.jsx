import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const Vwimg = () => {
  let {id2}=useParams()
  const[data, setData] = useState([''])
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://journeasebackend.onrender.com/guide/vwimageguide/${id2}`
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchdata();
  },[]);
  return (
    <div>
           <div className='guidehome'>
            {data.map((item)=>(
    <div class="relative overflow-x-auto  sm:rounded-lg pt-10 flex flex-wrap">
   <img src={`https://journeasebackend.onrender.com/uploads/${item.images}`} className='w-32 h-32 ml-5 mb-3 bg-slate-100' alt="" srcset="" />
   
</div>
))}
</div> 
    </div>
  )
}
