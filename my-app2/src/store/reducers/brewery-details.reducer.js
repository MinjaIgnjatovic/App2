import {SELECT_BREWERY,selectBrewery} from '../actions'

export default function(state=null,action){
    switch(action.type){
        case SELECT_BREWERY:{
            return action.payload
        }
        default:
            return state
    }
}