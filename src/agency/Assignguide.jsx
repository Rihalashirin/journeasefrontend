import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast ,ToastContainer } from "react-toastify";

export const Assignguide = () => {
  let id1 = localStorage.getItem('id');
  const [data, setData] = useState(['']);
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [detail, setDetail] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
  const { aid } = useParams();
  const [resortData, setResortdata] = useState(['']);

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get('http://localhost:4000/agency/findguide');
      console.log(response.data);
      if (response.data) {
        setData(response.data);
      }
    };
    fetchdata();
  }, []);

  let handleChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state
  };

  let handleSubmit = async (event) => {
    // event.preventDefault()
    setData2(data2);
    console.log(data2);
    let response = await axios.post(`http://localhost:4000/agency/enquireguide/${aid}`, {
      ...data2,
      bookingid: aid,
      guideid: detail._id,
      wage: data3,
    });
    console.log(response);
    toast.success('enquired')

  };

  const handledetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/agency/detailguide/${id}`);
      console.log(response.data);
      setDetail(response.data);
      if (response.data) {
        setData1(!data1);
      }
    } catch (error) {
      console.error('Error fetching resort details:', error);
    }
  };

  return (
    <div className="pencil1 ">
      <ToastContainer/>
      {data1 == false && (
        <>
          <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
            <span className="text-white">Assign a </span>
            <span className="text-orange-600"> Guide</span>
          </div>
          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by locationExpertise"
                value={searchQuery}
                onChange={handleChange}
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
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
          </form>
          <div className="flex flex-wrap gap-9">
          {data
  .filter((item) => item.locationExpertise && item.locationExpertise.toLowerCase().includes(searchQuery.toLowerCase()))
  .map((item) => (
    <div className="flex flex-wrap sm:gap-5" key={item._id}>
      <div className="bg-orange-300 w-[100px] ml-5 mt-5 rounded-lg">
        <div className="pt-4 text-center text-white p-2 ">
          <img
            onClick={() => handledetail(item._id)}
            src={`http://localhost:4000/uploads/${item.image}`}
            className="w-24"
            alt=""
            srcSet=""
          />
          <div className="font font-bold">{item.name} </div>
          <div>{item.locationExpertise}</div>
          <div>Experience (in years): {item.experienceYears}</div>
        </div>
      </div>
    </div>
  ))}
          </div>
        </>
      )}
      {data1 && (
        <>
          <div
            onClick={() => {
              setData1(!data1);
            }}
            className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 "
          >
            <span className="text-white">{detail.name}</span>
            
          </div>
          <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-xl rounded-3xl h-80">
            <div className="flex flex-wrap gap-5">
              <div>
                <img
                  src={`http://localhost:4000/uploads/${detail.image}`}
                  className="w-24"
                  alt=""
                  srcSet=""
                />
              </div>
              <div>
                <div className="font font-bold text-black">Name:{detail.name} </div>
                <div className="font font-bold text-black">Age:{detail.age}</div>
                <div className="font font-bold">Gender:{detail.gender}</div>
                <div className="font font-bold ">Address:{detail.address}</div>
                <div className="font font-bold  "> Experience(in years):{detail.experienceYears}</div>
                <div className="font  font-bold  ">location of expertise:{detail.locationExpertise}</div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                >
                  Wage :
                </label>
                <input
                  onChange={handleChange}
                  name="wage"
                  type="number"
                  id="name"
                  className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="bg-orange-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-80 mt-8"
            >
              ENQUIRE
            </button>
          </div>
        </>
      )}
    </div>
  );
};
