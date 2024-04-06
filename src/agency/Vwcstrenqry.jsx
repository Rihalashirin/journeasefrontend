import React, { useEffect, useState } from 'react'
import seaview from './images/seaview.png'
import adventure from './images/adventure.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwcstrenqry = () => {
  const[data,setData]=useState([''])
  let {id}=useParams()
  const [data1,setdata1]=useState([''])
      let handleSubmit=async (status)=>{

        // setData(data)
        // console.log(data);
        // navigate('/organization/viewdeliveryboyorg')
        let response=await axios.put(`http://localhost:4000/agency/managebooking/${id}`,{status:status})
      console.log(response);
      setdata1('')
      

      }
      
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/agency/vwdetailbooking/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
  return (
    <div className='pencil'>
      {data.map((item)=>(
<>
    
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>{item.user?.name}'s</span><span className='text-orange-600'> Enquiry</span>
          </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :  {item.user?.name}<br/>
               Email :  {item.user?.email}<br/>
               Mobile: {item.user?.contactNumber} <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults: <br/>
                Children:
                </div>
                <div>
                  Date:
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info </div><br/>
                </div>
             <div>  {item.package?.packageName}</div><br/>
             <div className='flex flex-wrap gap-10'>
              <div>Guide :{item.booking?.guide}dfgfdgd </div>
              <div>Health Assistant :{item.booking?.health} </div>
             </div>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap  justify-between '>
                <img src=" " alt="" srcset="" />
                <div className='pt-10'>hotel <br />luxury</div>
                <div className='flex flex-col gap-6 mt-3 '>
                
                </div>
               <Link to={`/agency/assignguide/${id}`}> <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN GUIDE</button></Link>
                <button  className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN A HA</button>
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap  justify-start '>
                <img src=" " alt="" srcset="" />
                <div className='pt-10'>{item.adventure?.adventureName} <br />3000-5000/Head</div>
                {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
                </div>
                
                 <div className='mt-5'> booking status:{item.booking?.status}</div>
                 <div className='flex flex-wrap gap-14 ml-96'>
                <button onClick={()=>{handleSubmit('Accepted')}} className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button  onClick={()=>{handleSubmit('Rejected')}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
                </div>

            </div>

        </div>
        </>
          ))}
    </div>
  )
}
