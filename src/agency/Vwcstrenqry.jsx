import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Vwcstrenqry = () => {
  const [data, setData] = useState(['']);
  let { id } = useParams();
  const [data1, setdata1] = useState(['']);
  const [enqdata, setengData] = useState('');
  const [refresh,setRefresh]=useState(false)

  let handleSubmit = async (status) => {
    let response = await axios.put(`http://localhost:4000/agency/managebooking/${id}`, { status: status });
    console.log(response);
    setdata1('');
  };

  let resortenquire = async (id, rid) => {
    let response = await axios.post('http://localhost:4000/agency/enquireresort', { ...enqdata, bookingid: id, resortid: rid });
    console.log(response);
  };

  let health = async (status) => {
  setRefresh(!refresh)
    let response = await axios.put(`http://localhost:4000/agency/assignhealth/${id}`, { healthstatus: status, healthwage: data.healthwage });
  };

  let handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };

  let enquiring = (event) => {
    setengData({ ...enqdata, [event.target.name]: event.target.value });
    console.log(enqdata);
  };

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/agency/vwdetailbooking/${id}`);
      console.log(response.data, 'log for ----');
      setData(response.data);
    };
    fetchdata();
  }, [refresh]);

  return (
    <div className='pencil'>
      <>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
          <span className='text-white'>{data.user?.name}'s</span><span className='text-orange-600'> Enquiry</span>
        </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
          <div className='font '>
            <div className='text-[20px]'>Basic info</div> <br />
            Name: {data.user?.name}<br />
            Email: {data.user?.email}<br />
            Mobile: 9877665534<br/>
            9054323434<br/>
            Address:{data.user?.place}<br/>
            {data.user?.district}

            {/* {data.user?.contactNumber} <br /> */}
            {/* {data.user?.contactNumberalternative} */}
            <br />
            <div className='font '>
              <div className='text-[20px]'>Travel info</div><br />
              <div className='flex flex-wrap gap-16'>
                <div>
                  Adults: {data?.booking?.adult} <br />
                  Children: {data?.booking?.child}
                </div>
                <div>
                  Date: {new Date(data.booking?.date).toLocaleString()}
                </div>
                <div>
                  Transportation:
                  {data?.booking?.selectedTransport ?
                  <span>{data?.booking?.selectedTransport}</span>
                  :
                  <span>{data?.package?.defaultvehicle}</span>
}
                </div>
              </div><br />
              <div className='text-[20px]'>Package info:</div><br />
            </div>
            <div> {data.package?.packageName}</div>
            <div>{data.package?.noOfDays} Days</div><br />
            <div className='flex flex-wrap gap-10'>
              <div>Guide: {data.booking?.guide}</div>
              <div>Health Assistant: {data.booking?.health} </div>
              <div>pickingplace: {data.booking?.pickingplace}</div>
            </div>
            <div className='text-[20px]'>
              Accommodation Chosen
            </div><br />
            {data.resorts?.map((item) => (
              <div className='flex flexwrap  gap-15 '>
                <img className='w-[200px]' src={`http://localhost:4000/uploads/${item?.coverImage}`} alt="" srcSet="" />
                <div className='pt-10'>{item?.propertyName} <br /> <div> {data.booking?.accomodatn}</div></div>
                <br />
                <div className='flex flex-wrap gap-6  '>
                  Check-in
                  <input onChange={enquiring} name='fromDate' type="date" className='bg-transparent h-5 border-white border-solid border-2 rounded' min={new Date().toISOString().split("T")[0]} />
                  Check-out
                  <input onChange={enquiring} name='toDate' type="date" className='bg-transparent h-5 border-white border-solid border-2 rounded' min={enqdata.fromDate} />
                  <button onClick={() => resortenquire(data.booking?._id, item._id)} className='bg-orange-600 text-[15px] text-white w-40 h-9 rounded-lg'>ENQUIRE HOTEL</button>
                </div>
                Resort status:<br />{data.booking?.resortstatus}
              </div>
            ))}
            <Link to={`/agency/assignguide/${id}`}> <button className='bg-orange-600 w-32 h-9 rounded-lg ml-[900px]'>ASSIGN GUIDE</button></Link>
            <div className='flex flex-col ml-[500px]'>
              <div>Guide status: {data.booking?.guidestatus}</div>
              {/* <div>Guide wage: {data.booking?.wage}</div> */}
            </div>
            Health assistant status: {data.booking?.healthstatus}
            {data.booking?.healthstatus=='pending' &&
            <button onClick={() => health("assigned")} className='bg-orange-600 w-32 ml-[900px] text-[10px] h-9 rounded-lg'>ASSIGN  HEALTH ASSISTANT</button>
            }
                       {data.booking?.healthstatus=='assigned' &&

            <button onClick={() => health("pending")} className='bg-orange-600 w-32 ml-[900px] text-[10px] h-9 rounded-lg'>UNASSIGN  HEALTH ASSISTANT</button>
          }
            {/* <div className='ml-[100px]'>
              <label for="name" class="block mb-2 text-sm font-medium  dark:text-white">Health Wage :</label>
              <input onChange={handleChange} name='healthwage' type="number" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div> */}
            {/* <div className='font'>{data?.hoteldefaultt?.propertyName}</div> */}
            {/* <img src={`http://localhost:4000/uploads/${data?.hoteldefaultt?.coverImage}`} className='w-24 mb-3' alt="" srcSet="" /> */}
            {/* Check-in */}
                  {/* <input onChange={enquiring} name='fromDate' type="date" className='bg-transparent h-5 border-white border-solid border-2 rounded' min={new Date().toISOString().split("T")[0]} />
                  Check-out
                  <input onChange={enquiring} name='toDate' type="date" className='bg-transparent h-5 border-white border-solid border-2 rounded' min={enqdata.fromDate} /> */}
            {/* <div className='ml-[500px]'>Health Assistant status: {data.booking?.healthstatus}</div> */}
            {/* <div className='ml-[500px]'>Health Wage:</div> */}
            <div className='text-[20px] '>
              {/* Adventure Chosen */}
            </div><br />
            {/* {data.adventures ?
            data.adventures?.map((item) => (
              <div className='flex flexwrap  justify-start '>
              <img src={`http://localhost:4000/uploads/${item.image}`} className='w-24 mb-3' alt="" srcSet="" />
              <div className='pt-10'>{item.adventureName} <br />{item.price}/Head</div>
              </div>
            ))
          :
           
            <>

              <div className='font'>{data?.defaultadventures?.adventureName}</div>
              <img src={`http://localhost:4000/uploads/${data?.defaultadventures[0]?.image}`} className='w-24 mb-3' alt="" srcSet="" />
            </>
            
            } */}



            {/* <div className='mt-5'> booking status: {data.booking?.status}</div> */}
            <div className='flex flex-wrap gap-14 ml-96'>
              <button onClick={() => { handleSubmit('Accepted') }} className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
              <button onClick={() => { handleSubmit('Rejected') }} className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
