import axios from 'axios'
import React, { useState } from 'react'

export const Regstrresort2 = () => {
  const [Gym,setGym]=useState(false)
  const [luxury,setluxury]=useState(false)
  const [standard,setstandard]=useState(false)
  console.log(Gym);
  console.log(luxury);
  // const [data,setData]=useState('')
    
    
     
        let handleChangeLuxury=(event,data)=>{
          setGym({...Gym,luxury:!luxury})
          setluxury(!luxury)
        }
     
        let handleChangeStandard=(event)=>{
          setGym({...Gym,standard:!standard})
          setstandard(!standard)
        }
        let handleSubmit=async (event)=>{
            event.preventDefault()
    
           let response=await axios.post('http://localhost:4000/resort/facilities',Gym)
           console.log(response);
            
        }
  return (
    <div>
        <div className='bg-[#1a2954d6] h-[467px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
<span className='text-white'>Resgister as a </span><span className='text-orange-600'>Resort Facility</span>
</div>
{/* <div className='flex flex-wrap justify-center'>
<div className='bg-white/55 w-[30rem] h-96 flex flex-wrap gap-14 '>
    <div className='pl-6 pt-2 '>Available Amenities Acces</div>
    <div className='pt-2'>Luxury</div>
    <div className='pt-2'>Standard</div>
</div>
</div> */}
<table className='bg-gray-400 w-96 m-auto  '>
  <thead className=''>
  <tr className='borderDown'>
    <th>Available Amenities Acces</th>
    <th className='borderLeft pl-3'>Luxury</th>
    <th className='borderLeft pl-3'>Standard</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td className='text-center'>GYM</td>
      <td className='borderLeft text-center '><input onChange={handleChangeLuxury} name='luxury' type='checkbox'></input></td>
      <td className='borderLeft text-center '><input onChange={handleChangeStandard} name='standard' type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>SPA</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Common pool</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Private pool</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Wellness classes</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Sports facilities</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Childcare Facilities</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Pet-friendly Facilities</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
    <tr>
      <td className='text-center'>Vehicle rental</td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
      <td className='borderLeft text-center '><input type='checkbox'></input></td>
    </tr>
  </tbody>
  
</table>
<div className='text-center m-7'>
<button onClick={handleSubmit} type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl  px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">SUBMIT</button>
</div>
</div>
    </div>
  )
}
