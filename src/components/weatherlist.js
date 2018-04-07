import React,{ Component } from 'react';
// import Sparkline from 'react-sparklines';
var Sparkline = require('react-sparkline');


export default class Weatherlist extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(<div>
				<div>below is weather</div>
				<Sparkline data={this.props.dt} />
			</div>);
	}
}