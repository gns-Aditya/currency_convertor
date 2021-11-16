import { useState, useEffect } from "react";
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
  }
  useEffect(() => {
    fetchCurrencyData();
  }, [fetchCurrencyData]);
}
export default GetCurrencyData;
