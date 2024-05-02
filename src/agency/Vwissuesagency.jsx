import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Vwissuesagency = () => {
    const [data, setData] = useState(['']);
     let  id  = localStorage.getItem('id')

    useEffect(() => {
        let fetchdata = async () => {
          let response = await axios.get(`http://localhost:4000/agency/vwguideuploads/${id}`);
          console.log(response.data, 'log for ----');
          setData(response.data);
        };
        fetchdata();
      }, []);
  return (
    <div className='pencil pt-11'>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-white uppercase bg-slate-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    Sl No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Package
                </th>
                <th scope="col" class="px-6 py-3">
                   Email
                </th>
                <th scope="col" class="px-6 py-3">
                   Date
                </th>
                <th scope="col" class="px-6 py-3">
                   Issues
                </th>
                <th scope="col" class="px-6 py-3">
                   Photos
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    Price
                </th> */}
                
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-4">
                {index+1}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akshay Kumar
                </th>
                <td class="px-6 py-4">
                   Delhi Delight
                </td>
                <td class="px-6 py-4">
                   Akshaykumar@gmail.com
                </td>
                <td class="px-6 py-4">
                  {item.booking?.date}
                </td>
                <td class="px-6 py-4">
                  there is a delay
                </td>
                {/* <td class="px-6 py-4">
                  
                </td> */}

                {/* <td class="px-6 py-4">
                    $2999
                </td> */}
                {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
                <td class="px-6 py-4">
                 <Link to={`/agency/vwphoto/${item.booking?._id}`}><button className='bg-orange-600 text-white rounded-lg p-2'>View Photos</button> </Link> 
                </td>
            </tr>
           
            ))}
        </tbody>
    </table>
    </div>
  )
}
