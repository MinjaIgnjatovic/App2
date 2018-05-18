import {combineReducers} from 'redux'; //skupi sve reducere
import postReducer from './postReducer';
import fetchReducer from './fetchReducer';

const rootReducer=combineReducers({
    posts:fetchReducer,
    newPost:postReducer
     
});

export default rootReducer;