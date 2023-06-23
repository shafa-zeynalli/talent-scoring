import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import classes from './Stage1.module.css';
import Card from '../UI/Card/Card';
import Radio from '../UI/Radio/Radio';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';
import ChartBar from '../Chartbar';

const Stage1 = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredLevel, setEnteredLevel] = useState('');
    const [enteredEducation, setEnteredEducation] = useState('');
    const [enteredEmployment, setEnteredEmployment] = useState('');

    const [topping, setTopping] = useState(null);

    const navigate = useNavigate();
    // const history = useHistory();

    const changeHandlerName = (event) => {
        setEnteredName(event.target.value);
    };
    const changeHandlerLastName = (event) => {
        setEnteredLastName(event.target.value);

    };
    const changeHandlerEmployment = (event) => {
        setEnteredEmployment(event.target.value);

    };
    const changeHandlerEducation = (event) => {
        setEnteredEducation(event.target.value);

    };
    const changeHandlerLevel = (event) => {
        setEnteredLevel(event.target.value);
    };

    const onOptionChange = (e) => {
        setTopping(e.target.value);
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

    const employment = topping === 'no' ? optionsEmployment : optionsEmployment2 ;
    const item = {
        isEducation : enteredEducation === 'orta',
        isProfession : enteredEducation === 'peshe',
        isBachelors: enteredEducation === 'bakalavr',
        isMaster: enteredEducation === 'magistratura',
        isDoctoral: enteredEducation === 'phd',
    };
    // console.log(item.isEducation); 
    console.log( enteredEducation);
    const submitHandler = (event) => {
        event.preventDefault();

        // const educationData = {
        //     enteredName,
        //     enteredLastName,
        //     enteredEmployment,
        //     enteredEducation,
        //     enteredLevel
        // };
        // console.log(educationData);

        // setEnteredEducation('');
        // setEnteredEmloyment('');
        // setEnteredLastName('');
        // setEnteredLevel('');
        // setEnteredName('');

       { (item.isEducation  || enteredEducation === '') && navigate('/stage3')};
       { !item.isEducation && navigate('/stage2', {state:{id:1,isPeshe: item.isProfession, isBachelor: item.isBachelors, isMaster: item.isMaster, isPHD: item.isDoctoral}})};
        
    //    history.push('/stage2');
        // props.isItemSelect(enteredEducation);
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
                                name="topping"
                                value="yes"
                                id="beli"
                                label= 'Bəli'
                                confirm={topping === 'yes'}
                                changeHandlerRadio = {onOptionChange}
                                style1={{ color: topping === 'yes' ? '#038477' : '#444' }}
                                style2={{ backgroundColor: topping === 'yes' ? '#038477' : '#f2f6f6', appearance: topping === 'yes' ? 'none' : '' }}
                            />
                            <Radio
                                name="topping"
                                value="no"
                                id="xeyr"
                                label='Xeyr'
                                confirm={topping === 'no'}
                                changeHandlerRadio = {onOptionChange}
                                style1={{ color: topping === topping === 'no' ? '#038477' : '#444'  }}
                                style2={{ backgroundColor: topping === 'yes' ? '#f2f6f6 ' : '#038477', appearance: topping === 'no' ? 'none' : '' }}
                            />
                           
                        </div>
                    </div>
                    {topping && 
                    <div>
                        <Select
                            label="Hazırda məşğuliyyətiniz:"
                            value={enteredEmployment}
                            changeHandlerSelect={changeHandlerEmployment}
                            options={employment} 
                        />
                        <Select
                            label="Təhsiliniz:"
                            value={enteredEducation}
                            changeHandlerSelect={changeHandlerEducation}
                            options={ optionsEducation }
                        />
                       <Select
                            label="Aşağıdakılardan hansı sizə uyğundur?"
                            value={enteredLevel}
                            changeHandlerSelect={changeHandlerLevel}
                            options={optionsLevel}
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