import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Weather} from '../actions/index';
import {bindActionCreators} from 'redux';

class WeatherInput extends Component{
	constructor(props){
		super(props);
		this.state={
			terms: ''
		};
		this.submitFunc=this.submitFunc.bind(this);
		this.inputVal=this.inputVal.bind(this);
	}

	submitFunc(event){
		console.log("**************"+this.state.terms+"*********");
		this.props.Weather(this.state.terms);
		event.preventDefault();
	}

	inputVal(event){
		console.log(event.target.value);
		this.setState({
			terms: event.target.value
		})
	}

	render(){
		return (<div>
			    <form onSubmit={this.submitFunc}>
					<input type="text" onChange={this.inputVal}/>
					<input type="submit" />
				</form>
			</div>)
	}
}

function mapStateToProps(state){
	console.log("below is state");
	console.log(state);
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({Weather: Weather}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(WeatherInput);
