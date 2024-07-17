import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Userprofile = () => {
  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/agency/vwagencyprofile/${id}`)
      console.log(response.data);
      setUserData(response.data)
    }
    fetchdata()
    
  },[refresh])

  const handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)
  }
  let handleSubmit=async (event)=>{
    event.preventDefault()
    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }


    let response=await axios.put(`http://localhost:4000/agency/agencyeditprofile/${id}`,formData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set the content type for FormData
      }
    }
  )
    console.log(response);
    setrefresh(!refresh)
    setData('')
  }
  return (
    <div className='bg-[#1a2954d6] h-[600px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Update </span><span className='text-orange-600'>Profile</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name :</label>
              <input onChange={handlechange} placeholder={userData.name} type="text" name='name' id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Age:</label>
              <input onChange={handlechange} placeholder={userData.age} type="text" name='age' id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
            </div>
            <div >
              <label for="gender" class="block mb-2 text-sm font-medium text-white dark:text-white">Gender:</label>
              <input onChange={handlechange} placeholder={userData.gender} type="text" name='gender' id="gender" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"    />
            </div>
            <div>
              <label for="contactnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input onChange={handlechange} placeholder={userData.contactNumber} type="number" name='contactNumber' id="contactnumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"    />
            </div>
            <div>
              <label for="contactnumber" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number(alternative):</label>
              <input onChange={handlechange} placeholder={userData.contactNumberalternative} type="number" name='contactNumberalternative' id="" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"   />
            </div>
            <div>
              <label for="image" class="block mb-2 text-sm font-medium text-white dark:text-white">Image:</label>
              <input onChange={handlefile}  type="file" name='image' id="image" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.image}   />
            </div>
            <a target="_blank" href={`http://localhost:4000/uploads/${userData.image}`} download> <img className="w-[100px] h-14 " src={`http://localhost:4000/uploads/${userData.image}`} alt="click to view and dowload"></img> </a>
                <a target='_blank' href={`http://localhost:4000/uploads/${userData.image}`} download ></a>
        
          
          </div>
          <div className='w-[25%]'>

        
            <div >
              <label for="idproof" class="block mb-2 text-sm font-medium text-white dark:text-white">ID Proof :</label>
              <input onChange={handlefile} type="file" name='idProof' id="idproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.idProof}   />
            </div>
            <a target="_blank" href={`http://localhost:4000/uploads/${userData.idProof}`} download> <img className="w-[100px] h-14 " src={`http://localhost:4000/uploads/${userData.idProof}`} alt="click to view and dowload"></img> </a>
                <a target='_blank' href={`http://localhost:4000/uploads/${userData.idProof}`} download ></a>
        
            <div >
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Place:</label>
              <input onChange={handlechange}  placeholder={userData.place} type="text"  name='place' id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.place}   />
            </div>
            <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">District :</label>
              <select onChange={handlechange} value={userData.district} type="text" id="district" name='district' class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
             <option value="">--Select district--</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
  <option value="Kollam">Kollam</option>
  <option value="Pathanamthitta">Pathanamthitta</option>
  <option value="Alappuzha">Alappuzha</option>
  <option value="Kottayam">Kottayam</option>
  <option value="Idukki">Idukki</option>
  <option value="Ernakulam">Ernakulam</option>
  <option value="Thrissur">Thrissur</option>
  <option value="Palakkad">Palakkad</option>
  <option value="Malappuram">Malappuram</option>
  <option value="Kozhikode">Kozhikode</option>
  <option value="Wayanad">Wayanad</option>
  <option value="Kannur">Kannur</option>
  <option value="Kasaragod">Kasaragod</option>
              </select>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handlechange} placeholder={userData.email} type="email" name='email' id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.email}  />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handlechange} placeholder={userData.password} type="password" name='password' id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={userData.password}   />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
  </div>
      </form>
    </div>
  )
}
