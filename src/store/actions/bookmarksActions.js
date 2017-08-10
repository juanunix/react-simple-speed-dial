/**
 * Created by lenovo on 2017-07-09.
 */
export const ADD_NEW_BOOKMARK = 'ADD_NEW_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const SET_EDITED_BOOKMARK = 'SET_EDITED_BOOKMARK';
export function addNewBookmark(newBookmark) {
    return {
        type: 'ADD_NEW_BOOKMARK',
        newBookmark
    }
}

export function deleteBookmark(urlToDelete) {
    return {
        type: 'DELETE_BOOKMARK',
        urlToDelete
    }
}

export function setEditedBookmark(title, url) {
    return {
        type: 'SET_EDITED_BOOKMARK',
        title,
        url
    }
}