import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import getUrl from '../getUrl/getUrl';
const CurrencyData = () => {
  const dispatch = useDispatch();
  const primaryCurrency = useSelector((state) => state.primaryCurrency);
  const date = useSelector((state) => state.selectedDate);
  const url = getUrl(primaryCurrency, date);
  async function fetchCurrencyData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const currencyData = Object.values(data[primaryCurrency]);
    dispatch({
      type: 'setCurrencyData',
      currencyData: currencyData,
    });
  }
  useEffect(() => {
    fetchCurrencyData(url);
  }, [url]);
  return <React.Fragment />;
};
export default CurrencyData;
