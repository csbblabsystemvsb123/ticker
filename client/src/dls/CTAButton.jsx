import React from 'react';
import propTypes from 'prop-types';
import { Link, makeStyles } from '@material-ui/core';
import CustomToolTip from './ToolTip';

const useStyles = makeStyles(() => ({
    root: {
        color   : ({ color }) => color || '#FFFF',
        fontSize: ({ fontSize }) => fontSize || '12px',
        margin  : ({ margin }) => margin || 'none'
    }
}));

const CTAButton = ({
    label,
    onClick,
    color,
    fontSize,
    tooltipInfo,
    margin,
    underline = 'always'
}) => {
    const classes = useStyles({ color, margin, fontSize });
    return (
        <CustomToolTip tooltipInfo={tooltipInfo}>
            <Link classes={{
                root: classes.root
            }}
                underline={underline}
                component='button'
                variant='body2'
                onClick={onClick ? (() => {
                    console.info(`${label} clicked`);
                    onClick();
                }) : null}
            >
                {label}
            </Link>
        </CustomToolTip>
    );
}

CTAButton.propTypes = {
    label: propTypes.string,
    color: propTypes.string,
    fontSize: propTypes.string,
    margin: propTypes.string,
    underline: propTypes.string,
    tooltipInfo: propTypes.string,
    onClick: propTypes.func
};

export default CTAButton;