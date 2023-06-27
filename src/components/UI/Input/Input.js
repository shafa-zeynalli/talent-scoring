import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    const { value, name, type, max, min, changeHandlerText, label, placeholder } = props;

    return (
        <div className={classes.input}>
            <label>{label}*</label>
            <input
                type={type}
                value={value}
                onChange={changeHandlerText}
                placeholder={placeholder}
                max={max}
                min={min}
                name={name}
            />
        </div>
    )
}

export default Input;