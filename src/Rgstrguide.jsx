import React from 'react'

export const Rgstrguide = () => {
  return (
    <div className='bg-[#1a2954d6] h-[467px]'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
    <span className='text-white'>Resgister as a </span><span className='text-orange-600'>Private Guide</span>
  </div>
    <div className='flex gap-20 justify-center pt-28'>


        <div>

            <div className='flex gap-4 mb-3 text-white'>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Age</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Gender</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Contact Number</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Location of Expertise</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
        </div>

        <div>

            <div className='flex gap-4 mb-3 text-white'>
                <label htmlFor="">Image</label>
                <input type="file" name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">ID Proof</label>
                <input type="file" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Email</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Password</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
            <div className='flex mb-3 gap-4 text-white'>
                <label htmlFor="">Experience(in years)</label>
                <input type="text" className='ml-[50px]' name="" id="" />
            </div>
        </div>
    </div>
    <div className='text-center text-white rounded-lg bg-orange-600 w-20 ms-[35rem]  mt-12'>
        <input type="submit"  value="SUBMIT" name="" id="" /> 

        <button><img src="" alt="" srcset="" /></button>
</div>
</div>
  )
}
