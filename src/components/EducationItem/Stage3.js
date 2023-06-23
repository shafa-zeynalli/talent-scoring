import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Radio from '../UI/Radio/Radio';
import classes from './Stage1.module.css';
import Select from '../UI/Select/Select';
import ChartBar from '../Chartbar';



const Stage3 = (props) => {
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredStage, setEnteredStage] = useState('');
    const [enteredWin, setEnteredWin] = useState('');

    const [topping, setTopping] = useState(null);

    const changeHandlerSubject = (e) => {
        setEnteredSubject(e.target.value);
    }
    const changeHandlerStage = (e) => {
        setEnteredStage(e.target.value);
    }
    const changeHandlerWin = (e) => {
        setEnteredWin(e.target.value);
    }
    const navigate = useNavigate();

    const onOptionChange = (e) => {
        setTopping(e.target.value);
    }
    const optionsWin = [
        { value: "Iyer", label: '1-ci yer (Qızıl medal)' },
        { value: "IIyer", label: '2-ci yer (Gümüş medal)' },
        { value: "IIIyer", label: '3-cü yer (Bürünc medal)' },
        { value: "IVyer", label: '4-cü yer' },
    ];
    const optionsStage = [
        { value: "respublic", label: 'Respublika' },
        { value: "district", label: 'Rayon' },
        { value: "region", label: 'Region' },
        { value: "world", label: 'Dünya' },
    ];
    const optionsSubject = [
        { value: "riyaziyyat", label: 'Riyaziyyat' },
        { value: "azdili", label: 'Azərbaycan dili və Ədəbiyyat' },
        { value: "tarix", label: 'Tarix' },
        { value: "cografiya", label: 'Cografiya' },
        { value: "fizika", label: 'Fizika' },
        { value: "kimya", label: 'Kimya' },
        { value: "biologiya", label: 'Biologiya' },
        { value: "informatika", label: 'Informatika' },
    ];
    const submitHandler = (e) => {
        e.preventDefault();
        // navigate('/stage2')
    }
    // const {isData: isProfession} = props;
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
                                    name="topping"
                                    value="yes"
                                    id="beli"
                                    label='Bəli'
                                    confirm={topping === 'yes'}
                                    changeHandlerRadio={onOptionChange}
                                    style1={{ color: topping === 'yes' ? '#038477' : '#444' }}
                                    style2={{ backgroundColor: topping === 'yes' ? '#038477' : '#f2f6f6', appearance: topping === 'yes' ? 'none' : '' }}
                                />
                                <Radio
                                    name="topping"
                                    value="no"
                                    id="xeyr"
                                    label='Xeyr'
                                    confirm={topping === 'no'}
                                    changeHandlerRadio={onOptionChange}
                                    style1={{ color: topping === topping === 'no' ? '#038477' : '#444' }}
                                    style2={{ backgroundColor: topping === 'yes' ? '#f2f6f6 ' : '#038477', appearance: topping === 'no' ? 'none' : '' }}
                                />

                            </div>
                        </div>
                        {topping === 'yes' &&
                            <div>
                                <Select
                                    label="Hansı fənn üzrə olimpiyada qalibi olmusunuz?"
                                    value={enteredSubject}
                                    changeHandlerSelect={changeHandlerSubject}
                                    options={optionsSubject}
                                />
                                <Select
                                    label="Ən yüksək hansı mərhələ üzrə olimpiada qalibi olmusunuz?"
                                    value={enteredStage}
                                    changeHandlerSelect={changeHandlerStage}
                                    options={optionsStage}
                                />
                                <Select
                                    label="Neçənci yer əldə etmisiniz?"
                                    value={enteredWin}
                                    changeHandlerSelect={changeHandlerWin}
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