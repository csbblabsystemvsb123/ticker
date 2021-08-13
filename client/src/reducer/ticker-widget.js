import {INITIATE_DATA, SET_COIN_SYMBOL} from '../action/ticker-widget';

export const intialState = {
    data : [],
    symbol: 'tBTCUSD'
}

const state = {
    ...intialState
}

const reducer = (prevState, {type,data}) => {
    switch(type) {
        case INITIATE_DATA:
            state.data = data;
            return state;
        case SET_COIN_SYMBOL:
            state.symbol = data;
            return state;
        default:
            return state;
    }
}

export default reducer;