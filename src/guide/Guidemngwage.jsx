import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Guidemngwage = () => {
  const[data,setData]=useState('')
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/guide/vwdetailbooking/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
let handleSubmit=async (status)=>{
  // event.preventDefault()
  setData(data)
  console.log(data)
 let response=await axios.put(`http://localhost:4000/guide/managebooking/${id}`,{status:status})
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
                Transport option:{data.bookings?.transports}<br/>
                picking place:{data.bookings?.pickingplace}
                </div>
                <div>
                  Date:
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
                <div className='flex flexwrap  justify-between '>
                <img src="" alt="" srcset="" />
                <div className='pt-10'>hotel <br />luxury</div>
                <div className='flex flex-col gap-6 mt-3 '>
                
                </div>
              
               
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap gap-3 justify-start '>
                <img src={`http://localhost:4000/uploads/${data?.adv?.image}`} className='w-24' alt="" srcset="" />
                <div className='font text-[20px] pt-16 '>{data.adv?.adventureName}
                 <br />{data?.adv?.price}/Head</div>
              
                </div>
                
                 <div className='mt-5'> booking status:</div>
                 <div className='flex flex-wrap gap-14 ml-96'>
                <button onClick={()=>{handleSubmit('Accepted',data._id)}}  className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button onClick={()=>{handleSubmit('Rejected',data._id)}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
                </div>

            </div>

        </div>
</div>
</div>
    
  )
}
