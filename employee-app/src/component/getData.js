import axios from "axios";
import { getEmployee } from "../actions/EmployeeAction";

const getData = ()=>{
    return function (dispatch){
        axios.get(`http://localhost:8000/empRegister/registers`).then((res)=>{
        console.log("resp", res);
        dispatch(getEmployee(res.users))
      }).catch((err)=>{
        console.log(err)
      });
    }
}
export default  getData;