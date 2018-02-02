import { combineReducers } from 'redux';
import booksReducer from './reducer_book';
import activebookReducer from './reducer_activeBook';


// const rootReducer = combineReducers({
//   // state: (state = {}) => state,
//   books: booksReducer
// });

// export default rootReducer;


const Reducers = combineReducers({
  // state: (state = {}) => state,
  books: booksReducer,
  activeBook: activebookReducer
});

export default Reducers;