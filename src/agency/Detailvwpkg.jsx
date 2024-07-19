import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Detailvwpkg = () => {
  let { id } = useParams();
  const [data, setData] = useState({
    0: { response: { packageName: "", noOfDays: "" } },
    1: { response: { coverImage: "", basicDescription: "", detailedDescription: "", destination: [] } }
    // Add more nested structures as needed
  });

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://journeasebackend.onrender.com/agency/detailvwpkg/${id}`);
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className=' bg-yellow-500 pt-10'>
      <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-2xl rounded-lg'>
        <div>
          <div className='w-[208px] text-center'>
          <Link to={`/agency/editpkg/${id}`}>
          <button className='bg-yellow-700 w-36  ml-[900px] rounded-full py-2 px-4'>Edit package</button>
        </Link>
            <span className='text-white font font-bold text-[30px] '></span>
            <span className='text-orange-600 font font-bold text-[30px] '>{data[1]?.response?.packageName}</span><br />
            <p className='font text-[20px] font-semibold text-white '>{data[1]?.response?.noOfDays}DAYS</p>
            
          </div>
          <div className='flex sm:gap-5 flex-wrap'>
            <img src={`https://journeasebackend.onrender.com/uploads/${data[1]?.response?.coverImage}`} className='w-[150px] h-[150px]' />
            <div className='w-[78%]'>
              <div className=''>{data[1]?.response?.basicDescription}</div>
              <p className=''>{data[1]?.response?.detailedDescription}</p>
              
            </div>
            <div className=''>
              {data[1]?.response?.destination?.map((item, index) => (
                <div key={index} className='flex-row gap-2'>
                  <div className='font underline font-bold'> Day {item?.Day}: {item.Destination}</div>
                  <span>{item.activities}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='font-bold'>Travel info:</div>
          <div className='flex flex-wrap gap-5'>
            <div className=''>default: {data[1]?.response?.defaultvehicle}</div>
            <div className=''>price: {data[1]?.response?.defaultvehicleprice}</div>
            <div className=''>
              <img src={`https://journeasebackend.onrender.com/uploads/${data[1]?.response?.vehicleimage}`} className="m-auto w-28" alt="" srcSet="" />
            </div>
          </div><br />
          <div className='flex flex-wrap gap-5'>
            customisation
            {data[1]?.response?.transports?.map((item, index) => (
              <div key={index} className='flex-col gap-4'>
                <img className='w-[150px] h-[150px]' src={item?.transportImage} alt="sdsdf" />
                <div className='font font-semibold text-center'>{item?.transportOption}</div>
                <div className='font font-semibold text-center'>{item?.price}</div>
              </div>
            ))}
          </div>
          <div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-96 text-white  text-center'>per head: {data[1]?.response?.price}/-</div>
        </div>
      </div><br />
      <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-2xl rounded-lg'>
        <div className="flex flex-wrap sm:gap-5  ">
          <div className="bg-yellow-600/90 w-[200px] ml-5 rounded-lg">
            <div className=" pt-4 text-center text-black  pb-3 rounded-lg">
              Default Accommodation:
              <img src={`https://journeasebackend.onrender.com/uploads/${data[1]?.defaultHotel?.coverImage}`} className="m-auto w-28" alt="" srcSet="" />
              <div className="font font-bold">{data[1]?.defaultHotel?.propertyName}</div>
              <div className="font font-bold">{data[1]?.response?.defaulthotelprice}/-</div>
              <Link to={`/agency/adddefaulthotel/${id}`}>
          <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>Add Default Hotel</button>
        </Link>
            </div>
          </div>
          <div className="bg-yellow-600/90 w-[200px] ml-5 rounded-lg">
            <div className=" pt-4 text-center text-black  pb-3 rounded-lg">
              Default Adventure:
              <img src={`https://journeasebackend.onrender.com/uploads/${data[0]?.adventure?.image}`} className="m-auto w-28" alt="" srcSet="" />
              <div className="font font-bold">{data[0]?.adventure?.adventureName}</div>
              <div className="font font-bold">{data[0]?.adventure?.price}/-</div>
              <Link to={`/agency/adddefaultadventure/${id}`}>
          <button type='submit' className='bg-yellow-700 w-36  rounded-full py-2 px-4'>Add Default Adventure</button>
        </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-2'>
        <Link to={`/agency/addpkg1/${id}`}>
          <button type='submit' className='bg-yellow-700 w-24 ml-6 mt-2 rounded-full py-2 px-4 text-[10px]'>Add Hotel</button>
        </Link>
        <Link to={`/agency/vwaddedresort/${id}`}>
          <button type='submit' className='bg-yellow-700 w-24 text-[10px] mt-2  rounded-full py-2 px-4'>view Hotel</button>
        </Link>
        <Link to={`/agency/adventure/${id}`}>
          <button type='submit' className='bg-yellow-700 w-32 text-[10px] mt-2 rounded-full py-2 px-4'>select adventure</button>
        </Link>
        <Link to={`/agency/vwaddedadventure/${id}`}>
          <button type='submit' className='bg-yellow-700 w-32 text-[10px] mt-2 rounded-full py-2 px-4'>view adventure</button>
        </Link>
        </div>
        <div className='flex flex-wrap gap-2'>
       
        
        </div>
      </div>
      <div className=' flex pt-6 ml-56 flex-wrap gap-3 '>
       
       
       
       
       
      
      
        
        
        </div>
    </div>
  );
};
