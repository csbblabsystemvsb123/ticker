import {
    INITIATE_DATA,
    SET_COIN_SYMBOL,
    SET_LOADING
} from '../action/ticker-widget';

export const intialState = {
    data: [],
    symbol: 'tBTCUSD',
    connectionEtablised: false,
    loading: false
}

const state = {
    ...intialState
}

const reducer = (prevState, { type, data }) => {
    switch (type) {
        case INITIATE_DATA:
            state.loading = false;
            state.data = data;
            state.connectionEtablised = true;
            return state;
        case SET_COIN_SYMBOL:
            state.symbol = data;
            return state;
        case SET_LOADING:
            state.loading = true;
            return state;
        default:
            return state;
    }
}

export default reducer;