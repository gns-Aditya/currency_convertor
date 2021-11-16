import React from "react";
import { Route } from "react-router";

import GetCurrencyList from "./components/apicalls/GetCurrencies";
import FetchCurrencyList from "./routes/APIcalls/FetchCurrencyList";

function App() {
  return (
    <div>
      <Route path="/f" component={GetCurrencyList}></Route>
      <Route path="/s" component={FetchCurrencyList}></Route>
    </div>
  );
}
export default App;
