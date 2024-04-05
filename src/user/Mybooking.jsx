import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Mybooking = () => {
  const[data,setData]=useState('')
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/user/viewbookigdetail/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='userhome'>
       <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px] text-red-950 font-bold '>
                Package info </div> <br />
               Package Name  :  {data.package1?.packageName}<br/>
              No Of Days: {data.package1?.noOfDays}<br/>
               Location: {data.package1?.location} <br/>
               Package Amount:{data.package1?.price}
               <br/>
               
               <div className='font '>
                <div className='text-[20px] text-red-950 font-bold mt-6'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults: {data?.response?.adult}<br/>
                Children:{data.response?.child}
                </div>
                <div>
                  Date:10/02/2024-14/02/2024
                </div>
                
                </div>
               
                </div>
             <div> </div>
             <div className='flex flex-wrap gap-20'>
              <div>Guide : {data.response?.guide}</div>
              <div>Health Assistant : {data.response?.health}</div>
             </div>
               <div className='text-[20px] text-red-950 font-bold mt-3'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap gap-20 '>
                <img src={`http://localhost:4000/uploads/${data.resort?.coverImage}`} alt="" srcset="" />
                <div className='pt-10'>{data.resort?.propertyName} <br />Luxury</div></div>
                <div className='flex flex-col gap-6 mt-3 '>
                {/* <button className='bg-yellow-500 w-20 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-gray-400 w-20 h-9 rounded-lg text-white'>STATUS</button> */}
                </div>
               
               
                
                <div className='text-[20px] text-red-950 font-bold mt-4'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap gap-20 justify-start '>
                <img src={`http://localhost:4000/uploads/${data.adv?.image}`}className='w-[300px]' alt="" srcset="" />
                <div className='pt-10'>{data.adv?.adventureName}<br />Price: {data.adv?.price}/Head</div>
                {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
                </div>

                


            </div>

        </div>  

    </div>
  )
}
