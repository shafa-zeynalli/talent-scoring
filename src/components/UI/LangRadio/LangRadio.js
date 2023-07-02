import Radio from "../Radio/Radio";
import classes from './LangRadio.module.css'


const LangRadio = (props) => {
    const { langName, onClick, changeHandlerRadio, name,
        style1, style2, style3, style4, style5, style6,
        value1, value2, value3, value4, value5, value6,
        confirm1, confirm2, confirm3, confirm4, confirm5, confirm6, } = props
    return (
        <div className={classes.langRadio}>
            <div className={classes.div} onClick={onClick}>{langName} <div>x</div></div>
            <Radio
                className={classes.radio}
                label='A1'
                value={value1}
                style1={{backgroundColor: confirm1 ? '#038477' :'#f2f6f6', color: confirm1 ? 'white' : 'black' }}

                id={value1}
                name={name}
                confirm={confirm1}
                changeHandlerRadio={changeHandlerRadio}
            />
            <Radio
                className={classes.radio}
                label='A2'
                value={value2}
                style1={{backgroundColor: confirm2 ? '#038477' :'#f2f6f6', color: confirm2 ? 'white' : 'black' }}

                id={value2}
                name={name}
                confirm={confirm2}
                changeHandlerRadio={changeHandlerRadio}
            />
            <Radio
                className={classes.radio}
                label='B1'
                value={value3}
                style1={{backgroundColor: confirm3 ? '#038477' :'#f2f6f6', color: confirm3 ? 'white' : 'black' }}

                id={value3}
                name={name}
                confirm={confirm3}
                changeHandlerRadio={changeHandlerRadio}
            />
            <Radio
                className={classes.radio}
                label='B2'
                value={value4}
                style1={{backgroundColor: confirm4 ? '#038477' :'#f2f6f6', color: confirm4 ? 'white' : 'black' }}

                id={value4}
                name={name}
                confirm={confirm4}
                changeHandlerRadio={changeHandlerRadio}
            />
            <Radio
                className={classes.radio}
                label='C1'
                value={value5}
                style1={{backgroundColor: confirm5 ? '#038477' :'#f2f6f6', color: confirm5 ? 'white' : 'black' }}

                id={value5}
                name={name}
                confirm={confirm5}
                changeHandlerRadio={changeHandlerRadio}
            />
            <Radio
                className={classes.radio}
                label='C2'
                value={value6}
                style1={{backgroundColor: confirm6 ? '#038477' :'#f2f6f6', color: confirm6 ? 'white' : 'black' }}

                id={value6}
                name={name}
                confirm={confirm6}
                changeHandlerRadio={changeHandlerRadio}
            />
        </div>
    )
}
export default LangRadio;