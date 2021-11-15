import GetCurrencyData from "./GetCurrencyData";

function SelectedCurrency(props) {
  const url =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
  return (
    <GetCurrencyData first={props.firstCurrency} second={props.secondCurrency}>
      {url + props.firstCurrency + "/" + props.secondCurrency + ".json"}
    </GetCurrencyData>
  );
}
export default SelectedCurrency;
