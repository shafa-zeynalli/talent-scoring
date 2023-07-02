import React, {useState} from 'react';



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





// import classes from './Select.module.css'

// const Select = (props) => {
//     const { value, options, changeHandlerSelect, label, name } = props;

//     return (
//         <div className={classes.education__control}>
//             <label>{label}*</label>
//             <select id={classes.select} value={value} onChange={changeHandlerSelect} name={name}>
//                 {options.map((option, i) => (
//                     <option key={i} value={option.value}>{option.label}</option>))
//                 }
//             </select>
//         </div>
//     )
// }

// export default Select;





import Select from 'react-select';
export default function SelectOption(props) {
    const [enteredValue, setEnteredValue] = useState('');

     

    const { options, name, changeHandlerSelect, label, value1 } = props;
    
    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        float: 'right',
        display: 'flex',
      
        ':before': {
          backgroundColor: color,
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
          order: 2,
        },
      });

    const style = {
        control: (styles,  {isFocused, isSelected,  }) => ({ 
            ...styles, 
            backgroundColor: '#f2f6f6' ,
            borderRadius: 25,
            width: 470,
            height: 20,
            padding: "0 10px",
            color: '#038477',
            appearance: 'none',
            outline:` ${isFocused || isSelected ? 'none' : 'grey'}`,
            border: `4px solid (${isFocused || isSelected ? 'green' : 'grey'}`
        }),
        menuList: styles => ({
            ...styles,

        }),
        option: (styles, { isFocused, isSelected,  }) => ({
            ...styles,  
            background: isFocused ? '#5aa8a0' : isSelected ? '#5aa8a0' : '#f2f6f6',
            color: isFocused ? 'white' : isSelected  ? 'white' : '#038477',
            zIndex: 1,
            width: 300,
            padding: '10px 20px',
            float: 'left',
            justifyContent: 'space-between', 
            order: 1,
            ...dot(isFocused ? '#038477' : isSelected ? '#038477' : '#ccc'), 
        }),
        menu: base => ({
            ...base,
            zIndex: 100,
            width: 300,
            marginLeft: 20,
            marginTop: 5,
        }),
        placeholder: (base) => ({
            ...base,
            // backgroundColor: "black",
            fontSize: "1em",
            color: "#7a7c7c",
            fontWeight: 400
        }),
    }
    return (

        <div style={{ 'width': '550px', 'margin': '20px 0',  }}>
            <label style={{ 'paddingBottom': '20px', }}>{label}</label>
            <Select
            {...props}
            multiple={true}
                isSearchable={false}
                placeholder={options[0].label}  
                onChange={changeHandlerSelect}
                options={options}
                styles={style}
                name={name}
                value={options.filter(({value}) => value === value1)}
                defaultValue={value1}
                // hasValue={value1}
            />
        </div>

    );
}

