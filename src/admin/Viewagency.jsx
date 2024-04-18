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
       <div className='bg-slate-950/50 w-[900px] h-[950px] p-10 ml-52 flex flex-col   '>
       <img src={`http://localhost:4000/uploads/${data.companyLogo}`} alt="" className='w-44 h-48  ps-3 pt-3 '/>
       <div className='flex flex-wrap text-white  text-center'>
            <p className=' font font-bold text-yellow-500'>Comapny Name:</p>
            <p  className=' font font-bold'>{data.companyName}</p>

</div>
<div className='flex flex-wrap text-white   text-center'>
            <p className=' font font-bold text-yellow-500'>Place:</p>
            <p  className=' font font-bold'>{data.place}</p>

</div>
<div className='flex flex-wrap text-white    text-center'>
            <p className=' font font-bold text-yellow-500'>District:</p>
            <p  className=' font font-bold'>{data.district}</p>

</div>
<div className='flex flex-wrap text-white    text-center'>
            <p className=' font font-bold text-yellow-500'>Pin Number:</p>
            <p  className=' font font-bold'>{data.pin}</p>

</div>
<div className='flex flex-wrap gap-2 text-white  text-center'>
            <p className='font font-bold text-yellow-500'>Contact Number:</p>
            <p  className=' font font-bold'>{data.contactNumber}</p>,
            <p className='font font-bold'>{data.contactNumberalternative}</p>

</div>
<div className='flex flex-wrap text-white   text-center'>
            <p className=' font font-bold text-yellow-500'> Email Address:</p>
            <p  className=' font font-bold'>{data.email}</p>

</div>
<div className='flex flex-wrap text-white    text-center'>
            <p className='font font-bold text-yellow-500'>liscence Number:</p>
            <p  className=' font font-bold'>{data.licenseNumber}</p>

</div>
<div className='flex flex-wrap text-white   text-center'>
            <p className='font font-bold text-yellow-500'>License proof:</p>
            <p > <img src={`http://localhost:4000/uploads/${data.licenseProof}`} alt="" className='w-44 h-16  ps-3 pt-3 '/></p>

</div>
{/* <div className='flex flex-wrap text-white  text-center'>
            <div className='font font-bold text-yellow-500'>Description:</div>
            <div  className=' font font-bold'>{data.description}</div>

</div>
<div className='flex flex-wrap text-white   text-center'>
            <div className='font font-bold text-yellow-500'>About Us:</div>
            <div  className=' font font-bold'>{data.aboutUs}</div>

</div> */}
<div className='flex flex-wrap gap-2'>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
<button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>
</div>
       </div>

      
   </div>
  )
}
