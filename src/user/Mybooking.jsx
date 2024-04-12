import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Mybooking = () => {
  const[data,setData]=useState('')
  const [review,setreview]=useState("")
  const [reviews,setreviews]=useState(false)
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/user/viewbookigdetail/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
let reasondrop=()=>{
  setreviews(!reviews)
}
let handleSubmit=async(dname)=>{

  let response=await axios.post(`http://localhost:4000/user/addreview ` ,{...review,bookingid:id,destinationName:dname})
  console.log(response);
}
let handleChange=(event)=>{
  setreview({[event.target.name]:event.target.value})
  console.log(review);
}

  return (
    <div className='userhome'>
       <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px] text-red-950 font-bold '>
                Package info </div> <br />
               Package Name  :  {data.package1?.packageName}<br/>
              No Of Days: {data.package1?.noOfDays}<br/>
               Location: {data.package1?.location} <br/>
               Package Amount:{data.package1?.price}<br/>
               {data.package1?.destination?.map((item)=>(<>
             <div>day  {item.Day}:</div><div className='underline'>{item.Destination}</div><button onClick={reasondrop} className='bg-orange-600 px-2 py-2 rounded-lg '> Add Review</button>  {reviews &&
             <div className='absolute top-[430px] bg-white p-9 pt-2 w-[400px] ml-36 pb-7 h-[170px] rounded-lg'>
             <div className='font-medium text-black mt-3'>MY REVIEW:</div>
             <div><input onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='review' type='text' id=''></input>
    </div>
    <div><button onClick={()=>handleSubmit(item.Destination)}  type='submit' className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-3">SUBMIT</button></div>

             </div>
            }
 <div>{item.activities}</div>
             </>
               ))}
               <div className='font '>
                <div className='text-[20px] text-red-950 font-bold mt-6'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults: {data?.response?.adult}<br/>
                Children:{data.response?.child}
                </div>
                <div> picking place:{data?.response?.pickingplace}</div>

              <div> Transportation:
              {data?.package1?.transports.map((item)=>(
                <>
                {item.transportOption}
                </>
              ))}
              </div> 
                <div>
                Date: {new Date(data.response?.date).toLocaleString()}

                </div>
                
                </div>
               
                </div>
             <div> </div>
             <div className='flex flex-wrap gap-20'>
              <div>Guide : {data.response?.guide}</div>
              <div>Health Assistant : {data.response?.health}</div>
             </div>
               <div className='text-[20px] text-red-950 font-bold mt-3'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap gap-20 '>
                <img src={`http://localhost:4000/uploads/${data.resort?.coverImage}`} alt="" srcset="" />
                <div className='pt-10'>{data.resort?.propertyName} <br />Luxury</div></div>
                <div className='flex flex-col gap-6 mt-3 '>
                {/* <button className='bg-yellow-500 w-20 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-gray-400 w-20 h-9 rounded-lg text-white'>STATUS</button> */}
                </div>
               
               
                
                <div className='text-[20px] text-red-950 font-bold mt-4'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap gap-20 justify-start '>
                <img src={`http://localhost:4000/uploads/${data.adv?.image}`}className='w-[300px]' alt="" srcset="" />
                <div className='pt-10'>{data.adv?.adventureName}<br />Price: {data.adv?.price}/Head</div>
                {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
                </div>

                


            </div>

        </div>  

    </div>
  )
}
