import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Addedresortvw = () => {
  let { id } = useParams();
  let [data, setData] = useState([""]);

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`https://journeasebackend.onrender.com/agency/viewPackageResort/${id}`);
      console.log(response.data);
      setData(response.data);
    };
    fetchdata();
  }, []);

  const handleRemoveHotel = async (resortId) => {
    try {
      await axios.delete(`https://journeasebackend.onrender.com/agency/removeHotel/${id}/${resortId}`);
      setData(data.filter(item => item.resorts._id !== resortId));
    } catch (error) {
      console.error("Error removing hotel:", error);
    }
  };

  return (
    <div className="bg-[#1a2954d6] h-screen">
      <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
        <span className="text-white">Selected</span>
        <span className="text-orange-600"> Hotels</span>
      </div>
     
      <div className="flex flex-wrap sm:gap-5">
        {data?.map((item) => (
          <div key={item.resorts?._id} className="bg-slate-300 w-[200px] ml-5 rounded-lg">
            <div className="pt-4 text-center text-black pb-3 rounded-lg">
              <img src={`https://journeasebackend.onrender.com/uploads/${item.resorts?.coverImage}`} className="m-auto w-28" alt="" />
              <div className="font font-bold">{item.resorts?.propertyName}</div>
              <button onClick={() => handleRemoveHotel(item.resorts?._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
