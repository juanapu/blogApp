import { combineReducers } from 'redux';
import reducerPosts from './reducer_posts';
import reducerPost from './reducer_post';
import weatherListReducer from './reducer_weather';
import { reducer as formReducer } from 'redux-form';


const Reducers = combineReducers({
  // state: (state = {}) => state,
   reducerPosts: reducerPosts,
   reducerPost: reducerPost,
   form: formReducer
});

export default Reducers;