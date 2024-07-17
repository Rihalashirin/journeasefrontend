import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom' 
import homeicon from './Group 93.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const Navuser = () => {
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
      let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='user'){
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
         <Link to='/user'><div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link> 
         <Link to='/user/planpkg'><div className='font text-orange-600 '>TRIP</div></Link>
           <Link to='/user/notificatn'><div className='font text-orange-600 '>NOTIFICATION</div></Link>
         {/* <Link to='/user/addreview'> <div className='font text-orange-600 '>REVIEW</div></Link> */}
         <Link to='/user/mybookingtable'> <div className='font text-orange-600 '>MYBOOKING</div></Link>
         {/* <div className='font text-orange-600 '><button onClick={logout}> LOGOUT </button></div> */}
        
       </div>        
    </div>
    <Outlet/>
      
    </div>
  )
}
