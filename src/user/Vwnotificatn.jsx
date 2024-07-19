import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Vwnotificatn = () => {
  const [data, setData] = useState(['']);
  const navigate=useNavigate()
  const[data1,setdata1]= useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`https://journeasebackend.onrender.com/user/notificationdetail/${id}`);
      console.log(response.data, 'log for ----');
      setData(response.data);
      calculateTotalAmount(response.data);
    };
    fetchdata();
  }, []);
  let handleSubmit=async (event)=>{
    event.preventDefault();
  
    // setData(data)
    // console.log(data);
    navigate('/user/mybookingtable')
    let response=await axios.put(`https://journeasebackend.onrender.com/user/payment/${id}`,{status:'paid'})
    
  console.log(response);
  setdata1('')
  

  }

  const calculateTotalAmount = (data) => {
    let total = 0;

    // Package price
    if (data.package && data.package.price) {
      total += data.package.price;
    }

    // Transport price
    const transportPrice = findTransportPrice();
    if (transportPrice) {
      total += transportPrice;
    }

    // Adventure prices
    if (data.adventures) {
      data.adventures.forEach((adventure) => {
        if (adventure.price) {
          total += adventure.price;
        }
      });
    }

    // Accommodation prices
    if (data.resorts && data.booking.accomodatn) {
      const accommodation = data.resorts.find((resort) => resort.resort._id === data.booking.resortId[0]);
      if (accommodation && accommodation.rooms) {
        if (data.booking.accomodatn === 'standard') {
          total += accommodation.rooms.standardPrice;
        } else if (data.booking.accomodatn === 'luxury') {
          total += accommodation.rooms.luxuryprice;
        }
      }
    }

    // Guide price
    if (data.booking && data.booking.wage) {
      total += data.booking.wage;
    }

    // Health Assistant price
    if (data.booking && data.booking.healthwage) {
      total += data.booking.healthwage;
    }

    setTotalAmount(total);
  };

  // Function to find the price of the selected transport option
  const findTransportPrice = () => {
    if (data && data.package && data.booking && data.package.transports) {
      const selectedTransport = data.booking.selectedTransport;
      const transport = data.package.transports.find(
        (transport) => transport.transportOption === selectedTransport
      );
      return transport ? transport.price : null;
    }
    return null;
  };

  return (
    <div className='userhome'>
      <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
        {/* <div className='font flex flex-wrap gap-12 justify-between'>
          <div className='text-[20px] '>Package </div>
          <div>{data.package?.packageName}</div>
          <div>{data.booking?.adult}A,{data.booking?.child}C</div>
          <button className='bg-gray-400 w-28'>{data.package?.price}</button>
        </div> */}

        {/* <div className='font flex flex-wrap gap-12 justify-between'>
          <div className='text-[20px] '>Transport </div>
          <div>{data.booking?.selectedTransport}</div>
          <button className='bg-gray-400 w-28'>{findTransportPrice()}</button>
        </div> */}

        {/* <div className='font flex flex-wrap gap-12 justify-between'>
          <div className='text-[20px] '>Adventure </div>
          {data?.adventures?.map((item) => (
            <>
              <div>{item?.adventureName}</div>
              <div className='pt-10'>
                <button className='bg-gray-400 w-28'>
                  {item?.price}
                  <br />
                </button>
              </div>
            </>
          ))}
        </div> */}
{/* 
        <div className='font flex flex-wrap gap-12 justify-between'>
          <div className='text-[20px] '>Accommodation </div>
          {data?.resorts?.map((item) => (
            <>
              <div>{item.resort?.propertyName}</div>
              <div className='pt-10'>
                <button className='bg-gray-400 w-28'>
                  {data.booking.accomodatn === 'standard' && <span>{item.rooms.standardPrice}</span>}
                  {data.booking.accomodatn === 'luxury' && <span>{item.rooms.luxuryprice}</span>} <br />
                </button>
              </div>
            </>
          ))}
        </div> */}

        {/* {data?.guide?.map((item) => (
          <div className='font flex flex-wrap gap-12 justify-between'>
            <div className='text-[20px] '>Guide </div>
            <div>{item.name}</div>
            <button className='bg-gray-400 w-28'>{data.booking?.wage}</button>
          </div>
        ))} */}

        {/* <div className='flex flex-wrap justify-between'>
          <div className='text-[20px] '>Health Assistant </div>
          <button className='bg-gray-400 w-28'>{data.booking?.healthwage}</button>
        </div> */}

       
         
         
       

        <div className='flex justify-center'>
          {/* <Link to='/user/userpay'>
            <button className='bg-orange-500 '>CONFIRM BOOKING</button>
          </Link> */}
        </div>
        <div>
        <div className=' font text-[30px] font-bold pl-5 pt-6 text-white'>
            Make Payment
          </div>
          payment should be done within 24 hours else will be cancelled
          <fieldset>
            {/* <div className='bg-orange-600 w-28 text-white text-center float-end me-2'>Rs.47500</div> */}
  <legend class="sr-only">Countries</legend>
<div className='flex flex-wrap pt-5'>
  <div class="flex items-center mb-4 ">
    {/* <input id="country-option-1" type="radio" name="countries" value="USA" class=" ms-5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-bold text-white dark:text-gray-300">
      Debit card
    </label> */}
  </div>
  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Guide.
    </label>
  </div> */}
  </div>

  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-4" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      United Kingdom
    </label>
  </div> */}

  {/* <div class="flex items-center">
    <input id="option-disabled" type="radio" name="countries" value="China" class="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" disabled/>
    <label for="option-disabled" class="block ms-2 text-sm font-medium text-gray-300 dark:text-gray-700">
      China (disabled)
    </label>
  </div> */}
