/* eslint-disable no-unused-vars */
import {
    ERROR,
    SUBSCRIBE,
    TICKER
} from '../Constants';

export const INITIATE_DATA   = 'INITIATE_DATA';
export const SET_COIN_SYMBOL = 'SET_COIN_SYMBOL';
export const SET_LOADING     = 'SET_LOADING';

const baseURL = 'wss://api-pub.bitfinex.com/ws/2';

var socket;

export const initiateConnection = (immediateClose = false) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: SET_LOADING});
            const { symbol } = getState().tickerWidget;
            const msg = JSON.stringify({
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
                    dispatch({ type: INITIATE_DATA, data: data[1] });
                    if (immediateClose) {
                        socket.close();
                    }
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

export const resetConnection = (delay = 6000, force = true) => {
    return async (dispatch, getState) => {
        force && dispatch({type: SET_LOADING});
        stopConnection();
        if (socket && force) {
            socket.onclose = () => {
                setTimeout(() => {
                    dispatch(initiateConnection());
                }, delay);
            }
        }
    }
};

export const stopConnection = () => {
    socket && socket.close();
};

export const setCoinSymbol = (value) => {
    return { type: SET_COIN_SYMBOL, data: value };
}