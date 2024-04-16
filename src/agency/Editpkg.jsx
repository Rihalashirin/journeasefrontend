import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Editpkg = () => {
   
    let {id}=useParams()
    const [tourDetails, setTourDetails] = useState([{ day: 1, destination: '', activities: [''] }]);
    const [userData,setUserData]=useState('')
    const [transport, setTransport] = useState([{ noofpeople: '', transportOption: '',price:'' }]);
    const [refresh,setrefresh]=useState(false)
    const addNoofppl = () => {
      setTransport([...transport, { noofpeople: '', transportOption: '', price: '' }]);
    };
    const handleNoofpplChange = (pplIndex, value) => {
      const updatedTransport = [...transport];
      updatedTransport[pplIndex].noofpeople = value;
      setTransport(updatedTransport);
    };
    const handleTransportChange = (pplIndex, value) => {
      const updatedTransport = [...transport];
      updatedTransport[pplIndex].transportOption = value;
      setTransport(updatedTransport);
    };
    const handlepriceChange = (pplIndex, value) => {
      const updatedTransport = [...transport];
      updatedTransport[pplIndex].price = value;
      setTransport(updatedTransport);
    };
    useEffect(()=>{
      let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:4000/agency/detailvwpkg/${id}`)
        console.log(response.data)
        setUserData(response.data)
      }
      fetchdata()
    },[refresh])
    const [data,setData]=useState('')
    let handlefile=(event)=>{
        console.log(event.target.files);
        setData({...data,[event.target.name]:event.target.files[0]})
      }

      const addDay = () => {
        const newDay = tourDetails.length + 1;
        setTourDetails([...tourDetails, { day: newDay, destination: '', activities: [''] }]);
      };
    
      const handleDayChange = (dayIndex, value) => {
        const updatedTourDetails = [...tourDetails];
        updatedTourDetails[dayIndex].day = value;
        setTourDetails(updatedTourDetails);
      };
    
      const handleDestinationChange = (dayIndex, value) => {
        const updatedTourDetails = [...tourDetails];
        updatedTourDetails[dayIndex].destination = value;
        setTourDetails(updatedTourDetails);
      };
    
      const handleActivityChange = (dayIndex, activityIndex, value) => {
        const updatedTourDetails = [...tourDetails];
        updatedTourDetails[dayIndex].activities[activityIndex] = value;
        setTourDetails(updatedTourDetails);
      };
    
      const removeDay = (dayIndex) => {
        const updatedTourDetails = [...tourDetails];
        updatedTourDetails.splice(dayIndex, 1);
        setTourDetails(updatedTourDetails);
      };
    


      let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handleSubmit=async (event)=>{
        event.preventDefault()
        const formData = new FormData();
          for (const key in data) {
          if (data[key]) {
            formData.append(key, data[key]);
          }
        }
       let response=await axios.put(`http://localhost:4000/agency/editpackage/${id}`,formData,{
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for FormData
        }
       })
       console.log(response);
       setrefresh(!refresh)
       setData('')
        
    }
  return (
    <div>
        <div className='bg-[#1a2954d6] h-[467px]' >
         <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Update </span><span className='text-orange-600'> Package</span>
          </div>
          
   <form onSubmit={handleSubmit}>
<div class="min-h-screen p-6 bg-[#1a2954d6] flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
     

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
           
          </div>

          <div class="lg:col-span-2 ">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Package Name</label>
                <input onChange={handleChange} placeholder={userData?.packageName} type="text" name="packageName" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Location</label>
                <input onChange={handleChange}  placeholder={userData?.location}  type="text" name="location" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              {/* <div class="md:col-span-5">
                <label for="destination">Destination</label>
                <input onChange={handleChange}  placeholder={userData?.destination} type="text" name="destination" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div> */}
              

              <div className="container mx-auto px-4 py-8">
      <button
        onClick={addDay}
        className="bg-orange-500 mb-4 text-white text-[25px] px-4 py-2 rounded mt-4 hover:bg-orange-600"
      >
        +
      </button>
      <br />
      {tourDetails.map((dayDetail, dayIndex) => (
        <div key={dayIndex} className="mb-8">
          <div className="mb-2 flex items-center">
            <label htmlFor="" className="text-[20px] p-2 font-bold">Day </label>
            <input
              type="number"
              value={dayDetail.day}
              name='Day'
              onChange={(e) => handleDayChange(dayIndex, e.target.value)}
              placeholder={tourDetails?.destination?.Day}
              readOnly
              className="border w-20 border-gray-300 rounded px-4 py-2  mr-2"
            />
            <input
              type="text"
              value={dayDetail.destination}
              onChange={(e) => handleDestinationChange(dayIndex, e.target.value)}
              placeholder=""
              name='Destination'
              className="border w-40 border-gray-300 rounded px-4 py-2  mr-2"
            />
            {/* <button
              onClick={() => removeDay(dayIndex)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button> */}
          </div>
          <label className="text-[20px] p-2 font-bold">Description:</label>
          <ul>
            {dayDetail.activities.map((activity, activityIndex) => (
              <li key={activityIndex} className="mb-2">
                <input
                  type="text"
                  name=''
                  value={activity}
                  onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <br />
      {userData.destination?.map((item)=>(
              <> <div className=''>
            <div className='font underline'> {item.Day} :{item.Destination}</div><br/>
            <div className=''>{item.activities}</div>
           </div>
            </>
            ))}
    </div>
    

              <div class="md:col-span-5 flex flex-wrap gap-3">
                <label for="email">Cover Image</label>
                <input onChange={handlefile} placeholder={userData?.coverImage} type="file" name="coverImage" id="email" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"  />
                <img
                  className="w-22 h-14"
                  src={`http://localhost:4000/uploads/${userData.coverImage}`}
                  alt=""
                />
              </div>
              
             <div>
            
             </div>
              <div class="md:col-span-3">
                <label for="days">No of days</label>
                <input onChange={handleChange}  placeholder={userData?.noOfDays} type="text" name="noOfDays" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-3">
                <label for="days">price</label>
                <input onChange={handleChange}  placeholder={userData?.price} type="number" name="price" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5 flex flex-wrap">
                <label for="email">upload Brochure</label>
                <input onChange={handlefile} placeholder={userData?.uploadBrochure} type="file" name="uploadBrochure" id="brochure" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"   />
                <img
                  className="w-22 h-14"
                  src={`http://localhost:4000/uploads/${userData.uploadBrochure}`}
                  alt=""
                />
              </div>
              
              <div>
             
              </div>
              <div className="container mx-auto px-4 py-8">
      <button
      type='button'
        onClick={addNoofppl}
        className="bg-orange-500 mb-4 text-white text-[25px] px-4 py-2 rounded mt-4 hover:bg-orange-600"
      >
        +
      </button>
      <br />
      {transport.map((noofpplDetail, pplIndex) => (
        <div key={pplIndex} className="mb-8">
          <div className="mb-2 flex gap-2 items-center">
            {/* <label htmlFor="" className="text-[20px] p-2 font-bold">No of people </label> */}
            <input onChange={(e) => handleNoofpplChange(pplIndex, e.target.value)} type='text' name='noofppl'   placeholder="No Of People" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id=""></input>
            {/* <select>
              
              className="border w-20 border-gray-300 rounded px-4 py-2  mr-2"
              <option value="">Select a count</option>
              <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
              </select> */}
           
              <input
                type="text"
                value={noofpplDetail.transportOption}
                onChange={(e) => handleTransportChange(pplIndex, e.target.value)}
                placeholder="transportoption"
                name='transportOption'
                className="border w-40 border-gray-300 rounded px-4 py-2  mr-2"
              />
               <input
                type="number"
                value={noofpplDetail.price}
                onChange={(e) => handlepriceChange(pplIndex, e.target.value)}
                placeholder="price"
                name='price'
                className="border w-40 border-gray-300 rounded px-4 py-2  mr-2"
              />
            {/* <button
              onClick={() => removeDay(dayIndex)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button> */}
          </div>
          {/* <label className="text-[20px] p-2 font-bold">Description:</label> */}
          {/* <ul>
            {dayDetail.activities.map((activity, activityIndex) => (
              <li key={activityIndex} className="mb-2">
                <input
                  type="text"
                  name=''
                  value={activity}
                  onChange={(e) => handleActivityChange(dayIndex, activityIndex, e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 w-80"
                />
              </li>
            ))}
          </ul> */}
        </div>
      ))}
      <br />
      {userData.transports?.map((item)=>(
            <div className='flex flex-wrap'>
            <div>{item.noofppl}People:
            {item.transportOption}</div>,
            <div>price:{item.price}</div>/-
            </div>
            ))}

      {


      }
     
    </div>
              

              
      <div class="md:col-span-5">
                <label for="full_name">Basic Description</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange}  placeholder={userData?.basicDescription} name="basicDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Detailed Information</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange}  placeholder={userData?.detailedDescription} name="detailedDescription" id="" cols="30" rows="10"></textarea>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">update</button>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
                   
                    
</form>                  

    </div>
    </div>
  )
}
