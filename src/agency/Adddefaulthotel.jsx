import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const Adddefaulthotel = () => {
  let { id } = useParams();
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const [resortData, setResortdata] = useState(['']);

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/agency/findresort`);
      console.log(response.data);
      setResortdata(response.data);
    };
    fetchdata();
  }, []);

  const [selectedResort, setSelectedResort] = useState('');

  const handleResortCheckboxChange = (resortId) => {
    setSelectedResort(resortId === selectedResort ? '' : resortId);
    console.log("Selected resort:", resortId);
  };

  let handleSubmit = async () => {
    let response = await axios.put(`http://localhost:4000/agency/adddefaulthotel/${id}`, { defaulthotelId: selectedResort });
    console.log(response);
  };

  return (
    <div className='pencil'>
      <form class="flex items-center max-w-sm mx-auto pt-7">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          </div>
          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search location..." required />
        </div>
        <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
      <div className='flex flex-wrap gap-9'>
        {resortData.map((item) => (
          <div className='bg-yellow-300 w-[150px] ml-5 mt-5 rounded-lg'>
            <div key={item._id} className='pt-4 text-center text-white'>
              <Link to={`/agency/vwresortdetail/${item._id}`}>
                <img src={`http://localhost:4000/uploads/${item.coverImage}`} className='w-20 h-16 m-auto w-28 rounded-lg' alt="" srcSet="" />
              </Link>
              <input
                type="checkbox"
                checked={selectedResort === item._id}
                onChange={() => handleResortCheckboxChange(item._id)}
              />
              <div className='font font-bold'>{item.propertyName}</div>
            </div>
          </div>
        ))}
      </div>
      <button type='submit' onClick={handleSubmit} className='bg-orange-600 w-28 h-10 text-white font-bold rounded-lg ml-[550px] mt-32'>submit</button>
    </div>
  );
};
