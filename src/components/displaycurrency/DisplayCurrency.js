import React from "react";

function DisplayCurrency(props) {
  const currencyList = props.currencyList;
  const currencyData = props.currencyData;
  return (
    <React.Fragment>
      {currencyList.map((curr) => (
        <h1>
          {curr} ----------
          {currencyData[currencyList.indexOf(curr)]}
        </h1>
      ))}
    </React.Fragment>
  );
}
export default DisplayCurrency;
