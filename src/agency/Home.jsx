import React, { useEffect } from 'react'
import addpkg from './images/addpackage.png'
import vwpkg from './images/ViewPackIcon.png'
import mngenqry from './images/enquiries.png'
import revws from './images/reviewsicon.png'
import uploads from './images/Group 114.png'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'


// import { Link } from 'react-router-dom'
let id=localStorage.getItem('id')

export const Home = () => {
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
      else if(response?.data?.userType !=='agency'){
        navigate('/login')
      }
  
    }
    auth()
  },[])
  return (
    <div className='pencil'>
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> Planner</span>
            <div onClick={logout} className='font bg-white w-36 text-[20px] pr-5 text-end text-orange-600'>LOG OUT</div>
          </div>

      <div className='flex flex-wrap gap-16 justify-center items-center  mt-28  font text-white '>
        <Link to='/agency/addpkg'><div className='flex flex-col items-center gap-2'><img src={addpkg} alt="" className='w-20 ' /><p>Add Package</p></div></Link>
        <Link to='/agency/vwpkg'> <div className='flex flex-col items-center gap-2'> <img src={vwpkg} alt="" className='w-20 '/><p>View Package</p></div> </Link>
          <Link to='/agency/cstmrenqry'> <div className='flex flex-col items-center gap-2'> <img src={mngenqry} alt="" className='w-20 ' /><p>Customer Enquiries</p></div> </Link> 
           <Link to='/agency/vwreviewagency'><div className='flex flex-col items-center gap-2'> <img src={revws} alt="" className='w-20' /><p>Customer Reviews</p></div> </Link> 
           <Link to='/agency/vwissuesagency'><div className='flex flex-col items-center gap-2'> <img src={uploads} alt="" className='w-20' /><p>Guide Uploads</p></div></Link>
          

      </div>
      
      
    </div>
  )
}

