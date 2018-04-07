import axios from 'axios';

const APIKEY= "ec4ada14ac52fef75b399d6f79f3f7fa";
// const Url = "http://samples.openweathermap.org/data/2.5/history/city?";
const Url ="https://api.openweathermap.org/data/2.5/forecast?";
let wtUrl= Url+'appid='+APIKEY;

export function Weather(city){

	let newUrl=wtUrl+'&q='+city+',US';
	const request= axios.get(newUrl);

	return {
    	type: city,
    	payload: request
    };
}