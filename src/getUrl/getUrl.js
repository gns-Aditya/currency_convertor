const getUrl = (primaryCurrency, date) => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${primaryCurrency}.json`;
    return url;
  };
  export default getUrl;
  