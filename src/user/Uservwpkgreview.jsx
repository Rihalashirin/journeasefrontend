import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Uservwpkgreview = () => {
  const [data, setData] = useState([]);
  const [data1,setData1] = useState([]);
  const { aid } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/detailvwagency/${aid}`);
        const response2=await axios.get(`http://localhost:4000/user/vwreview/${aid}`);
        setData(response.data);
        setData1(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [aid]);

  return (
    <div className='bg-orange-800 w-[90%] p-3 ms-5 pt-2'>
      <div className='font-bold text-white text-2xl pt-3 pl-4'>{data.companyName}</div>
      <div className='text-black font-serif text-sm pl-4 pt-1'>{data.description}</div>

      <div className='font-bold text-xl text-white pt-4 pl-4'>About Us</div>
      <div className='bg-white p-4 mb-4'>{data.aboutUs}</div>

      <div className='font-bold text-xl text-white pl-4'>Why Us</div>
      <div className='bg-white p-4 mb-4'>{data.whyUs}</div>

      <div className='font-semibold text-white  bg-orange-600 w-56 mx-auto px-2 py-2 text-center '>Customer Satisfaction</div><br/>
      <div className='flex flex-wrap gap-2'>
      {data1?.map((item)=>(
 item?.review[0]?.review &&
     
      <div className="bg-white  rounded-lg w-[200px]  shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-500">{ new Date(item?.booking?.date).toLocaleDateString()}</div>
                <div className="text-sm text-gray-500">Rating:ereret</div>
            </div>
            
            <h2 className="text-lg font-semibold mb-2">{item?.user?.name}</h2>
            {/* <div className='flex flex-wrap gap-4'> */}
            <div className="text-sm text-gray-600 font-bold">{item.pkg?.packageName}</div>
            <div className="text-sm text-gray-600 mb-2">{item?.review[0]?.destinationName}</div>
            <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="User" />
                </div> */}
                <div className="ml-2 text-sm text-gray-700">{item?.review[0]?.review}</div>
            </div>
        </div>
         ))}
         </div>
    </div>
  );
};
