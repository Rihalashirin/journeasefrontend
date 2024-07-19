import React, { useEffect, useState } from 'react'
import plantrip from './PlanTripIcon.png'
import notificatn from './NotificationIcon.png'
import mngprofile from './manageprofile.png'
import reviews from './reviewsicon.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
export const Userhome = () => {
  const navigate=useNavigate()
  const [data,setData] = useState(" ")
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/login')
}
// useEffect(()=>{
//   let auth=async ()=>{

//     let id=localStorage.getItem('id')
//     // let email=localStorage.getItem('email')
//     // let response=await axios.post('https://journeasebackend.onrender.com/user/api/auth/authenticate',{_id:id,email:email})
//     let response1=await axios.get(`https://journeasebackend.onrender.com/user/welcomename/${id}`)
//     // console.log(response);
//     setData(response1.data)
//     console.log(response1);
//     // if(response==null){
//     //   navigate('/login')
//     // }
//     // else if(response?.data?.userType !=='user'){
//     //   navigate('/login')
//     // }

//   }
//   auth()
// },[])
  return (
    <div className='userhome' >
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> user</span>
            {/* <div onClick={logout} className='font bg-white w-36 text-[20px] pr-5 text-end text-orange-600'>LOG OUT</div> */}
            <div className="font text-orange-600 text-[20px] bg-white w-28 p-2 rounded-lg">
            <button onClick={logout}> LOGOUT </button>
          </div>
          </div>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-96  font text-white '>
       <Link to='/user/planpkg'> <div><img src={plantrip} alt="" className='w-20' />Plan a Trip</div></Link>
        <Link to='/user/notificatn'> <div> <img src={notificatn} alt="" className='w-20'/>Notifications</div> </Link>
            {/* <Link to='/user/addreview' ><div> <img src={reviews} alt="" className='w-20' />Add Reviews</div></Link>  */}
          <Link to='/user/updateprofile' > <div><img src={mngprofile} alt="" className='w-20' />Edit Profile</div></Link>
  
      </div>
    </div>
  )
}
