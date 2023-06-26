import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import classes from './Stage1.module.css';
import Card from '../UI/Card/Card';
import Radio from '../UI/Radio/Radio';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';
import ChartBar from '../Chartbar';
import {updateSelectValue} from '../../store/action';
import { useDispatch } from 'react-redux';



const Stage1 = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');

    const [selectValues, setSelectValues] = useState({
        select1: '',
        select2: '',
        select3: '',
        confirm: ''
      });


      const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectValues((prevState) => ({ ...prevState, [name]: value }));
      };

  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeHandlerName = (event) => {
        setEnteredName(event.target.value);
    };
    const changeHandlerLastName = (event) => {
        setEnteredLastName(event.target.value);

    };

    const optionsEmployment = [
        {value: "tehsilli", label: 'Təhsil alıram'},
        {value: "tehsilsiz", label: 'Təhsil almıram'},
    ];
    const optionsEducation = [
        {value: "orta", label: 'Orta Təhsil'},
        {value: "peshe", label: 'Peşə Təhsili'}, 
        {value: "bakalavr", label: 'Bakalavr'},
        {value: "magistratura", label: 'Magistratura'}, 
        {value: "phd", label: 'PhD'}, 
    ];
    const optionsLevel = [
        {value: "elaci", label: 'Əlaçı'},
        {value: "zerbeci", label: 'Zərbəçi '}, 
        {value: "hecbiri", label: 'Heç biri'}, 
    ];
    const optionsEmployment2 = [
        {value: "tehsilli", label: 'Təhsil alıram'},
        {value: "calisiram", label: 'Çalışıram'},
        {value: "issiz", label: 'İşsiz'},
        {value: "herikisi", label: 'Təhsil alıram və çalışıram'},
    ]

    const employment = selectValues.confirm === 'no' ? optionsEmployment : optionsEmployment2 ;
    const item = {
        isEducation : selectValues.select2 === 'orta',
        isProfession : selectValues.select2 === 'peshe',
        isBachelors: selectValues.select2 === 'bakalavr',
        isMaster: selectValues.select2 === 'magistratura',
        isDoctoral: selectValues.select2 === 'phd',
    };
    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(selectValues)
        
       { (item.isEducation  || selectValues.select2 === '') && navigate('/stage3')};
       { !item.isEducation && navigate('/stage2', {state:{id:1,isPeshe: item.isProfession, isBachelor: item.isBachelors, isMaster: item.isMaster, isPHD: item.isDoctoral}})};
       console.log(dispatch(updateSelectValue(selectValues)))
       dispatch(updateSelectValue(selectValues));
    }

    return (
        <Card>
            <h2>Ümumi Suallar</h2>
            <ChartBar currentPageIndex='1' maxPageIndex='3'/>
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
                                label= 'Bəli'
                                confirm={selectValues.confirm === 'yes'}
                                changeHandlerRadio = {handleSelectChange}
                                style1={{ color: selectValues.confirm === 'yes' ? '#038477' : '#444' }}
                                style2={{ backgroundColor: selectValues.confirm === 'yes' ? '#038477' : '#f2f6f6', appearance: selectValues.confirm === 'yes' ? 'none' : '' }}
                            />
                            <Radio
                                name="confirm"
                                value="no"
                                id="xeyr"
                                label='Xeyr'
                                confirm={selectValues.confirm === 'no'}
                                changeHandlerRadio = {handleSelectChange}
                                style1={{ color:  selectValues.confirm === 'no' ? '#038477' : '#444'  }}
                                style2={{ backgroundColor: selectValues.confirm === 'yes' ? '#f2f6f6 ' : '#038477', appearance: selectValues.confirm === 'no' ? 'none' : '' }}
                            />
                           
                        </div>
                    </div>
                    {selectValues.confirm  && 
                    <div>
                        <Select
                            label="Hazırda məşğuliyyətiniz:"
                            value={selectValues.select1}
                            changeHandlerSelect={handleSelectChange}
                            options={employment} 
                            name='select1'
                        />
                        <Select
                            label="Təhsiliniz:"
                            value={selectValues.select2}
                            changeHandlerSelect={handleSelectChange}
                            options={ optionsEducation }
                            name='select2'
                        />
                       <Select
                            label="Aşağıdakılardan hansı sizə uyğundur?"
                            value={selectValues.select3}
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