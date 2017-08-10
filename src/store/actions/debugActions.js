/**
 * Created by lenovo on 2017-07-08.
 */
export function setTestBookmark(testBookmark) {
    return {
        type: 'SET_TEST_BOOKMARK',
        testBookmark
    }
}

export function getTestBookmark() {

    return (dispatch) => {
            console.log('dispatching tes bookamrk');

            dispatch(setTestBookmark({title: 'test', url: 'testurl'}));


    }
}
