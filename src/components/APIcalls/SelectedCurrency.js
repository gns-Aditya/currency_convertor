import GetCurrencyData from "./GetCurrencyData";

function SelectedCurrency(props) {
  const url =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
  const url2 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/";

  return (
    <GetCurrencyData first={props.firstCurrency} second={props.secondCurrency}>
      {url2 +
        props.date +
        "/" +
        "currencies/" +
        props.firstCurrency +
        "/" +
        props.secondCurrency +
        ".json"}
    </GetCurrencyData>
  );
}
export default SelectedCurrency;
