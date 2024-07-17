import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/admin/vwbooking`);
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };
        fetchData();
    }, []);

    const handleReviewToggle = (index) => {
        setSelectedReviewIndex(index === selectedReviewIndex ? null : index);
    };

    return (
        <div className='bg-gray-500 h-[600px]'>
            <div className="relative overflow-x-auto pt-14 pe-5 ps-5">
                <table className="w-full text-sm text-left rtl:text-right text-white">
                    <thead className="text-xs text-orange-400 uppercase bg-gray-50">
                        <tr className='bg-gray-600 border-b  dark:border-gray-700'>
                            <th scope="col" className="px-6 py-3">Sl.No</th>
                            <th scope="col" className="px-6 py-3">Booking Name</th>
                            <th scope="col" className="px-6 py-3">Agency</th>
                            <th scope="col" className="px-6 py-3">Package</th>
                            <th scope="col" className="px-6 py-3">Hotel</th>
                            <th scope="col" className="px-6 py-3">Reviews-Hotel</th>
                            <th scope="col" className="px-6 py-3">Reviews-Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item, index) => (
                            <React.Fragment key={index}>
                                <tr className='bg-white'>
                                    <td className="px-6 py-4 text-black">{index + 1}</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">{item?.user?.name}</th>
                                    <td className="px-6 py-4 text-black">{item?.agency?.companyName}</td>
                                    <td className="px-6 py-4 text-black">{item?.package?.packageName}</td>
                                    <td className="px-6 py-4 text-black">{item?.resort?.propertyName}</td>
                                    <td className="px-6 py-4 text-black">{item?.resrw[0]?.review}</td>
                                    <td className="px-6 py-4 text-black">
                                        <button onClick={() => handleReviewToggle(index)} className='bg-orange-700 px-2 py-2 rounded-lg'>View</button>
                                    </td>
                                </tr>
                                {selectedReviewIndex === index && item?.rw.map((review, reviewIndex) => (
                                    <tr key={`${index}-${reviewIndex}`} className="bg-gray-100">
                                        <td colSpan="7" className="px-6 py-2 text-black">{review.destinationName}-{review.review}</td>

                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
