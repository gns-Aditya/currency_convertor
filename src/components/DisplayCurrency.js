import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import CurrencyData from '../apicalls/CurrencyData';
import React from 'react';
const DisplayCurrency = () => {
  const receivedData = useSelector((state) => state.currencyData);
  const longList = useSelector((state) => state.longList);
  const shortList = useSelector((state) => state.shortList);
  const status = useSelector((state) => state.showSecondCurrency);
  const primaryCurrency = useSelector((state) => state.primaryCurrency);
  const secondaryCurrency = useSelector((state) => state.secondaryCurrency);
  return (
    <React.Fragment>
      <CurrencyData />

      {!status && (
        <Box sx={{ textAlign: 'center' }}>
          <h1>Conversion rates of global currencies wrt {primaryCurrency}</h1>
        </Box>
      )}
      {!status &&
        longList.map((curr) => (
          <Box
            sx={{
              display: 'flex',
              width: '60%',
              marginLeft: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p>{curr}</p>
            <p>{receivedData[longList.indexOf(curr)]}</p>
          </Box>
        ))}
      {}
      {status && (
        <Box sx={{ textAlign: 'center' }}>
          <h1>
            1{primaryCurrency} =
            {receivedData[shortList.indexOf(secondaryCurrency)]}
            {secondaryCurrency}
          </h1>
        </Box>
      )}
    </React.Fragment>
  );
};
export default DisplayCurrency;
