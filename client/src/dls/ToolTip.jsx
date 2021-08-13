
import React from 'react';
import propTypes from 'prop-types';
import { Tooltip, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    tooltip: {
        backgroundColor: '#212121',
        fontSize: '12px',
        padding: '6px',
        boxShadow: '2px 2px 2px black'
    },
    tooltipArrow: {
        color: '#212121'
    }
}));

const CustomToolTip = ({
    tooltipInfo,
    children
}) => {
    const classes = useStyles();
    return (
        <Tooltip arrow
            placement={'top'}
            classes={{
                tooltip: classes.tooltip,
                arrow: classes.tooltipArrow
            }}
            title={tooltipInfo} >
            {children}
        </Tooltip>
    );
}

CustomToolTip.propTypes = {
    tooltipInfo: propTypes.string,
    children: propTypes.any
};

export default CustomToolTip;