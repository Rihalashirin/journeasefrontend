import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'

export const Reguser = () => {
  
    const [data,setData]=useState('')
    const navigate=useNavigate()
    let handlefile=(event)=>{
      console.log(event.target.files);
      setData({...data,[event.target.name]:event.target.files[0]})
    }
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
            console.log('hghfdgh');
            if (data.cpassword!=data.password)  {
              toast.error("password doesnt match")
            }
            else {
              if(data.age<18){
                toast.error("age should be greater than 18");
               } 
               else if(data.age>150){
                toast.error("Age is invalid");
               }
               else{
            let formData = new FormData();
            formData.append('name',data.name);
            formData.append('age',data.age);
            formData.append('gender',data.gender);
            formData.append('contactNumber',data.contactNumber);
            formData.append("contactNumberalternative",data.contactNumberalternative);
            formData.append('idProof',data.idProof);
            formData.append('email',data.email);
            formData.append('password',data.password);
            formData.append('image',data.image);
            formData.append('place',data.place);
            formData.append('district',data.district);
            formData.append('userType','user');
      
         
            let response=await axios.post('https://journeasebackend.onrender.com/user/registration',formData,{
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            console.log(response,'==============');
            navigate('/')
            setData(data);
            toast.success('successfully registered')
            console.log(data);
          // catch((err)=>{
          //   toast.error(err.response.data.message || err.message || 'password doesnt match')
          //  })
          
          } 
        }  
        }
  return (
    <div className='bg-[#1a2954d6] h-[600px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Resgister as a </span><span className='text-orange-600'>User</span>
  </div>
  <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Name :</label>
              <input onChange={handleChange} pattern='^[a-zA-Z ]*$'  name="name"type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div>
              <label for="age" class="block mb-2 text-sm font-medium text-white dark:text-white">Age:</label>
              <input onChange={handleChange} name='age' type="text" pattern='[0-9]{2,3}' id="age" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
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
              <input onChange={handleChange}  name='contactNumber' type="tel"  pattern='\d{10}'  title='please enter a valid phone number'  id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number(alternative):</label>
              <input onChange={handleChange}  name='contactNumberalternative'  pattern='\d{10}'  title='please enter a valid phone number'  type="tel" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="image" class="block mb-2 text-sm font-medium text-white dark:text-white">Image:</label>
              <input onChange={handlefile}  name='image' type="file" id="image" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
           
          </div>
          <div className='w-[25%]'>

            {/* <div >
              <label for="house name" class="block mb-2 text-sm font-medium text-white dark:text-white">Image :</label>
              <input onChange={handleChange} value={data.img} name='img' type="file" id="house name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div> */}
            <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">District :</label>
              <select onChange={handleChange} value={data.district} type="text" id="district" name='district' class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
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
             <div >
              <label for="idproof" class="block mb-2 text-sm font-medium text-white dark:text-white">ID proof:</label>
              <input onChange={handlefile} name='idProof'type="file" id="idproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Place:</label>
              <input  onChange={handleChange} value={data.place} name='place' type="text" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input  onChange={handleChange} value={data.email} name='email' type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input  onChange={handleChange} value={data.password} name='password'  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\b)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$' title='password must contain atleast one lowercase letter,one uppercase letter,one digit,one special character ,and be 8 to 30 characters long' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Confirm Password:</label>
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
