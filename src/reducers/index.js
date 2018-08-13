import { combineReducers } from 'redux';
import { activeBook } from './reducer_active_book';
import BookReducer from './reducer_books';

const rootReducer = combineReducers({
    books: BookReducer,
    book: activeBook
});

export default rootReducer;

