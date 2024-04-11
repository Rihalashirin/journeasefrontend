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
          <p className=''>{data.detailedDescription}</p>
            </div>
            <div className=''>
            {data.destination?.map((item)=>(
              <> <div className='flex-row gap-2'>
            <div className='font underline'> Day {item?.Day}: {item.Destination}</div>
            <span>{item.activities}</span>
           </div>
            </>
            ))}
            </div>
              </div>
            <div>Travel info:</div> 
            {data.transports?.map((item)=>(
            <div className='flex flex-wrap'>
            <div>{item.noofppl}People:
            {item.transportOption}</div>
            <div>price:{item.price}</div>
            </div>
            ))}
            
            <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head:{data.price}/-</div> 
           
        

        </div></div><div className='mt-28 pl-96 flex flex-wrap gap-3 '>
     <Link to={`/agency/editpkg/${id}`}> <button className='bg-yellow-700 w-36 rounded-full py-2 px-4'>Edit package</button></Link> 
     <Link to={`/agency/addpkg1/${id}`}> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>Add resort</button></Link>
     <Link to={`/agency/vwaddedresort/${id}`}> <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>view resort</button></Link>
     
    
     </div>
     <div className='mt-6 pl-96 flex flex-wrap gap-3'>
     
     {/* <Link to='/agency/addadventure'><button type='submit' className='bg-yellow-700 w-52  rounded-full py-2 px-4'>Add adventure</button></Link> */}
     <Link to={`/agency/adventure/${id}`}><button type='submit' className='bg-yellow-700 w-52  rounded-full py-2 px-4'>view adventure</button></Link>
     <Link to={`/agency/vwaddedadventure/${id}`}><button type='submit' className='bg-yellow-700 w-60  rounded-full py-2 px-4'>view added adventure</button></Link>
     </div>
     </div> 
  )
}
