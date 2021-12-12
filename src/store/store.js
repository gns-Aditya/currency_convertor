import { createStore } from 'redux';
const currentState = {
  primaryCurrency: 'usd',
  secondaryCurrency: 'inr',
  selectedDate: 'latest',
  longList: [],
  shortList: [],
  showSecondCurrency: false,
  currencyData: {},
};

const reducerFunction = (state = currentState, action) => {
  if (action.type === 'changeDate') {
    return {
      primaryCurrency: state.primaryCurrency,
      secondaryCurrency: state.secondaryCurrency,
      selectedDate: action.date,
      longList: state.longList,
      shortList: state.shortList,
      showSecondCurrency: state.showSecondCurrency,
      currencyData: state.currencyData,
    };
  }
  if (action.type === 'changePrimaryCurrency') {
    return {
      primaryCurrency: action.primaryCurrency,
      secondaryCurrency: state.secondaryCurrency,
      selectedDate: state.selectedDate,
      longList: state.longList,
      shortList: state.shortList,
      showSecondCurrency: state.showSecondCurrency,
      currencyData: state.currencyData,
    };
  }
  if (action.type === 'changeSecondaryCurrency') {
    return {
      primaryCurrency: state.primaryCurrency,
      secondaryCurrency: action.secondaryCurrency,
      selectedDate: state.selectedDate,
      longList: state.longList,
      shortList: state.shortList,
      showSecondCurrency: state.showSecondCurrency,
      currencyData: state.currencyData,
    };
  }
  if (action.type === 'showSecondary') {
    return {
      primaryCurrency: state.primaryCurrency,
      secondaryCurrency: state.secondaryCurrency,
      selectedDate: state.selectedDate,
      longList: state.longList,
      shortList: state.shortList,
      showSecondCurrency: !state.showSecondCurrency,
      currencyData: state.currencyData,
    };
  }
  if (action.type === 'setDropDownList') {
    return {
      primaryCurrency: state.primaryCurrency,
      secondaryCurrency: state.secondaryCurrency,
      selectedDate: state.selectedDate,
      longList: action.longList,
      shortList: action.shortList,
      showSecondCurrency: state.showSecondCurrency,
      currencyData: state.currencyData,
    };
  }
  if (action.type === 'setCurrencyData') {
    return {
      primaryCurrency: state.primaryCurrency,
      secondaryCurrency: state.secondaryCurrency,
      selectedDate: state.selectedDate,
      longList: state.longList,
      shortList: state.shortList,
      showSecondCurrency: state.showSecondCurrency,
      currencyData: action.currencyData,
    };
  }
  return state;
};

const store = createStore(reducerFunction);
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}
export default store;
