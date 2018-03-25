export default function(state=null,action){
		console.log("below is action type"+"****"+action.type+"***");
	switch(action.type){
		case 'BOOK_SELECTED':
		  return action.payload;
	}
	
	return {
		title: "javascript the harry portter"
	}
}