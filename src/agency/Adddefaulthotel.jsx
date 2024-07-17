import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const Adddefaulthotel = () => {
  let { id } = useParams();
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const [resortData, setResortdata] = useState([]);
  const [selectedResort, setSelectedResort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/agency/findresort/${id}`);
      setResortdata(response.data);
    };
    fetchdata();
  }, []);

  const handleResortCheckboxChange = (resortId) => {
    setSelectedResort(resortId === selectedResort ? '' : resortId);
  };

  const handleSubmit = async () => {
    let response = await axios.put(`http://localhost:4000/agency/adddefaulthotel/${id}`, { defaulthotelId: selectedResort });
    console.log(response);
  };

  // Filter resortData based on search query
  const filteredResortData = resortData.filter(item =>
    item.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.propertyAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pencil'>
      <div className="flex items-center max-w-sm mx-auto pt-7">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      <div className='flex flex-wrap gap-9'>
        {filteredResortData.map((item) => (
          <div className='bg-yellow-300 w-[150px] ml-5 mt-5 rounded-lg' key={item._id}>
            <div className='pt-4 text-center text-white'>
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
