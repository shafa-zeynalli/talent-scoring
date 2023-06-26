import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Card from "../UI/Card/Card";
import classes from "./Stage2.module.css";
import ChartBar from "../Chartbar";

const Stage2 = (props) => {
  const [enteredProfession, setEnteredProfession] = useState("");
  const [enteredBachelors, setEnteredBachelors] = useState("");
  const [enteredMaster, setEnteredMaster] = useState("");
  const [enteredDoctoral, setEnteredDoctoral] = useState("");

  const changeHandlerProfession = (e) => {
    setEnteredProfession(e.target.value);
  };
  const changeHandlerBachelors = (e) => {
    setEnteredBachelors(e.target.value);
  };
  const changeHandlerMaster = (e) => {
    setEnteredMaster(e.target.value);
  };
  const changeHandlerDoctoral = (e) => {
    setEnteredDoctoral(e.target.value);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const profession = location.state.isPeshe;
  const bachelor = location.state.isBachelor;
  const master = location.state.isMaster;
  const phd = location.state.isPHD;

  // console.log(profession, bachelor, master, phd);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/stage3");
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
                  value={enteredProfession}
                  type="number"
                  placeholder="0-50"
                  label="Peşə təhsili üzrə TQDK qəbul balınızı qeyd edin."
                  changeHandlerText={changeHandlerProfession}
                />
              )}
              {(phd || master || bachelor) &&
                (
                  <Input
                    value={enteredBachelors}
                    type="number"
                    max={'700'}
                    min={'0'}
                    placeholder="0-700"
                    label="Bakalavr pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                    changeHandlerText={changeHandlerBachelors}
                  />
                )}
                {(phd || master) && 
                (
                  <Input
                  value={enteredMaster}
                  type="number"
                  max={'100'}
                  min={'0'}
                  placeholder="0-100"
                  label="Magistratura pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                  changeHandlerText={changeHandlerMaster}
                />
                )}
                {phd &&  <Input
                    value={enteredDoctoral}
                    type="number"
                    placeholder="0-8"
                    max={'8'}
                    min={'0'}
                    label="Doktorantura pilləsi üzrə TQDK qəbul balınızı qeyd edin."
                    changeHandlerText={changeHandlerDoctoral}
                  />}
            </div>

            <div className={classes.buttons}>
              <Button className={classes.button} onClick={() => navigate('/')}>
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
