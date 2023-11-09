import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getResaturants } from './action';

function SingUp({data}) {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getResaturants)
  },[])
  
  const restaurants=useSelector(state=>state. restReducer.restLis) 

  return (
    <div className='container'>
      <h6>06 wed 2023</h6>
      {
        data.map(i=>{
          <div className='row'>
        <div className='col-4'>
          <img src={i.image}/>
        </div>
        <div className='col-4'>
          <h3>{i.title}</h3><br/>
          <p>Amount:{i.amount}</p>
        </div>
        <div className='col-4'>
        <div class="card-body">
   
  </div>
        </div>
      </div>
        })
      }
    </div>
  )
}

export default SingUp