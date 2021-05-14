import "./Form.css";
import { useState } from "react";

const data = {
  coinName: "Dogecoin",
  currentPrice: 0.511823,
  wallet: 100,
};

const Form = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="Form">
      <div className="Form-Header">
        <h1> Buy {data.coinName} </h1>
        <div className="Form-Close"> X </div>
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
