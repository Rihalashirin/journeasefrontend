import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import homeicon from "../agency/images/Group 93.png";
import axios from "axios";

export const Navresort = () => {
  const [data, setData] = useState("");
  let id = localStorage.getItem("id");
  const navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    navigate("/login");
  };
  useEffect(() => {
    let auth = async () => {
      let id = localStorage.getItem("id");
      let email = localStorage.getItem("email");
      let response = await axios.post(
        "https://journeasebackend.onrender.com/user/api/auth/authenticate",
        { _id: id, email: email }
      );
      console.log(response);
      setData(data);
      if (response == null) {
        navigate("/login");
      } else if (response?.data?.userType !== "resort") {
        navigate("/login");
      }
    };
    auth();
  }, []);
  return (
    <>
      <div className=" text-orange-600 h-20  items-center  align-middle w-[100%] bg-white flex flex-wrap justify-between">
        <div className="fonts text-[20px] text-orange-500   items-center py-3 ps-3">
          JournEase
        </div>
        <div className="flex gap-5 items-center">
          <Link to="/resort">
            <div>
              <img className="w-[40px]" src={homeicon} alt="" srcset="" />
            </div>
          </Link>
          {/* <Link to='/resort/resortvwbooking'> <div className='font text-orange-600 '>BOOKINGS</div></Link> */}
          <Link to="/resort/resortmngenqry">
            <div className="font text-orange-600 ">ENQUIRIES</div>
          </Link>
          <Link to="/resort/resortvwreview">
            <div className="font text-orange-600 ">REVIEWS</div>
          </Link>
          <Link to="/resort/regresort1">
            <div className="font text-orange-600 ">ADD ROOM</div>
          </Link>
          <Link to="/resort/addfacilities">
            <div className="font text-orange-600 ">ADD FACILITY</div>
          </Link>
          <Link to="/resort/Viewfacility">
            <div className="font text-orange-600">VIEW FACILITY</div>
          </Link>
          <Link to="/resort/viewroom">
            <div className="font text-orange-600 ">VIEW ROOM</div>
          </Link>
          <Link to={`/resort/updatereg2/${id}`}>
            <div className="font text-orange-600 ">UPDATE ROOM</div>
          </Link>
         
        </div>
      </div>
      <div className="pt-4">

      <Outlet />
      </div>
    </>

  );
};
