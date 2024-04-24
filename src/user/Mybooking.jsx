import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Mybooking = () => {
  const [data, setData] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        `http://localhost:4000/user/viewbookigdetail/${id}`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  let reasonDrop = () => {
    setReviews(!reviews);
  };

  let handleSubmit = async (dname, resortId) => {
    let response = await axios.post(`http://localhost:4000/user/addreview `, {
      ...review,
      bookingid: id,
      resortId: resortId,
      destinationName: dname,
    });
    console.log(response);
    // After submitting, you might want to update the UI with the new review
    // You can refetch the data or update it locally
    // For example:
    // fetchData(); // Refetch all data
    // Or
    // Update the local data
    const updatedData = { ...data };
    const resortIndex = updatedData.resorts.findIndex((resort) => resort._id === resortId);
    if (resortIndex !== -1) {
      updatedData.resorts[resortIndex].reviews.push(response.data);
      setData(updatedData);
    }
    setReview(""); // Clear the review input
  };

  let handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value });
  };

  return (
    <div className="userhome">
      <div className="bg-white/50 w-[90%] p-3 ms-5 pt-2">
        <div className="font">
          <div className="text-[20px] text-red-950 font-bold ">
            Package info
          </div>
          <br />
          {/* Package info code... */}
          {data.resorts?.map((resort) => (
            <div key={resort._id} className="mt-6">
              <img
                className="w-[200px]"
                src={`http://localhost:4000/uploads/${resort?.resort?.coverImage}`}
                alt={resort?.resort?.propertyName}
              />
              <div className="pt-2">
                <h4>Property Name:</h4>
                {resort.resort.propertyName}
              </div>
              <div className="pt-2">
                <h4>Price:</h4>
                {data.booking.accomodatn === "standard" && (
                  <span>{resort.rooms.standardPrice}</span>
                )}
                {data.booking.accomodatn === "luxury" && (
                  <span>{resort.rooms.luxuryPrice}</span>
                )}
              </div>
              {data.booking.status === "paid" && (
                <button
                  onClick={reasonDrop}
                  className="bg-orange-600 px-2 py-2 rounded-lg mt-3"
                >
                  Add Review
                </button>
              )}
              {reviews && (
                <div className="absolute top-[430px] bg-white p-9 pt-2 w-[400px] ml-36 pb-7 h-[170px] rounded-lg">
                  <div className="font-medium text-black mt-3">MY REVIEW:</div>
                  <div>
                    <input
                      onChange={handleChange}
                      value={review.review || ""}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="review"
                      type="text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => handleSubmit(resort.resort.propertyName, resort._id)}
                      type="submit"
                      className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-9 mt-3"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              )}
              <div className="mt-3">
                <h4>Reviews:</h4>
                {resort.reviews && resort.reviews.map((review) => (
                  <div key={review._id} className="mt-1">
                    <p>{review.review}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Other sections... */}
        </div>
      </div>
    </div>
  );
};
