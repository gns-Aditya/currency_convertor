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
  const currencyShort = props.short;
  const currencyLong = props.long;
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const currentDate = year + "-" + month + "-" + day;
  return (
    <React.Fragment>
      <div className="dropdown__list">
        <form>
          <select onChange={firstCurrencyChanger}>
            <option value="usd">United States Dollar</option>
            {currencyLong.map((curr) => (
              <option value={currencyShort[currencyLong.indexOf(curr)]}>
                {curr}
              </option>
            ))}
          </select>
          <select onChange={secondCurrencyChanger}>
            <option value="inr">Indian Rupee</option>
            {currencyLong.map((curr) => (
              <option value={currencyShort[currencyLong.indexOf(curr)]}>
                {curr}
              </option>
            ))}
          </select>
          <input
            onChange={dateChanger}
            type="date"
            min="2020-11-22"
            max={currentDate}
          ></input>
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
