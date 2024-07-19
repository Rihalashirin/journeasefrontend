import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Planpkg = () => {
  const [agencyData, setAgencyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRange, setSelectedRange] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://journeasebackend.onrender.com/user/findpackage');
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
    const days = item.package?.noOfDays || 0;
    const loc = (item.package?.location || '').toLowerCase();
    const category = (item.package?.category || '').toLowerCase();
    const noOfPeople = item.package?.noofpeople || 0;
    const searchLowerCase = searchQuery.toLowerCase();

    // Filter based on selected range
    let withinRange = true;
    if (selectedRange === '1-5') {
      withinRange = days >= 1 && days <= 5;
    } else if (selectedRange === '6-10') {
      withinRange = days >= 6 && days <= 10;
    } else if (selectedRange === '11-15') {
      withinRange = days >= 11 && days <= 15;
    } else if (selectedRange === '16-20') {
      withinRange = days >= 16 && days <= 20;
    } else if (selectedRange === '21-25') {
      withinRange = days >= 21 && days <= 25;
    } else if (selectedRange === '26-30') {
      withinRange = days >= 26 && days <= 30;
    }

    // Filter based on selected number of people
    let withinPeople = true;
    if (selectedPeople === '1-4') {
      withinPeople = noOfPeople >= 1 && noOfPeople <= 4;
    } else if (selectedPeople === '5-8') {
      withinPeople = noOfPeople >= 5 && noOfPeople <= 8;
    } else if (selectedPeople === '9-10') {
      withinPeople = noOfPeople >= 9 && noOfPeople <= 10;
    } else if (selectedPeople === '11-24') {
      withinPeople = noOfPeople >= 11 && noOfPeople <= 24;
    } else if (selectedPeople === '25-30') {
      withinPeople = noOfPeople >= 25 && noOfPeople <= 30;
    } else if (selectedPeople === '30-60') {
      withinPeople = noOfPeople >= 30 && noOfPeople <= 60;
    }

    return (
      (adventureName.includes(searchLowerCase) ||
      agencyName.includes(searchLowerCase) ||
      packageName.includes(searchLowerCase) ||
      loc.includes(searchLowerCase) ||
      category.includes(searchLowerCase)) &&
      withinRange &&
      withinPeople
    );
  });

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleRangeChange = event => {
    setSelectedRange(event.target.value);
  };

  const handlePeopleChange = event => {
    setSelectedPeople(event.target.value);
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
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search a package..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            required
          />
        </div>
        <div className="relative w-48 ml-4">
          <select
            className="block appearance-none w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedRange}
            onChange={handleRangeChange}
          >
            <option value="">Select Days Range</option>
            <option value="1-5">1 - 5 days</option>
            <option value="6-10">6 - 10 days</option>
            <option value="11-15">11 - 15 days</option>
            <option value="16-20">16 - 20 days</option>
            <option value="21-25">21 - 25 days</option>
            <option value="26-30">26 - 30 days</option>
          </select>
        </div>
        <div className="relative w-48 ml-4">
          <select
            className="block appearance-none w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedPeople}
            onChange={handlePeopleChange}
          >
            <option value="">Select No. of People</option>
            <option value="1-4">1 - 4 people</option>
            <option value="5-8">5 - 8 people</option>
            <option value="9-10">9 - 10 people</option>
            <option value="11-24">11 - 24 people</option>
            <option value="25-30">25 - 30 people</option>
            <option value="30-60">30 - 60 people</option>
          </select>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredData.map(item => (
          <div key={item.package?._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link to={`/user/vwdetailpkg/${item.package?._id}`}>
              <img
                src={`https://journeasebackend.onrender.com/uploads/${item.package?.coverImage}`}
                className="w-full h-40 object-cover"
                alt=""
              />
            </Link>
            <div className="px-2 py-2 h-40  ">
              <div className="text-lg font-semibold text-gray-800  truncate">
                {item?.package?.packageName}
              </div>
              <Link to={`/user/vwpkgreview/${item.agency?._id}`}>
                <div className="text-gray-600 underline">{item?.agency?.companyName}(about us)</div>
              </Link>
              <div className="text-gray-600">
                Duration: {item?.package?.noOfDays} days
              </div>
              {/* <p className="text-gray-600">
                Location: {item?.package?.location}
              </p> */}
              <div className="text-gray-600">
                Category: {item?.package?.category}
              </div>
              <div className=" text-orange-800">
                No of people: {item?.package?.noofpeople}
              </div>
              <div className="text-orange-800">
                Price: {item?.package?.price}/- 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
