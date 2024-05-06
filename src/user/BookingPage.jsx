import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function BookingPage() {
  let id1=localStorage.getItem('id')
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [resortData, setResortdata] = useState([""]);
  const [agencydata, setAgencydata] = useState([""]);
  const [transportdata, setTransportdata] = useState('')
  const [selectedResorts, setSelectedResorts] = useState([]);
  const [checkPeople,setCheckpeople]=useState('');
  const [toggle, settoggle] = useState(false);
  const { id } = useParams();


  let handleChange = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
     
   
  

// if(event.target.name=="adult" || event.target.name=="child"){
// console.log("total peoples", totalPeople);
// console.log("no of people", parseInt(transportdata[0].pkg?.noofpeople));
// setCheckpeople(totalPeople)


// }


    // Check if the user selected "No" for the guide
    if (event.target.name === "guide" && event.target.value === "no") {
      // Reduce the transport price by 1000 if guide is not selected
      console.log(transportdata[0].pkg?.price,'new datas');
      let newPrice = parseFloat(transportdata[0].pkg?.price) - (parseFloat(transportdata[0].pkg?.noOfDays) * 1000);
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: newPrice,
          },
        },
      }));
    }
  
    // Check if the user selected "Yes" for health assistant
    if (event.target.name === "health" && event.target.value === "yes") {
      // Increase the transport price by 1000 if health assistant is selected
      let newPrice = parseFloat(transportdata[0].pkg?.price) + (parseFloat(transportdata[0].pkg?.noOfDays) * 1000);
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: newPrice,
          },
        },
      }));
    }
    if (event.target.name === "accomodatn" && event.target.value === "luxury") {
      let newPrice = parseFloat(transportdata[0]?.pkg?.price) + parseFloat(data.rooms?.luxuryprice || 0);
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: newPrice,
          },
        },
      }));
    }
    
    if (event.target.name === "accomodatn" && event.target.value === "standard") {
      let newPrice = (parseFloat(transportdata[0]?.pkg?.price) - parseFloat(transportdata[0]?.pkg?.defaulthotelprice || 0)) + parseFloat(data.rooms?.standardPrice || 0);
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: newPrice,
          },
        },
      }));
    }
    
    
    
    if (event.target.name === "selectedTransport" && event.target.checked) {
      if(checkPeople>transportdata[0]?.pkg?.noofpeople){
        alert("select a alternate transport other than default")
      }
      let transportOption = transportdata[0]?.pkg?.transports.find(option => option.transportOption === event.target.value);
      if (transportOption) {
        console.log(transportOption.price,'rrrrr');
        let bal=parseFloat(transportdata[0]?.pkg?.price)-parseFloat( transportdata[0]?.pkg?.defaultvehicleprice)
        let newPrice =bal + parseFloat(transportOption.price);
        console.log(bal,'balances');
        console.log(transportdata[0]?.pkg?.price,"aaaa");
        console.log(newPrice,"newprices");
        console.log(transportdata[0]?.pkg?.defaultvehicleprice,"cccc");
        setTransportdata((prevState) => ({
          ...prevState,
          [0]: {
            ...prevState[0],
            pkg: {
              ...prevState[0].pkg,
              price: newPrice,
            },
          },
        }));
      }
    }
  };
  
  let handleSubmit = async (event) => {
    event.preventDefault();
  };

  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0] + "T00:00");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/vwadventure/${id}`
        );
        console.log(response.data, "--------------------jh");
        setAgencydata(response.data);

        const response2 = await axios.get(
          `http://localhost:4000/user/detailvwpackage/${id}`
        );
        console.log(response2.data, "--------------------jh");
        setTransportdata(response2.data);

        const response1 = await axios.get(
          `http://localhost:4000/user/vwaccomodation/${id}`
        );
        setResortdata(response1.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleResortCheckboxChange = (resortId, adventurePrice) => {
    const isSelected = selectedResorts.includes(resortId);
    if (isSelected) {
      const updatedSelection = selectedResorts.filter((id) => id !== resortId);
      setSelectedResorts(updatedSelection);
      // Subtract the adventure price when unchecking the checkbox
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: parseFloat(prevState[0].pkg.price) - parseFloat(adventurePrice),
          },
        },
      }));
    } else {
      setSelectedResorts([...selectedResorts, resortId]);
      // Add the adventure price when checking the checkbox
      setTransportdata((prevState) => ({
        ...prevState,
        [0]: {
          ...prevState[0],
          pkg: {
            ...prevState[0].pkg,
            price: parseFloat(prevState[0].pkg.price) + parseFloat(adventurePrice),
          },
        },
      }));
    }
  };
  
  const handledetail = async (rid) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/agency/detailvwresort/${rid}`
      );
      setData(response.data);
      settoggle(true);
    } catch (error) {
      console.error("Error fetching resort details:", error);
    }
  };

  const submitResort = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/user/booking`, {
        ...data1,
        packageid: id,
        resortId: selectedResorts1,
        adventureId: selectedResorts,
        userId:id1,
        BillAmount:transportdata[0]?.pkg?.price
      });
      console.log(response);
      toast.success('Booked successfully')
    } catch (error) {
      console.error("Error submitting resort:", error);
    }
  };

  const [selectedResorts1, setSelectedResorts1] = useState([]); // Corrected
