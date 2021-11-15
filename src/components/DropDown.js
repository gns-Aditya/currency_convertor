import React, { useState } from "react";
import SelectedCurrency from "./APIcalls/SelectedCurrency";

import "./DropDown.css";
function DropDown(props) {
  const [selectedFirstCurrency, setFirstCurrency] = useState("usd");
  const [selectedSecondCurrency, setSecondCurrency] = useState("inr");
  const [selectedDate, setDate] = useState("latest");
  const firstCurrencyChanger = (event) => {
    setFirstCurrency(event.target.value);
  };
  const secondCurrencyChanger = (event) => {
    setSecondCurrency(event.target.value);
  };
  const dateChanger = (event) => {
    setDate(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="dropdown__list">
        <form>
          <input onChange={dateChanger} type="date" min="2020-11-22"></input>
          <select onChange={firstCurrencyChanger}>
            <option value="usd">usd</option>
            {props.children.map((curr) => (
              <option value={curr}>{curr}</option>
            ))}
          </select>
          <select onChange={secondCurrencyChanger}>
            <option value="inr">inr</option>
            {props.children.map((curr) => (
              <option value={curr}>{curr}</option>
            ))}
          </select>
        </form>
      </div>
      <SelectedCurrency
        firstCurrency={selectedFirstCurrency}
        secondCurrency={selectedSecondCurrency}
        date={selectedDate}
      ></SelectedCurrency>
    </React.Fragment>
  );
}
export default DropDown;
