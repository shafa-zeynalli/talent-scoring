import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    const { value, type, max, min, changeHandlerText, label, placeholder } = props;

    return (
        <div className={classes.education__name}>
            <label>{label}*</label>
            <input
                type={type}
                value={value}
                onChange={changeHandlerText}
                placeholder={placeholder}
                max={max}
                min={min}
            />
        </div>
    )
}

export default Input;