import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Resortsignup = () => {
    const [data,setData]=useState([''])
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    
    useEffect(()=>{
        let fetchdata = async ()=>{
            let response=await axios.get(`http://localhost:4000/admin/vwresort`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
    const filteredData = data.filter((item) => {
        // Filter by status
        if (statusFilter !== 'All' && item.status !== statusFilter) {
            return false;
        }
        // Filter by search query
        if (search.trim() !== '') {
            const searchQuery = search.toLowerCase();
            const name = item.name ? item.name.toLowerCase() : '';
            const district = item.district ? item.district.toLowerCase() : '';
            return name.includes(searchQuery) || district.includes(searchQuery);
        }
        return true; // If no search query, return all data
    });
    

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

  return (
    <div className='adminbg'>
      <div className='flex flex-col gap-2'>
       <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Resort,</span><span className='text-orange-600'> Sign Ups</span>
          </div>
          <form className="max-w-lg mx-auto pb-10">
                    <div className="flex items-center">
                        <div className="">
                        <select
    value={statusFilter}
    onChange={handleStatusChange}
    className="h-[41px] inline-flex items-center py-2.5 text-[100%] px-4 text-sm font-medium text-center text-gray-900 bg-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-700 dark:bg-gray-950/50 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:text-white dark:border-gray-700"
>
    <option value="All">All</option>
    <option value="accepted">Accepted</option>
    <option value="rejected">Rejected</option>
</select>
                        </div>
                        <div className="relative w-full">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-white bg-slate-950/50 rounded-e-lg border-s-2 border border-gray-700 focus:ring-gray-700 focus:border-gray-700 dark:bg-gray-950/50 dark:border-s-orange-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-700 placeholder:text-white"
                                placeholder="Search guides"
                                required
                            />
                        </div>
                    </div>
                </form>
        {/* <div className='w-[90%] h-7 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-normal pl-5 items-center gap-[27rem]' >
          <div className='font text-black'>Resort Name</div>
          <div className='font text-black'>Location</div>
          <div className='bg-white'></div>
          
        </div>
        <div className='w-[90%] h-16 bg-white ms-16 me-10 rounded-lg flex flex-wrap flex-row justify-between items-center pl-5 pr-8'>
        <div className='font text-black'>Hotel Sea view</div>
          <div className='font text-black'>Delhi</div>
         <Link to='/admin/vwacceptresort'><button className='font bg-orange-600 rounded-lg text-white '>View Details</button></Link> 
        </div> */}
         <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full  text-sm text-center rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#9B9B9B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   RESORT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                   LOCATION
                </th>
                <th scope="col" class="px-6 py-3">
                   DISTRICT
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
        {filteredData.map((item,index)=>(
            <tr class="bg-white border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 font-semibold">
                   {index}
                </td>
                <td class="px-6 py-4">
                    {item.propertyName}
                </td>
                <td class="px-6 py-4">
               {item.propertyAddress}
                </td>
                <td class="px-6 py-4">
               {item.district}
                </td>
                <td class="px-6 py-4">
             {item.status}
                </td>
       
                <td class="px-6 py-4 flex flex-wrap flex-col gap-2">
                    {/* <a href="#" class="font-bold text-sm text-black bg-orange-600 hover:underline hover:bg-gray p-1">view details</a> */}
                    <Link to={`/admin/vwacceptresort/${item._id}`}><button className='font bg-orange-600 rounded-lg text-white w-32'>View Details</button></Link>
                </td>
                
            </tr>
        ))}
        </tbody>
    </table>
</div>
        </div>
    </div>
  )
}
