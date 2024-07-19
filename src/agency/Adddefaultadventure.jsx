import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Adddefaultadventure = () => {
    const [adventureData, setAdventureData] = useState([]);
    const [selectedResorts, setSelectedResorts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get('https://journeasebackend.onrender.com/agency/findadventure');
            setAdventureData(response.data);
        };
        fetchdata();
    }, []);

    const handleResortCheckboxChange = (adventureId) => {
        const isSelected = selectedResorts.includes(adventureId);
        if (isSelected) {
            const updatedSelection = selectedResorts.filter(id => id !== adventureId);
            setSelectedResorts(updatedSelection);
        } else {
            setSelectedResorts([...selectedResorts, adventureId]);
        }
    };

    const handleSubmit = async () => {
        const response = await axios.put(`https://journeasebackend.onrender.com/agency/adddefaultadventure/${id}`, { defaultadventureId: selectedResorts });
        console.log(response);
    };

    const filteredAdventureData = adventureData.filter(item =>
        item.adventureName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-[#1a2954d6] h-screen'>
            <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Select</span><span className='text-orange-600'> Available Adventure option</span>
            </div>
            <form className="flex items-center max-w-sm mx-auto">
                <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Search adventure or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            <div className='flex flex-wrap sm:gap-10 '>
                {filteredAdventureData.map((item) => (
                    <div className='bg-orange-600 w-[200px] ml-5 rounded-lg mt-5' key={item._id}>
                        <div className='pt-4 text-center text-white mb-2'>
                            <img src={`https://journeasebackend.onrender.com/uploads/${item.image}`} className='m-auto w-28' alt="" srcSet="" />
                            <div className='font font-bold'>{item.adventureName}</div>
                            <div className='font text-[10px]'>{item.price}</div>
                            <div className='font text-[10px]'>{item.location}</div>
                            <input
                                type="checkbox"
                                checked={selectedResorts.includes(item._id)}
                                onChange={() => handleResortCheckboxChange(item._id)}
                            />
                            <Link to='/agency/editadventure'>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Edit</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className='text-center text-white rounded-lg bg-orange-600 w-24 h-11 ml-[500px] mt-5  '>submit</button>
        </div>
    );
};
