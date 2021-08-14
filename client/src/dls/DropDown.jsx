import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Input } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display  : 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        width: '100%',
    },
    select: {
        backgroundColor: '#273640',
        color          : '#FFFF',
        '&:focus': {
            backgroundColor: '#273640',
            color          : '#FFFF',
        }
    },
    icon: {
        color: '#FFFF'
    },
    list: {
        paddingBottom: '0px'
    },
    menuRoot: {
        '&:hover': {
            color          : '#273640',
            backgroundColor: '#FFFFFF'
        }
    },
    menuSelected: {
        color          : '#273640',
        backgroundColor: '#FFFFFF !important'
    },
    paper: {
        borderRadius   : '0px',
        marginTop      : '4px',
        padding        : '0px',
        overflowY      : 'auto',
        textOverflow   : 'ellipsis',
        backgroundColor: '#273640',
        color          : '#FFFF'
    },
    error: {
        fontFamily: 'inherit',
        fontSize  : '12px',
        margin    : '8px 0px',
        color     : 'red'
    }
}));

const Dropdown = ({
    options,
    onChange,
    error,
    placeholder,
    value,
    errorText,
    multiple = false
}) => {
    const classes = useStyles();

    const handleChange = (e) => {
        onChange?.(e)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id='select'
                    shrink={false}>
                    {placeholder}
                </InputLabel>
                <Select classes={{
                    select: classes.select,
                    icon: classes.icon
                }}
                    id='select'
                    input={<Input />}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: -4
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left'
                        },
                        getContentAnchorEl: null,
                        classes: {
                            paper: classes.paper,
                            list: classes.list
                        }
                    }}
                    onChange={handleChange}
                    error={error}
                    placeholder={placeholder}
                    value={value}
                    multiple={multiple}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value}
                            classes={{
                                root: classes.menuRoot,
                                selected: classes.menuSelected
                            }}
                            value={option.value}>
                            {option.lable}
                        </MenuItem>
                    ))}
                </Select>
                {(error && errorText) && (
                    <span className={classes.error}>{errorText} </span>
                )}
            </FormControl>
        </div>
    );
}

Dropdown.propTypes = {
    placeholder: propTypes.string,
    options: propTypes.any,
    onChange: propTypes.func,
    error: propTypes.bool,
    value: propTypes.any,
    errorText: propTypes.string,
    multiple: propTypes.bool
}

export default Dropdown;
