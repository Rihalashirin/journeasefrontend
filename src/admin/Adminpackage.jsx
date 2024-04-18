import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Adminpackage = () => {
    const [data,setData]=useState(['']) 

    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/vwpackage`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='adminbg'>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-4">
    <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs bg-gray-800 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    SL.NO
                </th>

                <th scope="col" class="px-6 py-3">
                    Agency
                </th>
                <th scope="col" class="px-6 py-3">
                    Package
                </th>
                <th scope="col" class="px-6 py-3">
                    Days
                </th>
                <th scope="col" class="px-6 py-3">
                    image
                </th>
                <th scope="col" class="px-6 py-3">
                   Location
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>
           {data.map((item,index)=>(
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index}
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.agency?.companyName}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.package?.packageName}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {item.package?.noOfDays}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    file
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.package?.location}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {item.package?.category}
                </td>
               
            </tr>
          
          ))} 
            
            
        </tbody>
    </table>
</div>

    </div>
  )
}
