const bookmarksState = {
    bookmarks: [],
    editedBookmark: {
        title: '',
        url: ''
    },
    currentlyOpenedTabs: [
    ]

};

const bookmarksReducer = (state = bookmarksState, action) => {
    if (action.type === 'BOOKMARKS_CHANGED') {
        state = {
            ...state,
            hasBookmarksChanged: action.status
        }
    }
    if (action.type === 'DELETE_BOOKMARK') {
        state = {
            ...state,
            bookmarks: state.bookmarks.filter(bookmark => {
                return bookmark.id !== action.idToDelete;
            })
        }
    }
    if (action.type === 'ADD_NEW_BOOKMARK') {
        state = {
            ...state,
            bookmarks: [...state.bookmarks, action.newBookmark]
        };


    }
    if (action.type === 'SET_EDITED_BOOKMARK') {
        state = {
            ...state,
            editedBookmark: {
                ...state.editedBookmark,
                title: action.title,
                url: action.url,
                id: action.id
            }
        }
    }

    if(action.type === 'CLEAR_EDITED_BOOKMARK') {
        state = {
            ...state,
            editedBookmark: {
                ...state.editedBookmark,
                title: '',
                url: '',
                id: ''
            }
        }
    }

    if (action.type === 'UPDATE_BOOKMARK') {
        state = {
            ...state,
            bookmarks: state.bookmarks.map((bookmark) => {
                if (bookmark.title === state.editedBookmark.title) {
                    return {
                        ...bookmark,
                        title: action.updatedBookmark.title,
                        url: action.updatedBookmark.url
                    }
                } else return bookmark
            })
        }
    }

    if (action.type === 'SET_FETCHED_BOOKMARKS') {
        state = {
            ...state,
            bookmarks: [...state.bookmarks, ...action.fetchedBookmarks]
        }
    }
    return state;
};


export default bookmarksReducer