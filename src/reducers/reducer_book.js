export default function(state='test',action){
	switch(action.type){
		case 'BOOK_SELECTED':
		  return action.payload;
	}

	return [{title: 'test'},{title: 'hahah'}];
}