console.log(selectedResorts1,'[=[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]');
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
  
  let checking=()=>{
    let totalPeople= parseInt(data1.adult)+parseInt(data1.child)
    console.log("total peoples", totalPeople);
    console.log("no of people", parseInt(transportdata[0].pkg?.noofpeople));
    if(totalPeople>parseInt(transportdata[0].pkg?.noofpeople)||totalPeople<parseInt(transportdata[0].pkg?.noofpeople/2)){
      return toast.error('sdfsdfd')
      
    }
    setCheckpeople(totalPeople)

    let newPrice=parseFloat(transportdata[0]?.pkg?.price)*parseInt(totalPeople)
     setTransportdata((prevState) => ({
          ...prevState,
          [0]: {
            ...prevState[0],
            pkg: {
              ...prevState[0].pkg,
              price: newPrice,
            },
          },
        }));
          
        }

  return (
    <>
      <ToastContainer/>
    <div className="userhome">
             <div>
            <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-10 ">
              <span className="text-white">Customise your</span>
              <span className="text-orange-600"> Package</span>(optional)
            </div>
          <div className="ml-10 text-white"> You can customise your package ,amount may vary according to it,if you skip default package will go</div> <br/>
            <div className="text-center text-[20px] font  text-white">
                   Package Price : {transportdata[0]?.pkg?.price }/-
                  </div>
            <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2">
              <fieldset>
              <div className="text-orange-950 font-bold"> Guide:</div> 
                <legend class="sr-only">Countries</legend>
                <div className="flex flex-wrap justify-around">
                  you will have a guide with you
                  {/* <div class="flex items-center mb-4">
                    <input
                      onChange={handleChange}
                      id="country-option-1"
                      type="radio"
                      name="guide"
                      value="yes"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                     
                    />
                    <label
                      for="country-option-1"
                      class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes,I would like to have a Guide.(extra charges will be applied)
                    </label>
                  </div> */}

                  <div class="flex items-center mb-4">
                    
                    <input
                      onChange={handleChange}
                      id="country-option-2"
                      type="radio"
                      name="guide"
                      value="no"
                      class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="country-option-2"
                      class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No,I don't want a Guide.
                    </label>
                  </div>
                </div>

     

   
              </fieldset>
             
<div className="text-orange-950 font-bold"> Health Assistant:</div> 
              <div class="flex items-center mb-4">
                <input
                  onChange={handleChange}
                  id="country-option-3"
                  type="radio"
                  name="health"
                  value="yes"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="country-option-3"
                  class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes,I would like to have Health assistant
                </label>
              </div>

              <div className="flex flex-wrap flex-col ">
               
                <div className="text-orange-950 font-bold"> Whom are you traveling with:</div> 
                <div className="flex flex-wrap gap-5 font-medium">
                {  transportdata[0]?.pkg?.category == 'iv'  || transportdata[0]?.pkg?.category == 'IV' ?
                  <div>Teacher:</div>
                  :
                  <div>Adult:</div>
              }
                  <input
                    type="number"
                    onChange={handleChange}
                    name="adult"
                    value={data.adult}
                    className="w-12"
                  ></input>
                  {  transportdata[0]?.pkg?.category == 'iv' ||  transportdata[0]?.pkg?.category == 'IV' ?
                  <div>Students:</div>
                  :
                  <div>Child:</div>
                   }
                  <input
                    type="number"
                    value={data.child}

                    onChange={handleChange}
                    name="child"
                    className="w-12"
                  >

                  </input>
                  <button onClick={checking}>check</button>
                 
                  <div>Picking place:</div>
                  <input onChange={handleChange} name="pickingplace" type="text" className="w-48"></input>
                </div>
                <div>Travel info:</div>
{transportdata[0]?.pkg?.transports?.map((item, index)=>(
  // parseInt(item?.noofppl) >= checkPeople &&
  
  <div key={index}>
    <input 
    onChange={handleChange}
      type="radio" 
      id={`transport${index}`} 
      name="selectedTransport" 
      value={item.transportOption} 
      
      
    />
   <img
              src={item.transportImage}
              className="m-auto w-28 h-24 rounded-2xl"
              alt=""
              srcset=""
            />
             {/* <a target="_blank" href={`http://localhost:4000/uploads/${item.transportImage}`} download> <img className="w-[100px] h-14 " src={`http://localhost:4000/uploads/${item.transportImage}`} alt="click to view and dowload"></img> </a>
                <a target='_blank' href={`http://localhost:4000/uploads/${item.transportImage}`} download ></a> */}
        
    <label htmlFor={`transport${index}`}>
      {item.transportOption} - {item.noofppl} People - {item.price}/-
    </label>
  </div>
))}


              </div>
            </div>
            <Link to="/user/vwresortdet"></Link>
            <div className="flex flex-wrap gap-11  justify-center m-7 ">
              
             
            </div>
          </div>
      <div className=" font text-[30px] font-bold pl-[500px] pt-6">
        <span className="text-white">Select</span>{" "}
        <span className="text-orange-600"> Adventures</span>
      </div>
      <div className="flex flex-wrap sm:gap-5  ">
        {agencydata.map((item) => (
          <div className="bg-orange-200 w-[200px] ml-5 rounded-lg">
          <div className=" pt-5 pl-6 text-center text-white ">
            <img
              src={`http://localhost:4000/uploads/${item.agency?.image}`}
              className="m-auto w-28 h-24 rounded-2xl"
              alt=""
              srcset=""
            />
            <div className="font font-bold">
              {item.agency?.adventureName} <br />{" "}
              <div className="font font-light">{item.agency?.price}-/Head</div>
              <div className="font font-light">{item.agency?.description}</div>
            </div>
            <input
              type="checkbox"
              checked={selectedResorts.includes(item.agency?._id)}
              onChange={() => handleResortCheckboxChange(item.agency?._id,item.agency?.price)}
            />
          </div>
          </div>
        ))}
      </div>
      <div className="h-[64px] font text-[30px] font-bold m-0 text-left pl-[500px] ">
        <span className="text-white">Select an</span>
        <span className="text-orange-600"> Accomodation</span> <button
        onClick={submitResort}
        type="button"
        className="bg-orange-600 w-36 ml-[550px] mt-9 px-4 py-2 text-white font-bold rounded-2xl"
      >
        BOOK
      </button>
      </div>

      
      <div className="flex flex-wrap sm:gap-5  ">
         {resortData.map((item) => (
    <div key={item.resort?._id} className="bg-orange-200 w-[200px] ml-5 rounded-lg">
      <div className="pt-4 text-center text-white">
        <img
          onClick={() => handledetail(item.resort?._id)}
          src={`http://localhost:4000/uploads/${item?.resort?.coverImage}`}
          className="m-auto w-28"
          alt=""
        />
        <div className="font font-bold">{item?.resort?.propertyName}</div>
        <input
          type="checkbox"
          checked={selectedResorts1.includes(item?.resort?._id)}
          onChange={() => selectResort(item?.resort?._id)}
        />
      </div>
    </div>
  ))}
      </div>
      <div className="font font-bold text-white pl-4 mb-4 mt-8">pick your date:</div>
     <div className="bg-orange-200 w-36 ml-10 mb-5"> <input  min={minDate}  onChange={handleChange} name='date' type="datetime-local" className='bg-transparent border-white border-solid border-2 rounded '/></div>
      {toggle && (
        <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2">
          <div className="font text-center text-[20px] text-amber-800 pb-4   ">
            <div className="font-bold animate-pulse text-[40px]">
              {" "}
              {data.response?.propertyName}{" "}
            </div>
            <img
              src={`http://localhost:4000/uploads/${data?.response?.coverImage}`}
              className="m-auto w-[70%]"
              alt=" "
              srcSet=" "
            />
            <div className="w-[90%] text-center glow">
              {data.response?.description}
            </div>

            <div className="flex flex-wrap justify-between ">
              <div className="bg-white/45 w-72 mt-9 pl-3 rounded-lg text-amber-800 shadow-xl">
                <div className="text-black text-[20px]">
                  {data.response?.propertyAddress}
                </div>
              </div>
              <div className="bg-white/45 w-80 mt-9 pt-1 rounded-lg text-center shadow-xl text-amber-800">
                <div className="text-black">{data.response?.aboutUs},</div>
              </div>
              <div className="bg-white/45 w-80 mt-9 p-2 rounded-lg shadow-xl text-amber-800">
                <div className="text-black">contact us:</div>
                <div className="text-black">{data.response?.contactNumber}</div>
              </div>
            </div>
            <div className=" bg-yellow-300 w-[80%] h-32 mb-24  text-red-600 ml-24 mt-9 p-2 rounded-lg shadow-xl border-l-2 border-r-2 border-t-2 border-b-2">
              {data.response?.events}
            </div>

              <div className="flex bg-yellow-100 px-2 py-4 rounded text-yellow-300   font-semibold font">
                luxury room:
                <img
                  src={`http://localhost:4000/uploads/${data.rooms?.image}`}
                  className="m-auto w-48"
                  alt=" "
                  srcSet=" "
                />
                standardroom:
                <img
                  src={`http://localhost:4000/uploads/${data.rooms?.images}`}
                  className="m-auto w-48"
                  alt=" "
                  srcSet=" "
                />
              </div>
              4 person per room
            <div class="  overflow-x-auto shadow-md sm:rounded-lg mt-4 w-[50%] ml-72">
              <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-black uppercase  dark:bg-gray-950/90 dark:text-gray-400 ">
                  <tr>
                    <th>Room type</th>
                    <th>No of rooms</th>
                    <th>Occupancy</th>
                    <th>price per room</th>
                  </tr>
                </thead>
                <tbody>
                    <>
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        luxury:
                      </td>
                      <td class="px-6 py-4">{data?.rooms?.luxury}</td>
                      <td class="px-6 py-4">{data?.rooms?.luxuryOccupancy}</td>
                      <td>{data.rooms?.luxuryprice}/-</td>
                      <td>
                        <input type="radio" onChange={handleChange} name='accomodatn' value="luxury" className="bg-black text-white w-20">
                       
                        </input>
                      </td>
                    </tr>
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        standard:
                      </td>
                      <td class="px-6 py-4">{data?.rooms?.standard}</td>
                      <td class="px-6 py-4">{data?.rooms?.standardOccupancy}</td>
                      <td class="px-6 py-4">{data?.rooms?.standardPrice}/-</td>
                      <td>
                      <input type="radio" onChange={handleChange} name='accomodatn' value="standard" className="bg-black text-white w-20">
                         
                        </input>
                      </td>
                    </tr>
                    </>
                  {/* {data.rooms?.map((item) => (
                    <tr class=" dark:border-gray-700 text-black bg-gray-950/40 hover:bg-slate-800/50">
                      <td scope="row" class="px-6 py-4 text-black">
                        standard:
                      </td>
                      <td class="px-6 py-4">{item?.standard}</td>
                      <td class="px-6 py-4">{item?.standardOccupancy}</td>
                      <td class="px-6 py-4">{item?.standardPrice}/-</td>
                      <td>
                      <input type="radio" onChange={handleChange} name='standard' value={true} className="bg-black text-white w-20">
                         
                        </input>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>

            <div className="font-bold ml-24 mt-5 bg-yellow-950">
              {" "}
              Facilities
    
                <div className="ml-14 mt-14 flex gap-10 ">
                  <p>{data?.facilities?.name} kjkjh</p>
                  <p>{data?.facilities?.luxury}</p>
                  <p>{data?.facilities?.standard}</p>
                </div>
      
            </div>
            {/* <button
              type="submit"
              onClick={() => selectResort(data?.response?._id)}
              className="bg-orange-600 w-28 text-white mt-4 py-2 px-4"
            >
              submit
            </button> */}
          </div>
   
        </div>
      )}{" "}
      
    </div>
    </>
  );
}