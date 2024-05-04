import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Updatereg3 = () => {
  let {id} = useParams()
  const [userData, setUserData] = useState({})
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(`http://localhost:4000/resort/viewfacility/${id}`)
      setUserData(response.data)
    }
    fetchData()
  }, [refresh])

  const [data, setData] = useState({})

  let handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
    // Update the userData state for checkboxes
    if (type === 'checkbox') {
      setUserData({ ...userData, [name]: checked });
    }
  }

  let handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }
    let response = await axios.put(`http://localhost:4000/resort/editfacility/${id}`, data,)
    console.log(response);
    setRefresh(!refresh)
    setData({})
  }

  return (
    <div>
      <div className='bg-[#1a2954d6] h-[600px]'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
          <span className='text-white'>Update,</span><span className='text-orange-600'> Resort Facility</span>
        </div>
        <form onSubmit={handleSubmit} className="w-[100%] ">
          <div className='flex w-[100%] justify-center sm:gap-10'>
            <div >
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">facility:</label>
              <input onChange={handleChange} value={userData.name || ''} name='name' type="text" id="name" className="placeholder:text-black shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
            </div>
          </div>
          <div >
            <label htmlFor="luxury" className="block mb-2 text-sm font-medium text-white dark:text-white">luxury:</label>
            <input onChange={handleChange} checked={userData.luxury || false} name='luxury' type="checkbox" id="luxury" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=""  />
          </div>
          <div >
            <label htmlFor="standard" className="block mb-2 text-sm font-medium text-white dark:text-white">standard:</label>
            <input onChange={handleChange} checked={userData.standard || false} name='standard' type="checkbox" id="standard" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=""  />
          </div>
        <div className='text-center m-7'>
          <button type="submit" className="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl  px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">UPDATE</button>
        </div>
        </form>
      </div>
    </div>
  )
}
