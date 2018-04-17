import React from 'react';
import { Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; 

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Postlist from './container/postlist';
import Createpost from './container/createpost';


import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
	     <BrowserRouter>
	    	<div>
	    	  <Switch>
  	    	    <Route path='/createpost/' component={Createpost} />
	    	    <Route path='/' component={Postlist} />
	    	  </Switch>
  	      </div>
	    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
