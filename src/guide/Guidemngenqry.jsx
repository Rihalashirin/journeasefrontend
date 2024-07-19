import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Guidemngenqry = () => {
    let id=localStorage.getItem("id")
    const[data, setData] = useState([''])
    useEffect(() => {
      let fetchdata = async () => {
        let response = await axios.get(
          `https://journeasebackend.onrender.com/guide/vwrequestagency/${id}`
        );
        console.log(response.data);
        setData(response.data);
      };
      fetchdata();
    },[]);

  return (
     <div className='guidehome'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs bg-gray-800 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   Sl.no
                </th>
                <th scope="col" class="px-6 py-3">
                   Company Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                   Location
                </th>
                <th scope="col" class="px-6 py-3">
                   Days
                </th>
                <th scope="col" class="px-6 py-3">
                    Guest Count
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                 
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
                <th scope="col" class="px-6 py-3">
                  
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item, index) => ( 
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {index+1}
                   
                </th>
                <td class="px-6 py-4">
                   {item.agn?.companyName}
                  
                </td>
                
                <td class="px-6 py-4">
                { new Date(item?.bookings?.date).toLocaleDateString()}
                
                </td>
                <td class="px-6 py-4">
                  {item.pkg?.location}
                 
                </td>
                <td class="px-6 py-4">
                  {item.pkg?.noOfDays}
                 
                </td>
                <td class="px-6 py-4">
                   {item.bookings?.adult}A,{item.bookings?.child}C
                  
                </td>
                <td class="px-6 py-4">
                  {item?.bookings?.guidestatus}
                 
                </td>
               
                <td class="px-3 py-4 flex flex-wrap flex-col gap-2 text-center">

                 {/* <Link to='/guide/guidemngwage'>  <a href="#" class="font-bold text-sm text-black bg-green-600 hover:underline hover:bg-gray p-1">Accept</a></Link>  */} 
                  <Link to={`/guide/guidemngwage/${item?.req?._id}`}>
                 
                     <button class="font-bold text-[10px] text-black bg-red-600 hover:underline hover:bg-orange-600 p-1 w-20" >View</button> </Link> 
                </td>
                
                <td>
                <Link to={`/guide/issuewrite/${item?.bookings?._id}`}> 
                <button class="font-bold text-[10px] text-black bg-red-600 hover:underline hover:bg-orange-600 p-1 w-20" >Feedback</button> </Link>
                </td>
                <td>
               <Link to={`/guide/vwfeedbck/${item?.bookings?._id}`}>
                <button class="font-bold text-[10px] text-black bg-red-600 hover:underline hover:bg-orange-600 p-1 w-20" >view feedback</button></Link> 
                </td>
                <td>
                <Link to={`/guide/photoupload/${item?.bookings?._id}`}> 
                <button class="font-bold text-[10px] text-black bg-red-600 hover:underline hover:bg-orange-600 p-1 w-20" >Add image</button> </Link>
                </td>
                <td>
              <Link to={`/guide/vwimage/${item?.bookings?._id}`}> 
              <button class="font-bold text-[10px] text-black bg-red-600 hover:underline hover:bg-orange-600 p-1 w-20" >View image</button></Link>
                </td>
            </tr>
           
           
           
          ))}
        </tbody>
    </table>
</div>
</div>
  )
}
 