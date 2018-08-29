import {SET_BREWERIES, FETCH_FAILED} from "../actions";
	  
  export default function(state=null,action){
      switch (action.type) {
         case FETCH_FAILED:
          return state;
        case SET_BREWERIES:
          return action.payload
        default:
          return state;
      }
}