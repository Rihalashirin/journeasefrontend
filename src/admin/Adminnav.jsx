import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import homeicon from '../agency/images/Group 93.png'
import axios from 'axios'

export const Adminnav = () => {
  const navigate=useNavigate()

  useEffect(()=>{
    let auth=async ()=>{
  
      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='admin'){
        navigate('/login')
      }
  
    }
    auth()
  },[])
  return (
    <div className=''>
        <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between'>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
        <img  src="" alt="" className='w-16'/>
       <Link to='/admin'> <div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link>
      <Link to='/admin/bookings'>  <div className='font text-orange-600 '>BOOKINGS</div></Link>
       <Link to='/admin/request'> <div className='font text-orange-600 '>REQUEST</div></Link>
       <Link to='/admin/pkg'><div className='font text-orange-600 '>PACKAGE</div></Link> 
       </div>        
    </div>
    <Outlet></Outlet>
    
    
    
    </div>
  )
}
