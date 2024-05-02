import React, { useEffect, useState } from 'react'
import place1 from './images/Rectangle 37.png'
import place2 from './images/Rectangle 38.png'
import place3 from './images/Rectangle 39.png'
import place4 from './images/Rectangle 40.png'
import place5 from './images/Rectangle 41.png'
import place6 from './images/Rectangle 42.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwphotoagency = () => {
  let {id}=useParams()
  const [data, setData] = useState(['']);
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/agency/imageguide/${id}`);
      console.log(response.data, 'log for ----');
      setData(response.data);
    };
    fetchdata();
  }, []);
  return (
    <div className='pencil'>
         <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>View,</span><span className='text-orange-600'> Photos</span>
          </div>
          <div className='flex flex-wrap gap-6'>
          {data.map((item)=>(   
  <img  className='w-32 pt-2 ps-2 pb-2' src={`http://localhost:4000/uploads/${item?.images}`}  alt="" srcset="" />
 
 
))}
 
  </div>  
    </div>
  )
}
