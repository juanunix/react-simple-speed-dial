/**
 * Created by belothar on 02.07.17.
 */
const modalsState = {
    modals: {
        newBookmark: {
            isOpened: false
        },
        editBookmark: {
            isOpened: false
        },
        deleteBookmark: {
            isOpened: false
        },
        openedTabs: {
            isOpened: false
        }
    }
}

const modalReducer = (state = modalsState, action) => {
    if (action.type === 'OPEN_NEW_BOOKMARK_MODAL') {
        state = {
            ...state,
            modals: {
                ...state.modals,
                newBookmark: {
                    ...state.modals.newBookmark,
                    isOpened: true
                }
            }

        }
    }
    if (action.type === 'CLOSE_NEW_BOOKMARK_MODAL') {
        state = {
            ...state,
            modals: {
                ...state.modals,
                newBookmark: {
                    ...state.modals.newBookmark,
                    isOpened: false
                }
            }

        }
    }
    if (action.type === 'OPEN_EDIT_BOOKMARK_MODAL') {
        state = {
            ...state,
            modals: {
                ...state.modals,
                editBookmark: {
                    ...state.modals.editBookmark,
                    isOpened: true
                }
            }
        }
    }
    if (action.type === 'CLOSE_EDIT_BOOKMARK_MODAL') {
        state = {
            ...state,
            modals: {
                ...state.modals,
                editBookmark: {
                    ...state.modals.editBookmark,
                    isOpened: false
                }
            }
        }
    }
    return state;
};

export default modalReducer