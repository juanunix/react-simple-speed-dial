import { createStore } from 'redux';
let defaultState = {
    bookmarks: [
        {
            id: 1,
            url: 'http://github.com'
        }, {
            id: 2,
            url: 'http://messenger.com'
        }
    ]
};

const bookmarksReducer = (state = defaultState) => {
    return state;
};

const store = createStore(bookmarksReducer);

export default store;