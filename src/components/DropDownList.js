import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import React from 'react';
import CurrencyList from '../apicalls/CurrencyList';
import { Box } from '@mui/system';

const DropDownList = () => {
  const dispatch = useDispatch();
  const longList = useSelector((state) => state.longList);
  const shortList = useSelector((state) => state.shortList);
  const showStatus = useSelector((state) => state.showSecondCurrency);
  const changePrimaryCurrency = (event) => {
    dispatch({
      type: 'changePrimaryCurrency',
      primaryCurrency: event.target.value,
    });
  };
  const showSecondaryCurrency = () => {
    dispatch({
      type: 'showSecondary',
    });
  };
  const changeSecondaryCurrency = (event) => {
    dispatch({
      type: 'changeSecondaryCurrency',
      secondaryCurrency: event.target.value,
    });
  };
  return (
    <React.Fragment>
      <CurrencyList />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
        }}
      >
        <Select onChange={changePrimaryCurrency}>
          <MenuItem value="usd">United States Dollar</MenuItem>
          {longList.map((curr) => (
            <MenuItem value={shortList[longList.indexOf(curr)]}>
              {curr}
            </MenuItem>
          ))}
        </Select>

        {showStatus && (
          <Select onChange={changeSecondaryCurrency}>
            <MenuItem value="inr">Indian Rupee</MenuItem>
            {longList.map((curr) => (
              <MenuItem value={shortList[longList.indexOf(curr)]}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        )}
        <Button variant="contained" onClick={showSecondaryCurrency}>
          Click Here
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default DropDownList;
