import React, { useEffect, useState } from 'react'
import zipline from './zipline.jpg'
import adventure from './adventure.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Selectadventure = () => {
  const [data,setData]=useState([''])
  let id2=localStorage.getItem('id')
  let {id}=useParams()
  const [agencyData,setAgencydata]=useState([''])
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`https://journeasebackend.onrender.com/user/vwadventure/${id}`)
        console.log(response.data)
        setAgencydata(response.data)
    }
    fetchdata()
},[])

let handleSubmit=async (event)=>{
  event.preventDefault()
  setData(data)
  console.log(data)
 let response=await axios.put(`https://journeasebackend.onrender.com/user/booking/${id}`,{adventureId:selectedResorts,userId:id2,packageid:id})
 console.log(response);
  // navigate(`/user/selectadventure/${id}`)
}
const [selectAll, setSelectAll] = useState(false);
const [selectedResorts, setSelectedResorts] = useState([]);

const handleMasterCheckboxChange = () => {
    setSelectAll(!selectAll);
    const selectedResortIds = selectAll ? [] : agencyData.map(item => item._id);
    setSelectedResorts(selectedResortIds);
    console.log("Selected resorts:", selectedResortIds);
    console.log("Select all:", !selectAll);
};

const handleResortCheckboxChange = (resortId) => {
    const isSelected = selectedResorts.includes(resortId);
    if (isSelected) {
        const updatedSelection = selectedResorts.filter(id => id !== resortId);
        setSelectedResorts(updatedSelection);
    } else {
        setSelectedResorts([...selectedResorts, resortId]);
    }
    console.log("Selected resorts:", selectedResorts);
};

console.log(selectedResorts,';ij')
  return (
    <div className='userhome'>
        
        <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Select</span><span className='text-orange-600'> Adventures</span>
          </div>
          <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div className='flex flex-wrap gap-9'>
        <div className='flex flex-wrap sm:gap-5  '>
        {agencyData.map((item)=>(
          <div className=' pt-28 text-center text-white '>
            <img src={`https://journeasebackend.onrender.com/uploads/${item.agency?.image}`} className='m-auto w-24 h-24 rounded-2xl' alt="" srcset="" />
            <div className='font font-bold'>{item.agency?.adventureName} <br /> <div className='font font-light'>{item.agency?.price}-/Head</div></div>
            <input
                        type="checkbox"
                        checked={selectedResorts.includes(item.agency?._id)}
                        onChange={() => handleResortCheckboxChange(item.agency?._id)}
                    />
          </div>
           ))}
          </div>
          {/* <div className='flex flex-wrap sm:gap-5  '>
          <div className=' pt-28 text-center text-white '>
            <img src={adventure} className='m-auto w-24 h-24 rounded-2xl' alt="" srcset="" />
            <div className='font font-bold'>Bungee Jumping <br /> <div className='font font-light'>3000-5000/Head</div></div>
          </div>
          </div> */}
          </div>
          <div className='flex flex-wrap gap-11  justify-center m-7 '><button className='bg-orange-600 text-white rounded-lg w-40'>SKIP</button>
            <button onClick={handleSubmit} type='submit' className='bg-orange-600 text-white rounded-lg w-40'>SUBMIT</button></div>
            </div>
          </div>

    
  )
}
