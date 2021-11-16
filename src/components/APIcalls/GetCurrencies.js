import DropDownList from "../dropdownlist/DropDownList";
import { useState, useEffect } from "react";
function GetCurrencyList() {
  const [currencyShort, setCurrencyShort] = useState([]);
  const [currencyLong, setCurrencyLong] = useState([]);
  useEffect(() => {
    fetchCurrencyList();
  }, []);
  async function fetchCurrencyList() {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    );
    const data = await response.json();
    setCurrencyShort(Object.keys(data));
    setCurrencyLong(Object.values(data));
  }
  return (
    <div>
      <a href="/s">go</a>
      <DropDownList long={currencyLong} short={currencyShort}></DropDownList>
    </div>
  );
}
export default GetCurrencyList;
