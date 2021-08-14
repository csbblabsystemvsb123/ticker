/*
 * Copyright (c) 2021 Muthukumar.  All Rights Reserved
 */
import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InfoIcon from '@material-ui/icons/Info';
import { formatNumber } from '../helper';
import CTAButton from './CTAButton';
import Icon from './Icon';
import CustomToolTip from './ToolTip';

// define the styles for the Card Component...
const useStyles = makeStyles((theme) => ({
    root: {
        display                      : 'flex',
        alignItems                   : 'center',
        boxSizing                    : 'border-box',
        boxShadow                    : '2px 2px 8px #888888',
        backgroundColor              : '#273640',
        padding                      : '4px',
        width                        : '310px',
        minHeight                    : '55px',
        color                        : '#FFFF',
        [theme.breakpoints.down(400)]: {
            width: '100%'
        }
    },
    symbol: {
        justifyContent: 'center',
        minWidth      : '55px'
    },
    container: {
        display       : 'flex',
        flexWrap      : 'wrap',
        flex          : '1 1',
        justifyContent: 'space-between',
        fontSize      : '12px',
        boxSizing     : 'inherit',
        '&& > div'    : {
            minWidth   : '108px',
            textAlign  : 'left',
            wordSpacing: '2px',
            display    : 'inherit',
            alignItems : 'center'
        }
    },
    currentPrice: {
        fontSize  : '16px',
        fontWeight: 300,
        whiteSpace: 'nowrap'
    },
    soft: {
        color      : '#FFFFFF',
        opacity    : 0.75,
        marginRight: '4px'
    },
    up: {
        color: '#01A781'
    },
    down: {
        color: '#F05359'
    }
}));

/**
 * Card Component provides the unfied structure of the individual widget of the Ticker page. The accepts folowwign pros,
 * change: number : Difference of rate from now to last 24 hours
 * changeInPercent: number : Difference in percentage of rate from now to last 24 hours
 * coin: Object : The current coin object
 * currentPrice: number : The current price of the coin
 * volume: number : Total amount of volume
 * high: number: The highest price in last 24hrs.
 * low: number: The lowest price in last 24hrs.
 * 
 * ```
 * 
 *  import Card from '../dls/Card';
 * 
 *  <Card change={change}
 *    changeInPercent={changeInPercent}
 *    coin={coin}
 *    currentPrice={currentPrice}
 *    volume={volume}
 *    high={high}
 *    low={low} />
 * 
 * ```
 */
const Card = ({
    change,
    changeInPercent,
    coin,
    currentPrice,
    volume,
    high,
    low
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.symbol}>
                <Icon symbol={coin.symbol} />
            </div>
            <div className={classes.container}>
                <div>
                    <CTAButton label={coin.lable}
                        fontSize={'16px'}
                        margin={'0 4px 0 0'}
                        tooltipInfo={`API Symbol: ${coin.symbol}`} />
                    <CustomToolTip tooltipInfo={'info'}>
                        <InfoIcon fontSize='inherit' />
                    </CustomToolTip>
                </div>
                <div className={classes.currentPrice}>
                    {formatNumber(currentPrice)}
                </div>
                <div>
                    <span className={classes.soft}>VOL</span>
                    <CTAButton label={formatNumber(volume)}
                        margin={'0px 4px'}
                        tooltipInfo={'33,545,012 USD'} />
                    <span className={classes.soft}>{coin.abbr}</span>
                </div>
                <div>
                    <span className={change >= 0 ? classes.up : classes.down}>{formatNumber(change)}</span>
                    {change >= 0 ? (
                        <ArrowDropUpIcon htmlColor={'#01A781'} />
                    ) : (
                        <ArrowDropDownIcon htmlColor={'#F05359'} />
                    )}
                    <span className={change >= 0 ? classes.up : classes.down}>{`(${formatNumber(changeInPercent)}%)`}</span>
                </div>
                <div>
                    <span className={classes.soft}>LOW </span>
                    <span>{formatNumber(low)}</span>
                </div>
                <div>
                    <span className={classes.soft}> HIGH </span>
                    <span>{formatNumber(high)}</span>
                </div>
            </div>
        </div>
    );
};

// defines the props definition...
Card.propTypes = {
    change: propTypes.number,
    changeInPercent: propTypes.number,
    coin: propTypes.object,
    currentPrice: propTypes.number,
    volume: propTypes.number,
    high: propTypes.number,
    low: propTypes.number
};

export default Card;