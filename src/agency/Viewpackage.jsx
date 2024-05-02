import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import delImage from '../agency/images/deletepkg.png'


export const Viewpackage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  let handledelete=async (id)=>{
    let response=await axios.delete(`http://localhost:4000/agency/deletepkg/${id}`)
    console.log(response)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id1 = localStorage.getItem('id');
        const response = await axios.get(`http://localhost:4000/agency/vwpkgagency/${id1}`);
        setData(response.data);
        setFilteredData(response.data); // Initially set filtered data to all packages
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to filter packages based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((item) => {
      const location = item.location ? item.location.toLowerCase() : '';
      const category = item.category ? item.category.toLowerCase() : '';
      const noOfDays = item.noOfDays ? item.noOfDays.toString() : '';
      
      return (
        location.includes(query.toLowerCase()) || 
        category.includes(query.toLowerCase()) ||
        noOfDays.includes(query)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className='container mx-auto px-4 py-8 bg-yellow-500'>
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by location, days or category"
        className="p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-72 mx-auto"
      />

      <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {filteredData.map((item) => (
          <div key={item._id} className='bg-white h-[370px] rounded-lg shadow-lg  overflow-hidden'>
            <Link to={`/agency/detailvwpkg/${item._id}`}>
              <img
                src={`http://localhost:4000/uploads/${item.coverImage}`}
                alt={`${item.location} Package`}
                className='w-full h-56 object-cover object-center'
              />
            </Link>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>{item.location}</h3>
             
              <p className='text-gray-600 mt-2'>{item.noOfDays} Day</p>
              <div className='flex  flex-wrap justify-between'> 
              <p className='text-gray-600 mt-2'>{item.category}</p>
              <img src={delImage} onClick={()=>handledelete(item._id)} className='w-5 h-5 m-auto me-1' alt="" srcset="" />
             </div>
              <div className='mt-4'>
                <Link
                  to={`/agency/detailvwpkg/${item._id}`}
                  className='text-blue-500 hover:text-blue-600 font-semibold text-sm'
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
