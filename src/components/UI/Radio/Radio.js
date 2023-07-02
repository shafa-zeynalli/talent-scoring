import React from 'react';
import classes from './Radio.module.css'

const Radio = (props) => {
    const {style1, style2, id,className, name, value, changeHandlerRadio, label, confirm} = props;
    return (
        <div className={`${classes.confirm} ${className}`} style={style1}>
            <label htmlFor={id}>{label}</label>
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                checked={confirm}
                onChange={changeHandlerRadio}
                style={ style2}
            />
        </div>
    )
}

export default Radio;