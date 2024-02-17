import React from 'react'


const Login = () => {
  return (
    <>
      <div className='flight'>
        <div className='box '>


          <div className='userloginn h-[64px] font text-[30px] font-bold m-0 text-center '>
            <span className='text-white'>USER</span><span className='text-orange-600'> LOGIN</span>
          </div>
<div className='flex h-[30px] items-center justify-between mb-4  '>

          <div className=' font text-[20px] text-white '>User Mail</div>
          <div><input className='rounded-lg w-[100%] ml-3' type="text" name="" id="" /></div>
</div>
          <div className='flex items-center mb-4'>

          <div className=' font text-[20px] text-white '>Password</div>
          <div><input className='rounded-lg w-[100%] ml-3' type="text" name="" id="" /></div>
          </div>
          <div className='text-center'>
            <input type="submit" className='bg-orange-600 p-1 rounded-lg w-40 text-white' name="" id="" value="LOGIN" /></div>
          <div className='forget font text-[10px] text-white underline italic text-center p-2'>forgot password</div>


        </div > </div>




    </>
  )
}

export default Login