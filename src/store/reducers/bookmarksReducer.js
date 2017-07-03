const bookmarksState = {
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
    ],
    currentlyOpenedTabs: [
        {
            title: 'GITHUB',
            url: 'github.test'
        },
        {
            title: 'MESSENGER',
            url: 'messenger.test'
        }
    ]

};

const bookmarksReducer = (state = bookmarksState, action) => {
    if (action.type === 'DELETE_BOOKMARK') {
        state = {
            ...state,
            bookmarks: state.bookmarks.filter(bookmark => {
                return bookmark.url !== action.urlToDelete;
            })
        }
    }
    if (action.type === 'ADD_NEW_BOOKMARK') {
        state = {
            ...state,
            bookmarks: [...state.bookmarks, action.newBookmark]
        }
    }
    return state;
};


export default bookmarksReducer