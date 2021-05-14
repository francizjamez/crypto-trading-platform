import "./Form.css";
import { useState, useContext } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";


const Form = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType ] = useState("buy")

  const { currentCoin , showForm, setShowForm, wallet, setWallet } = useContext(CoinContext);
  const { name, market_data } = currentCoin;
  
  console.log( currentCoin )
  return (
    showForm &&
    <div className="Form ">
      <div className="Form-Header">
        <h1> Buy {name} </h1>
        <div className="Form-Close" onClick={() => setShowForm(false)}> X </div>
      </div>
      <div className="Form-content">
        <p> Current Price: {market_data.current_price.usd}</p>
        <div className="Input">
          <input type="text" value={amount} />
          <p> Max: {currentCoin.wallet} </p>
        </div>
        <div className="Input-Radio">
          <div className="transaction">
            <input type="radio" value="buy" name="transaction" onClick/> Buy
          </div>
          <div className="sell">
            <input type="radio" value="sell" name="transaction" /> Sell
          </div>
        </div>
        <div className="Form-Button" onClick={buyCoins}>Buy</div>
      </div>
    </div>
  );
};

export default Form;
