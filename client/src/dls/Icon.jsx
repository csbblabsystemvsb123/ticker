import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

export const iconUrl = {
    tBTCUSD: 'https://static.bitfinex.com/images/icons/BTC-alt.svg'
}

const useStyles = makeStyles(() => ({
    icon: {
        filter: 'saturate(0) brightness(180%)',
        backgroundSize: 'contain !important',
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: '50% 50% !important',
        display: 'block'
    }
}));

export const Icon = ({
    symbol = 'tBTCUSD'
}) => {
    const classes = useStyles();
    return (
        <span className={classes.icon}
            style={{
                width: '40px',
                height: '40px',
                flex: '0 0 40px',
                backgroundImage: `url(${iconUrl[symbol]})`
            }} />
    );
}

Icon.propTypes = {
    symbol: propTypes.string
}

export default Icon;