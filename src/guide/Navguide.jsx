import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import homeicon from './Group 93.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Navguide = () => {
  const [data, setData] = useState("")
  const navigate=useNavigate()

  
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/login')
}

  useEffect(()=>{
    let auth=async ()=>{
  
      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('https://journeasebackend.onrender.com/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      setData(data)
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='guide'){
        navigate('/login')
      }
  
    }
    auth()
  },[])
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
       <Link to='/guide'> <div><img className='w-[40px] ' src={ homeicon} alt="" srcset="" /></div></Link>
      
        <Link to='/guide/guidemngenqry'><div className='font text-orange-600 '>ENQUIRIES</div></Link>
        {/* <div className='font text-orange-600 '><button onClick={logout}> LOGOUT</button></div> */}
        <Link to='/guide/updatepro'> <div className='font text-orange-600 '>PROFILE</div> </Link>
        
       </div>        
    </div>
    <Outlet/>
      
    </div>
  )
}
