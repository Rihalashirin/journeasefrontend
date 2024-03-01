import React from 'react'
import delhi from './delhi.png'
import { Link } from 'react-router-dom'

export const Vwpkgdetail = () => {
  return (
    <div className='userhome'>
         <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div>
            <div className='font text-white text-center text-[30px]'>WelTrip planners</div>
            <div className='font text-white text-center'>Eranakulam,kerala</div>
          <div className='w-[208px] text-center'>
          <span className='text-white font font-bold text-[30px] '>Delhi </span><span className='text-orange-600 font font-bold text-[30px]'> Delight</span><br /><p className='font text-[20px]  '>4 Days-3 Nights</p>
          </div>
          <div className='flex sm:gap-5 flex-wrap'>
            <img src={delhi}  className='w-[150px] h-[150px]'/>
            <div className='w-[78%]'>

          <p className=''>Delhi Delight" is a 4-day, 3-night getaway that unveils the best of India's capital city. Dive into Delhi's cultural mosaic with guided tours of iconic landmarks like the Red Fort and Lotus Temple. Wander through the vibrant markets of Chandni Chowk and relish the diverse culinary scene. Indulge in the city's history with visits to Humayun's Tomb and Qutub Minar. Enjoy a comfortable stay and expert insights, ensuring a short yet immersive exploration of Delhi's rich heritage and contemporary charm</p>
            </div>
            <div className='font underline'> Day 1: Historical Marvels</div>
            <span>Embark on your Delhi adventure with a guided tour of the awe-inspiring Red Fort, a UNESCO World Heritage Site. Explore the intricate architecture and rich history encapsulated within its walls. Continue to the iconic India Gate, a symbol of national pride, and conclude the day with a visit to the serene Lotus Temple, offering a tranquil retreat.</span>
            <div className='font underline'> Day 2: Culinary Delights and Cultural Exploration</div>
            <span>Immerse yourself in the bustling markets of Chandni Chowk, where ancient traditions blend with modern vibrancy. Engage your senses with the tantalizing street food offerings and shop for local treasures. In the afternoon, savor the flavors of authentic Indian cuisine at carefully selected local restaurants, providing a delightful gastronomic experience.</span>
            <div className='font underline'>Day 3: Architectural Wonders</div>
            <span>Discover Delhi's architectural heritage with a visit to the exquisite Humayun's Tomb, a masterpiece of Mughal architecture. Explore the Qutub Minar complex, marveling at the soaring minaret and the ancient iron pillar. This day offers a fascinating journey through the city's historical and artistic gems</span>
            <div className='font underline'>Day 4: Leisure and Departure</div>
            <p>Spend your final day at leisure, perhaps exploring local markets or indulging in optional activities. Bid farewell to Delhi, cherishing the memories of your "Delhi Delight" experience. Depart with a newfound appreciation for the city's cultural richness and historical grandeur</p>
            <div className='flex flex-wrap gap-11  m-auto '>
              <Link to='/user/planpkg'><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button></Link>
          <Link to='/user/Accomodatn'> <button className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></Link> </div>
</div></div></div></div>
    
  )
}
