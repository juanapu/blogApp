
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
     
	renderList(){
		console.log("below is render list props");
		console.log(this.props.books);
		return this.props.books.map((book) => {
			return (
				// <li onClick={this.clickFunc(book)} key={book.title} className="list-group-item">{book.title}</li>
				<li onClick={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
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
 return bindActionCreators({selectBook: selectBook}, dispatch);
	// return ({
	// 	selectBook: ()=>{dispatch(selectBook)}
	// })
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
 // export default connect(mapStateToProps)(BookList);