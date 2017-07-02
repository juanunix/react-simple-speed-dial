import { createStore, combineReducers, applyMiddleware} from 'redux';
import bookmarksReducer from './reducers/bookmarksReducer';
import modalsReducer from './reducers/modalsReducer';
import logger from 'redux-logger';

const store = createStore(combineReducers({
    bookmarksReducer,
    modalsReducer
}), applyMiddleware(logger));
console.log(store);
export default store;