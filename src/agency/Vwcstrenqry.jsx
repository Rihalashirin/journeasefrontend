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
<>
    
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>{data.user?.name}'s</span><span className='text-orange-600'> Enquiry</span>
          </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :  {data.user?.name}<br/>
               Email :  {data.user?.email}<br/>
               Mobile: {data.user?.contactNumber} <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults:{data?.booking?.adult} <br/>
                Children:{data?.booking?.child}
                </div>
                <div>
                  Date:{new Date(data.booking?.date).toLocaleString()}
                </div>
                
                <div>
                 Transportation:
                 {data.package?.transports?.map((item)=>(
                  <>
                 {item.transportOption}
                 </>
))}
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info :</div><br/>
                </div>
             <div>  {data.package?.packageName}</div>
             <div>{data.package?.noOfDays} Days</div><br/>
             <div className='flex flex-wrap gap-10'>
              <div>Guide :{data.booking?.guide}</div>
              <div>Health Assistant :{data.booking?.health} </div>
              <div>pickingplace:{data.booking?.pickingplace}</div>
             
             </div>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap  justify-between '>
                <img src={`http://localhost:4000/uploads/${data.response?.coverImage}`} alt="" srcset="" />
                <div className='pt-10'>hotel <br />luxury</div>
                <div className='flex flex-col gap-6 mt-3 '>
                
                </div>
               <Link to={`/agency/assignguide/${id}`}> <button className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN GUIDE</button></Link>
                <button  className='bg-orange-600 w-32 h-9 rounded-lg'>ASSIGN A HA</button>
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                {data.adventures?.map((item)=>(
                <div className='flex flexwrap  justify-start '>
                <img src={`http://localhost:4000/uploads/${item.image}`} className='w-24 mb-3' alt="" srcset="" />
                <div className='pt-10'>{item.adventureName} <br />{item.price}/Head</div>
                
                </div>
                ))}
                 <div className='mt-5'> booking status:{data.booking?.status}</div>
                 <div className='flex flex-wrap gap-14 ml-96'>
                <button onClick={()=>{handleSubmit('Accepted')}} className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button  onClick={()=>{handleSubmit('Rejected')}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
                </div>

            </div>

        </div>
        </>
    </div>
  )
}
