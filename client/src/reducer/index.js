import {combineReducers} from 'redux';
import user from './user';
import tickerWidget from './ticker-widget';

const rootReducer = combineReducers({
    user,
    tickerWidget    
});

export default rootReducer;