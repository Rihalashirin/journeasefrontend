import React, { useEffect, useState } from 'react'
import delhi from './delhi.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwpkgdetail = () => {
  let {id}=useParams()
  const [data,setData]=useState('')
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/user/detailvwpackage/${id}`)
      console.log(response.data)
        setData(response.data) 
    }
    fetchdata()
},[])

  return (
    <div className='userhome'>
         <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div>
            <div className='font text-white text-center text-[30px]'>{data.agency?.companyName} </div>
            <div className='font text-white text-center'>{data.agency?.officeAddress}</div>
          <div className='w-[208px] text-center'>
          <span className='text-white font font-bold text-[30px] '> </span><span className='text-orange-600 font font-bold text-[30px]'> {data.response?.packageName}</span><br /><p className='font text-[20px]  '>{data.response?.noOfDays}</p>
          </div>
          <div className='flex sm:gap-5 flex-wrap'>
            <img src={`http://localhost:4000/uploads/${data.response?.coverImage}`}  className='w-[150px] h-[150px]'/>
            <div className='w-[78%]'>

          <p className=''>{data.response?.basicDescription}</p>
          <p className=''>{data.response?.detailedDescription}</p>
            </div>
            <div className='font underline'> Day 1: Historical Marvels</div>
            <span>Embark on your Delhi adventure with a guided tour of the awe-inspiring Red Fort, a UNESCO World Heritage Site. Explore the intricate architecture and rich history encapsulated within its walls. Continue to the iconic India Gate, a symbol of national pride, and conclude the day with a visit to the serene Lotus Temple, offering a tranquil retreat.</span>
            <div className='font underline'> Day 2: Culinary Delights and Cultural Exploration</div>
            <span>Immerse yourself in the bustling markets of Chandni Chowk, where ancient traditions blend with modern vibrancy. Engage your senses with the tantalizing street food offerings and shop for local treasures. In the afternoon, savor the flavors of authentic Indian cuisine at carefully selected local restaurants, providing a delightful gastronomic experience.</span>
            <div className='font underline'>Day 3: Architectural Wonders</div>
            <span>Discover Delhi's architectural heritage with a visit to the exquisite Humayun's Tomb, a masterpiece of Mughal architecture. Explore the Qutub Minar complex, marveling at the soaring minaret and the ancient iron pillar. This day offers a fascinating journey through the city's historical and artistic gems</span>
            <div className='font underline'>Day 4: Leisure and Departure</div>
            <p>Spend your final day at leisure, perhaps exploring local markets or indulging in optional activities. Bid farewell to Delhi, cherishing the memories of your "Delhi Delight" experience. Depart with a newfound appreciation for the city's cultural richness and historical grandeur</p>
            <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head:{data.response?.price}/-</div>
            <div className='flex flex-wrap gap-11  m-auto '>
              <Link to='/user/planpkg'><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button></Link>
          <Link to={`/user/Accomodatn/${id}`}> <button className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></Link> </div>
</div></div></div></div>
    
  )
}
