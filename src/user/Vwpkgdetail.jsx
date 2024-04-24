import React, { useEffect, useState } from 'react'
import delhi from './delhi.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwpkgdetail = () => {
  let {id}=useParams()
  const [data,setData]=useState([''])
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/user/detailvwpackage/${id}`)
      console.log(response.data)
        setData(response.data) 
    }
    fetchdata()
},[])

  return (
    <div className='bg-orange-700'>
         <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div>
            <div className='font text-white text-center text-[30px]'>{data[0]?.agency?.companyName} </div>
            <div className='font text-white text-center'>{data[0]?.agency?.officeAddress}</div>
          <div className='w-[208px] text-center'>
          <span className='text-white font font-bold text-[30px] '> </span><span className='text-orange-600 font font-bold text-[30px]'> {data[0]?.pkg?.packageName}</span><br />{data[0].pkg?.price}/-per Head<p className='font text-[20px]  '>{data[0]?.pkg?.noOfDays}DAYS</p>
          </div>
          <div className='flex flex-wrap sm:gap-5 '>
            <img src={`http://localhost:4000/uploads/${data[0]?.pkg?.coverImage}`}  className='w-[350px] h-[350px] mb-5'/>
            <div className='w-[60%]'>

          <p className=''>{data[0]?.pkg?.basicDescription}</p>
          <p className=''>{data[0]?.pkg?.detailedDescription}</p>
            </div>
            </div>
            {data[0]?.pkg?.destination?.map((item)=>(
              <>
            <div className='font underline'> Day:{item.Day} {item.Destination}</div> 
            <div>{item.activities}</div><br/>
            
           
            </>
            ))}
            <div className='flex flex-wrap gap-5'>
            <div className='flex-col'>
            <div className='font-semibold text-orange-800 text-[20px]'> Adventures:</div> 
            {data?.map((item)=>(
              <>
              <div className='font-semibold'>
            
                {item?.defaultadventure?.adventureName} 
              </div>
              <img src={`http://localhost:4000/uploads/${item?.defaultadventure?.image}`}  className='w-[100px] h-[100px] mb-5'/>
              </>
           ))}   
            </div>
            <div className='flex-col'>
            <div className='font-semibold text-orange-800 text-[20px]'> Accomodation:{}</div>
            <div className='font-semibold'>
            
            {data[0]?.defaulthotel?.propertyName} 
          </div>
            <img src={`http://localhost:4000/uploads/${data[0]?.defaulthotel?.coverImage}`}  className='w-[100px] h-[100px] mb-5' alt="" srcset="" />
            </div>
            <div className='flex-col'> 
            <div className='font-semibold  text-orange-800  text-[20px]'>Transport:</div>
            <div className='font-semibold'>
            
            {data[0]?.pkg?.defaultvehicle} 
          </div>
            <img src={`http://localhost:4000/uploads/${data[0]?.pkg?.vehicleimage}`} className='w-[100px] h-[100px] mb-5' alt="" srcset="" />
            </div>
            </div>
            <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head:{data[0]?.pkg?.price}/-</div>
           
            <div className='flex flex-wrap gap-2  '>
              <Link to='/user/planpkg'><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button></Link>
          
     
    
    <Link to={`/user/bookingpage/${id}`}> <button className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></Link> 
    </div></div></div></div>
    
  )
}
