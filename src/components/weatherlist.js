import React,{ Component } from 'react';
// import Sparkline from 'react-sparklines';
var Sparkline = require('react-sparkline');
const values = [
  {
    date: "2014-06-23T00:21:59.271Z",
    value: 2
  },
  {
    date: "2014-06-24T00:21:59.271Z",
    value: 4
  }
]

export default class Weatherlist extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log("&&&&&&&&& dt &&&&&&&&&");
		console.log(this.props.dt);
		console.log("&&&&&&&&&&&&&&&&&&&&");
		return(<div>
				<div>below is weather</div>
				<Sparkline data={this.props.dt}  />
			</div>);
	}
}