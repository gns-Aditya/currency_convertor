import React, { useState } from "react";
import SelectedCurrency from "./APIcalls/SelectedCurrency";

import "./DropDown.css";
function DropDown(props) {
  const [selectedFirstCurrency, setFirstCurrency] = useState("usd");
  const [selectedSecondCurrency, setSecondCurrency] = useState("inr");
  const firstCurrencyChanger = (event) => {
    setFirstCurrency(event.target.value);
  };
  const secondCurrencyChanger = (event) => {
    setSecondCurrency(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="dropdown__list">
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
      </div>
      <SelectedCurrency
        firstCurrency={selectedFirstCurrency}
        secondCurrency={selectedSecondCurrency}
      ></SelectedCurrency>
    </React.Fragment>
  );
}
export default DropDown;
