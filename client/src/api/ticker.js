/* eslint-disable no-unused-vars */
import axios from 'axios';

export let client;

export const Method = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const config = {
    timeout: 60000,
    headers: {
        'origin': 'https://api-pub.bitfinex.com', 
        'Accept': 'application/json'
    }
};
client = axios.create(config);

export const baseURL = 'https://api-pub.bitfinex.com/v2/';

export const url = (path) => {
    return baseURL + path;
}

export const loadCurrenyDetails = async() => {
    const result = await client({
        url: url("tickers?symbols=tBTCUSD,tLTCUSD"),
        method: Method.GET
    });

    return result;
};
