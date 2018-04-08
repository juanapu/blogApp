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
		let result;
		if(this.props.weather.length){
			// this.props.weather.map(weather => <Weatherlist />);
					console.log("*******weather data is************ ");

					console.log(this.props.weather);
					let weather1= [];
					let innerval=[];
					result=this.props.weather.map(weather => {
						 innerval = weather.data.list.map(item=>{
							return ({
								date: item.dt_txt,
								value: item.main.temp
							});
						});
						console.log(")))))))))   innerval  )))))))");
						console.log(innerval);

						return (<Weatherlist dt={innerval}  key={this.props.weather.indexOf(weather)}/>);
					});
					console.log("----------weather---------");
					console.log(weather1);
					// result=this.props.weather.map(weather => <Weatherlist dt={innerval} key={this.props.weather.indexOf(weather)} />)


		}
		// console.log(weather);
		// return(<Weatherlist  weather={this.props.weather} dt={weather} />)

		if(result)
			return (<ul>{result}</ul>)
		else 
			return(<div>please input a city</div>)
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