import "./Form.css";
import { useState, useContext } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";

const data = {
  coinName: "Dogecoin",
  currentPrice: 0.511823,
  wallet: 100,
};

const Form = () => {
  const [amount, setAmount] = useState(0);

  const { currentCoin } = useContext(CoinContext);

  const { id } = currentCoin;
  return (
    <div className="Form">
      <div className="Form-Header">
        <h1> Buy {id} </h1>
        <button className="Form-Close"> X </button>
      </div>
      <div className="Form-content">
        <p> Current Price: {data.currentPrice}</p>
        <div className="Input">
          <input type="text" value={amount} />
          <p> Max: {data.wallet} </p>
        </div>
        <div className="Input-Radio">
          <div className="buy">
            <input type="radio" value="buy" name="transaction" /> Buy
          </div>
          <div className="sell">
            <input type="radio" value="sell" name="transaction" /> Sell
          </div>
        </div>
        <div className="Form-Button">Buy</div>
      </div>
    </div>
  );
};

export default Form;
