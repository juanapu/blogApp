export default function(state=null,action){
		console.log("below is action payload");
		console.log(action.payload);	
		if(action.type.indexOf('@@redux') === -1){
			return action;
		}

	return {
		title: "javascript the harry portter"
	}
}