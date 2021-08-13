
import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InfoIcon from '@material-ui/icons/Info';
import { formatNumberToThousand } from '../helper';
import CTAButton from './CTAButton';
import Icon from './Icon';
import CustomToolTip from './ToolTip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        boxShadow: '2px 2px 8px #888888',
        backgroundColor: '#273640',
        padding: '4px',
        width: '310px',
        minHeight: '55px',
        color: '#FFFF',
        [theme.breakpoints.down(400)]: {
            width: '100%'
        }
    },
    symbol: {
        justifyContent: 'center',
        minWidth: '55px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: '1 1',
        justifyContent: 'space-between',
        fontSize: '12px',
        boxSizing: 'inherit',
        '&& > div': {
            minWidth: '108px',
            textAlign: 'left',
            wordSpacing: '2px',
            display: 'inherit',
            alignItems: 'center'
        }
    },
    currentPrice: {
        fontSize: '16px',
        fontWeight: 300,
        whiteSpace: 'nowrap'
    },
    soft: {
        color: '#FFFFFF',
        opacity: 0.75,
        marginRight: '4px'
    },
    up: {
        color: '#01A781'
    },
    down: {
        color: '#F05359'
    }
}));

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
                <Icon />
            </div>
            <div className={classes.container}>
                <div>
                    <CTAButton label={coin.label}
                        fontSize={'16px'}
                        margin={'0 4px 0 0'}
                        tooltipInfo={`API Symbol: ${coin.symbol}`} />
                    <CustomToolTip tooltipInfo={'info'}>
                        <InfoIcon fontSize='inherit' />
                    </CustomToolTip>
                </div>
                <div className={classes.currentPrice}>
                    {formatNumberToThousand(currentPrice)}
                </div>
                <div>
                    <span className={classes.soft}>VOL</span>
                    <CTAButton label={formatNumberToThousand(volume)}
                        margin={'0px 4px'}
                        tooltipInfo={'33,545,012 USD'} />
                    <span className={classes.soft}>{coin.abbr}</span>
                </div>
                <div>
                    <span className={change >= 0 ? classes.up : classes.down}>{formatNumberToThousand(change)}</span>
                    {change >= 0 ? (
                        <ArrowDropUpIcon htmlColor={'#01A781'} />
                    ) : (
                        <ArrowDropDownIcon htmlColor={'#F05359'} />
                    )}
                    <span className={change >= 0 ? classes.up : classes.down}>{`(${formatNumberToThousand(changeInPercent)}%)`}</span>
                </div>
                <div>
                    <span className={classes.soft}>LOW </span>
                    <span>{formatNumberToThousand(low)}</span>
                </div>
                <div>
                    <span className={classes.soft}> HIGH </span>
                    <span>{formatNumberToThousand(high)}</span>
                </div>
            </div>
        </div>
    );
};

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