import { ActionType } from "./ActionType";
//import axios from "axios";

export const getEmployee = (data)=>{
    return {
        type :ActionType.GET_DATA_EMPLOYEE,
        payload :data,
    };

};

// export const getEmployee= ()=> async (dispatch) => {
//     const res = await axios.get(`http://localhost:8000/empRegister/registers`);
//     dispatch({
//       type: ActionType.GET_DATA_EMPLOYEE,
//       payload: res.data,
//     });
//     // console.log("respons", res);
// };

export const setEmployee = (data)=>{
    return {
        type :ActionType.REGISTER_DATA_EMPLOYEE,
        payload : data,
    }
};

