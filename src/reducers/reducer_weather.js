export default function(state=[],action){
	console.log("below is state state********");
	console.log(state.state);
	console.log("below is payload");
	console.log(action.payload);
	if(action.type.indexOf('@@redux')===-1){
		if(state.state)
			return  state.state.concat([action.payload])
		else{
			console.log("state is .....");
			console.log(state);
			return state.concat([action.payload])
		}
	}

	return {
		state
	}
}