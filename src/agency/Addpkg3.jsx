import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Addpkg3 = () => {
    const [data, setData] = useState('');
    let { id } = useParams();
    const [adventureData, setAdventureData] = useState(['']);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/agency/findadventure`);
            setAdventureData(response.data);
        }
        fetchData();
    }, []);

    const [selectAll, setSelectAll] = useState(false);
    const [selectedResorts, setSelectedResorts] = useState([]);

    const handleResortCheckboxChange = (resortId) => {
        const isSelected = selectedResorts.includes(resortId);
        if (isSelected) {
            const updatedSelection = selectedResorts.filter(id => id !== resortId);
            setSelectedResorts(updatedSelection);
        } else {
            setSelectedResorts([...selectedResorts, resortId]);
        }
    };

    const handleSubmit = async () => {
        let response = await axios.put(`http://localhost:4000/agency/addAdventuretoPackage/${id}`, { adventureid: selectedResorts });
    };

    const filteredAdventures = adventureData.filter(item => {
        const adventureName = item.adventureName && item.adventureName.toLowerCase();
        const location = item.location && item.location.toLowerCase();
        return (adventureName && adventureName.includes(searchTerm.toLowerCase())) || (location && location.includes(searchTerm.toLowerCase()));
    });

    return (
        <div className='bg-[#1a2954d6] h-screen'>
            <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
                <span className='text-white'>Select</span><span className='text-orange-600'> Available Adventure option</span>
            </div>
            <form className="flex items-center max-w-sm mx-auto">
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search by Adventure Name or Location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
            <div className='flex flex-wrap sm:gap-10 '>
                {filteredAdventures.map((item) => (
                    <div key={item._id} className='bg-orange-600 w-[200px] ml-5 rounded-lg mt-5'>
                        <div className='pt-4 text-center text-white mb-2'>
                            <img src={`http://localhost:4000/uploads/${item.image}`} className='m-auto w-28' alt={item.adventureName} />
                            <div className='font font-bold'>{item.adventureName}</div>
                            <div className='font text-[10px]'>{item.price}</div>
                            <div className='font text-[10px]'>{item.description}</div>
                            <input
                                type="checkbox"
                                checked={selectedResorts.includes(item._id)}
                                onChange={() => handleResortCheckboxChange(item._id)}
                            />
                            <Link to=  {`/agency/editadventure/${item._id}`}><button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Edit</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className='text-center text-white rounded-lg bg-orange-600 w-24 h-11 ml-[500px] mt-5'>Submit</button>
        </div>
    )
}
