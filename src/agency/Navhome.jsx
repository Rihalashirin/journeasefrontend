import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import homeicon from './images/Group 93.png'
import axios from 'axios'

export const Navhome = () => {

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
      let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      setData(response.data)
      
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='agency'){
        navigate('/login')
      }
  
    }
    

      auth()
   
  },[])
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap '>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
        <Link to='/agency'><div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link>
       <Link to='/agency/cstmrenqry'><div className='font text-orange-600 '>ENQUIRIES</div></Link> 
       <Link to='/agency/vwpkg'> <div className='font text-orange-600 '>PACKAGES</div></Link>
        <Link to='/agency/vwreviewagency'><div className='font text-orange-600 '>REVIEWS</div></Link>
       {/* <Link to='/agency/vwphoto'> <div className='font text-orange-600 '>PHOTOS</div></Link> */}
        <Link to='/agency/addadventure'><div className='font text-orange-600 '>ADVENTURES</div></Link> 
      
       
  
       
       <Link to='/agency/addpkg'> <div className='font text-orange-600 '>ADD PACKAGES</div></Link>
        {/* <div className='font text-orange-600 '><button onClick={logout}>LOGOUT</button></div> */}
        <div className='flex flex-wrap gap-2'>
      <Link to='/agency/updateproagency'>  <img  src="/images/logoagency.jpg" alt="" className='w-16 '/></Link>
        </div>  </div>      
    </div>
    
    <Outlet/>
      
    </div>
  )
}
