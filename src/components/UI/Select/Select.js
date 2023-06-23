import React from 'react';
import classes from './Select.module.css'

const Select = (props) => {
    const { value, options, changeHandlerSelect, label } = props;

    return (
        <div className={classes.education__control}>
            <label>{label}*</label>
            <select id={classes.select} value={value} onChange={changeHandlerSelect}>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>{option.label}</option>))
                }
            </select>
        </div>
    )
}

export default Select;

// import React, { useState } from 'react';

// const Select = (props) => {
//     const { options, label, changeHandlerSelect } = props;

//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedLabel, setSelectedLabel] = useState(options[0].label);
//     const [selectedValue, setSelectedValue] = useState('');

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionSelect = (label, value) => {
//         setSelectedLabel(label);
//         setSelectedValue(value);
//         setIsOpen(false);
//         changeHandlerSelect(selectedValue);
//     };

//     return (
//         <div className={classes.educationControl}>
//             <label>{label}*</label>
//             <div className={classes.selectContainer}>
//                 <div
//                     className={`${classes.selectHeader} ${isOpen ? classes.open : classes.closed}`}
//                     onClick={handleToggle}
//                 >
//                     <span className={classes.selectedValue}>{selectedLabel}</span>
//                     {isOpen && <span className={classes.arrow}>&#x25B2;</span>}
//                     {!isOpen && <span className={classes.arrow}>&#x25BC;</span>}
//                 </div>
//                 {isOpen && (
//                     <div className={classes.optionsContainer}>
//                         {options.map(option => (
//                             <div className={`${classes.option}  ${selectedLabel === option.label ? classes.selected : ''}`} onClick={() => handleOptionSelect(option.label, option.value)}>
//                                 {option.label}
//                                 <div></div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Select;
