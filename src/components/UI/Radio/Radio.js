import React from 'react';
import classes from './Radio.module.css'

const Radio = (props) => {
    const {style1, style2, id, name, value, changeHandlerRadio, label, confirm} = props;
    return (
        <div className={classes.confirm} style={style1}>
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