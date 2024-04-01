import axios from "axios";
import React, { useEffect, useState } from "react";

export const Proagencyupdate = () => {
  let id = localStorage.getItem("id");
  const [userData, setUserData] = useState({email:"",officeAddress:"",password:"",companyLogo:"",licenseProof:"",contactNumber:"",companyName:"",licenseNumber:""});
  const [refresh, setrefresh] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `http://localhost:4000/agency/vwagencyprofile/${id}`
      );
      console.log(response.data);
      setUserData({...response.data});
      // setData({ ...response.data });
    };
    fetchdata();
  }, [refresh]);

  let handleChange = (event) => {
    console.log(event?.target?.name);
    if(event?.target?.name === 'licenseProof' || event?.target?.name === 'companyLogo' ){
    setUserData({ ...userData, [event.target.name]: event.target.files[0] });

    }else{
      setUserData({ ...userData, [event.target.name]: event.target.value });
    }
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const key in userData) {
      if (userData[key]) {
        formData.append(key, userData[key]);
      }
    }
    let response = await axios.put(
      `http://localhost:4000/agency/agencyeditprofile/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for FormData
        },
      }
    );
    console.log(response,'response');
    setrefresh(!refresh);
  };
  return (
    <div className="bg-[#1a2954d6] h-[600px]">
      <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
        <span className="text-white">Update </span>
        <span className="text-orange-600"> Profile</span>
      </div>
      <form onSubmit={handleSubmit} class="w-[100%] ">
        <div className="flex w-[100%] justify-center sm:gap-10">
          <div className="w-[25%] ">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                {" "}
                Company Name :
              </label>
              <input
                onChange={handleChange}
                type="name"
                name="companyName"
                id="name"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.companyName}
                value={userData.companyName}
                required
              />
            </div>
            <div>
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                License Number:
              </label>
              <input
                onChange={handleChange}
                name="licenseNumber"
                type="number"
                id="age"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.licenseNumber}
                value={userData.licenseNumber}
                required
              />
            </div>
            <div>
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Office Address :
              </label>
              <input
                onChange={handleChange}
                name="officeAddress"
                type="text"
                id="address"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.officeAddress}
                value={userData.officeAddress}
                required
              />
            </div>
            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Description :
              </label>
              <input
                onChange={handleChange}
                name="description"
                type="text"
                id="description"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.description}
                value={userData.description}
                required
              />
            </div>

            {/* <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number:</label>
              <input type="email" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div> */}
            <div>
              <label
                for="contact"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Contact Number :
              </label>
              <input
                onChange={handleChange}
                name="contactNumber"
                type="number"
                id="contact"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.contactNumber}
                value={userData.contactNumber}
                required
              />
            </div>
          </div>
          <div className="w-[25%]">
            <div>
             
            
          

              <div className="flex  gap-2 justify-center items-center">
              
                <div className="">
                    <label
                    for="house name"
                    class="block mb-0 text-sm font-medium text-white dark:text-white"
                  >
                    Licence Proof :
                  </label>
                  <input
                    onChange={handleChange}
                    name="licenseProof"
                    type="file"
                    id="licenseproof"
                    class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder={userData.licenseProof}
                  
                    
                  />
                </div>
                <img
                  className="w-22 h-14"
                  src={`http://localhost:4000/uploads/${userData.licenseProof}`}
                  alt="yfytf"
                />
              </div>
            </div>
            <div  className="flex  gap-1 justify-center items-center">
              <label
                for="post"
                class="block  mb-2 text-sm font-medium text-white dark:text-white">
                Company Logo :
              </label>
              <input
                onChange={handleChange}
                name="companyLogo"
                // companyLogo
                type="file"
                id="post"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 width="80px"
            
                
              />
                       <img
                  className="w-22 h-14"
                  src={`http://localhost:4000/uploads/${userData.companyLogo}`}
                  alt="yfytf"
                />
            </div>
            <div>
              <label
                for="aboutus"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                About Us :
              </label>
              <input
                onChange={handleChange}
                name="aboutUs"
                type="text"
                id="aboutus"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.aboutUs}
                value={userData.aboutUs}
                required
              />
            </div>
            <div>
              <label
                for="whyus"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Why Us :
              </label>
              <input
                onChange={handleChange}
                name="whyUs"
                type="text"
                id="whyus"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.whyUs}
                value={userData.whyUs}
                required
              />
            </div>
            <div>
              <label
                for="pin"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Email:
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.email}
                value={userData.email}
                required
              />
            </div>
            <div>
              <label
                for="district"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Password:
              </label>
              <input
                onChange={handleChange}
                name=" password"
                type="password"
                id="password"
                class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={userData.password}
                value={userData.password}
                required
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap mb-5 mt-8">
          {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
          <button
            type="submit"
            class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};
