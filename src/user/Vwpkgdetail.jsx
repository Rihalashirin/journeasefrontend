import React, { useEffect, useState } from 'react'
import delhi from './delhi.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Vwpkgdetail = () => {
  let {id}=useParams()
  const [data,setData]=useState([''])
  const [data1,setData1]=useState([""])
  const [toggle, settoggle] = useState(false);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`https://journeasebackend.onrender.com/user/detailvwpackage/${id}`)
      console.log(response.data)
        setData(response.data) 
    }
    fetchdata()
},[])
const handledetail = async (rid) => {
  try {
    const response = await axios.get(
      `https://journeasebackend.onrender.com/agency/detailvwresort/${rid}`
    );
    setData1(response.data);
    settoggle(true);
  } catch (error) {
    console.error("Error fetching resort details:", error);
  }
};

  return (
    <div className='bg-orange-700'>
         <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div>
            <div className='font text-white text-center text-[30px]'>{data[0]?.agency?.companyName} </div>
            <div className='font text-white text-center'>{data[0]?.agency?.officeAddress}</div>
          <div className='w-[208px] text-center'>
          <span className='text-white font font-bold text-[30px] '> </span><span className='text-orange-600 font font-bold text-[30px]'> {data[0]?.pkg?.packageName}</span><br /><div className='font text-[20px] m-auto bg-yellow-600/90 h-8 w-72 text-white  text-center'>{data[0]?.pkg?.price}/-per Head</div><p className='font text-[20px]  '>{data[0]?.pkg?.noOfDays}DAYS</p>
          </div>
          <div className='flex flex-wrap sm:gap-5 '>
            <img src={`https://journeasebackend.onrender.com/uploads/${data[0]?.pkg?.coverImage}`}  className='w-[350px] h-[350px] mb-5'/>
            <div className='w-[60%]'>

          <p className=''>{data[0]?.pkg?.basicDescription}</p>
          <p className=''>{data[0]?.pkg?.detailedDescription}</p>
            </div>
            </div>
            {data[0]?.pkg?.destination?.map((item)=>(
              <>
            <div className='font underline'> Day:{item.Day} {item.Destination}</div> 
            <div>{item.activities}</div><br/>
            
           
            </>
            ))}
            <div className='flex flex-wrap gap-5'>
            <div className='flex-col'>
            <div className='font-semibold text-orange-800 text-[20px]'> Adventures:</div> 
            {data?.map((item)=>(
              <>
              <div className='font-semibold'>
            
                {item?.defaultadventure?.adventureName} 
              </div>
              {/* <img src={`https://journeasebackend.onrender.com/uploads/${item?.defaultadventure?.image}`}  className='w-[100px] h-[100px] mb-5'/> */}
              <div>{item?.defaultadventure?.description}</div>

              <a target="_blank" href={`https://journeasebackend.onrender.com/uploads/${item.defaultadventure?.image}`} download> <img className="w-[100px] h-14 " src={`https://journeasebackend.onrender.com/uploads/${item.defaultadventure?.image}`} alt="click to view and dowload"></img> </a>
                <a target='_blank' href={`https://journeasebackend.onrender.com/uploads/${item.defaultadventure?.image}`} download ></a>
              </>
              
           ))} 
             
            </div>
            <div className='flex-col'>
            <div className='font-semibold text-orange-800 text-[20px]'> Accomodation:{}</div>
            <div className='font-semibold'>
            
            {data[0]?.defaulthotel?.propertyName} 
          </div>
            <img  onClick={() => handledetail(data[0].defaulthotel?._id)} src={`https://journeasebackend.onrender.com/uploads/${data[0]?.defaulthotel?.coverImage}`}  className='w-[100px] h-[100px] mb-5' alt="" srcset="" />
            {toggle && (
        <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2">
          <div className="font text-center text-[20px] text-amber-800 pb-4   ">
            <div className="font-bold animate-pulse text-[40px]">
              {" "}
              {data1.response?.propertyName}{" "}
            </div>
            <img
            
              src={`https://journeasebackend.onrender.com/uploads/${data1?.response?.coverImage}`}
              className="m-auto w-[70%]"
              alt=" "
              srcSet=" "
            />
            <div className="w-[90%] text-center glow">
              {data1.response?.description}
            </div>

            <div className="flex flex-wrap justify-between ">
              <div className="bg-white/45 w-72 mt-9 pl-3 rounded-lg text-amber-800 shadow-xl">
                <div className="text-black text-[20px]">
                  {data1.response?.propertyAddress}
                </div>
              </div>
              <div className="bg-white/45 w-80 mt-9 pt-1 rounded-lg text-center shadow-xl text-amber-800">
                <div className="text-black">{data1.response?.aboutUs},</div>
              </div>
              <div className="bg-white/45 w-80 mt-9 p-2 rounded-lg shadow-xl text-amber-800">
                <div className="text-black">contact us:</div>
                <div className="text-black">{data1.response?.contactNumber}</div>
              </div>
            </div>
            <div className=" bg-yellow-300 w-[80%] h-32 mb-24  text-red-600 ml-24 mt-9 p-2 rounded-lg shadow-xl border-l-2 border-r-2 border-t-2 border-b-2">
              {data1.response?.events}
            </div>

              <div className="flex bg-yellow-100 px-2 py-4 rounded text-yellow-300   font-semibold font">
                luxury room:
                <img
                  src={`https://journeasebackend.onrender.com/uploads/${data1.rooms?.image}`}
                  className="m-auto w-48"
                  alt=" "
                  srcSet=" "
                />
                standardroom:
                <img
                  src={`https://journeasebackend.onrender.com/uploads/${data1.rooms?.images}`}
                  className="m-auto w-48"
                  alt=" "
                  srcSet=" "
                />
              </div>
              4 person per room
            <div class="  overflow-x-auto shadow-md sm:rounded-lg mt-4 w-[50%] ml-72">
              <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-black uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
                  <tr>
                    <th>Room type</th>
                    <th>No of rooms</th>
                    <th>Occupancy</th>
                    <th>price per room</th>
                  </tr>
                </thead>
                <tbody>
                    <>
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        luxury:
                      </td>
                      <td class="px-6 py-4">{data1?.rooms?.luxury}</td>
                      <td class="px-6 py-4">{data1?.rooms?.luxuryOccupancy}</td>
                      <td>{data1.rooms?.luxuryprice}/-</td>
                      {/* <td>
                        <input type="radio" onChange={handleChange} name='accomodatn' value="luxury" className="bg-black text-white w-20">
                       
                        </input>
                      </td> */}
                    </tr>
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        standard:
                      </td>
                      <td class="px-6 py-4">{data1?.rooms?.standard}</td>
                      <td class="px-6 py-4">{data1?.rooms?.standardOccupancy}</td>
                      <td class="px-6 py-4">{data1?.rooms?.standardPrice}/-</td>
                      {/* <td>
                      <input type="radio" onChange={handleChange} name='accomodatn' value="standard" className="bg-black text-white w-20">
                         
                        </input>
                      </td> */}
                    </tr>
                    </>
                  {/* {data.rooms?.map((item) => (
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        standard:
                      </td>
                      <td class="px-6 py-4">{item?.standard}</td>
                      <td class="px-6 py-4">{item?.standardOccupancy}</td>
                      <td class="px-6 py-4">{item?.standardPrice}/-</td>
                      <td>
                      <input type="radio" onChange={handleChange} name='standard' value={true} className="bg-black text-white w-20">
                         
                        </input>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>

            <div className="font-bold ml-24 mt-5 bg-yellow-950">
              {" "}
              Facilities
    
                <div className="ml-14 mt-14 flex gap-10 ">
                  <p>{data1?.facilities?.name} kjkjh</p>
                  <p>{data1?.facilities?.luxury}</p>
                  <p>{data1?.facilities?.standard}</p>
                </div>
      
            </div>
            {/* <button
              type="submit"
              onClick={() => selectResort(data?.response?._id)}
              className="bg-orange-600 w-28 text-white mt-4 py-2 px-4"
            >
              submit
            </button> */}
          </div>
   
        </div>
      )}{" "}
            </div>
            <div className='flex-col'> 
            <div className='font-semibold  text-orange-800  text-[20px]'>Transport:</div>
            <div className='font-semibold'>
            
            {data[0]?.pkg?.defaultvehicle} 
          </div>
            {/* <img src={`https://journeasebackend.onrender.com/uploads/${data[0]?.pkg?.vehicleimage}`} className='w-[100px] h-[100px] mb-5' alt="" srcset="" /> */}
            <a target="_blank" href={`https://journeasebackend.onrender.com/uploads/${data[0]?.pkg?.vehicleimage}`} download> <img className="w-[100px] h-14 " src={`https://journeasebackend.onrender.com/uploads/${data[0]?.pkg?.vehicleimage}`} alt="click to view and dowload"></img> </a>
                <a target='_blank' href={`https://journeasebackend.onrender.com/uploads/${data[0]?.pkg?.vehicleimage}`} download ></a>
         
            </div>
            </div>
            
           
            <div className='flex flex-wrap gap-2 ml-96 '>
              <Link to='/user/planpkg'><button className='bg-orange-600 text-white rounded-lg w-40'>GO BACK</button></Link>
          
     
    
    <Link to={`/user/bookingpage/${id}`}> <button className='bg-orange-600 text-white rounded-lg w-40'>PROCEED</button></Link> 
    </div></div></div></div>
    
  )
}
