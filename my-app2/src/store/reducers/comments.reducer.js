import { SET_COMMENTS,UPDATE_COMMENTS} from "../actions";

export default function(state=null,action){
        switch (action.type) {
          case SET_COMMENTS:
            return action.payload
          case UPDATE_COMMENTS:{
            state=[...state,action.payload]
            return state
          }
          default:
            return state;
        }
     
  }