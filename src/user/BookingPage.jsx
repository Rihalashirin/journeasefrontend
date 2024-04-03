import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BookingPage() {
  const [data, setData] = useState("");
  const [resortData, setResortdata] = useState([""]);
  const [agencydata, setAgencydata] = useState([""]);
  const [selectedResorts, setSelectedResorts] = useState([]);
  const [toggle, settoggle] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/vwadventure/${id}`);
        setAgencydata(response.data);

        const response1 = await axios.get(`http://localhost:4000/user/vwaccomodation/${id}`);
        setResortdata(response1.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleResortCheckboxChange = (resortId) => {
    const isSelected = selectedResorts.includes(resortId);
    if (isSelected) {
      const updatedSelection = selectedResorts.filter((id) => id !== resortId);
      setSelectedResorts(updatedSelection);
    } else {
      setSelectedResorts([...selectedResorts, resortId]);
    }
    console.log("Selected resorts:", selectedResorts);
  };

  const handledetail = async (rid) => {
    try {
      const response = await axios.get(`http://localhost:4000/agency/detailvwresort/${rid}`);
      setData(response.data);
      settoggle(true);
    } catch (error) {
      console.error("Error fetching resort details:", error);
    }
  };

  const submitResort = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/user/booking`, {
        ...data,
        packageid: id,
        resortId: selectedResorts1,
        adventureId: selectedResorts,
      });
      console.log(response);
    } catch (error) {
      console.error("Error submitting resort:", error);
    }
  };

  const [selectedResorts1, setSelectedResorts1] = useState([]); // Corrected

  const selectResort = (resortId) => {
    const isSelected = selectedResorts1.includes(resortId);
    if (isSelected) {
      const updatedSelection = selectedResorts1.filter((id) => id !== resortId);
      setSelectedResorts1(updatedSelection);
    } else {
      setSelectedResorts1([...selectedResorts1, resortId]);
    }
    console.log("Selected resorts:", selectedResorts1);
  };

  console.log(selectedResorts1, "====================");

  return (
    <div className='userhome'>
<div className=' font text-[30px] font-bold pl-[500px] pt-6'>
            <span className='text-white'>Select</span> <span className='text-orange-600'> Adventures</span>
          </div>
      <div className="flex flex-wrap sm:gap-5  ">
        {agencydata.map((item) => (
          <div className=" pt-5 pl-6 text-center text-white ">
            <img
              src={`http://localhost:4000/uploads/${item.agency?.image}`}
              className="m-auto w-24 h-24 rounded-2xl"
              alt=""
              srcset=""
            />
            <div className="font font-bold">
              {item.agency?.adventureName} <br />{" "}
              <div className="font font-light">{item.agency?.price}-/Head</div>
            </div>
            <input
              type="checkbox"
              checked={selectedResorts.includes(item.agency?._id)}
              onChange={() => handleResortCheckboxChange(item.agency?._id)}
            />
          </div>
        ))}
      </div>
      <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-[500px] '>
            <span className='text-white'>Select an</span><span className='text-orange-600'> Accomodation</span>
          </div>
      <div className="flex flex-wrap sm:gap-5  ">
        {resortData.map((item) => (
          <div className=" pt-28 text-center text-white ">
            <img
              onClick={() => handledetail(item.resort?._id)}
              src={`http://localhost:4000/uploads/${item.resort?.coverImage}`}
              className="m-auto w-28"
              alt=""
              srcset=""
            />
            <Link to={`/user/vwresortdet/${item.resort?._id}`}>
              {" "}
              <div className="font font-bold">{item.resort?.propertyName}</div>
            </Link>
          </div>
        ))}
      </div>


{toggle &&

      <div className="font text-center text-[30px] text-amber-800 pb-4 uppercase font-bold animate-pulse">
        {data.response?.propertyName}{" "}
      <img
        src={`http://localhost:4000/uploads/${data.response?.coverImage}`}
        className="m-auto w-[70%]"
        alt=" "
        srcSet=" "
      />
      <div className="w-[90%] text-center glow">
        {data.response?.description}
      </div>

      <div className="flex flex-wrap justify-between ">
        <div className="bg-white/45 w-72 mt-9 pl-3 rounded-lg text-amber-800 shadow-xl">
          <div>{data.response?.propertyAddress}</div>
        </div>
        <div className="bg-white/45 w-80 mt-9 pt-1 rounded-lg text-center shadow-xl text-amber-800">
          {data.response?.aboutUs}
        </div>
        <div className="bg-white/45 w-80 mt-9 p-2 rounded-lg shadow-xl text-amber-800">
          <div>contact us:</div>
          <div>{data.response?.contactNumber}</div>
        </div>
      </div>
      <div className=" bg-yellow-300 w-[80%] h-32 mb-24  text-red-600 ml-24 mt-9 p-2 rounded-lg shadow-xl border-l-2 border-r-2 border-t-2 border-b-2">
        {data.response?.events}
      </div>

      {data.rooms?.map((item) => (
          <div className="flex bg-yellow-100 px-2 py-4 rounded text-yellow-300 animate-bounce  font-semibold font">
          luxury room:
          <img
            src={`http://localhost:4000/uploads/${item.image}`}
            className="m-auto w-48"
            alt=" "
            srcSet=" "
            />
          standardroom:
          <img
            src={`http://localhost:4000/uploads/${item.images}`}
            className="m-auto w-48"
            alt=" "
            srcSet=" "
            />
        </div>
      ))}

      <div class="  overflow-x-auto shadow-md sm:rounded-lg mt-40 w-[50%] ml-72">
        <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-black uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
            <tr>
              <th>Room type</th>
              <th>No of rooms</th>
              <th>Occupancy</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {data.rooms?.map((item) => (
                <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4 text-black">
                  luxury:
                </td>
                <td class="px-6 py-4">{item.luxury}</td>
                <td class="px-6 py-4">{item.luxuryOccupancy}</td>
                <td>{item.luxuryprice}/-</td>
              </tr>
            ))}
            {data.rooms?.map((item) => (
              <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                <td scope="row" class="px-6 py-4 text-black">
                  standard:
                </td>
                <td class="px-6 py-4">{item.standard}</td>
                <td class="px-6 py-4">{item.standardOccupancy}</td>
                <td class="px-6 py-4">{item.standardPrice}/-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="font-bold ml-24 mt-5">
        {" "}
        Facilities
        {data.facilities?.map((item) => (
          <div className="ml-14 mt-14 flex gap-10 ">
            <p>{item.name} kjkjh</p>
            <p>{item.luxury}</p>
            <p>{item.standard}</p>
          </div>
        ))}
      </div>
        <button type="submit" onClick={()=>selectResort(data.response._id)} className="bg-orange-600 w-28">submit</button>
       
    </div>

} <button onClick={submitResort} type="submit" className="bg-orange-600 w-28">BOOK</button>
    </div>
    
  );
}
