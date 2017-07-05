const bookmarksState = {
    bookmarks: [
        {
            id: 1,
            title: 'GitHub',
            url: 'http://github.com'
        }, {
            id: 2,
            title: 'Messenger',
            url: 'http://messenger.com'
        }
    ],
    editedBookmark: {
        title: '',
        url: ''
    },
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
    if (action.type === 'SET_EDITED_BOOKMARK') {
        state = {
            ...state,
            editedBookmark: {
                ...state.editedBookmark,
                title: action.title,
                url: action.url
            }
        }
    }
    return state;
};


export default bookmarksReducer