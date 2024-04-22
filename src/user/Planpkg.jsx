import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Planpkg = () => {
  const [data, setData] = useState(['']);
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
    <div className="userhome">
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
        {/* <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
           
          </svg>
          <span className="sr-only">Search</span>
        </button> */}
      </form>
      <div className="flex flex-wrap gap-9">
        {filteredData.map(item => (
          <div key={item.package?._id} className="bg-orange-300 ml-5 mt-4 rounded-lg">
            <div className="pt-4 pl-2 pr-2 text-center text-white">
              <Link to={`/user/vwdetailpkg/${item.package?._id}`}>
                <img
                  src={`http://localhost:4000/uploads/${item.package?.coverImage}`}
                  className="m-auto w-20"
                  alt=""
                />
              </Link>
              <Link to={`/user/vwpkgreview/${item.agency?._id}`}>
                <div className="font font-bold">
                  {item?.agency?.companyName} <br />
                  {item?.package?.noofpeople},{item?.package?.vehicle}
                  {item.package?.packageName}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
