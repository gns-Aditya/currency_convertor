import React from "react";
import { Route } from "react-router";

import GetCurrencyList from "./components/apicalls/GetCurrencies";
import FetchCurrencyList from "./routes/APIcalls/FetchCurrencyList";

function App() {
  return (
    <div>
      <Route path="/s" component={FetchCurrencyList}></Route>
      <Route exact path="/" component={GetCurrencyList}></Route>
    </div>
  );
}
export default App;
