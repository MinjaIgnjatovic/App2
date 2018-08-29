import { SET_BEER } from "../actions";

export default function (state=null,action){
    switch(action.type){ 
        case SET_BEER:{
            return action.payload;
        }
        default:
            return state;
    }
}

        

