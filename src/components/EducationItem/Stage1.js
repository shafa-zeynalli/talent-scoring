import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { useSelector } from 'react-redux'
import classes from './Stage1.module.css';
import Card from '../UI/Card/Card';
import Radio from '../UI/Radio/Radio';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';
import ChartBar from '../Chartbar';
import { updateSelectValue } from '../../store/action';
import { useDispatch } from 'react-redux';



const Stage1 = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const todo = useSelector((state)=>state.selectValues);


    const [selectValues, setSelectValues] = useState({
        select1: todo.select1 === '' ? '' : todo.select1,
        select2: todo.select2 === '' ? '' : todo.select2,
        select3: todo.select3 === '' ? '' : todo.select3,
        confirm: todo.confirm === '' ? '' : todo.confirm,
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


    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(todo.select1 + 'select1');

    const changeHandlerName = (event) => {
        setEnteredName(event.target.value);
    };
    const changeHandlerLastName = (event) => {
        setEnteredLastName(event.target.value);

    };

    const optionsEmployment = [
        { value: "tehsilli", label: 'Təhsil alıram', name: 'select1'},
        { value: "tehsilsiz", label: 'Təhsil almıram',  name: 'select1'},
    ];
    const optionsEducation = [
        { value: "orta", label: 'Orta Təhsil',name: 'select2' },
        { value: "peshe", label: 'Peşə Təhsili',name: 'select2' },
        { value: "bakalavr", label: 'Bakalavr', name: 'select2' },
        { value: "magistratura", label: 'Magistratura', name: 'select2' },
        { value: "phd", label: 'PhD', name: 'select2' },
    ];
    const optionsLevel = [
        { value: "elaci", label: 'Əlaçı', name: 'select3' },
        { value: "zerbeci", label: 'Zərbəçi ', name: 'select3' },
        { value: "hecbiri", label: 'Heç biri', name: 'select3' },
    ];
    const optionsEmployment2 = [
        { value: "tehsilli", label: 'Təhsil alıram', name: 'select1' },
        { value: "calisiram", label: 'Çalışıram', name: 'select1' },
        { value: "issiz", label: 'İşsiz', name: 'select1' },
        { value: "herikisi", label: 'Təhsil alıram və çalışıram', name: 'select1' },
    ]

    const employment = selectValues.confirm === 'no' ? optionsEmployment : optionsEmployment2;
    const item = {
        isEducation: selectValues.select2 === 'orta',
        isProfession: selectValues.select2 === 'peshe',
        isBachelors: selectValues.select2 === 'bakalavr',
        isMaster: selectValues.select2 === 'magistratura',
        isDoctoral: selectValues.select2 === 'phd',
    };
    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(selectValues)

        { (item.isEducation || selectValues.select2 === '') && navigate('/stage3') };
        { !item.isEducation && navigate('/stage2', { state: { id: 1, isPeshe: item.isProfession, isBachelor: item.isBachelors, isMaster: item.isMaster, isPHD: item.isDoctoral } }) };
        // console.log(dispatch(updateSelectValue(selectValues)));
        dispatch(updateSelectValue(selectValues));
    }

    return (
        <Card>
            <h2>Ümumi Suallar</h2>
            <ChartBar currentPageIndex='1' maxPageIndex='3' />
            <form onSubmit={submitHandler}>
                <div className={classes.educations__controls}>
                    <div className={classes.education__control_Name}>
                        <Input
                            value={enteredName}
                            label='Ad:'
                            type='text'
                            changeHandlerText={changeHandlerName}
                        />
                        <Input
                            value={enteredLastName}
                            label='Soyad:'
                            type='text'
                            changeHandlerText={changeHandlerLastName}
                        />
                    </div>
                    <div className={classes.education__control}>
                        <label>İş təcrübəniz varmı?*</label>
                        <div className={classes.education__control_Name}>
                            <Radio
                                name="confirm"
                                value="yes"
                                id="beli"
                                label='Bəli'
                                confirm={selectValues.confirm === 'yes'}
                                changeHandlerRadio={handleChangeConfirm}
                                style1={{ color: selectValues.confirm === 'yes' ? '#038477' : '#444' }}
                                style2={{ backgroundColor: selectValues.confirm === 'yes' ? '#038477' : '#f2f6f6', appearance: selectValues.confirm === 'yes' ? 'none' : '' }}
                            />
                            <Radio
                                name="confirm"
                                value="no"
                                id="xeyr"
                                label='Xeyr'
                                confirm={selectValues.confirm === 'no'}
                                changeHandlerRadio={handleChangeConfirm}
                                style1={{ color: selectValues.confirm === 'no' ? '#038477' : '#444' }}
                                style2={{ backgroundColor: selectValues.confirm === 'yes' ? '#f2f6f6 ' : '#038477', appearance: selectValues.confirm === 'no' ? 'none' : '' }}
                            />

                        </div>
                    </div>
                    {selectValues.confirm &&
                        <div>
                            <Select
                                label="Hazırda məşğuliyyətiniz:"
                                value1={selectValues.select1}
                                changeHandlerSelect={handleSelectChange}
                                options={employment}
                                name='select1'
                            />
                            <Select
                                label="Təhsiliniz:"
                                value1={selectValues.select2}
                                changeHandlerSelect={handleSelectChange}
                                options={optionsEducation}
                                name='select2'
                            />
                            <Select
                                label="Aşağıdakılardan hansı sizə uyğundur?"
                                value1={selectValues.select3}
                                changeHandlerSelect={handleSelectChange}
                                options={optionsLevel}
                                name='select3'
                            />
                        </div>
                    }
                </div>
                <div >
                    <Button type='submit' >Növbəti </Button>
                </div>
            </form>
        </Card>
    )
}

export default Stage1;