</fieldset>
{/* <div>Card Number</div>
<div className='bg-white'>
<input type='text'></input></div>
<div>CVV</div>
<div>Name of the Card Holder</div> */}
<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
   
  <div class="mb-3 flex flex-wrap  items-center w-[25rem] justify-between">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">Amount</label></div>
   <div> <input   id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly value={data.booking?.BillAmount} placeholder="" required /></div>
  </div>
  <div class="mb-3 flex flex-wrap w-[25rem] justify-between items-center">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">CVV</label></div>
   <div> <input type="text" id="email" pattern='[0-9]*' title='please enter a valid pinnumber' maxLength={3} minLength={3} className="bg-gray-50 border border-gray-300  ma text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /></div>
  </div>
  <div class="mb-3 flex flex-wrap w-[25rem] justify-between items-center">
   <div> <label for="email" class="block mb-2 text-sm  font-light text-white font  dark:text-white">Name of the Card Holder</label></div>
   <div> <input type="text" id="name" pattern='^[a-zA-Z ]*$'  className="bg-gray-50 border type='text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required /></div>
  </div>
  
 <button type='submit' className='bg-orange-600 text-white w-24 rounded-lg float-end me-52'>PAY</button>
  </form>
  <fieldset>

  <legend class="sr-only">Countries</legend>
<div className='flex flex-wrap pt-5'>
  {/* <div class="flex items-center mb-4 ">
    <input id="country-option-1" type="radio" name="countries" value="USA" class=" ms-5 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
    <label for="country-option-1" class="block ms-2  text-sm font-bold text-white dark:text-gray-300">
      UPI
    </label>
  </div> */}
  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      No,I don't want a Guide.
    </label>
  </div> */}
  </div>

  

  {/* <div class="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-4" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      United Kingdom
    </label>
  </div> */}

  {/* <div class="flex items-center">
    <input id="option-disabled" type="radio" name="countries" value="China" class="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" disabled/>
    <label for="option-disabled" class="block ms-2 text-sm font-medium text-gray-300 dark:text-gray-700">
      China (disabled)
    </label>
  </div> */}
</fieldset>
</div>
      </div>
    </div>
  );
};
