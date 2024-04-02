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
            <p className=' font font-bold'>Comapny Name:</p>
            <p  className=' font font-bold'>{data.companyName}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className=' font font-bold'>Office Address:</p>
            <p  className=' font font-bold'>{data.officeAddress}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font font-bold'>Contact Number:</p>
            <p  className=' font font-bold'>{data.contactNumber}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className=' font font-bold'> Email Address:</p>
            <p  className=' font font-bold'>{data.email}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font font-bold'>liscence Number:</p>
            <p  className=' font font-bold'>{data.licenseNumber}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font font-bold'>License proof:</p>
            <p > <img src={`http://localhost:4000/uploads/${data.licenseProof}`} alt="" className='w-44 h-16  ps-3 pt-3 '/></p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font font-bold'>Description:</p>
            <p  className=' font font-bold'>{data.description}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font font-bold'>About Us:</p>
            <p  className=' font font-bold'>{data.aboutUs}</p>

</div>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
<button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>

       </div>

      
   </div>
  )
}
