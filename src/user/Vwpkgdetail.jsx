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
          <span className='text-white font font-bold text-[30px] '> </span><span className='text-orange-600 font font-bold text-[30px]'> {data.response?.packageName}</span><br /><p className='font text-[20px]  '>{data.response?.noOfDays}DAYS</p>
          </div>
          <div className='flex sm:gap-5 flex-wrap'>
            <img src={`http://localhost:4000/uploads/${data.response?.coverImage}`}  className='w-[150px] h-[150px]'/>
            <div className='w-[78%]'>

          <p className=''>{data.response?.basicDescription}</p>
          <p className=''>{data.response?.detailedDescription}</p>
            </div>
            {data.response?.destination?.map((item)=>(
              <>
            <div className='font underline'> Day:{item.Day} {item.Destination}</div> 
            <span>{item.activities}</span>
            
           
            </>
            ))}
            
            <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head:{data.response?.price}/-</div>
           
            <div className='flex flex-wrap gap-11  m-auto '>
              <Link to='/user/planpkg'><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button></Link>
          </div>
     
    
    <Link to={`/user/bookingpage/${id}`}> <button className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></Link> 
</div></div></div></div>
    
  )
}
