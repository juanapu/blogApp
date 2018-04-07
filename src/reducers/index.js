import { combineReducers } from 'redux';
import weatherInputReducer from './reducer_weatherInput';
import weatherListReducer from './reducer_weather';


const Reducers = combineReducers({
  // state: (state = {}) => state,
  weatherInput: weatherInputReducer,
  weather: weatherListReducer
});

export default Reducers;