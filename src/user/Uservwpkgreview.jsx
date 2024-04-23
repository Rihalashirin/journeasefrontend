import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Uservwpkgreview = () => {
  const [data, setData] = useState({});
  const { aid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/detailvwagency/${aid}`);
        setData(response.data);
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

      <div className='font-semibold text-white  bg-orange-600 w-56 mx-auto px-2 py-2 '>Customer Satisfaction</div>
    </div>
  );
};
