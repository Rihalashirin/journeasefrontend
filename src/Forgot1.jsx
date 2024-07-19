import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Forgot1 = () => {
   

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const[verifyotp,setVerifyotp]=useState('')
let navigate=useNavigate()
    const sendOTP = async () => {
        try {
          const response = await axios.post('https://journeasebackend.onrender.com/admin/sendOTP', { email });
          setMessage(response.data.message);
          console.log(response.data.otp,'--------------------');
          setVerifyotp(response.data.otp)
        } catch (error) {
          setMessage('Error sending OTP. Please try again.');
        }
      };

      const verifyOTP = async () => {
        try {
          console.log(verifyotp,otp);
          if(verifyotp==otp){
            // alert('success')
           navigate(`/forgot2/${email}`)
          }
        } catch (error) {
          setMessage('Error verifying OTP. Please try again.');
        }
      };
    
  return (
    <div className='flight'>
        <div className='box '>


          {/* <div className='userloginn h-[64px] font text-[30px] font-bold m-0 text-center '>
            <span className='text-white'>USER</span><span className='text-orange-600'> LOGIN</span>
          </div> */}
          {/* <form > */}
  <div className=' h-[30px] items-center justify-between mb-4  '>

          <div className=' font text-[20px] text-white '>Mail</div>
          <div><  input  value={email}
        onChange={(e) => setEmail(e.target.value)}className='rounded-lg w-[100%] ml-3' type="text" name="email" id="" /></div>
</div>
<button onClick={sendOTP} className='bg-orange-600  p-1 rounded-lg w-24 mt-2 text-white ml-20'>GET OTP</button>
          <div className=' items-center mt-3 mb-4'>

          <div className=' font text-[20px] text-white '>Verification code</div>
          <div><input  value={otp}
        onChange={(e) => setOtp(e.target.value)} className='rounded-lg w-[100%] ml-3' type="text" name="" id="" /></div>
          </div>
          <button onClick={verifyOTP} className='bg-orange-600  p-1 rounded-lg w-24 text-white ml-20'>SEND</button>
          <p className='text-white'>{message}</p>
          {/* <div className='forget font text-[10px] text-white underline italic text-center p-2'>forgot password</div> */}

          {/* </form> */}
        </div > </div>


  )
}
