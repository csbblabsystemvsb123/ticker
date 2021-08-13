/* eslint-disable no-unused-vars */
import {
    ERROR,
    SUBSCRIBE,
    TICKER
} from '../Constants';

export const INITIATE_DATA = 'INITIATE_DATA';
export const SET_COIN_SYMBOL = 'SET_COIN_SYMBOL';

const baseURL = 'wss://api-pub.bitfinex.com/ws/2';

var socket;

let msg;

export const initiateConnection = (value) => {
    return async (dispatch, getState) => {
        try {
            const symbol = 'tBTCUSD';
            msg = JSON.stringify({
                event: SUBSCRIBE,
                channel: TICKER,
                symbol
            });
            socket = new WebSocket(baseURL);
            socket.onopen = () => socket.send(msg);
            socket.onmessage = ({ data }) => {
                data = JSON.parse(data);
                if (data.event === ERROR) {
                    dispatch(resetConnection());
                } else if (Array.isArray(data) && data[1]?.length === 10) {
                    dispatch({type: INITIATE_DATA, data});
                }
            }
            socket.onerror = () => {
                dispatch(resetConnection());
            }
        } catch (e) {
            console.error(e);
            dispatch(resetConnection());
        }
    };
};

const resetConnection = () => {
    return async (dispatch, getState) => {
        stopConnection();
        setTimeout(() => {
            dispatch(initiateConnection());
        }, 6000);
    }
};

export const stopConnection = () => {
    socket.close();
    socket = null;
};

export const setCoinSymbol = (value) => {
    return {type: SET_COIN_SYMBOL, data: value};
}