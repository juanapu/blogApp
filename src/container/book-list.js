import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBooks from '../actions/index';

class BookList extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.clickFunc=this.clickFunc.bind(this);
	}
     
     // clickFunc=(book)=>{
     // 	// return (
     // 		this.props.selectBook(book);
     // 		// )
     // }

     clickFunc(book){
     	console.log(this.props);
     	return (this.props.selectBook(book));
     }

	renderList(){
		// console.log(this);
		return this.props.books.map((book) => {
			return (
				<li onClick={this.clickFunc(book)} key={book.title} className="list-group-item">{book.title}</li>
				);
			});
	}

    render(){
    	return(
    		<ul className="list-group">
    			{this.renderList()}
    		</ul>
    	)
    }
}

function mapStateToProps(state){
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch){
	// return bindActionCreators({dispatch,selectBook: selectBooks}, dispatch);
	return ({
		selectBook: ()=>{dispatch(selectBooks)}
	})
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);