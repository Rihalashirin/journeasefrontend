
import axios from 'axios';
import React, { useState } from 'react';

export default function AddDetails() {
  const [tourDetails, setTourDetails] = useState([{ day: 1, destination: '', activities: [''] }]);

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

  
  // const handleSubmit = async () => {
  //   try {
  //     // Send a POST request to your API endpoint
  //     await axios.post('http://localhost:4000/agency/adddestination', tourDetails);
  //     // Optionally, you can handle success or show a message to the user
  //     console.log('Tour details added successfully!');
  //   } catch (error) {
  //     // Handle errors here
  //     console.error('Error adding tour details:', error);
  //   }
  // };

  return (
    <div className='pencil'>
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
            <button
              onClick={() => removeDay(dayIndex)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
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
      <button className="bg-orange-600 rounded-lg p-2 text-white">Submit</button>
    </div>
    </div>
  );
} 
