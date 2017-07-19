import { createStore, combineReducers, applyMiddleware} from 'redux';
import bookmarksReducer from './reducers/bookmarksReducer';
import modalsReducer from './reducers/modalsReducer';
import configReducer from './reducers/configReducer';
import chromeReducer from './reducers/chromeReducer';
import logger from 'redux-logger';

const store = createStore(combineReducers({
    bookmarksReducer,
    modalsReducer,
    configReducer,
    chromeReducer
}), applyMiddleware(logger));
console.log(store);
export default store;