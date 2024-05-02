import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Addpkg1 = () => {
    const { id } = useParams();
    const [resortData, setResortData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedResorts, setSelectedResorts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/agency/findresort');
                setResortData(response.data);
            } catch (error) {
                console.error('Error fetching resort data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleResortCheckboxChange = (resortId) => {
        const isSelected = selectedResorts.includes(resortId);
        if (isSelected) {
            const updatedSelection = selectedResorts.filter((id) => id !== resortId);
            setSelectedResorts(updatedSelection);
        } else {
            setSelectedResorts([...selectedResorts, resortId]);
        }
    };

    const filteredResortData = resortData.filter(
        (resort) =>
            resort.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resort.propertyAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resort.district.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/agency/addresortToPackage/${id}`, {
                resortId: selectedResorts,
            });
            console.log(response);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className='pencil'>
            <div className='flex items-center max-w-sm mx-auto pt-7'>
                <input
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search location or district...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    required
                />
                <button
                    type='button'
                    className='p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    onClick={handleSubmit}
                >
                    <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                    </svg>
                    <span className='sr-only'>Search</span>
                </button>
            </div>
            <div className='flex flex-wrap gap-9'>
                {filteredResortData.map((item) => (
                    <div className='bg-yellow-300 w-[150px] ml-5 mt-5 rounded-lg' key={item._id}>
                        <div className='pt-4 text-center text-white'>
                            <Link to={`/agency/vwresortdetail/${item._id}`}>
                                <img
                                    src={`http://localhost:4000/uploads/${item.coverImage}`}
                                    className='h-16 m-auto w-28 rounded-lg'
                                    alt=''
                                />
                            </Link>
                            <input
                                type='checkbox'
                                checked={selectedResorts.includes(item._id)}
                                onChange={() => handleResortCheckboxChange(item._id)}
                            />
                            <div className='font font-bold'>{item.propertyName}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                type='button'
                onClick={handleSubmit}
                className='bg-orange-600 w-28 h-10 text-white font-bold rounded-lg ml-[550px] mt-32'
            >
                Submit
            </button>
        </div>
    );
};
