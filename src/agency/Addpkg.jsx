import React, { useState } from 'react'
import arrow from './images/Arrow.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FileBase64 from 'react-filebase64';
import { ToastContainer, toast } from "react-toastify";

export const Addpkg = () => {
  let id=localStorage.getItem('id')
  const [tourDetails, setTourDetails] = useState([{ day: 1, destination: '', activities: [''] }]);
  const [transport, setTransport] = useState([{ noofpeople: '', transportOption: '',price:'' }]);
  const [data,setData]=useState('')

const [transportImagedata, setTransportImage] = useState()

  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }
  const addDay = () => {
    const newDay = tourDetails.length + 1;
    setTourDetails([...tourDetails, { day: newDay, destination: '', activities: [''] }]);
  };
  const addNoofppl = () => {
    setTransport([...transport, { noofpeople: '', transportOption: '', price: '' }]);
    setTransportImages([...transportImages, '']);
  };

  const handleDayChange = (dayIndex, value) => {
    const updatedTourDetails = [...tourDetails];
    updatedTourDetails[dayIndex].day = value;
    setTourDetails(updatedTourDetails);
  };

  const handleNoofpplChange = (pplIndex, value) => {
    const updatedTransport = [...transport];
    updatedTransport[pplIndex].noofpeople = value;
    setTransport(updatedTransport);
  };

  const handleDestinationChange = (dayIndex, value) => {
    const updatedTourDetails = [...tourDetails];
    updatedTourDetails[dayIndex].destination = value;
    setTourDetails(updatedTourDetails);
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
console.log(transport,'jhugytfrdse');

  const handleActivityChange = (dayIndex, activityIndex, value) => {
    const updatedTourDetails = [...tourDetails];
    updatedTourDetails[dayIndex].activities[activityIndex] = value;
    setTourDetails(updatedTourDetails);
  };

  // const removeDay = (dayIndex) => {
  //   const updatedTourDetails = [...tourDetails];
  //   updatedTourDetails.splice(dayIndex, 1);
  //   setTourDetails(updatedTourDetails);
  // };

    
    
     
  let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
      console.log(data);
  }

  console.log(data,'----');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

  
    // Handling transport data
    const transports = transport.map((noofpplDetail,index) => ({
      noofppl: noofpplDetail.noofpeople,
      transportOption: noofpplDetail.transportOption,
      price: noofpplDetail.price,
      transportImage: transportImages[index] // Use transport image data from state
    }));
  
 
    // Construct an array of destination objects
    const destinations = tourDetails.map((dayDetail) => ({
      Day: dayDetail.day,
      Destination: dayDetail.destination,
      activities: dayDetail.activities.join(', '), // Convert activities array to comma-separated string
    }));
  
    // Create a new FormData object
    let formData = new FormData();
    formData.append('packageName', data.packageName);
    formData.append('location', data.location);
    formData.append('coverImage', data.coverImage); // Append cover image base64 data
    formData.append('noOfDays', data.noOfDays);
    formData.append('price', data.price);
    formData.append('uploadBrochure', data.uploadBrochure); // Append brochure base64 data
    formData.append('basicDescription', data.basicDescription);
    formData.append('detailedDescription', data.detailedDescription);
    formData.append('category', data.category);
    formData.append('noofpeople', data.noofpeople);
    formData.append('defaultvehicle', data.defaultvehicle);
    formData.append('vehicleimage', data.vehicleimage);
    formData.append("defaultvehicleprice", data.defaultvehicleprice)
    formData.append('agencyid', id);
  
    // Append the array of destination objects directly
    destinations.forEach((destination, index) => {
      formData.append(`destination[${index}][Day]`, destination.Day);
      formData.append(`destination[${index}][Destination]`, destination.Destination);
      formData.append(`destination[${index}][activities]`, destination.activities);
    });
  
    // Append the array of transport objects directly
    transports.forEach((transport, index) => {
      formData.append(`transports[${index}][noofppl]`, transport.noofppl);
      formData.append(`transports[${index}][transportOption]`, transport.transportOption);
      formData.append(`transports[${index}][price]`, transport.price);
      formData.append(`transports[${index}][transportImage]`, transport.transportImage); // Append transport image data
    });
  
    try {
      // Send the FormData to the backend
      let response = await axios.post('http://localhost:4000/agency/package', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      toast.success('Package Created')
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [transportImages, setTransportImages] = useState(Array.from({ length: transport.length }, () => ''));

  const handleTransportImage = (index, image) => {
    console.log('sdfsdf');
    const updatedTransportImages = [...transportImages];
    updatedTransportImages[index] = image.base64;
    setTransportImages(updatedTransportImages);
    console.log(transportImages,'[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[');
  };
  

  // -----------------------------------------------------



  
  
  
  return (
    <>
    <ToastContainer/>
    <div className='bg-[#1a2954d6] h-[467px]' >
         <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Add a </span><span className='text-orange-600'> Package</span>
          </div>
          
   <form onSubmit={handleSubmit}>
<div class="min-h-screen p-6 bg-[#1a2954d6] flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      {/* <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          

          <div class="lg:col-span-2 ">
            <div class=" gap-4 gap-y-2 flex flex-wrap text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Package Name</label>
                <input onChange={handleChange} type="text" name="packageName" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Location</label>
                <input onChange={handleChange} type="text" name="location" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              
              <div class="md:col-span-5">
                <label for="category">Category</label>
                <input onChange={handleChange} type="text" name="category" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>
              <div class="md:col-span-5">
                <label for="category">No Of People</label>
                <input onChange={handleChange} type="number" name="noofpeople" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>
             
              <div class="md:col-span-5">
                <label for="category"> vehicle</label>
                <input onChange={handleChange} type="text" name="defaultvehicle" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>
               <div class="md:col-span-5">
                <label for="category"> vehicle Amount</label>
                <input onChange={handleChange} type="number" name="defaultvehicleprice" className='h-10 border mt-1 rounded px-2 ms-6 bg-gray-50 id=" '/>
              </div>
              <div class="md:col-span-5">
                <label for="full_name">Vehicle Image</label>
                <input onChange={handlefile} type="file" name="vehicleimage" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-5">
                <label for="email">Cover Image</label>
                <input onChange={handlefile} type="file" name="coverImage" id="email" class="h-10 border mt-1 w-60 rounded px-4 ms-6 bg-gray-50"  placeholder="email@domain.com" />
              </div>
              <div class="md:col-span-3">
                <label for="days">No of days</label>
                <input onChange={handleChange} type="text" name="noOfDays" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
              <div class="md:col-span-3">
                <label for="days">price</label>
                <input onChange={handleChange} type="number" name="price" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" />
              </div>
             
              <div className="container ">
      <button
      type='button'
        onClick={addDay}
        className="bg-orange-500 mb-4 text-white text-[25px] px-4 py-2 rounded  hover:bg-orange-600"
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
              name=''
              onChange={(e) => handleDayChange(dayIndex, e.target.value)}
              placeholder="Day"
              readOnly
              className="border w-20 border-gray-300 rounded px-4 py-2  mr-2"
            />
            <input
              type="text"
              value={dayDetail.destination}
              onChange={(e) => handleDestinationChange(dayIndex, e.target.value)}
              placeholder="Destination"
              name=''
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
                  className="border border-gray-300 rounded px-4 py-2 w-80"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      
     
    </div>
  
    <div class=" flex flex-wrap gap-2">
                <label for="full_name">Basic Description</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange} name="basicDescription" id="" cols="30" rows=""></textarea>
              </div>
              <div class="flex flex-wrap gap-2">
                <label for="full_name">Detailed Information</label>
                {/* <input type="text" name="" className='h-10 border mt-1 w-60 rounded px-2 ms-6 bg-gray-50' id="" /> */}
                <textarea onChange={handleChange} name="detailedDescription" id="" cols="30" rows=""></textarea>
              </div> 
              <div class="">
                <label for="email">upload Brochure</label>
                <input onChange={handlefile} type="file" name="uploadBrochure" id="brochure" class="h-10 border  w-60 rounded  ms-6 bg-gray-50"   />
              </div>
              <div className="container ">
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
            <div className="md:col-span-5 flex flex-wrap gap-2 ">
  <label htmlFor="transportImage">Transport Image</label>
  <FileBase64
    multiple={false}
    onDone={(res) => handleTransportImage(pplIndex, res)}
  />
</div>
           
          </div>
          
        </div>
      ))}
      <br />


      {


      }
     
    </div>
  
     
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                     <button type='submit' class="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
    </>
  )
}
