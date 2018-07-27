export function selectBook(book) {
    // SelectBook is an actioncreator it needs to return an action.
    // An object with a type property
    return {

        type: 'BOOK_SELECTED',
        payload: book
   };
}