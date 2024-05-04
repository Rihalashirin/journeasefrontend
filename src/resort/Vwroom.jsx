import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Vwroom = () => {
    let id=localStorage.getItem('id')
    const[data,setData]=useState([''])
    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/resort/viewroom/${id}`)
          console.log(response.data)
          setData(response.data)
        }
        fetchdata()
      },[])
  return (
    <div>
               
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
                  Image
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
                {data?.luxury}
                </td>
                <td class="px-6 py-4">
                   {data?.luxuryOccupancy}
                </td>
                <td class="px-6 py-4">
                <a target="_blank" href={`http://localhost:4000/uploads/${data.images}`} download> <span>{data.image}</span></a>
                </td>
                <td class="px-6 py-4">
                    {data?.luxuryprice}/-
                </td>
                
            </tr>
            

 
            <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4 text-black">
                  standard: 
                </td>
                <td class="px-6 py-4">
                {data?.standard}
                </td>
                <td class="px-6 py-4">
                   {data?.standardOccupancy}
                </td>
                <td class="px-6 py-4">
                <a target="_blank" href={`http://localhost:4000/uploads/${data.image}`} download> <span>{data.images}</span></a>
                </td>
                <td class="px-6 py-4">
                    {data?.standardPrice}/-
                </td>
                
            </tr>
            



            
            
        </tbody>
    </table>
    
</div> 
    </div>
  )
}
