var _ = require('lodash');


export default function(state=null,action){
	switch(action.type){
		case 'Fetchposts':
		   if(action.payload.data){
		   	  	let result=_.mapKeys(action.payload.data,'id');
				console.log("******below is action");
				console.log(result);
			   return result;
			}
			else
				return action.payload;
		case 'PostData':
		    if(action.payload.data){
		    	 console.log("reducer data is ;;;;;;;;");
		    	 console.log(action.payload.data);
		    	return state
		    }
	};
	return {
		error: 'error'
	}
}