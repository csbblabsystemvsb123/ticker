import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import { makeStyles, Switch } from '@material-ui/core';
import * as coins from '../coin.json';
import Card from '../dls/Card';
import Dropdown from '../dls/DropDown';
import {
    initiateConnection,
    setCoinSymbol,
    resetConnection
} from '../action/ticker-widget';

const useStyles = makeStyles((theme) => ({
    root: {
        width                        : '310px',
        marginTop                    : '24px',
        [theme.breakpoints.down(400)]: {
            width : '100%',
            margin: 0
        }
    },
    select: {
        width: '200px'
    },
    controls: {
        display       : 'flex',
        justifyContent: 'space-between',
        alignItems    : 'center'
    },
    liveControl: {
        marginTop: '18px'
    }
}));

const createOptions = () => {
    const options = [];
    // eslint-disable-next-line no-unused-vars
    Object.entries(coins.default).forEach(([key, value]) => {
        options.push(value);
    });

    return options;
}

const TickerWidget = () => {
    const classes             = useStyles();
    const dispatch            = useDispatch();
    const data                = useSelector(({ tickerWidget: { data } }) => data);
    const symbol              = useSelector(({ tickerWidget: { symbol } }) => symbol);
    const loading             = useSelector(({ tickerWidget: { loading } }) => loading);
    const connectionEtablised = useSelector(({ tickerWidget: { connectionEtablised } }) => connectionEtablised);

    const options                   = createOptions();
    const [live, setLive]           = useState(true)
    const [symbolOpt, setSymbolOpt] = useState('tBTCUSD');

    useEffect(() => {
        dispatch(initiateConnection());
    }, []);

    useEffect(() => {
        if (live) {
            connectionEtablised && dispatch(resetConnection(200));
        } else {
            dispatch(initiateConnection(true));
        }
    }, [symbol]);

    const handleChange = (value) => {
        setSymbolOpt(value);
        dispatch(setCoinSymbol(value));
    };

    const onLiveUpdate = () => {
        if (live) {
            dispatch(resetConnection(200, false));
        } else {
            dispatch(initiateConnection());
        }
        setLive(!live);
    };

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <div className={classes.select}>
                    <Dropdown options={options}
                        onChange={function ({ target }) {
                            handleChange(target.value);
                        }}
                        value={symbolOpt || ''} />

                </div>
                <div className={classes.liveControl}>
                    Live
                    <Switch
                        disabled={loading}
                        checked={live}
                        onChange={onLiveUpdate}
                        color='primary'
                        name='checkedB'
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </div>
            {!loading ? (
                data?.length === 10 && (
                    <Card coin={coins.default[symbol]}
                        change={data[4]}
                        currentPrice={data[6]}
                        volume={data[7]}
                        high={data[8]}
                        low={data[9]}
                        changeInPercent={data[5] * 100} />
                )
            ) : (
                <ReactLoading type={'bubbles'} color={'#FFFFFF'} height={100} width={100} />
            )}
        </ div>
    );
};

export default TickerWidget;