import React, { useEffect } from 'react'
import resorthome from './Resort-Home.png'
import bookicon from './bookingicon.png'
import enqryicon from './enqryicon.png'
import reviewicon from './reviewsicon.png'
import profileicon from './profileicon.png'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
export const Resorthome = () => {
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
      else if(response?.data?.userType !=='resort'){
        navigate('/login')
      }
  
    }
    auth()
  },[])
  return (
    <div>
    <div className='resorthome h-screen w-[100%] '>
    <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Hotel Owner</span>
            <div onClick={logout} className='font bg-white w-36 text-[20px] pr-5 text-end text-orange-600'>LOG OUT</div>
          </div>
         <div className='flex gap-8 items-center justify-center pt-52 flex-wrap'>
        {/* <Link to='/resort/resortvwbooking'><div className='font text-white text-center'>
         <img src={bookicon} alt="" className='w-28 h-28 font ' srcset="" />
         Bookings
         </div></Link> */}
        <Link to='/resort/resortmngenqry'><div className='font text-white text-center'> <img src={enqryicon} alt="" className='w-28 h-28' srcset="" />
         Enquiries</div></Link>
         <Link to='/resort/resortvwreview'><div className='font text-white text-center'><img src={reviewicon} alt="" className='w-28 h-28' srcset="" />
         Reviews   </div></Link>
       <Link to='/resort/resortprofile'> <div className='font text-white text-center'> <img src={profileicon} alt="" className='w-28 h-28' srcset="" />
         Edit profile </div></Link>
         </div>
         </div>
    </div>
  )
}
