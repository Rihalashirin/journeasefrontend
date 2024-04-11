import React, { useEffect, useState } from "react";
import sea from "./images/crescentarcade.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Addedresortvw = () => {
  let { id } = useParams();
  let [data, setData] = useState([""]);
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `http://localhost:4000/agency/viewPackageResort/${id}`
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchdata();
  },[]);

  return (
    <div className="bg-[#1a2954d6] h-screen">
      <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
        <span className="text-white">Selected</span>
        <span className="text-orange-600"> Resorts</span>
      </div>
     

      <div className="flex flex-wrap sm:gap-5  ">
        {data.map((item)=>(
          <div className="bg-slate-300 w-[200px] ml-5 rounded-lg">
        <div className=" pt-4 text-center text-black  pb-3 rounded-lg">
          <img src={`http://localhost:4000/uploads/${item.resorts?.coverImage}`} className="m-auto w-28" alt="" srcset="" />
          <div className="font font-bold">{item?.resorts?.propertyName}</div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove</button>
        </div>
        </div>
        ))}
      </div>
   
    </div>
  );
};
