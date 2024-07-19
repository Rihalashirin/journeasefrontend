import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
export const Notification = () => {
  const[data,setData] = useState([''])
  let id =localStorage.getItem('id')
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://journeasebackend.onrender.com/user/vwnotification/${id}`
      );
      console.log(response.data, "log for ----");
      setData(response.data);
    };
    fetchdata();
  }, []);
  return (
    <div className='userhome1'>
        <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            Notifications
          </div>
          {data.map((item)=>(
         <Link to={`/user/vwnotificatn/${item.req?._id}`}> <div className='flex flex-wrap gap-5 justify-between bg-white me-8 ms-6 h-10 items-center rounded-lg'>
         <div className= 'text-black pl-6'>{item.agnc?.companyName}</div>
         <div className= 'text-black pl-6'>{item.package1?.packageName}</div>
         <div className= 'text-black pl-6'><div>{new Date(item.req?.date).toLocaleString()}</div></div>
         
          {/* <div className='text-red-600 me-4'><li>New</li></div> */}
          </div></Link>
        ))}

    </div>
    
  )
}
