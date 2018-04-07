import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import Weatherlist from '../components/weatherlist';

class Rdweather extends Component {
	constructor(props){
		super(props);
		this.state={
			term: ''
		}
	} 

	render(){
		let weather;
		if(this.props.weather.data)
			weather=this.props.weather.data.list.map(weather=>{
				return ({date: weather.dt_txt, 
				value: weather.main.temp});
			});
		else{
			weather = [];
		};
		console.log("*******weather data is************ ");
		console.log(weather);
		return(<Weatherlist  weather={this.props.weather} dt={weather} />)
	}
}


function mapStateToProps(state){
	console.log("below is state");
	console.log(state);
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(Rdweather); 