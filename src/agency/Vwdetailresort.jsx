import React, { useEffect, useState } from 'react'  
 import sea from '../agency/images/resortnew.jpeg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwdetailresort = () => {
    let id=localStorage.getItem('id')
    
    let {rid}=useParams()
    console.log(rid)
    const [data,setData]=useState('')
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`https://journeasebackend.onrender.com/agency/detailvwresort/${rid}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
    let handleSubmit=async (event)=>{
        event.preventDefault()
        
    }
  return (
    <div className='pencil'>
        <div className='bg-white/70 w-[90%] p-3 ms-5 pt-2 h-[100%]'>
          <div className='font text-center text-[30px] text-amber-800 pb-4 uppercase font-bold '>{data.response?.propertyName} </div>
          {/* <div className='flex flex-wrap justify-center gap-4'> */}
         <img src={`https://journeasebackend.onrender.com/uploads/${data.response?.coverImage}`} className='m-auto w-[70%]'alt=" " srcSet=" "/>
        
        <div className='w-[90%] text-center glow'>{data.response?.description}
        {/* </div> */}</div>
        
        <div className='flex flex-wrap justify-between '>
        <div className='bg-white/45 w-72 mt-9 pl-3 rounded-lg text-amber-800 shadow-xl'>
        <div>{data.response?.propertyAddress}</div>
       
        </div>
        <div className='bg-white/45 w-80 mt-9 pt-1 rounded-lg text-center shadow-xl text-amber-800'>{data.response?.aboutUs}</div>
        <div className='bg-white/45 w-80 mt-9 p-2 rounded-lg shadow-xl text-amber-800'>
        <div>contact us:</div>
        <div>{data.response?.contactNumber}</div></div>
        </div>
        <div className=' bg-yellow-300 w-[80%] h-32 mb-24  text-red-600 ml-24 mt-9 p-2 rounded-lg shadow-xl border-l-2 border-r-2 border-t-2 border-b-2'><div>
        {data.response?.events}</div>
        <div className='flex flex-wrap justify-evenly'>
          
        </div>
        <div className='flex flex-wrap justify-evenly'>
        </div>
      
         </div>
       
         <div className='flex bg-yellow-100 px-2 py-4 rounded text-yellow-300  font-semibold font'>
           
         luxury room:
         <img src={`https://journeasebackend.onrender.com/uploads/${data?.rooms?.image}`} className='m-auto w-48'alt=" " srcSet=" "/>
         standardroom:
         <img src={`https://journeasebackend.onrender.com/uploads/${data?.rooms?.images}`} className='m-auto w-48'alt=" " srcSet=" "/>
        
        </div>
         
<div class="  overflow-x-auto shadow-md sm:rounded-lg mt-40 w-[50%] ml-72">
    <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-black uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
            <tr>
                <th >
                    Room type
                </th>
                <th >
                    No of rooms
                </th>
                <th >
                    Occupancy
                </th>
                <th >
                   Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            
            <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4 text-black">
                  luxury: 
                </td>
                <td class="px-6 py-4">
                {data?.rooms?.luxury}
                </td>
                <td class="px-6 py-4">
                   {data?.rooms?.luxuryOccupancy}
                </td>
                <td class="px-6 py-4">
                    {data?.rooms?.luxuryprice}/-
                </td>
                
            </tr>
            

 
            <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4 text-black">
                  standard: 
                </td>
                <td class="px-6 py-4">
                {data?.rooms?.standard}
                </td>
                <td class="px-6 py-4">
                   {data?.rooms?.standardOccupancy}
                </td>
                <td class="px-6 py-4">
                    {data?.rooms?.standardPrice}/-
                </td>
                
            </tr>
            



            
            
        </tbody>
    </table>
    
</div>


<div className='font-bold ml-24 mt-5'> Facilities</div>
{/* {data?.facilities?.map((item)=>( */}
<div className='ml-14 mt-14 flex gap-10 '>
        <p>{data?.facilities?.name}</p>
        <p>{data?.facilities?.luxury}</p>
        <p>{data?.facilities?.standard}</p>
        </div>
        {/* ))} */}
       </div> 
   </div>
  )
}
