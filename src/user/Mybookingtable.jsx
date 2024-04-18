import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Mybookingtable = () => {
    const [data,setData]=useState([''])
 let id=localStorage.getItem('id')
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/user/vwmybookingtable/${id}`)
            console.log(response.data,'log for ----')
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='userhome'>
        <table class="w-full text-sm text-center rtl:text-right   text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
            <thead class="text-xs text-white uppercase bg-black dark:bg-gray-950/90 dark:text-gray-400">
                <tr >
                    <th scope="col" class="px-3 py-3">
                        SLNO
                    </th>
                    <th scope="col" class="px-1 py-3">
                        COMPANY NAME
                    </th>
                    <th scope="col" class="px-1 py-3">
                        PACKAGE
                    </th>
                    <th scope="col" class="px-1 py-3">
                        DETAILS
                    </th>
                    <th >STATUS</th>
                    
                   
                   
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                <tr class=" dark:border-gray-700  text-white hover:bg-slate-800/50 ">
                    <td scope="row" class="px-1 py-4">
                        {index+1}
                    </td >
                    <td >
                    {item.agnc?.companyName} 
                    </td>
                    <td >
                    {item.package1?.packageName}
                    </td>
                    <td>
                <Link to={`/user/vwmybooking/${item.req?._id}`}>   <button className='text-yellow-200  rounded w-14 h-6 text-center'> More</button></Link> 
                    </td>
                   
                    <td >
                    {item.req?.status}  
                    </td>
                   
                   {/* <td>
                 <Link to={`/user/writereview/${item.req?._id}`}> <button className='bg-orange-600 w-28'>REVIEW</button></Link>  
                   </td> */}
                    
                </tr>
                     ))}
            </tbody>
        </table>
    </div>
  )
}
