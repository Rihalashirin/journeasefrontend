import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Booking = () => {
    const [data, setData] = useState([]);
    const[data1,setData1]=useState(false)
    let handlereview=()=>{
        setData1(!data1)
    }
    
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/vwbooking`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='bg-gray-500 h-[600px]'>
        {/* table... */}
        
        

<div class="relative overflow-x-auto pt-14 pe-5 ps-5">
    <table class="w-full text-sm text-left rtl:text-right text-white ">
        <thead class="text-xs text-orange-400 uppercase bg-gray-50  ">
            <tr className='bg-gray-600 border-b  dark:border-gray-700'>
            <th scope="col" class="px-6 py-3">
                   Sl.No
                </th>
                <th scope="col" class="px-6 py-3">
                    Booking Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Agency
                </th>
                <th scope="col" class="px-6 py-3">
                   Package
                </th>
                <th scope="col" class="px-6 py-3">
                    Hotel
                </th>
                <th scope="col" class="px-6 py-3">
                    Reviews-Hotel
                </th>
                <th scope="col" class="px-6 py-3">
                    Reviews-Package
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <>
            <tr className='bg-white' >
            <td class="px-6 py-4 text-black">
            {index+1} 
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {item?.user?.name}
                </th>
                <td class="px-6 py-4 text-black">
                    {item?.agency?.companyName}
                </td>
                <td class="px-6 py-4 text-black">
                   {item?.package?.packageName}
                </td>
                <td class="px-6 py-4 text-black">
                    
                   {item?.resort?.propertyName}
                </td>
                <td class="px-6 py-4 text-black">
                   
                    {item?.resrw[0]?.review}
                </td>
                <td class="px-6 py-4 text-black">
                    
                 <button onClick={handlereview} className='bg-orange-700 px-2 py-2 rounded-lg '>View</button>
                </td>
            </tr>
            {data1 &&
            item?.rw?.map((item1)=>(
                <>
                <tr>
                {item1.review}
                </tr>
                </>

))}
            
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4 ">
                    <button className='bg-orange-500'>View Review</button>
                </td>
            </tr> */}
            {/* <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr> */}
            </>
        ))} 
        </tbody>
    </table>
    
</div>



    </div>
  )
}
