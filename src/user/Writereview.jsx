import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

export const Writereview = () => {
    let id2=localStorage.getItem('id')
    const [data,setData]=useState('')
    const [data2,setData2]=useState([''])
    let {id}=useParams()
    const [selectedStarCount, setSelectedStarCount] = useState(0);
    const [selectedHoverStarCount, setSelectHoverStarCount] = useState(0)
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/user/vwpkgname/${id}`)
            console.log(response.data)
            setData(response.data)
        }
        fetchdata()
    },[])
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handleSubmit=async (event)=>{
        event.preventDefault()
        setData(data)
        console.log(data)
       let response=await axios.post(`http://localhost:4000/user/addreview/${id2}`)
       console.log(response);
        
    }

  return (
    <div className='userhome'>
        <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            {data.pkg?.packageName}
          </div>
          <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 h-96'>
          {/* <body> */}
    {/* <div class="container">
        
        <div class="rating">
            <span id="rating">0</span>/5
        </div>
        <div class="stars" id="stars">
            <span class="star" data-value="1">★</span>
            <span class="star" data-value="2">★</span>
            <span class="star" data-value="3">★</span>
            <span class="star" data-value="4">★</span>
            <span class="star" data-value="5">★</span>
        </div> */}
        <div className='font-bold'>{data.agnc?.companyName}</div>
        {data.destination?.map((item)=>(
        <div className='font-bold text-white'>{item.pkg?.destination}</div>
        ))}
        {/* <p>Share your review:</p> */}
        <textarea id="review"
                  placeholder="Write your review here">
          </textarea>
          <button className='bg-orange-600 w-28 mt-12 rounded-lg'>Post Review</button>
        {/* <button type="submit">Submit</button> */}
        {/* <div class="reviews" id="reviews"> */}
        {/* </div> */}
    {/* </div> */}
    {/* <script src="script.js"></script> */}
{/* </body> */}
<div className='font-bold'>Hotel Sea View</div>
        {/* <p>Share your review:</p> */}
        <textarea onChange={handleChange} id="review"
                  placeholder="Write your review here">
          </textarea>
          <button onClick={handleSubmit} className='bg-orange-600 w-28 mt-12 rounded-lg'>Post Review</button>
        {/* <button type="submit">Submit</button> */}
        <div className='app'>
            Star rating
            <div className='stars'>
                {[...Array(4)].map((_, index)=>{
                    return <span key={index}
                    className={`${index + 1 <=selectedStarCount ? "selected" :" "} ${index + 1 <= selectedHoverStarCount ? "selected":" "}`}
                    onMouseOver={()=>{
                        setSelectHoverStarCount(index+1)
                    }}
                    onMouseOut={()=>{
                         setSelectHoverStarCount(0);
                    }}
                    onClick={()=>{
                        setSelectedStarCount(index+1);
                    }}
                    >&#9733;</span>

                })}
                <span>&#9733;</span>
            </div>
            Rating Count:{selectedStarCount}
        </div>
            
          </div>
        
    </div>
  )
}
