import { ActionType } from "../actions/ActionType";

const initialState = {
    users : [],   
    dataSuccess : false, 
}
export function registerReducer(state = initialState, action){
    console.log("get details...")

    switch(action.type)
    {   
    
        case ActionType.GET_DATA_EMPLOYEE:

            return{ 
                ...state,
                users: action.payload,
                dataSuccess : true,
             
            }
            console.log("set details...")
            break;

            
            case ActionType.REGISTER_DATA_EMPLOYEE:
                return{ 
                    ...state,
                    dataSuccess : true
                   
                }
              
                break;
        default :
         return state;
    }

}