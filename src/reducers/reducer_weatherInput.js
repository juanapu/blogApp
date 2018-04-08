export default function(state=null,action){
		if(action.type.indexOf('@@redux') === -1){
			return action;
		}

	return {
		title: state
	}
}