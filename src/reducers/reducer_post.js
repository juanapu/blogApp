/*** use to store a single post's data *****/ 
var _ = require('lodash');

export default function(state=null,action){
	switch(action.type){
		 case 'Fetchpost':
		     if(action.payload.data){
		     	return action.payload.data
	     }
	}
	return state
}