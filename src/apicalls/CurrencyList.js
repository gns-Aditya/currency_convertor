import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const CurrencyList = () => {
  const dispatch = useDispatch();
  const fetchLatestCurrencyList = async () => {
    const response = await fetch(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
    );
    const data = await response.json();
    dispatch({
      type: 'setDropDownList',
      longList: Object.values(data),
      shortList: Object.keys(data),
    });
  };
  useEffect(() => {
    fetchLatestCurrencyList();
  }, []);
  return <React.Fragment />;
};

export default CurrencyList;
