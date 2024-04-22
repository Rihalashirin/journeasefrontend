import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Viewpackage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem('id');
        const response = await axios.get(`http://localhost:4000/agency/vwpkgagency/${id}`);
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
      // const adventureName = item.adventureName ? item.adventureName.toLowerCase() : '';
      
      return (
        location.includes(query.toLowerCase()) || 
        category.includes(query.toLowerCase()) ||
        noOfDays.includes(query) 
        // adventureName.includes(query.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className='pencil'>
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by location, days or category"
        className="p-2.5 ml-96  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 "
      />

      <div className='flex flex-wrap sm:gap-5 mt-5'>
        {filteredData.map((item) => (
          <div key={item._id} className='bg-yellow-200 w-[100px] ml-5 rounded-lg mt-4'>
            <div className='text-center text-orange-600 pt-4'> 
              <Link to={`/agency/detailvwpkg/${item._id}`}>
                <img src={`http://localhost:4000/uploads/${item.coverImage}`} className='m-auto w-20 ' alt="" srcSet="" />
              </Link> 
              <div className='font font-bold'>{item.location} <br />{item.noOfDays} DAYS</div><br/>{item.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
