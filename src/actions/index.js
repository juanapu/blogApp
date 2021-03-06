import axios from 'axios';

const APIKEY= "ec4ada14ac52fef75b399d6f79f3f7fa";
// const Url = "http://samples.openweathermap.org/data/2.5/history/city?";
const Url ="https://api.openweathermap.org/data/2.5/forecast?";
let wtUrl= Url+'appid='+APIKEY;

const rooturl= `http://reduxblog.herokuapp.com/api/posts`;
const key=	`juana`;

export function Weather(city){

	let newUrl=wtUrl+'&q='+city+',US';
	const request= axios.get(newUrl);

	return {
    	type: city,
    	payload: request
    };
}

export function Fetchposts(){
    const newUrl  =  `${rooturl}?key=${key}`; 
	const request = axios.get(newUrl);
    console.log("*******************newUrl");
	console.log(newUrl);

	return {
		type: 'Fetchposts',
		payload: request
	}
}

/*****data: form input data got from smart component******/ 
export function PostData(data,callback){
    const newUrl = `${rooturl}?key=${key}`; 
    const request = axios.post(newUrl,data).then(()=>callback());  /*** callback get from smart component **/
    console.log(request);
    console.log(" post is xxxx");
    console.log(data);
    
	return {
		type: 'PostData',
		payload: data
	}
}

export function Fetchpost(id){
	const newUrl = `${rooturl}/${id}?key=${key}`; 
	const request = axios.get(newUrl);

	return {
		type: 'Fetchpost',
		payload: request
	}
}

export function Deletepost(id,callback){
	const delid = id; 
	const newUrl = `${rooturl}/${id}?key=${key}`; 
	const request =  axios.delete(newUrl).then(()=>callback());

	return {
		type: 'Deletepost',
		payload: delid
	}
}