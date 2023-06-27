import React, { useState, useEffect } from "react";
import { updateSelectValue } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Stage2.module.css";
import ChartBar from "../Chartbar";

const Stage2 = (props) => {
  // const [enteredProfession, setEnteredProfession] = useState("");
  // const [enteredBachelors, setEnteredBachelors] = useState("");
  // const [enteredMaster, setEnteredMaster] = useState("");
  // const [enteredDoctoral, setEnteredDoctoral] = useState("");

  const dispatch = useDispatch();
  const todo = useSelector((state)=>state.selectValues);

  const [selectData, setSelectData] = useState({
    num1: todo.num1 === '' ? '' : todo.num1,
    num2: todo.num2 === '' ? '' : todo.num2,
    num3: todo.num3 === '' ? '' : todo.num3,
    num4: todo.num4 === '' ? '' : todo.num4, 
});



  // const changeHandlerProfession = (e) => {
  //   setEnteredProfession(e.target.value);
  // };
  // const changeHandlerBachelors = (e) => {
  //   setEnteredBachelors(e.target.value);
  // };
  // const changeHandlerMaster = (e) => {
  //   setEnteredMaster(e.target.value);
  // };
  // const changeHandlerDoctoral = (e) => {
  //   setEnteredDoctoral(e.target.value);
  // };
  const navigate = useNavigate();
  const location = useLocation();

  const profession = location.state.isPeshe;
  const bachelor = location.state.isBachelor;
  const master = location.state.isMaster;
  const phd = location.state.isPHD;
  // const selectvalue = location.state.selectValues;

  const handleChangeConfirm = (e) =>{
    const { name, value } = e.target;
    setSelectData((prevState) => ({ ...prevState,   [name]: value }));
  }
  useEffect(()=>{
    dispatch(updateSelectValue(selectData));
  }, [selectData]);
  // console.log(profession, bachelor, master, phd);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/stage3");
    dispatch(updateSelectValue(selectData));
  };

  // const {isData: isProfession} = props;
  return (
    <Card>
      <div className={classes.main}>
        <div className={classes.education}>
          <form onSubmit={submitHandler}>
            <h2>Orta texniki və ali təhsil sualları</h2>
            <ChartBar currentPageIndex="2" maxPageIndex="3" />
            <div className={classes.educations__controls}>
              {profession && (
                <Input
                  value={selectData.num1}
                  type="number"
                  max={'50'}
                  min={'0'}
                  name='num1'
                  placeholder="0-50"
                  label="Peşə təhsili üzrə TQDK qəbul balınızı qeyd edin."
                  changeHandlerText={handleChangeConfirm}
                />
              )}
              {(phd || master || bachelor) &&
                (
                  <Input
                    value={selectData.num2}
                    type="number"
                    max={'700'}
                    min={'0'}
                    name='num2'
                    placeholder="0-700"
                    label="Bakalavr pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                    changeHandlerText={handleChangeConfirm}
                  />
                )}
                {(phd || master) && 
                (
                  <Input
                  value={selectData.num3}
                  type="number"
                  max={'100'}
                  min={'0'}
                  name='num3'
                  placeholder="0-100"
                  label="Magistratura pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                  changeHandlerText={handleChangeConfirm}
                />
                )}
                {phd &&  <Input
                    value={selectData.num4}
                    type="number"
                    placeholder="0-8"
                    max={'8'}
                    min={'0'}
                    name='num4'
                    label="Doktorantura pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                    changeHandlerText={handleChangeConfirm}
                  />}
            </div>

            <div className={classes.buttons}>
              <Button type="button" className={classes.button} onClick={() => navigate('/')}>
                Geri
              </Button>
              <Button type="submit">Növbəti </Button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};
export default Stage2;
