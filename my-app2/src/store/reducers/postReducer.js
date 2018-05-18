import { NEW_POST } from "../actions";


export default function (state={},action)
{
    switch(action.type){ //hvata se akcija i vraca novi niz preko filtera
        case NEW_POST:
    
        return action.payload;
            return action.payload;
            default:
             return state;
    }
    
}