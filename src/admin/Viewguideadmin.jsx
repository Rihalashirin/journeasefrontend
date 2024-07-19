import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Viewguideadmin = () => {
    const [data,setData]=useState('')
    const [refresh, setrefresh] = useState(false);
    let {id}=useParams()
    
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://journeasebackend.onrender.com/admin/detailvwguide/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[refresh])
    let handleSubmit=async(status,id)=>{
        
        setrefresh(!refresh)
        let response=await axios.put(`https://journeasebackend.onrender.com/admin/manageagency/${id}`,{...data,status:status})
        console.log(response)
        setData('')
    }


  return (
    <div className='bg-gray-500'>
     <div className='bg-slate-950/50 w-[800px] h-[850px] pl-24 ml-64  flex flex-col gap-2 '>
       <img src={`https://journeasebackend.onrender.com/uploads/${data.image}`} alt="" className='w-44 h-48  ps-3 pt-3 '/>
       <div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'> Name:</p>
            <p className='font font-bold'>{data.name}</p>

</div>
<div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'>Age:</p>
            <p className='font font-bold'>{data.age}</p>

</div>
<div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'>Gender:</p>
            <p className='font font-bold'>{data.gender}</p>

</div>
<div className='flex flex-wrap text-white gap-4 pt-3 text-center'>
            <p className='font-bold'>Contact Number:</p>
            <p className='font font-bold'>{data.contactNumber}</p>,
            <p className='font font-bold'>{data.contactNumberalternative}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'> Email Address:</p>
            <p className='font font-bold'>{data.email}</p>

</div>

<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Address:</p>
            <p className='font font-bold'>{data.address}</p>,
            <p className='font font-bold'>{data.district}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Location of Expertise:</p>
            <p className='font font-bold'>{data.locationExpertise}</p>

</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Experience(in years):</p>
            <p className='font font-bold'>{data.experienceYears}</p>
                        
</div>
<div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>ID Proof:</p>
            <a target='_blank' href={`https://journeasebackend.onrender.com/uploads/${data.idProof}`} download> <span>{data.idProof}</span></a>

</div>
<div className='flex flex-wrap gap-2'>
{data.status === "pending" &&
  <>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
<button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>
</>
}

{data.status === "accepted" &&
 <>
 <button onClick={()=>{handleSubmit('rejected',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Reject</button>
 </>
 }

{data.status === 'rejected' &&

<>
<button onClick={()=>{handleSubmit('accepted',data._id)}} href="#" className=' font-bold bg-white  text-green-600 hover:underline w-32'>Accept</button>
</>
}
</div>
       </div>


</div>
    
  )
}
