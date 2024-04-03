import React, { useEffect, useState } from 'react'
import advnture from './images/adventure.png'
import zipline from './images/Rectangle 522 (1).png'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const Addpkg3 = () => {
    const [data,setData]=useState('')
    let {id}=useParams()
    const [adventureData,setadventureData]=useState([''])
    const [resortData,setResortdata]=useState([''])

    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/agency/findadventure`)
            console.log(response.data)
            setadventureData(response.data)
        }
        fetchdata()
    },[])

    const [selectAll, setSelectAll] = useState(false);
   const [selectedResorts, setSelectedResorts] = useState([]);

   const handleMasterCheckboxChange = () => {
       setSelectAll(!selectAll);
       const selectedResortIds = selectAll ? [] : resortData.map(item => item._id);
       setSelectedResorts(selectedResortIds);
       console.log("Selected resorts:", selectedResortIds);
       console.log("Select all:", !selectAll);
   };
   const handleResortCheckboxChange = (resortId) => {
    const isSelected = selectedResorts.includes(resortId);
    if (isSelected) {
        const updatedSelection = selectedResorts.filter(id => id !== resortId);
        setSelectedResorts(updatedSelection);
    } else {
        setSelectedResorts([...selectedResorts, resortId]);
    }
    console.log("Selected resorts:", selectedResorts);
};
let handleSubmit=async()=>{
    let response=await axios.put(`http://localhost:4000/agency/addAdventuretoPackage/${id}`,{adventureid:selectedResorts})
    console.log(response);
}
    
    
     
    // let handleChange=(event)=>{
    //     setData({...data,[event.target.name]:event.target.value})
    // }
    // let handleSubmit=async (event)=>{
    //     event.preventDefault()
    //    let response=await axios.post('http://localhost:4000/user',data)
    //    console.log(response);
        
    // }
  return (
    <div  className='bg-[#1a2954d6] h-screen'>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Select</span><span className='text-orange-600'> Available Adventure option</span>
            </div>
            <form  class="flex items-center max-w-sm mx-auto">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                    </div>
                    <input  type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Location..." required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>
            <div className='flex flex-wrap sm:gap-10 '>
            {adventureData.map((item)=>(
                <div className=' pt-28 text-center text-white '>
                    <img src={`http://localhost:4000/uploads/${item.image}`} className='m-auto w-20' alt="" srcset="" />
                    <div className='font font-bold'>{item.adventureName}</div>
                    <div className='font text-[10px]'>{item.price}</div>
                    <div className='font text-[10px]'>{item.description}</div>
                    
                    <input
                        type="checkbox"
                        checked={selectedResorts.includes(item._id)}
                        onChange={() => handleResortCheckboxChange(item._id)}
                         
                    />
                   <Link to='/agency/editadventure'>   <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Edit</button></Link>  
                 
                </div>
                
            ))}
               
                {/* <div className=' pt-28 text-center text-white '>
                    <img src={crescent} className='m-auto' alt="" srcset="" />
                    <div className='font font-bold'>Crescent Arcade</div>
                </div> */}

            </div>
               

                    <button onClick={handleSubmit}  className='text-center text-white rounded-lg bg-orange-600 w-24  h-11 ml-[500px] mt-5  '>submit</button> </div>
    
  )
}
