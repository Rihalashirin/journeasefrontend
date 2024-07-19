import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Vwaddedadventure = () => {
  let { id } = useParams();
  let [data, setData] = useState([""]);
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://journeasebackend.onrender.com/agency/viewPackageAdventure/${id}`
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchdata();
  },[]);

  return (
    <div>
          <div  className='bg-[#1a2954d6] h-screen'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Selected</span><span className='text-orange-600'> Adventures</span>
            </div>
           
      <div className="flex flex-wrap sm:gap-5  ">
        {data.map((item)=>(
          <div className='bg-gray-400 w-[125px] ml-5 rounded-lg'>
        <div className=" pt-4 text-center text-black pl-2 pr-2 pb-2 ">
          <img src={`https://journeasebackend.onrender.com/uploads/${item.resorts?.image}`} className="m-auto w-28" alt="" srcset="" />
          <div className="font font-bold">{item?.resorts?.adventureName}</div>
          <div className="font font-bold">{item?.resorts?.aprice}</div>
          <div className="font font-bold">{item?.resorts?.location}</div>
          {/* <button className="bg-red-500 text-white px-2 py-2 rounded hover:bg-red-600">Remove</button>  */}
        </div>
        </div>
        ))}
      </div>
      
    </div> 
    </div>
  )
}
