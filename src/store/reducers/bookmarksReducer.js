let defaultState = {
    bookmarks: [
        {
            id: 1,
            name: 'GitHub',
            url: 'http://github.com'
        }, {
            id: 2,
            name: 'Messenger',
            url: 'http://messenger.com'
        }
    ]
};

const bookmarksReducer = (state = defaultState, action) => {
    if (action.type = 'OPEN_NEW_BOOKMARK_MODAL') {
        state = {
            ...state,
            isNewBookmarkModalOpened: true
        }
    }
    return state;
};

export default bookmarksReducer