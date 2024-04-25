import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast,Toastcontainer} from 'react-toastify'

export const Rgstrguide = () => {
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
    
    
     let [ageval,setageval]=useState(false)
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      if (data.age < 18) {
        setageval(true) 
    }
    else{
      setageval(false)
    }
      console.log(typeof(data.age));
      
  }
  let handleSubmit=async (event)=>{
      event.preventDefault()
       if (data.cpassword !== data.password) {
        toast.error("Passwords don't match");
    }
      
      else {
  
         if(data.age<18){
          toast.error("age should be greater than 18");
         } 
         else{

       
          let formData = new FormData();
          formData.append('name',data.name);
          formData.append('age',data.age);
          formData.append('gender',data.gender);
      formData.append('contactNumber',data.contactNumber);
      formData.append('contactNumberalternative',data.contactNumberalternative);
      formData.append('idProof',data.idProof);
      formData.append('email',data.email);
      formData.append('password',data.password);
      formData.append('image',data.image);
      formData.append('address',data.address);
      formData.append("locationExpertise",data.locationExpertise);
      formData.append("experienceYears",data.experienceYears);
      formData.append("district",data.district);
     
    
    formData.append('userType','guide')
     let response=await axios.post('http://localhost:4000/user/registration',formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
      setData(data);
      toast.success('successfully registered')
      console.log(data);
    }).catch((err)=>{
      toast.error(err.response.data.message || err.message || 'password doesnt match')
    })
      
  }
}
}
  return (
    <div className='bg-[#1a2954d6] h-[800px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Resgister as a </span><span className='text-orange-600'>Private Guide</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name :</label>
              <input onChange={handleChange}  name='name'pattern='^[a-zA-Z]*$' type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Age:</label>
              <input onChange={handleChange}  name='age'type="number"  id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            {/* {ageval && <label>age must be more than 18</label>} */}
            </div>
            <div>
  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-white dark:text-white">Gender:</label>
  <div>
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
        className="mr-2"
        required
      />
      Male
    </label>
    <label className="ml-4">
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        className="mr-2"
      />
      Female
    </label>
    <label className="ml-4">
      <input
        type="radio"
        name="gender"
        value="other"
        onChange={handleChange}
        className="mr-2"
      />
      Other
    </label>
  </div>
</div>

            <div>
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input onChange={handleChange}  name='contactNumber' type="tel" pattern='\d{10}'  title='please enter a valid phone number'  id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number(alternative):</label>
              <input onChange={handleChange}  name='contactNumberalternative' pattern='\d{10}'  title='please enter a valid phone number'    type="tel" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="location" class="block mb-2 text-sm font-medium text-white dark:text-white">Location of Expertise:</label>
              <input onChange={handleChange} name='locationExpertise' type="text" id="location" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="address" class="block mb-2 text-sm font-medium text-white dark:text-white">Address :</label>
              <input onChange={handleChange}  name='address' type="text" id="address" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">District :</label>
              <input onChange={handleChange}  name='district' type="text" id="district" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          <div className='w-[25%]'>

            <div >
              <label for="image" class="block mb-2 text-sm font-medium text-white dark:text-white">Image :</label>
              <input onChange={handlefile}  name='image' type="file" id="image" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div >
              <label for="idproof" class="block mb-2 text-sm font-medium text-white dark:text-white">ID Proof :</label>
              <input onChange={handlefile}  name='idProof' type="file" id="idproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="experience" class="block mb-2 text-sm font-medium text-white dark:text-white">Experience(in years) :</label>
              <input onChange={handleChange}  name='experienceYears' type="text" id="experience" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handleChange}  name='email' type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handleChange}  name='password'  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\b)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$' title='password must contain atleast one lowercase letter,one uppercase letter,one digit,one special character ,and be 8 to 30 characters long' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white"> Confirm Password:</label>
              <input  onChange={handleChange}  name='cpassword'  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\b)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$' title='password must contain atleast one lowercase letter,one uppercase letter,one digit,one special character ,and be 8 to 30 characters long' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
  </div>
      </form>
    </div>
  )
}
