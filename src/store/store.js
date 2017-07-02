import { createStore } from 'redux';
import bookmarksReducer from './reducers/bookmarksReducer';

const store = createStore(bookmarksReducer);

export default store;