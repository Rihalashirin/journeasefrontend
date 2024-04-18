import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Viewresort = () => {
    const [data,setData]=useState('')
    const [refresh, setrefresh] = useState(false);
    let {id}=useParams()
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/detailvwresort/${id}`)
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
       <img src={`http://localhost:4000/uploads/${data.coverImage}`} alt="" className='w-44 h-48  ps-3 pt-3 '/>
       <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'> Property Name:</p>
            <p className='font font-bold'>{data.propertyName}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Property Address:</p>
            <p className='font font-bold'>{data.propertyAddress}</p>
            <p className='font font-bold'>{data.district}</p>

</div>
<div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'>Registration Number:</p>
            <p className='font font-bold'>{data.registrationNumber}</p>

</div>
<div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'>Contact Number:</p>
            <p className='font font-bold'>{data.contactNumber}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'> Email Address:</p>
            <p className='font font-bold'>{data.email}</p>

</div>

<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Owner Name:</p>
            <p className='font font-bold'>{data.ownerName}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Description:</p>
            <p className='font font-bold'>{data.description}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>About Us:</p>
            <p className='font font-bold'>{data.aboutUs}</p>

</div>
<div className='flex flex-wrap gap-5'>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
<button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>
</div>
       </div>


    </div>
  )
}
