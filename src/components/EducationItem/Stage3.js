import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Radio from '../UI/Radio/Radio';
import classes from './Stage1.module.css';
import { updateSelectValue } from '../../store/action';
import Select from '../UI/Select/Select';
import ChartBar from '../Chartbar';
import { useDispatch, useSelector } from 'react-redux';



const Stage3 = (props) => {
    // const [enteredSubject, setEnteredSubject] = useState('');
    // const [enteredStage, setEnteredStage] = useState('');
    // const [enteredWin, setEnteredWin] = useState('');

    // const [topping, setTopping] = useState(null);

    // const changeHandlerSubject = (e) => {
    //     setEnteredSubject(e.value);
    // }
    // const changeHandlerStage = (e) => {
    //     setEnteredStage(e.value);
    // }
    // const changeHandlerWin = (e) => {
    //     setEnteredWin(e.value);
    // }
    const navigate = useNavigate();

    // const onOptionChange = (e) => {
    //     setTopping(e.target.value);
        
    // }
    const todo = useSelector((state)=>state.selectValues);

    const dispatch = useDispatch();
    const [selectValues, setSelectValues] = useState({
        select4: todo.select4 === '' ? '' : todo.select4,
        select5: todo.select5 === '' ? '' : todo.select5,
        select6: todo.select6 === '' ? '' : todo.select6,
        confirm2: todo.confirm2 === '' ? '' : todo.confirm2,
    });
    const handleSelectChange = (e) => {
        const { name, value } = e;
        console.log(e)
        setSelectValues((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleChangeConfirm = (e) =>{
        const { name, value } = e.target;
        setSelectValues((prevState) => ({ ...prevState, [name]: value }));
    }
    const optionsWin = [
        { value: "Iyer", label: '1-ci yer (Qızıl medal)', name: 'select6'},
        { value: "IIyer", label: '2-ci yer (Gümüş medal)', name: 'select6' },
        { value: "IIIyer", label: '3-cü yer (Bürünc medal)', name: 'select6' },
        { value: "IVyer", label: '4-cü yer' },
    ];
    const optionsStage = [
        { value: "respublic", label: 'Respublika', name: 'select5' },
        { value: "district", label: 'Rayon', name: 'select5' },
        { value: "region", label: 'Region', name: 'select5' },
        { value: "world", label: 'Dünya', name: 'select5' },
    ];
    const optionsSubject = [
        { value: "riyaziyyat", label: 'Riyaziyyat', name: 'select4' },
        { value: "azdili", label: 'Azərbaycan dili və Ədəbiyyat', name: 'select4' },
        { value: "tarix", label: 'Tarix', name: 'select4' },
        { value: "cografiya", label: 'Cografiya', name: 'select4' },
        { value: "fizika", label: 'Fizika', name: 'select4' },
        { value: "kimya", label: 'Kimya', name: 'select4' },
        { value: "biologiya", label: 'Biologiya', name: 'select4' },
        { value: "informatika", label: 'Informatika', name: 'select4' },
    ];
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateSelectValue(selectValues));
        console.log(dispatch(updateSelectValue(selectValues)))
        // navigate('/stage2')
    }
     
    return (
        <Card>
            <div className={classes.education}>
                <h2>Olimpiada sualları</h2>
                <ChartBar currentPageIndex='3' maxPageIndex='3'/>
                <form onSubmit={submitHandler}>
                    <div className={classes.educations__controls}>
                        <div className={classes.education__control}>
                            <label>Olimpiyada qalibi olmusunuzmu?*</label>
                            <div className={classes.education__control_Name}>
                                <Radio
                                    name="confirm2"
                                    value="yes"
                                    id="beli"
                                    label='Bəli'
                                    confirm={selectValues.confirm2 === 'yes'}
                                    changeHandlerRadio={handleChangeConfirm}
                                    style1={{ color: selectValues.confirm2 === 'yes' ? '#038477' : '#444' }}
                                    style2={{ backgroundColor: selectValues.confirm2 === 'yes' ? '#038477' : '#f2f6f6', appearance: selectValues.confirm2 === 'yes' ? 'none' : '' }}
                                />
                                <Radio
                                    name="confirm2"
                                    value="no"
                                    id="xeyr"
                                    label='Xeyr'
                                    confirm={selectValues.confirm2 === 'no'}
                                    changeHandlerRadio={handleChangeConfirm}
                                    style1={{ color:  selectValues.confirm2 === 'no' ? '#038477' : '#444' }}
                                    style2={{ backgroundColor: selectValues.confirm2 === 'yes' ? '#f2f6f6 ' : '#038477', appearance: selectValues.confirm2 === 'no' ? 'none' : '' }}
                                />

                            </div>
                        </div>
                        {(selectValues.confirm2 === 'yes' || selectValues.confirm2 === 'yes')&&
                            <div>
                                <Select
                                    label="Hansı fənn üzrə olimpiyada qalibi olmusunuz?"
                                    value1={selectValues.select4}
                                    changeHandlerSelect={handleSelectChange}
                                    options={optionsSubject}
                                />
                                <Select
                                    label="Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?"
                                    value1={selectValues.select5}
                                    changeHandlerSelect={handleSelectChange}
                                    options={optionsStage}
                                />
                                <Select
                                    label="Neçənci yer əldə etmisiniz?"
                                    value1={selectValues.select6}
                                    changeHandlerSelect={handleSelectChange}
                                    options={optionsWin}
                                />
                            </div>
                        }
                    </div>
                    <div className={classes.buttons}>
                        <Button className={classes.button} onClick={() => navigate(-1)}>Geri</Button>
                        <Button type='submit' >Növbəti </Button>
                    </div>
                </form>
            </div>
        </Card>
    )
}
export default Stage3;