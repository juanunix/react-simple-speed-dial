/**
 * Created by belothar on 07.07.17.
 */
const configState = {
    bgImageUrl: ''
};

const configReducer = (state = configState, action) => {
    if (action.type === 'SET_BACKGROUND_URL') {
        state = {
            ...state,
            bgImageUrl: action.bgImageUrl
        }
    }
    return state;
}

export default configReducer;