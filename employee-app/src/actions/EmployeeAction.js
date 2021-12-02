import React from "react"
import { ActionType } from "./ActionType";


export const getEmployee = (data)=>{
    return ({
        type :ActionType.GET_DATA_EMPLOYEE,
        payloads :data,
    });

};
export const setEmployee = (data)=>{
    return {
        type :ActionType.REGISTER_DATA_EMPLOYEE,
        payloads : data,
    }
};

