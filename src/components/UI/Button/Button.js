import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    const { onClick, type, children, className } = props;

    return ( 
        <button
            type={type || 'button'}
            className={`${classes.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>

    )
} 
export default Button;