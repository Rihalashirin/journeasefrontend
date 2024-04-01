import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'bootstrap'
import { ToastContainer, toast } from 'react-toastify'



const Login = () => {
  const navigate=useNavigate()
  const [ data,setData]=useState('')
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  let handleSubmit=async(event)=>{
    event.preventDefault()
    console.log(data)
    let response=await axios.post('http://localhost:4000/user/login',data)
    console.log(response);
    if(response.data){
      localStorage.setItem('id',response.data._id)
      if(response.data.userType=='user'){
        navigate('/user')
      }
      else if(response.data.userType=='agency'){
        if(response.data.status=='accepted'){
        navigate('/agency')
      }
      else{
        toast.error("not accepted admin");
      }
    }
      else if(response.data.userType=='resort'){
        if(response.data.status=='accepted'){
        
        navigate('/resort')
      }
      else{
        toast.error("not accepted admin");
      }
    }
      else if(response.data.userType=='guide'){
        if(response.data.status=='accepted'){
        navigate('/guide')
      }
      else{
        toast.error("not accepted admin");
      }
    }
      else if(response.data.userType=='admin'){
        navigate('/admin')
      }
    }
    else{
      alert("invalid username or password")
    }
  }


// const navigate=useNavigate()
// const [data,setData]=useState('')
//   let handleChange=(event)=>{
//     setData({...data,[event.target.name]:event.target.value})



//   }
//   let handleSubmit=async (event)=>{
//     event.preventDefault()
//     console.log(data);
//     let response=await axios.post('http://localhost:4000/user/login',data)
//     console.log(response);
//     if(response.data){
//       localStorage.setItem('id',response.data._id)
//       if(response.data.userType=='user'){
//         navigate('/user')
//       }
//       else if(response.data.userType=='agency'){
//         navigate('/agency')
//       }
//     }
//     else{
//       alert('invalid username or password')
//     }

//   }
  return (
    <>
    <ToastContainer/>
      <div className='flight'>
        <div className='box '>


          <div className='userloginn h-[64px] font text-[30px] font-bold m-0 text-center '>
            <span className='text-white'>USER</span><span className='text-orange-600'> LOGIN</span>
          </div>
          <form onSubmit={handleSubmit}>
  <div className='flex h-[30px] items-center justify-between mb-4  '>

          <div className=' font text-[20px] text-white '>User Mail</div>
          <div><  input onChange={handleChange} className='rounded-lg w-[100%] ml-3' type="text" name="email" id="" /></div>
</div>
          <div className='flex items-center mb-4'>

          <div className=' font text-[20px] text-white '>Password</div>
          <div><input  onChange={handleChange} className='rounded-lg w-[100%] ml-3' type="text" name="password" id="" /></div>
          </div>
          <div className='text-center'>
            <button onClick={handleSubmit} type="submit" className='bg-orange-600 p-1 rounded-lg w-40 text-white' name="" id="" >LOGIN</button>
            </div>
          <div className='forget font text-[10px] text-white underline italic text-center p-2'>forgot password</div>

          </form>
        </div > </div>




    </>
  )
}

export default Login