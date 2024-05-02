import React, { useState } from 'react'
import { Outlet ,Link} from 'react-router-dom'

export const Navigation = () => {
    const [drop,setDrop]=useState(false)
    let dropdown=()=>{
        setDrop(!drop)
      

    }
    let close=()=>{
        setDrop(false)
      

    }
    
  return (
    <>
    <div className='flex gap-5 bg-black text-white justify-between flex-wrap p-3 '>
        <div className='fonts text-[20px] text-orange-500' >
            JournEase
        </div>
        <div className='flex gap-20 flex-wrap font-bold'>

        <Link to='/'>
        <div>
            Home
        </div></Link>
        
        <div>
           <button onClick={dropdown}>Register</button>
            {drop &&
        <div className='list-none absolute sm:top[60px] top-[45px] bg-slate-400/50 text-center p-2'>
         <Link to='/agencyRegister'><li className='bg-white rounded-lg my-[3px] font w-[100px] text-[12px] text-black '>PLANNER</li> </Link> 
          <Link to='/guideregister'> <li className='bg-white rounded-lg my-[3px] font w-[100px] text-[12px] text-black'>GUIDE</li> </Link> 
          <Link to='/regresort'><li className='bg-white rounded-lg my-[3px] font text-[12px] w-[100px] text-black'>HOTEL</li></Link> 
           <Link to='/userRegister' ><li className='bg-white rounded-lg my-[3px] font text-[12px] w-[100px] text-black'>CUSTOMER</li></Link> 
        </div>
        }
        </div>
       
        <Link to='/login'>
        <div>
            Login
        </div></Link>
    </div>
        </div>
        <div onClick={close}>

        <Outlet/>
        </div>
    </>
  )
}
