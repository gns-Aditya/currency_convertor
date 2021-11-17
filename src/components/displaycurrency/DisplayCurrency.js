import React from "react";
import "./DisplayCurrency.css";

function DisplayCurrency(props) {
  const currencyList = props.currencyList;
  const currencyData = props.currencyData;
  const long = props.long;
  return (
    <React.Fragment>
      <div className="__currencies">
        {currencyList.map((curr) => (
          <div className="__currency">
            <p className="__currency__name">
              {long[currencyList.indexOf(curr)]}
            </p>
            <p className="__currency__value">
              {currencyData[currencyList.indexOf(curr)]}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default DisplayCurrency;
