import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Planpkg = () => {
  const [agencyData, setAgencyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/findpackage');
        setAgencyData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = agencyData.filter(item => {
    const adventureName = (item.adv?.adventureName || '').toLowerCase();
    const agencyName = (item.agency?.companyName || '').toLowerCase();
    const packageName = (item.package?.packageName || '').toLowerCase();
    const days = (item.package?.noOfDays || '').toString();
    const loc = (item.package?.location || '').toString();
    const category = (item.package?.category || '').toLowerCase();
    const searchLowerCase = searchQuery.toLowerCase();
  
    return (
      adventureName.includes(searchLowerCase) ||
      agencyName.includes(searchLowerCase) ||
      packageName.includes(searchLowerCase) ||
      days.includes(searchLowerCase) ||
      loc.includes(searchLowerCase) ||
      category.includes(searchLowerCase)
    );
  });

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='bg-orange-800 w-[90%] p-3 ms-5 pt-2'>
      <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
        <span className="text-white">Select a </span>
        <span className="text-orange-600"> Tour Planner</span>
      </div>
      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* Search icon */}
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search a package..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            required
          />
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredData.map(item => (
          <div key={item.package?._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/user/vwdetailpkg/${item.package?._id}`}>
              <img
                src={`http://localhost:4000/uploads/${item.package?.coverImage}`}
                className="w-full h-40 object-cover"
                alt=""
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {item?.package?.packageName}
              </h3>
             <Link to={`/user/vwpkgreview/${item.agency?._id}`}> <p className="text-gray-600 underline">{item?.agency?.companyName}(about us)</p></Link>
              <p className="text-gray-600">
                Duration: {item?.package?.noOfDays} days
              </p>
              <p className="text-gray-600">
                Location: {item?.package?.location}
              </p>
              <p className="text-gray-600">
                Category: {item?.package?.category}
              </p>
              <p className=" text-orange-800">
                No of people: {item?.package?.noofpeople}
              </p>
              <p className="text-orange-800">
                Price: {item?.package?.price}/- per head
              </p>
              {/* <Link to={`/user/vwpkgreview/${item.agency?._id}`}>
                <div className="font font-bold">
                  {item?.agency?.companyName} <br />
                  </div>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
