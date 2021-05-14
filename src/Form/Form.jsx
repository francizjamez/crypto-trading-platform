import "./Form.css";
import { useState, useContext } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("buy");

  const { currentCoin, showForm, setShowForm, wallet, setWallet } =
    useContext(CoinContext);
  const { name, market_data } = currentCoin;

  return (
    showForm && (
      <div className="wrapper">
        <div className="Form ">
          <div className="Form-Header">
            <h1> Buy {name} </h1>
            <button className="Form-Close" onClick={() => setShowForm(false)}>
              X
            </button>
          </div>
          <div className="Form-content">
            <p> Current Price: {market_data.current_price.usd}</p>
            <div className="Input">
              <input type="text" value={amount} />
              <p> Max: {currentCoin.wallet} </p>
            </div>
            <div className="Input-Radio">
              <div className="transaction">
                <label>
                  <input type="radio" value="buy" name="transaction" />
                  Buy
                </label>
              </div>
              <div className="">
                <label>
                  <input type="radio" value="sell" name="transaction" />
                  Sell
                </label>
              </div>
            </div>
            <button className="Form-Button">Buy</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Form;
