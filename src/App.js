//components
import Header from "./Header/Header";
import CoinsComponent from "./Coins/Coins";
import Holdings from "./Holdings/Holdings";
import Transactions from "./Transactions/Transactions";
import Form from "./Form/Form";
//modules
import { useState } from "react";
//contexts
import CoinContext from "./_contexts/CoinContext";
function App() {
  const [coins, setCoins] = useState([]);

  const globalVariables = { coins, setCoins };
  return (
    <CoinContext.Provider value={globalVariables}>
      <div className="App">
        <Header />
        <CoinsComponent />
        <div className="stats">
          <Holdings />
          <Transactions />
        </div>
        <Form />
      </div>
    </CoinContext.Provider>
  );
}

export default App;
