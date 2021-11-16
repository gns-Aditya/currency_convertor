import { useState, useEffect } from "react";
import DisplayCurrency from "../displaycurrency/DisplayCurrency";
function GetCurrencyData(props) {
  const url = props.link;
  const curr = props.curr;
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  async function fetchCurrencyData() {
    const response = await fetch(url);
    const data = await response.json();
    setCurrencyList(Object.keys(data[curr]));
    setCurrencyData(Object.values(data[curr]));
    console.log(currencyList);
  }
  useEffect(() => {
    fetchCurrencyData();
  }, [url]);
  return (
    <DisplayCurrency
      currencyList={currencyList}
      currencyData={currencyData}
    ></DisplayCurrency>
  );
}
export default GetCurrencyData;
