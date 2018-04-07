import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component{
	render(){
		return (
				<div>title is {this.props.activeBook.title} , page is {this.props.activeBook.page}</div>
			)
	}
}


function mapStateToProps(state){
	return {
		activeBook: state.weatherInput
	}
}

export default connect(mapStateToProps)(ActiveBook);