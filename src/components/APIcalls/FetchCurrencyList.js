import React, { useState, useEffect } from "react";
import DropDown from "../DropDown";
function FetchCurrencyList() {
  const [currencyShort, setCurrencyShort] = useState([]);
  useEffect(() => {
    fetchCurrencyList();
  }, []);
  async function fetchCurrencyList() {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    );
    const data = await response.json();
    setCurrencyShort(Object.keys(data));
  }
  return (
    <React.Fragment>
      <DropDown>{currencyShort}</DropDown>
    </React.Fragment>
  );
}
export default FetchCurrencyList;
