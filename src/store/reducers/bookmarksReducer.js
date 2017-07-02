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

    return state;
};


export default bookmarksReducer