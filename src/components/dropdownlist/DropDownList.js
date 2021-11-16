import React, { useState } from "react";
import GetUrl from "../geturls/GetUrl";
function DropDownList(props) {
  const [date, setDate] = useState("latest");
  const [currency, setCurrency] = useState("usd");
  const long = props.long;
  const short = props.short;
  function currencyChanger(event) {
    setCurrency(event.target.value);
  }
  function dateChanger(event) {
    setDate(event.target.value);
  }
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const currentDate = year + "-" + month + "-" + day;

  return (
    <React.Fragment>
      <select onChange={currencyChanger}>
        <option value="usd">United States Dollar</option>
        {long.map((curr) => (
          <option value={short[long.indexOf(curr)]}>{curr}</option>
        ))}
      </select>
      <input type="date" max={currentDate} onChange={dateChanger}></input>
      <GetUrl date={date} currency={currency}></GetUrl>
    </React.Fragment>
  );
}
export default DropDownList;
