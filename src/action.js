import axios from "axios";
import { FAIL, SUCCESS } from "./restconstant";




export const getResaturants=async(dispatch)=>{
  try{
    const {data}= await axios.get('/db.json')
  console.log(data.food);
  
  dispatch(
    {
        payload:data.food,
        type:SUCCESS
    }
  )
  }
  catch(er){
dispatch(
    {
        payload:er,
        type:FAIL
    }
)
  }
}