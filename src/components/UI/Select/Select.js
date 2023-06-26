import React from 'react';



// export default function SelectOption(props) {
//     const { options, changeHandlerSelect, label, value } = props;
//     
//     const style = {
//         control: (baseStyles, state) => ({
//             ...baseStyles,
//             borderColor: state.isFocused ? 'green' : 'grey',
//             borderRadius: '25px',
//             outline: 'none',
//             padding: '0',
//             innerHeight: '10px',
//             innerWidth: '200px'
//         })
//     }

//     return (

//         <div className={classes.education__control}>
//             <label>{label}*</label>
//             <Select
//                 value={value}
//                 onChange={changeHandlerSelect}
//                 options={options}
//                 styles={style}
//             />
//         </div>

//     );
// }





import classes from './Select.module.css'

const Select = (props) => {
    const { value, options, changeHandlerSelect, label, name } = props;

    return (
        <div className={classes.education__control}>
            <label>{label}*</label>
            <select id={classes.select} value={value} onChange={changeHandlerSelect} name={name}>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>{option.label}</option>))
                }
            </select>
        </div>
    )
}

export default Select;

