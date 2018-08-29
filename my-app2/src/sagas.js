import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';
import {addComment,fetchComments,fetchData,fetchBeer} from './api'
import {updateComments,getPosts,GET_POSTS,setBeer,fetchBreweries,setBreweries,fetchFailed, FETCH_BREWERIES, FIND_BEER, setPosts, FETCH_POSTS, NEW_POST} from '../src/store/actions';

   function* getBreweries(){
       try{
           const user=yield call(fetchData);
           yield put(setBreweries(user))
       }
       catch(e){
           console.log("greska u sagas")
       }
   }
   function* getComments(){
    try{
        const user=yield call(fetchComments);
        yield put(setPosts(user))
    }
    catch(e){
        console.log("greska u sagas")
    }
}

   function* searchBeer(){
    try{
        const user=yield call(fetchBeer);
        yield put(setBeer(user))
      
    }
    catch(e){
        console.log("greska u sagas")
    }
}


function* dodajKomentar(action) {
    try {
        yield call(addComment,action.payload);
      //  const all = yield call(fetchComments);
       yield put(updateComments(action.payload))
    } catch (e) {
     console.log("GRESKA U SAGAS",e);
    }
}

  export default function* mySaga(){
      yield takeLatest(FETCH_BREWERIES,getBreweries);
      yield takeLatest(FIND_BEER,searchBeer);
      yield takeLatest(FETCH_POSTS,getComments);
      yield takeLatest(NEW_POST,dodajKomentar);
      
  }
