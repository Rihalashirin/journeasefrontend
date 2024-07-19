import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Guidemngwage = () => {
  const[data,setData]=useState('')
  let gid=localStorage.getItem("id")
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://journeasebackend.onrender.com/guide/vwdetailbooking/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}
let handleSubmit=async (status,wage)=>{
  // event.preventDefault()
  setData(data)
  console.log(data)
 let response=await axios.put(`https://journeasebackend.onrender.com/guide/managebooking/${id}`,{guidestatus:status,guideid:gid})
 console.log(response); 
  
}

  return (
    <div className='guidehome'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :{data.usr?.name}  <br/>
               Email :{data.usr?.email}  <br/>
               Mobile:{data.usr?.contactNumber} <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults:{data.bookings?.adult} <br/>
                Children:{data.bookings?.child}<br/>
                Transport option:{data.bookings?.selectedTransport}<br/>
                picking place:{data.bookings?.pickingplace}
                </div>
                <div>
                  Date:{new Date(data.bookings?.date).toLocaleString()}
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info </div><br/>
                </div>
             <div> {data.package1?.packageName}</div>
             <div> {data.package1?.noOfDays}DAYS</div><br/>
             <div>{data.package1?.category}</div>
             <div className='flex flex-wrap gap-10'>
              <div>Guide :{data.bookings?.guide} </div>
              <div>Health Assistant :{data.bookings?.health} </div>
             </div>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap gap-5 '>
                <img src={`https://journeasebackend.onrender.com/uploads/${data?.resort?.coverImage}`} className='w-20' alt="" srcset="" />
                <div className='pt-10'>{data?.resort?.propertyName}
                 <br />{data?.bookings?.accomodatn}</div>
                {/* <div className='flex flex-col gap-6 mt-3 '>
                
                </div> */}
              
               
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap gap-5 justify-start '>
                <img src={`https://journeasebackend.onrender.com/uploads/${data?.adv?.image}`} className='w-24' alt="" srcset="" />
                <div className='font text-[20px] pt-5 '>{data.adv?.adventureName}
                 <br />{data?.adv?.price}/Head</div>
                 <div className='mt-5'> booking status:{data.bookings?.status}</div>
                wage per day- {data.bookings?.wage}
                
                 <div className='flex flex-wrap gap-14 '>
                <button onClick={()=>{handleSubmit('Accepted',data?.bookings?._id)}}  className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button onClick={()=>{handleSubmit('Rejected',data?.bookings?._id)}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
                </div>
                </div>
                
                
           

            </div>

        </div>
</div>
</div>
    
  )
}
