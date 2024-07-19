import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Viewfacilityresort = () => {
    let id=localStorage.getItem('id')
    const[data,setData]=useState([''])
    const [userData,setUserData]=useState([''])
    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`https://journeasebackend.onrender.com/resort/viewfacilityresort/${id}`)
          console.log(response.data)
          setUserData(response.data)
        }
        fetchdata()
      },[])

  return (
    <div className='bg-[#1a2954d6] h-[600px]'>
       <table class="w-full text-sm text-center rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#9B9B9B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    FACILITIES
                </th>
                <th scope="col" class="px-6 py-3">
                    LUXURY
                </th>
                <th scope="col" class="px-6 py-3">
                   STANDARD
                </th>
                
                
                
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
            {userData.map((item,index)=>(

           
            <tr class="bg-white border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 font-semibold">
                    
                    {index+1}
                </td>
                <td class="px-6 py-4">
                   {item.name}
                </td>
                <td class="px-6 py-4">
                  {item.luxury ?
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#c8e6c9" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
</svg>
 :
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
</svg>
                  }
                </td>
                <td class="px-6 py-4">
                  {item.standard ?
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#c8e6c9" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
</svg>
}
                </td>
                
                
       
                <td class="px-6 py-4 flex flex-wrap  gap-2">
                    {/* <a href="#" class="font-bold text-sm text-black bg-orange-600 hover:underline hover:bg-gray p-1">view details</a> */}
                    <Link to={`/resort/updatereg3/${item._id}`}> <button className='w-32  font mt-5 bg-orange-600 rounded-lg text-white '>UPDATE</button></Link> 
                   {/* <button className='w-32 font bg-orange-600 rounded-lg mt-5 text-white '>DELETE</button> */}
                </td>
                
            </tr>
             ))}
        </tbody>
    </table>  
        
    </div>
  )
}
