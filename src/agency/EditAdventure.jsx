import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const AdventureUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    adventureName: '',
    location: '',
    description: '',
    image: null,
    price: '',
  });

  useEffect(() => {
    // Fetch adventure data based on the ID when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/agency/adventure/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching adventure data:', error);
      }
    };

    fetchData();
  }, [id]);

  let handlefile = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };

  let handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('adventureName', data.adventureName);
    formData.append('location', data.location);
    formData.append('description', data.description);
    formData.append('image', data.image);
    formData.append('price', data.price);

    try {
      const response = await axios.put(`http://localhost:4000/agency/adventureupdate/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      navigate(`/agency/adventure/${id}`);
    } catch (error) {
      console.error('Error updating adventure:', error);
    }
  };

  return (
    <div>
      <div className='bg-[#1a2954d6] h-[467px]'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
          <span className='text-white'>Update </span>
          <span className='text-orange-600'> Adventure</span>
        </div>
        <form onSubmit={handleSubmit} className='w-full max-w-lg'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-first-name'>
                Adventure Name
              </label>
              <input
                onChange={handleChange}
                value={data.adventureName}
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                name='adventureName'
                type='text'
                placeholder=''
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
                Location
              </label>
              <input
                onChange={handleChange}
                value={data.location}
                name='location'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                type='text'
                placeholder=''
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-password'>
                Upload Image
              </label>
              <input
                onChange={handlefile}
                name='image'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-password'
                type='file'
                placeholder=''
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-2'>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-city'>
                price
              </label>
              <input
                onChange={handleChange}
                value={data.price}
                name='price'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-city'
                type='text'
                placeholder=''
              />
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <div className='relative'></div>
            </div>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-zip'>
                Description
              </label>
              <input
                onChange={handleChange}
                value={data.description}
                name='description'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-zip'
                type='text'
                placeholder=''
              />
            </div>
          </div>
          <button className='bg-orange-600 w-32 text-white rounded-lg'>Submit</button>
        </form>
      </div>
    </div>
  );
};

