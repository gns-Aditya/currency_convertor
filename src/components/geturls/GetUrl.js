import React from "react";
import GetCurrencyData from "../apicalls/GetCurrencyData";
function GetUrl(props) {
  const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/";
  const date = props.date;
  const curr = props.currency;
  const newUrl = url + date + "/currencies/" + curr + ".json";
  return (
    <React.Fragment>
      <GetCurrencyData link={newUrl} curr={curr}></GetCurrencyData>
    </React.Fragment>
  );
}
export default GetUrl;
