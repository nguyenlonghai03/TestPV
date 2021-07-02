const stateDefault = {
    arrPost: [],
    arrCmt: []
}
export const TestReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DS_CMT': {
            state.arrCmt = action.arrCmt;
            return { ...state }
        }
        case 'LAY_DS_POST': {
            state.arrPost = action.arrPost;
            return { ...state }
        }
        default: return { ...state }
    }
}