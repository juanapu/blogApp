export function selectBook(book){
	// alert("ys it ");    
	return {
    	type: 'BOOK_SELECTED',
    	payload: book
    };
}