import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Forgot2 = () => {

    let {email}=useParams()
    const [ data,setData]=useState('')
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      let handleSubmit= ()=>{
       
        // event.preventDefault()
    let response=axios.put(`https://journeasebackend.onrender.com/admin/changepass/${email}`,data)
        console.log(response);
        setData('')
      }
  return (
    <div className='flight'>
        <div className='box '>


          {/* <div className='userloginn h-[64px] font text-[30px] font-bold m-0 text-center '>
            <span className='text-white'>USER</span><span className='text-orange-600'> LOGIN</span>
          </div> */}
          <form onSubmit={handleSubmit}>
  <div className=' h-[30px] items-center justify-between mb-4  '>

          <div className=' font text-[20px] text-white '>Mail</div>
          <div><  div  className='rounded-lg w-[100%] ml-3' >{`${email}`}</div></div>
</div>
{/* <button className='bg-orange-600  p-1 rounded-lg w-24 mt-2 text-white ml-20'>GET OTP</button> */}
          <div className=' items-center mt-3 mb-4'>

          <div className=' font text-[20px] text-white '>Password</div>
          <div><input  onChange={handleChange} className='rounded-lg w-[100%] ml-3' type="password" name="password" id="" /></div>
          
          </div>
          <div className=' items-center mt-3 mb-4'>

          <div className=' font text-[20px] text-white '>Confirm Password</div>
          <div><input  onChange={handleChange} className='rounded-lg w-[100%] ml-3' type="password" name="cpassword" id="" /></div>
          
          </div>
          
          <button className='bg-orange-600  p-1 rounded-lg w-24 text-white ml-20'>SEND</button>
          
          {/* <div className='forget font text-[10px] text-white underline italic text-center p-2'>forgot password</div> */}

          </form>
        </div > </div>
  )
}
