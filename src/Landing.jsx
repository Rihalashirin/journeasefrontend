import React from 'react'
import { Carousel } from 'react-responsive-carousel';


import background from './desert.jpg'
import back from './back.gif'
export default function Landing() { 
  return (
    <div>
      <img src={back} className='w-[100%] h-[530px]' alt="" />
  {/* <Carousel className='h-10' autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true} interval={4000}>
                <div>
                    <img src={back} className='h-10'  />
                </div>
                <div> 
                    <img src={background} />
                </div>
                <div>
                    <img src={background} />
                </div>
            </Carousel>
  <div className='images sm:h-[34rem]'>
    <div className='flex flex-wrap fonts text-start pt-60 ms-12 sm:text-[90px]'><span className='text-white '>J</span><span className='text-orange-600'>ourn</span><span className='text-white'>E</span><span className='text-orange-600'>ase</span></div>
    <div className='font sm:text-[20px] text-start pt-75 ps-12  sm:w-96 font-bold text-white  flex flex-wrap' >
      <p className='m-auto'>Your journey, Your Way! </p>
      </div>
  </div> */}
 
    </div>
  
  )
}
