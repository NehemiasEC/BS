import {GET_BURNERS,DELETE_BURNER, ADD_BURNER} from "../actions/types"


const initialState = {
    burners:[]
}


export default function(state=initialState,action){
    switch(action.type){
        case GET_BURNERS:
            return{
                ...state,
                burners:action.payload
            }
        case DELETE_BURNER:
            return{
                ...state,
                burners:state.burners.filter(burner=> burner.id !== action.payload)
            }

        case ADD_BURNER:
            return{
                ...state,
                burners:[...state.burners, action.payload]
            }
        default:
            return state
        
    }
}