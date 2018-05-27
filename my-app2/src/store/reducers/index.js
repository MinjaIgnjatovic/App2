import {combineReducers} from 'redux'; 
import postReducer from './postReducer';
import fetchReducer from './fetchReducer';
import pronadjiReducer from './pronadjiReducer';

const rootReducer=combineReducers({
    posts:fetchReducer,
    newPost:postReducer,
    pronadji:pronadjiReducer
     
});

export default rootReducer;