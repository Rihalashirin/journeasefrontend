import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Viewagency = () => {
    const [data,setData]=useState('')
    const [refresh, setrefresh] = useState(false);
    let {id}=useParams()

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/detailvwagency/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[refresh])
    let handleSubmit=async(status,id)=>{
        
            setrefresh(!refresh)
            let response=await axios.put(`http://localhost:4000/admin/manageagency/${id}`,{...data,status:status})
            console.log(response)
            setData('')
        }
    
  return (
    <div className='adminbg'>
       <div className='bg-slate-950/50 w-[800px] h-[800px] pl-24 ml-64  flex flex-col gap-2 '>
       <img src={`http://localhost:4000/uploads/${data.companyLogo}`} alt="" className='w-44 h-48  ps-3 pt-3 '/>
       <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Comapny Name:{data.companyName}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Office Address:{data.officeAddress}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Contact Number:{data.contactNumber}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'> Email Address:{data.email}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>liscence Number:{data.licenseNumber}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>License proof:{data.licenseProof}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Description:{data.description}</p>
            <p></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>About Us:{data.aboutUs}</p>
            <p></p>

</div>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
<button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>

       </div>

      
   </div>
  )
}
