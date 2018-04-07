export default function(state=null,action){
	if(action.type.indexOf('@@redux')===-1){
		return  action.payload
	}

	return {
		weather: 'here is weather'
	}
}