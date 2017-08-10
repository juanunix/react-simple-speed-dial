import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import bookmarksReducer from './reducers/bookmarksReducer';
import modalsReducer from './reducers/modalsReducer';
import configReducer from './reducers/configReducer';
import chromeReducer from './reducers/chromeReducer';

import debugReducer from './reducers/debugReducer';

import logger from 'redux-logger';

const store = createStore(combineReducers({
    bookmarksReducer,
    modalsReducer,
    configReducer,
    chromeReducer
}), applyMiddleware(logger));

export default store;