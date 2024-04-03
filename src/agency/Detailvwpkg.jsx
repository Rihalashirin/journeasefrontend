import React, { useEffect, useState } from 'react'
import delhi from './images/delhi.png'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export const Detailvwpkg = () => {
  // let id=localStorage.getItem('id')
  let {id}=useParams()
  console.log(id)
  const [data,setData]=useState([''])

  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/agency/detailvwpkg/${id}`)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='pencil pt-10'>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-2xl rounded-lg'>
          <div>
          <div className='w-[208px] text-center'>
          <span className='text-white font font-bold text-[30px] '></span><span className='text-orange-600 font font-bold text-[30px] '> {data.packageName}</span><br /><p className='font text-[20px]  '>{data.noOfDays}</p>
          </div>
          <div className='flex sm:gap-5 flex-wrap'>
            <img src={`http://localhost:4000/uploads/${data.coverImage}`}  className='w-[150px] h-[150px]'/>
            <div className='w-[78%]'>

          <p className=''>{data.basicDescription}</p>
            </div>
            <div className='font underline'> Day 1: Historical Marvels</div>
            <span>Embark on your Delhi adventure with a guided tour of the awe-inspiring Red Fort, a UNESCO World Heritage Site. Explore the intricate architecture and rich history encapsulated within its walls. Continue to the iconic India Gate, a symbol of national pride, and conclude the day with a visit to the serene Lotus Temple, offering a tranquil retreat.</span>
            <div className='font underline'> Day 2: Culinary Delights and Cultural Exploration</div>
            <span>Immerse yourself in the bustling markets of Chandni Chowk, where ancient traditions blend with modern vibrancy. Engage your senses with the tantalizing street food offerings and shop for local treasures. In the afternoon, savor the flavors of authentic Indian cuisine at carefully selected local restaurants, providing a delightful gastronomic experience.</span>
            <div className='font underline'>Day 3: Architectural Wonders</div>
            <span>Discover Delhi's architectural heritage with a visit to the exquisite Humayun's Tomb, a masterpiece of Mughal architecture. Explore the Qutub Minar complex, marveling at the soaring minaret and the ancient iron pillar. This day offers a fascinating journey through the city's historical and artistic gems</span>
            <div className='font underline'>Day 4: Leisure and Departure</div>
            <p>Spend your final day at leisure, perhaps exploring local markets or indulging in optional activities. Bid farewell to Delhi, cherishing the memories of your "Delhi Delight" experience. Depart with a newfound appreciation for the city's cultural richness and historical grandeur</p>
            <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head:{data.price}/-</div>  
          </div>
        </div></div><div className='mt-28 pl-64 flex flex-wrap gap-3 '>
     <Link to={`/agency/editpkg/${id}`}> <button className='bg-yellow-700 w-36 rounded-full py-2 px-4'>Edit package</button></Link> 
     <Link to={`/agency/addpkg1/${id}`}> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>Add resort</button></Link>
     <Link to={`/agency/vwaddedresort/${id}`}> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>view resort</button></Link>
     <Link to='/agency/assignguide'> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>Add guide</button></Link>
     <Link to='/agency/vwaddedguide'> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>view guide</button></Link>
     </div>
     <div className='mt-6 pl-48 flex flex-wrap gap-3'>
     <Link to='/agency/adddestination'><button type='submit' className='bg-yellow-700 w-52 text-white rounded-full py-2  px-4'>Add Destination</button></Link>
     <Link to='/agency/addadventure'><button type='submit' className='bg-yellow-700 w-52  rounded-full py-2 px-4'>Add adventure</button></Link>
     <Link to={`/agency/adventure/${id}`}><button type='submit' className='bg-yellow-700 w-52  rounded-full py-2 px-4'>view adventure</button></Link>
     <Link to={`/agency/vwaddedadventure/${id}`}><button type='submit' className='bg-yellow-700 w-60  rounded-full py-2 px-4'>view added adventure</button></Link>
     </div>
     </div> 
  )
}
