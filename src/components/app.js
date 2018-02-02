// dump component

import React, { Component } from 'react';
import BookList from '../container/book-list';
import ActiveBook from '../container/active-book';

export default class App extends Component {
  render() {
    return (
	    	<div>
		      <BookList />
		      <ActiveBook />
	      </div>
    );
  }
}
