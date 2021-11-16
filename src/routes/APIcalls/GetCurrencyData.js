import { useState, useEffect } from "react";
function GetCurrencyData(props) {
  const secondCurrency = props.second;
  const [currentValue, setCurrentValue] = useState("");
  async function getData() {
    const response = await fetch(props.children);
    const data = await response.json();
    setCurrentValue(data[secondCurrency]);
  }
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <h1>
      1{props.first} = {currentValue}
      {props.second}
    </h1>
  );
}
export default GetCurrencyData;
