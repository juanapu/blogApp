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
		// case 'PostData':
		// 	   return state;
		 case 'Deletepost':
		      console.log("state is ccccc");
		      console.log(state);
		      const result = _.omit(state,action.payload);
		      console.log("result is xxx");
		      console.log(result);
	 	 	return result		 	
	};
	return {
		state
	}
}