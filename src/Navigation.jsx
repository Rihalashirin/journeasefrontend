import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

export const Navigation = () => {
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
            Register
        </div>
        <Link to='/login'>
        <div>
            Login
        </div></Link>
    </div>
        </div>
        <Outlet/>
    </>
  )
}
