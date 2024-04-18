import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const Resortmngprice = () => {
    const[data,setData]=useState('')
    let {id}=useParams()
    useEffect(()=>{
      let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/resort/vwdetailbooking/${id}`)
          console.log(response.data,'log for ----')
          setData(response.data)
      }
      fetchdata()
  },[])
  let handleSubmit=async (status)=>{
    // event.preventDefault()
    setData(data)
    console.log(data)
   let response=await axios.put(`http://localhost:4000/resort/managebooking/${id}`,{resortstatus:status})
   console.log(response); 
    
  }
  return (
    <div>
        <div className='resorthome h-screen w-[100%] '>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
    <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
    <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :{data.usr?.name}  <br/>
               Email :{data.usr?.email}  <br/>
               Mobile:{data.usr?.contactNumber} <br/>
                      {data.usr?.contactNumberalternative}<br/>

               
           <div className='text-[20px] flex flex-wrap'>
            Booking info:</div>
            <div className='flex flex-wrap gap-5'>
          <div> Adults:{data.bookings?.adult} <br/></div>
             <div>   Children:{data.bookings?.child}<br/></div>
              <div>  Transport option:{data.bookings?.selectedTransport}<br/></div>
               <div> Roomtype:{data.bookings?.accomodatn}</div>
             <div>  Check-in: {new Date(data.response?.fromDate).toLocaleDateString()}</div>
               Check-out: {new Date(data.response?.toDate).toLocaleDateString()}
                </div>
                <br/>
                <div className='text-[20px]'>
                Package info </div>
                </div>
             <div> {data.package1?.packageName}</div>
             <div> {data.package1?.noOfDays}DAYS</div>
             <div>{data.package1?.category}</div>
             <div className='flex flex-wrap gap-10'>
              <div>Guide :{data.bookings?.guide} </div>
              <div>Health Assistant :{data.bookings?.health} </div>
             
</div>
<div className='flex flex-wrap gap-5 ml-72'>
<button onClick={()=>{handleSubmit('Accepted',data?.bookings?._id)}}  className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button onClick={()=>{handleSubmit('Rejected',data?.bookings?._id)}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button> </div> </div>  
</div>
</div>
    </div>
  )
}
