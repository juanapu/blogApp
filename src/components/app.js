// dump component

import React, { Component } from 'react';
import WeatherInput from '../container/weather-input';
import Rdweather from '../container/Rdweather';

export default class App extends Component {
  render() {
    return (
	    	<div>
		      <WeatherInput />
		      <Rdweather />
	      </div>
    );
  }
}
