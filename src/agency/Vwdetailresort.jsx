import React, { useEffect, useState } from 'react'  
 import sea from '../agency/images/resortnew.jpeg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwdetailresort = () => {
    let id=localStorage.getItem('id')
    let {rid}=useParams()
    console.log(rid)
    const [data,setData]=useState('')
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await axios.get(`http://localhost:4000/agency/detailvwresort/${rid}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div className='pencil'>
        <div className='bg-white/70 w-[90%] p-3 ms-5 pt-2 h-[100%]'>
          <div className='text-center text-[30px] text-red-600 pb-4'>{data.response?.propertyName} </div>
          {/* <div className='flex flex-wrap justify-center gap-4'> */}
         <img src={sea} className='m-auto w-[70%]'alt=" " srcSet=" "/>
        
        <div className='w-[90%] text-center'>sdsfdshfughdfghfgfdgdfhghfgfgdfgdfhdh  
           ughdfgjdsffffffffffsgdfgdh
           jdffhshfhhhsdfjfhgjdjjjjhjghdfgwerrfgdfhdhdg
           yrututuuuwefsdjvdnvxdnjvdddnjdfdfndfjhdgdfgdfh
           hdffggfgdnjfdvdgdfgdgfgddfgdfgdfh
           jdffhshfhhhsdfjfhgjdjjjjhjghdfgwerrfgdfhdhdg
           yrututuuuwefsdjvdnvxdnjvdddnjdfdfndfjhdgdfgdfh
           hdffggfgdnjfdvdgdfgdgfgddfgdfgdfh
           jdffhshfhhhsdfjfhgjdjjjjhjghdfgwerrfgdfhdhdg
           yrututuuuwefsdjvdnvxdnjvdddnjdfdfndfjhdgdfgdfh
           hdffggfgdnjfdvdgdfgdgfgddfgdfgdfh
           jdffhshfhhhsdfjfhgjdjjjjhjghdfgwerrfgdfhdhdg
           yrututuuuwefsdjvdnvxdnjvdddnjdfdfndfjhdgdfgdfh
        hdffggfgdnjfdvdgdfgdgfgddfgdfgdfh
        {/* </div> */}</div>
        
        <div className='flex flex-wrap justify-between '>
        <div className='bg-blue-300/100 w-72 mt-9 pl-3 rounded-lg text-white'>
        <div>place</div>
        <div>district</div>
        <div>pin no</div>
        </div>
        <div className='bg-blue-300/100 w-80 mt-9 pt-1 rounded-lg text-center'>about us</div>
        <div className='bg-blue-300/100 w-80 mt-9 p-2 rounded-lg'>
        <div>contact</div>
        <div>dfgdfghdhdf dtdfgdfghdfh<br/>dsgfghrthrthrdfgfdhhfdgdfgdfhdfh<br/>dfgrthrthdfgdfgdfhhdh<br/></div></div>
        </div>
        <div className=' bg-yellow-300 w-[80%] h-32 mb-24  ml-16 mt-9 p-2 rounded-lg'><div>
        events and weddings</div>
        <div className='flex flex-wrap justify-evenly'>
          
        </div>
        <div className='flex flex-wrap justify-evenly'>
        </div>
    
         </div>
        </div>   
<div class="  overflow-x-auto shadow-md sm:rounded-lg mt-96 w-[50%] ml-72">
    <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-black uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
            <tr>
                <th >
                    Room type
                </th>
                <th >
                    No of rooms
                </th>
                <th >
                    Occupancy
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    Rajkamal
                </td>
                <td class="px-6 py-4">
                    rkml@gmail.com
                </td>
                
            </tr>



            
            
        </tbody>
    </table>
    
</div>
<div className='font-bold ml-24 mt-5'> Facilities</div>
<div className='ml-14 mt-14 flex gap-10'>
        <p>erstdfghbj</p>
        <p>erstdfghbj</p>
        <p>erstdfghbj</p>
        </div>
        <button className='bg-orange-600 w-36 mr-3'>proceed</button>
        <button className='bg-orange-600 w-36'>go back</button>
   </div>
  )
}
