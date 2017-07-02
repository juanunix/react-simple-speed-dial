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
    ]

};

const bookmarksReducer = (state = bookmarksState, action) => {

    return state;
};


export default bookmarksReducer