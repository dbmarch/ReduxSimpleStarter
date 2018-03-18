export function selectBook (book) {
    //console.log('A book has been selected: ' + book.title);
    // need to return an action ( object with a type property)
    //console.log ('selectBook');

    return {
       type: 'BOOK_SELECTED',
       payload: book
    };
}