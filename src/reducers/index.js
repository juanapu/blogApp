import { combineReducers } from 'redux';
import reducerFetch from './reducer_fetch';
import weatherListReducer from './reducer_weather';
import { reducer as formReducer } from 'redux-form';


const Reducers = combineReducers({
  // state: (state = {}) => state,
   reducerFetch: reducerFetch,
   form: formReducer
});

export default Reducers;