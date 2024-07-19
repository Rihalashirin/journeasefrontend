import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast ,ToastContainer } from "react-toastify";

export const Mybooking = () => {
  const [data, setData] = useState("");
  const [review, setreview] = useState("");
  const [reviews, setreviews] = useState(false);
  const [reviewresort, setreviewresort] = useState("");
  const [reviewresorts, setreviewsresort] = useState(false);

  let { id } = useParams();
 
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(
        `https://journeasebackend.onrender.com/user/viewbookigdetail/${id}`
      );
      console.log(response.data, "log for ----");
      setData(response.data);
     
      

    };
    fetchdata();
  }, []);

  const [dest,setDest]=useState('')
  let reasondrop = (dest) => {
setDest(dest);
    setreviews(!reviews);
  };
  const [rdata,setRdata]= useState("");
  let reason1drop = (rid) => {
    setRdata(rid)
    setreviewsresort(!reviewresorts);
  };
  let resortreviews = async () => {
    let response = await axios.post(`https://journeasebackend.onrender.com/user/addresortreview `, {
      ...reviewresort,
      bookingid: id,
      resortId: rdata,

    });
    console.log(response);
  };
  let handleSubmit = async (dname) => {
    let response = await axios.post(`https://journeasebackend.onrender.com/user/addreview `, {
      ...review,
      bookingid: id,
      destinationName: dest,
      
    });
    toast.success("submitted");
    console.log(response);
  };

  let handleChange = (event) => {
    setreview({ [event.target.name]: event.target.value });
    console.log(review);
  };
  let handleresortChange = (event) => {
    setreviewresort({ [event.target.name]: event.target.value });
    console.log(reviewresort);
  };

  return (
    <div className="userhome">
      <ToastContainer/>
      <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2">
        <div className="font ">
          <div className="text-[20px] text-red-950 font-bold ">
            Package info{" "}
          </div>{" "}
          <br />
          Package Name : {data.package?.packageName}
          <br />
          No Of Days: {data.package?.noOfDays}
          <br />
          Location: {data.package?.location} <br />
          Package Amount:{data.package?.price}/-
          <br />
          {data.package?.destination?.map((item) => (
            <>
              <div>day {item.Day}:</div>
              <div className="underline">{item.Destination}</div>
              {data.booking.status == "paid" && (
                <button
                  onClick={()=>reasondrop(item.Destination)}
                  className="bg-orange-600 px-2 py-2 rounded-lg "
                >
                  {" "}
                  Add Review
                </button>
              )}

              {reviews && (
                <div className="absolute top-[430px] bg-white p-9 pt-2 w-[400px] ml-36 pb-7 h-[170px] rounded-lg">
                  <div className="font-medium text-black mt-3">MY REVIEW:</div>
                  <div>
                    <input
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="review"
                      type="text"
                      id=""
                    ></input>
                  </div>
                  <div>
              

                    <button
                      onClick={() =>  handleSubmit(item.Destination)}
                      type="submit"
                      className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-3"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              )}
              <div>{item.activities}</div>
            </>
          ))}
          <div className="font ">
            <div className="text-[20px] text-red-950 font-bold mt-6">
              Travel info{" "}
            </div>
            <br />
            <div className="flex flex-wrap gap-16">
              <div>
                Adults: {data?.booking?.adult}
                <br />
                Children:{data.booking?.child}
              </div>
              <div> picking place:{data?.booking?.pickingplace}</div>
              <div>
                {" "}
                Transportation:
                {data?.booking?.selectedTransport}
              </div>{" "}
              <div></div>
              <div>Date: {new Date(data.booking?.date).toLocaleString()}</div>
            </div>
          </div>
          <div> </div>
          <div className="flex flex-wrap gap-20">
            <div>Guide : {data.booking?.guide}</div>
            <div>Health Assistant : {data.booking?.health}</div>
          </div>


          <div className="text-[20px] text-red-950 font-bold mt-3">
            Accomodation Chosen{" "}
          </div>
          <br />
          {data.resorts?.map((item) => (
  <div key={item.resort._id} className="flex flexwrap gap-20">
    {item.resort.coverImage && (
      <div>
        <img
          className="w-[200px]"
          src={`https://journeasebackend.onrender.com/uploads/${item.resort.coverImage}`}
          alt=""
        />
        {data.booking.status === "paid" && (
          <button
            onClick={() => reason1drop(item.resort._id)}
            className="bg-orange-600 px-1 py-1 h-10 mt-5 rounded-lg"
          >
            Add Review
          </button>
        )}
        {reviewresorts && (
          <div className="absolute top-[430px] bg-white p-9 pt-2 w-[400px] ml-36 pb-7 h-[170px] rounded-lg">
            <div className="font-medium text-black mt-3">MY REVIEW:</div>
            <div>
              <input
                onChange={handleresortChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="review"
                type="text"
                id=""
              />
            </div>
            <div>
              <button
                onClick={() => resortreviews(item.resortId)}
                type="submit"
                className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-3"
              >
                SUBMIT
              </button>
            </div>
          </div>
        )}
      </div>
    )}
    <div className="pt-10">
      <h4>Property Name</h4>
      {item.resort.propertyName} <br />
    </div>
    <div className="pt-10">
      <h4>Price</h4>
      {data.booking.accomodatn === "standard" && (
        <span>{item.rooms.standardPrice}</span>
      )}
      {data.booking.accomodatn === "luxury" && (
        <span>{item.rooms.luxuryprice}</span>
      )}{" "}
      <br />
    </div>
  </div>
))}
{!data.resorts?.some((item) => item.resort.coverImage) && (
  <div>
    <div>{data?.defaulthotel?.propertyName}</div>
    <img
      className="w-[200px]"
      src={`https://journeasebackend.onrender.com/uploads/${data?.defaulthotel?.coverImage}`}
      alt=""
    />
  </div>
)}







          <div className="flex flex-col gap-6 mt-3 ">
            {/* <button className='bg-yellow-500 w-20 h-9 rounded-lg text-white'>ENQUIRE</button>
                <button className='bg-gray-400 w-20 h-9 rounded-lg text-white'>STATUS</button> */}
          </div>
          <div className="text-[20px] text-red-950 font-bold mt-4">
            Adventure Chosen{" "}
          </div>
          <br />
          {data.adventures?.map((item)=>(
<>
         
          <div className="flex flexwrap gap-20 justify-start ">
            <img
              src={`https://journeasebackend.onrender.com/uploads/${item.image}`}
              className="w-[300px]"
              alt=""
              srcset=""
            />
            <div className="pt-10">
              {item.adventureName}
              <br />
              Price: {item.price}/Head
            </div>
            {/* <div className='font text-[10px] pt-16 '>3000-5000/Head</div> */}
          </div>
          </>
        ))}
        </div>
        
      
      </div>
    </div>
  );
};
