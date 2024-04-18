import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Cstmrenqry = () => {
    const [data,setData]=useState([''])
    let id=localStorage.getItem('id')
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/agency/vwbookingtable/${id}`)
            console.log(response.data,'log for ----')
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='pencil'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Customer</span><span className='text-orange-600'> Enquiries</span>
          </div>
          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white bg-orange-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   Sl.No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Package
                </th>
                <th scope="col" class="px-6 py-3">
                   Days
                </th>
                <th scope="col" class="px-6 py-3">
                   Resort Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Guide Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Health Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                
                
                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akshay Kumar
                </th> */}
                <td class="px-6 py-4">
                {index+1}
                </td>
                <td class="px-6 py-4">
                 {item.user?.name}
                </td>
                <td class="px-6 py-4">  
                {item.req?.packageName}
                </td>
                <td class="px-6 py-4">
                  {item.req?.noOfDays}
                  
                </td>
                <td class="px-6 py-4">
                {item.booking?.resortstatus}
                  
                </td>
                <td class="px-6 py-4">
                 {item.booking?.guidestatus}
                  
                </td>
                <td class="px-6 py-4">
                  {item.booking?.healthstatus}
                  
                </td>
                <td class="px-6 py-4">
                  {item.booking?.status}
                  
                </td>
                
                
                
                
               
                <td class="px-6 py-4">
                   <Link to={`/agency/detailcstrenqry/${item.booking?._id}`}><button className='bg-orange-600 text-white rounded-lg p-2'>View details</button></Link> 
                </td>
                <td class='px-6 py-4'>
                <button className='bg-orange-600 text-white rounded-lg p-2'>Reviews</button>
                </td>
            </tr>
           
           
            ))}
        </tbody>
    </table>
</div>

          
    </div>
  )
}
