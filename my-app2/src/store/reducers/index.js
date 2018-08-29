import {combineReducers} from 'redux'; 
import breweriesReducer from './breweries.reducer';
import beersReducer from './beers.reducer';
import breweryDetails from './brewery-details.reducer'
import commentsReducer from './comments.reducer'

const rootReducer=combineReducers({
    breweries:breweriesReducer,
    selectedBrewery:breweryDetails,
    foundBeers:beersReducer,
    comments:commentsReducer
     
});

export default rootReducer;