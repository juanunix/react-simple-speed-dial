/**
 * Created by lenovo on 2017-07-08.
 */

const debugState = {
    testBookmark: {}
};

const debugReducer = (state = debugState,  action) => {
    if (action.type === 'SET_TEST_BOOKMARK') {
        state = {
            ...state,
            testBookmark: action.testBookmark
        }

    }
    return state
};

export default debugReducer;