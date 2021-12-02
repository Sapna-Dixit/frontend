import { ActionType } from "../actions/ActionType";

const initialState = {
    data : [],   
    dataSuccess : false, 
}
export function registerReducer(state = initialState, action){
   
    switch(action.type)
    {
        case ActionType.GET_DATA_EMPLOYEE:

            return{ 
                ...state,
                data: action.payload,
            }
            console.log("get details...")
            break;
            case ActionType.REGISTER_DATA_EMPLOYEE:
                return{ 
                    ...state,
                    dataSuccess : true
                   
                }
                console.log("set details...")
                break;
        default :
         return state;
    }

}