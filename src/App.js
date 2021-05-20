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

const coinNames = ["Bitcoin", "Ethereum", "Dogecoin"];

function App() {
  const [coins, setCoins] = useState([]);
  const [holdings, setHoldings] = useState(
    coinNames.map((el) => ({
      coinName: el,
      amount: 0,
      total_paid: 0,
    }))
  );
  const [currentCoin, setCurrentCoin] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [wallet, setWallet] = useState(100);
  const [transactions, setTransactions] = useState([]);

  const globalVariables = {
    coins,
    setCoins,
    holdings,
    setHoldings,
    currentCoin,
    setCurrentCoin,
    showForm,
    setShowForm,
    wallet,
    setWallet,
    transactions,
    setTransactions,
  };

  return (
    <CoinContext.Provider value={globalVariables}>
      <div className="App">
        <Header />
        <CoinsComponent />
        <div className="stats">
          <Holdings />
          <Transactions />
        </div>
        <Form currentCoin={currentCoin} />
      </div>
    </CoinContext.Provider>
  );
}

export default App;
