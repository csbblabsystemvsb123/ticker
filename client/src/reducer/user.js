//import produce from 'immer';
import { AUTHENTICATE_USER, USER_INFO, CLEAR_USER_INFO } from '../action/user';

export const intialState = {
    isAuthenticated: false,
    info: {}
};

let state = {
    ...intialState
};

const reducer = (prevState, { type, value }) => {
    switch (type) {
        case AUTHENTICATE_USER:
            state.isAuthenticated = value;
            return state;
        case USER_INFO:
            state.info = value.info;
            return state;
        case CLEAR_USER_INFO:
            state = { ...intialState }
            return state;
        default:
            return state;
    }
}

export default reducer;