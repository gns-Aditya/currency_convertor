import React from "react";
import "./DisplayCurrency.css";

function DisplayCurrency(props) {
  const currencyList = props.currencyList;
  const currencyData = props.currencyData;
  return (
    <React.Fragment>
      <div className="__currencies">
        {currencyList.map((curr) => (
          <div className="__currency">
            <p>
              {curr} {currencyData[currencyList.indexOf(curr)]}
            </p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default DisplayCurrency;
