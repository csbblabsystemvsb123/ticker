/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Card from '../dls/Card';
import { useSelector, useDispatch } from 'react-redux';
import { initiateConnection } from '../action/ticker-widget'

const TickerWidget = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ tickerWidget: { data } }) => data[1]);

    useEffect(() => {
        dispatch(initiateConnection());
    }, []);

    return (
        <>
            {data?.length === 10 && (
                <Card coin={{
                    label: 'BTC/USD',
                    symbol: 'tBTCUSD',
                    abbr: 'BTC'
                }}
                    change={data[4]}
                    currentPrice={data[6]}
                    volume={data[7]}
                    high={data[8]}
                    low={data[9]}
                    changeInPercent={data[5] * 100} />
            )}
        </>
    );
};

export default TickerWidget;