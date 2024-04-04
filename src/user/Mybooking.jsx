import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Mybooking = () => {
  const[data,setData]=useState('')
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/user/viewbookigdetail/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='userhome'>
       <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :  Dennis Philipp<br/>
               Email :  dennisphilipp@gmail.com<br/>
               Mobile:  8113867153 <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults: {data?.response?.adult}<br/>
                Children:{data.response?.child}
                </div>
                <div>
                  Date:10/02/2024-14/02/2024
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info </div><br/>
                </div>
             <div>  Delhi Delight</div><br/>
             <div className='flex flex-wrap gap-10'>
              <div>Guide : yes</div>
              <div>Health Assistant : yes</div>
             </div>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap  justify-between '>
                <img src=" " alt="" srcset="" />
                <div className='pt-10'>Hotel Sea View <br />Luxury</div>
                <div className='flex flex-col gap-6 mt-3 '>
                <button className='bg-yellow-500 w-20 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-gray-400 w-20 h-9 rounded-lg text-white'>STATUS</button>
                </div>
               <Link to='/agency/assignguide'> <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN GUIDE</button></Link>
                <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN A HA</button>
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap  justify-start '>
                <img src="" alt="" srcset="" />
                <div className='pt-10'>Bungee Jumping <br />3000-5000/Head</div>
                {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
                </div>

                


            </div>

        </div>  

    </div>
  )
}
