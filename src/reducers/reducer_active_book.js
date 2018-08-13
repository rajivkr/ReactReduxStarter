export const activeBook = (state = {}, action) => {
    if (action.type === 'BOOK_SELECTED') {
        console.log(action.book);
        return action.book;
    }
    return state;
}