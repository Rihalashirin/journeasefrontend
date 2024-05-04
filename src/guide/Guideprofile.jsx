import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Guideprofile = () => {
  let id = localStorage.getItem("id");
  const [data,setData]=useState('')
  const [userData,setUserData] = useState('')
  const [refresh, setrefresh] = useState(false);
    
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/agency/vwagencyprofile/${id}`);
      console.log(response.data);
      setUserData({...response.data});
      // setData({ ...response.data });
    };
    fetchdata();
  }, [refresh]); 
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
      const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
        console.log(formData);
      }
    }
     let response=await axios.put(`http://localhost:4000/agency/agencyeditprofile/${id}`,formData,
     {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type for FormData
      },
    }
     );
     console.log(response);
     setrefresh(!refresh);
      
  }
  return (
    <div className='bg-[#1a2954d6] h-[600px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Update </span><span className='text-orange-600'>Profile</span>
  </div>
  <form onSubmit={handleSubmit } class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name :</label>
              <input onChange={handleChange} placeholder={userData.name}  name='name' type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Age:</label>
              <input onChange={handleChange} placeholder={userData.age} name='age' type="number" id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div >
              <label for="gender" class="block mb-2 text-sm font-medium text-white dark:text-white">Gender:</label>
              <input onChange={handleChange} value={userData.gender} name='gender' type="text" id="gender" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div>
              <label for="contactnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input onChange={handleChange} value={userData.contactNumber} name='contactNumber' type="number" id="contactnumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div>
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Location of Expertise:</label>
              <input onChange={handleChange} value={userData.locationExpertise} name='locationExpertise' type="text" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div >
              <label for="address" class="block mb-2 text-sm font-medium text-white dark:text-white">Address :</label>
              <input onChange={handleChange} value={userData.address} name='address' type="text" id="address" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">District :</label>
              <input onChange={handleChange} value={userData.district} name='district' type="text" id="district" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
          </div>
          <div className='w-[25%]'>

            <div >
              <label for="image" class="block mb-2 text-sm font-medium text-white dark:text-white">Image :</label>
              <input onChange={handlefile}  name='image'  type="file" id="image" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=""  />
            </div>
            <div >
              <label for="idproof" class="block mb-2 text-sm font-medium text-white dark:text-white">ID Proof :</label>
              <input onChange={handleChange}  name='idProof' type="file" id="idproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div >
              <label for="years" class="block mb-2 text-sm font-medium text-white dark:text-white">Experience(in years) :</label>
              <input onChange={handleChange} value={userData.experienceYears} name='experienceYears' type="text" id="years" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handleChange} value={userData.email} name='email' type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handleChange} value={userData.password} name='password' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
  </div>
      </form>
    </div>
  )
}
