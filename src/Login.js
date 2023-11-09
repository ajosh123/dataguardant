import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, Navigate } from 'react-router-dom'


function Login() {
  
  const [handle,setHandle]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
  
const handlesubmit=(e)=>{
  e.preventDefault();
  let reg={email,password}
  console.log(reg);
  Navigate()
}
  return (
    <div className='container'>
     <div className='mt-5 py-3' style={{marginLeft:'25%'}}>
     <form className='main w-50 ms-5 log' onSubmit={handlesubmit}>
    
        <h3 className='text-center'>Welcome</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email </label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="checkbox" class="form-check-input" id="exampleCheck1"/>
   
  </div>
<Link to="/order">
<button type="button" onClick={('/order')} className='btn btn-success' style={{marginLeft:'50%'}}>Success</button>
</Link>
</form>
<div className='row'>
  <div className='col-4'>
    <img src='https://i.postimg.cc/KYNLZm3X/Layer-24-1.png'/>
  </div>
  <div className='col-4'>
    <img src='https://i.postimg.cc/D0gyGzFF/Layer-24-2.png'/>
  </div>
  <div className='col-4'>
    <img src='https://i.postimg.cc/mg7py1JQ/Layer-24-3.png'/>
  </div>
</div>
</div>
</div>
    
  )
}

export default Login