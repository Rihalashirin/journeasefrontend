import React, { useEffect, useState } from 'react'
import seaview from './images/seaview.png'
import delux from './images/deluxmotel.png'
import crescent from './images/crescentarcade.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Addpkg1 = () => {
    let {id}=useParams()
    const [data,setData]=useState('')
    const navigate=useNavigate()
    const [resortData,setResortdata]=useState([''])
    
    
useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/agency/findresort`)
        console.log(response.data)
        setResortdata(response.data)
    }
    fetchdata()
},[])
   

     
    // let handleChange=(event)=>{
    //     setData({...data,[event.target.name]:event.target.value})
    // }
    
    const [selectAll, setSelectAll] = useState(false);
    const [selectedResorts, setSelectedResorts] = useState([]);

    const handleMasterCheckboxChange = () => {
        setSelectAll(!selectAll);
        const selectedResortIds = selectAll ? [] : resortData.map(item => item._id);
        setSelectedResorts(selectedResortIds);
        console.log("Selected resorts:", selectedResortIds);
        console.log("Select all:", !selectAll);
    };

    const handleResortCheckboxChange = (resortId) => {
        const isSelected = selectedResorts.includes(resortId);
        if (isSelected) {
            const updatedSelection = selectedResorts.filter(id => id !== resortId);
            setSelectedResorts(updatedSelection);
        } else {
            setSelectedResorts([...selectedResorts, resortId]);
        }
        console.log("Selected resorts:", selectedResorts);
    };


let handleSubmit=async()=>{
    let response=await axios.put(`http://localhost:4000/agency/addresortToPackage/${id}`,{resortId:selectedResorts})
    console.log(response);
}

    return (
        
        <div className='pencil'>
            <div className='flex flex-wrap gap-9'>
            {/* <input
                type="checkbox"
                checked={selectAll}
                onChange={handleMasterCheckboxChange}
            />
            <label>Select All</label> */}
            {resortData.map((item) => (
                <div key={item._id} className='pt-28 text-center text-white'>
                    <Link to={`/agency/vwresortdetail/${item._id}`}>
                        <img src={`http://localhost:4000/uploads/${item.coverImage}`} className='w-20 h-16 m-auto w-28 rounded-lg' alt="" srcSet="" />
                    </Link>
                    <input
                        type="checkbox"
                        checked={selectedResorts.includes(item._id)}
                        onChange={() => handleResortCheckboxChange(item._id)}
                    />
                    <div className='font font-bold'>{item.propertyName}</div>
                </div>
            ))}
            </div>
      <button type='submit' onClick={handleSubmit} className='bg-orange-600 w-28 h-10 text-white font-bold rounded-lg ml-[550px] mt-32'>submit</button>
           
        </div>
       
    )
}
